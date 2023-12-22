"use client"

import { forwardRef, Suspense, useImperativeHandle, useRef } from "react";
import {
  OrbitControls,
  View as ViewImpl,
} from "@react-three/drei";
import { Three } from "./Three";

export const Common = ({}) => (
  <Suspense fallback={null}>
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
  </Suspense>
);

const View = forwardRef(({ children,...props }, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} className="w-[100vw] h-[100vh]"/>
      <Three>
        <ViewImpl track={localRef}>
          {children}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = "View";

export { View };
