// import React, { useEffect, useState } from 'react';
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// // import {Mersedes} from "/Mersedes"
// function Car1() {
//   const [Component, setComponent] = useState<React.FC<any> | null>(null);
//   useEffect(() => {
//     // Dynamically create a script element
//     const script = document.createElement('script');
//     script.src = '/Mersedes.jsx'; // Adjust the path accordingly
//     script.async = true;
  
//     // Callback function after the script is loaded
//     script.onload = () => {
//       // Once the script is loaded, the component should be available globally
//       const globalComponent = (window as any).MyComponent;
  
//       // Set the component state
//       setComponent(() => globalComponent);
//     };
  
//     // Append the script element to the document body
//     document.body.appendChild(script);
  
//     // Cleanup function to remove the script element
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <Canvas>
//         <ambientLight/>
//         <OrbitControls/>
//       <Suspense fallback={null}>
//       {Component && <Component />}
        
//       </Suspense>
//     </Canvas>
//   );
// }
// export default Car1

// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Model from "../../public/M"

// function Car1() {
//   return (
//     <Canvas>
//         <ambientLight/>
//         <OrbitControls/>
//       <Suspense fallback={null}>
//       </Suspense>
//     </Canvas>
//   );
// }
// export default Car1
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mersedes from "../../public/Mersedes"

function Car1() {
  return (
    <Canvas>
        <ambientLight/>
        <OrbitControls/>
      <Suspense fallback={null}>
      <Mersedes/>
      </Suspense>
    </Canvas>
  );
}
export default Car1