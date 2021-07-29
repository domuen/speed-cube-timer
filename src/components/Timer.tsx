import React from 'react';

export default React.memo((props: { running: boolean, setTime: (time: string) => void }) => {
   const [minutes, setMinutes] = React.useState(0);
   const [seconds, setSeconds] = React.useState(0);
   const [milliseconds, setMilliseconds] = React.useState(0);
   React.useEffect(() => {
      if (props.running) {
         setTimeout(() => {
            if (milliseconds === 99) {
               if (!(props.running)) return;
               setSeconds(e => e + 1);
               if (!(props.running)) return;
               setMilliseconds(0);
            } else {
               if (!(props.running)) return;
               setMilliseconds(e => e + 1);
            }
         }, 10)
      } else {
         props.setTime(`${minutes}:${seconds}.${milliseconds}`);
      }
   }, [milliseconds, props.running])
   return (
      <>
         <h1 className="Timer NoSelect">{`${minutes}`.length === 1 ? `0${minutes}` : minutes}:{`${seconds}`.length === 1 ? `0${seconds}` : seconds}.{`${milliseconds}`.length === 1 ? `0${milliseconds}` : milliseconds}</h1>
      </>
   )
})
