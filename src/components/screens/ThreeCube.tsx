import React from "react";
import { backgroundColors } from "../exports";

import Scramble from "../Scramble";
import Timer from "../Timer";

export interface Record {
   date: string
   record: string
}

export default () => {

   const containerRef = React.createRef<any>();
   const [timerOpacity, setTimerOpacity] = React.useState(true);
   const [scrambleOpacity, setScrambleOpacity] = React.useState(false);
   const [timerDisplay, setTimerDisplay] = React.useState<true | false>(true);
   const [scrambleDisplay, setScrambleDisplay] = React.useState<true | false>(false);
   const [key, setKey] = React.useState<number>(0);
   const [time, setTime] = React.useState<string>("");
   const [scramble, setScramble] = React.useState<string>(() => Scramble("ThreeCube"));
   const [running, setRunning] = React.useState<true | false>(false);
   const [height, setHeight] = React.useState<number>(() => window.innerHeight);
   const [background, setBackground] = React.useState<backgroundColors>();
   const [records, setRecords] = React.useState<Record[]>([]);

   const formatDate = () => {
      const date = new Date();
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
   }

   const toggleTimer = () => {
      setBackground(e => e === "#30d158" ? "#ff3a30" : "#30d158");
      setRunning(e => !e);
   }

   const saveTime = () => {
      if (time === "") return;
      setRecords(e => [...e, { date: `${formatDate()}`, record: time }]);
      clearTimer();
   }

   const clearTimer = () => {
      setRunning(false);
      setKey(e => e + 1);
      setBackground("#ff3a30");
   }

   const getKey = (e: any) => {
      if (e.key === ("s" || "S")) {
         if (timerDisplay) {
            setScramble(Scramble("ThreeCube"));
            setTimerOpacity(false);
            setTimeout(() => {
               setTimerDisplay(false);
               setScrambleDisplay(true);
            }, 500)
            setTimeout(() => setScrambleOpacity(true), 10);
            return;
         }
         setScrambleOpacity(false);
         setTimeout(() => {
            setScrambleDisplay(false);
            setTimerDisplay(true);
         }, 500)
         setTimeout(() => setTimerOpacity(true), 10);
         return;
      }
      if (e.key === "Escape") {
         clearTimer();
         return;
      }
      if (e.key === " ") {
         toggleTimer();
         return;
      }
      if (e.key === "Enter") {
         saveTime();
      }
   }

   React.useEffect(() => {
      document.body.style.overflow = "hidden";
      document.body.classList.add("no-sroll");
      const resizeListener = () => setHeight(window.innerHeight);
      window.addEventListener("resize", resizeListener);
      containerRef.current?.focus()
      return () => window.removeEventListener("resize", resizeListener);
   }, [])

   return (
      <>
         <div
            ref={containerRef}
            onKeyDown={e => (e.key === " " && !running) && setBackground("#9A2A25")}
            onKeyUp={getKey}
            tabIndex={0}
            className="Container NoSelect"
            style={{ height: height, backgroundColor: background }}
         >
            {/* Header */}
            <div className="HeaderContainer" style={{ height: 100 }}>
               <div className="HeaderIcon" style={{ height: 80, width: 80, marginRight: 20, marginTop: 20 }} />
            </div>
            {/* Timer */}
            <div className="PageContainer" style={{ opacity: timerOpacity ? 1 : 0, display: timerDisplay ? "unset" : "none" }}>
               <Timer key={key} setTime={(e) => setTime(e)} running={running} />
               <div className="Record-Container">
                  {records.map((record, index) => (
                     <p className="Record NoSelect" key={index}>{`${record.date}: ${record.record}`}</p>
                  ))}
               </div>
            </div>
            {/* Scramble */}
            <div className="PageContainer" style={{ opacity: scrambleOpacity ? 1 : 0, display: scrambleDisplay ? "unset" : "none" }}>
               <p className="ScrambleText">{scramble}</p>
            </div>
            {/* Footer */}
            <div className="HeaderContainer" style={{ height: 100 }}>
               <div className="HeaderIcon" style={{ height: height * 0.08, width: height * 0.08, visibility: "hidden" }} />
            </div>
         </div>
      </>
   )
}
