"use client";;
import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9"
}) {
  const svgRef = useRef(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#FF6B6B40",
    shape: "circle",
    backgroundColor: "#1a1a1a",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start,
    end
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div
      className="w-full aspect-[2/1] bg-black rounded-lg  relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false} />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none">
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor} />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5">
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite" />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor} />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5">
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}




















// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion"; // ✅ correct import
// import DottedMap from "dotted-map";
// import { useTheme } from "next-themes";

// export default function WorldMap({
//   dots = [],
//   lineColor = "#0ea5e9"
// }) {
//   const svgRef = useRef(null);
//   const { theme } = useTheme();
//   const [svgMap, setSvgMap] = useState(""); // ✅ store generated SVG

//   // ✅ Generate the map only after the theme is known
//   useEffect(() => {
//     if (!theme) return;

//     const map = new DottedMap({ height: 100, grid: "diagonal" });
//     const generatedSVG = map.getSVG({
//       radius: 0.22,
//       color: theme === "dark" ? "#FFFFFF40" : "#00000040",
//       shape: "circle",
//       backgroundColor: theme === "dark" ? "black" : "white", // ✅ This sets correct background
//     });
//     setSvgMap(generatedSVG);
//   }, [theme]);

//   const projectPoint = (lat, lng) => {
//     const x = (lng + 180) * (800 / 360);
//     const y = (90 - lat) * (400 / 180);
//     return { x, y };
//   };

//   const createCurvedPath = (start, end) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = Math.min(start.y, end.y) - 50;
//     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//   };

//   return (
//     <div className="w-full aspect-[2/1] bg-black dark:bg-black rounded-lg relative font-sans overflow-hidden">
//       {svgMap && (
//         <img
//           src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//           className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
//           alt="world map"
//           height="495"
//           width="1056"
//           draggable={false}
//         />
//       )}

//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0 pointer-events-none select-none"
//       >
//         {/* Lines */}
//         {dots.map((dot, i) => {
//           const startPoint = projectPoint(dot.start.lat, dot.start.lng);
//           const endPoint = projectPoint(dot.end.lat, dot.end.lng);
//           return (
//             <motion.path
//               key={`path-${i}`}
//               d={createCurvedPath(startPoint, endPoint)}
//               fill="none"
//               stroke="url(#path-gradient)"
//               strokeWidth="1"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
//             />
//           );
//         })}

//         <defs>
//           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="white" stopOpacity="0" />
//             <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </linearGradient>
//         </defs>

//         {/* Dots */}
//         {dots.map((dot, i) => {
//           const start = projectPoint(dot.start.lat, dot.start.lng);
//           const end = projectPoint(dot.end.lat, dot.end.lng);
//           return (
//             <g key={`points-${i}`}>
//               <circle cx={start.x} cy={start.y} r="2" fill={lineColor} />
//               <circle cx={start.x} cy={start.y} r="2" fill={lineColor} opacity="0.5">
//                 <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
//                 <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
//               </circle>
//               <circle cx={end.x} cy={end.y} r="2" fill={lineColor} />
//               <circle cx={end.x} cy={end.y} r="2" fill={lineColor} opacity="0.5">
//                 <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
//                 <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
//               </circle>
//             </g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import DottedMap from "dotted-map";
// import { useTheme } from "next-themes";

// export default function WorldMap({
//   dots = [],
//   lineColor = "#0ea5e9", // bright cyan blue
// }) {
//   const svgRef = useRef(null);
//   const { theme } = useTheme();
//   const [svgMap, setSvgMap] = useState("");

//   useEffect(() => {
//     if (!theme) return;

//     const map = new DottedMap({ height: 100, grid: "diagonal" });

//     const generatedSVG = map.getSVG({
//       radius: 0.22,
//       color: theme === "dark" ? "#FFFFFF40" : "#00000040",
//       shape: "circle",
//       backgroundColor: theme === "dark" ? "black" : "white",
//     });

//     setSvgMap(generatedSVG);
//   }, [theme]);

//   const projectPoint = (lat, lng) => {
//     const x = (lng + 180) * (800 / 360);
//     const y = (90 - lat) * (400 / 180);
//     return { x, y };
//   };

//   const createCurvedPath = (start, end) => {
//     const midX = (start.x + end.x) / 2;
//     const midY = Math.min(start.y, end.y) - 50;
//     return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
//   };

//   return (
//     <div className="w-full aspect-[2/1] bg-black rounded-lg relative font-sans overflow-hidden">
//       {svgMap && (
//         <img
//           src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
//           className="h-full w-full pointer-events-none select-none"
//           alt="world map"
//           height="495"
//           width="1056"
//           draggable={false}
//         />
//       )}

//       <svg
//         ref={svgRef}
//         viewBox="0 0 800 400"
//         className="w-full h-full absolute inset-0 pointer-events-none select-none"
//       >
//         {/* Path animation */}
//         {dots.map((dot, i) => {
//           const start = projectPoint(dot.start.lat, dot.start.lng);
//           const end = projectPoint(dot.end.lat, dot.end.lng);
//           return (
//             <motion.path
//               key={`path-${i}`}
//               d={createCurvedPath(start, end)}
//               fill="none"
//               stroke="url(#path-gradient)"
//               strokeWidth="1"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
//             />
//           );
//         })}

//         {/* Gradient for paths */}
//         <defs>
//           <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop offset="0%" stopColor="white" stopOpacity="0" />
//             <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </linearGradient>
//         </defs>

//         {/* Start/end dot animations */}
//         {dots.map((dot, i) => {
//           const start = projectPoint(dot.start.lat, dot.start.lng);
//           const end = projectPoint(dot.end.lat, dot.end.lng);
//           return (
//             <g key={`points-${i}`}>
//               {/* Start point */}
//               <circle cx={start.x} cy={start.y} r="2" fill={lineColor} />
//               <circle cx={start.x} cy={start.y} r="2" fill={lineColor} opacity="0.5">
//                 <animate attributeName="r" from="2" to="8" dur="1.5s" repeatCount="indefinite" />
//                 <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
//               </circle>

//               {/* End point */}
//               <circle cx={end.x} cy={end.y} r="2" fill={lineColor} />
//               <circle cx={end.x} cy={end.y} r="2" fill={lineColor} opacity="0.5">
//                 <animate attributeName="r" from="2" to="8" dur="1.5s" repeatCount="indefinite" />
//                 <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
//               </circle>
//             </g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// }
