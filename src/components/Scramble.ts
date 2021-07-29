import { cubes } from "./exports";

export default (cube: cubes) => {
   switch (cube) {
      case 'TwoCube':
         return '';
      case 'ThreeCube':
         const ThreeCubeScrambles = [
            "D L' R' U2 D L' B' U2 R2 U2 L' B2 F' R U2 F U' F U L2 D' B' U2 D' L'",
            "F B R2 F L B R' D2 L F' R' U F' U' D2 F B' L' R U2 L2 U2 B2 R2 B2",
            "F' L U' R2 D' U F D2 B F' R D' B2 U B2 L' F2 L2 U2 R2 F L' B2 D' B",
            "R' D2 U2 B L' U2 F' L R' D' R U' D' L2 F' B2 D F L D2 F U L' R' U'",
            "D2 U R' U L' B' F2 L2 R' D2 F D U F2 U2 B D' F L2 D2 L D F2 B2 L'",
            "F' R2 L U2 D B L2 R B' U2 F2 R' B L2 B U F U2 D2 R2 D L' B2 D' R'",
            "U2 D R' U' B2 U L R' F2 B2 D' U' L2 B' L' B' F2 D2 R2 L' B U' B2 F2 R'",
            "F2 D' F2 B2 R L2 U F' B' R' F' R L' D' L B F R' D B' L R F L2 B",
            "D U2 L' F' L R2 B F2 L D' F2 L2 R D' R' U R L' U2 F2 L R2 D R2 B2",
            "B2 R2 U2 R' D L' D' R' U2 B' U' L' F2 B2 L2 F' L2 F' B2 D2 F2 L' F' L2 U",
            "D U F' U' F U' L D2 B2 U' F' R2 U' D2 R U L2 B R' D2 R U' D' F B'",
            "R F2 R2 U2 F' D2 B' U R2 U' D2 B' L R F2 L' D U R' U2 D L U' L' R",
            "D' F L R2 B2 U R2 F' D2 U2 B' L' R2 U2 R2 B R2 B2 R' D2 L' B' R' B' F2",
            "D' L' D2 R' F2 R' U F' L D B2 F2 U' D' R' U' B2 D' L U R U2 D B U",
            "D2 F B L' D' B2 F2 R D' F' R' B2 L2 R D L2 U2 R' U D' B' F2 L R U2",
            "L B' D' L2 R' B' L' F2 R2 F' U B R2 U' B D F' U2 L' B2 R2 L B2 U2 D",
            "U2 D' L' F L F R L' B D2 L2 F' D' R L' F' U2 D' R' D' L2 R B' F2 D",
            "L F2 D2 R2 U2 R' U F R B F2 U2 B U2 F' B D L2 R2 F' U L' U B D",
            "B' D2 F' B U' R' F' R' U R B2 R' L U' B U2 L F' D' L2 U2 L D' B' R'",
            "B U L' D2 B' L B2 F U2 D2 B2 L2 D2 B' U2 B2 U' F B' L R' D F' D' F2",
         ]
         return ThreeCubeScrambles[Math.floor((Math.random() * ThreeCubeScrambles.length))];
      case 'FourCube':
         return '';
      case 'FiveCube':
         return '';
      default:
         return '';
   }
}