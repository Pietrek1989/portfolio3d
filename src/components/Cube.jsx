import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect, Suspense, useState, useEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import CanvasLoader from "./Loader";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import logo from "../assets/company/epicode.png";
import useWindowSize from "./WindowSize";

const Icosahedron = () => {
  const windowSize = useWindowSize();

  const IcosahedronSize = windowSize.width <= 768 ? 0.9 : 1;
  return (
    <mesh rotation-x={0.35}>
      <icosahedronGeometry args={[IcosahedronSize, 1]} />
      <meshBasicMaterial wireframe color="#257cf0" />
    </mesh>
  );
};
// const starTexture = new THREE.TextureLoader().load("../assets/github.png");

const Star = ({ p }) => {
  const windowSize = useWindowSize();
  const ref = useRef();
  const [decal] = useTexture([logo]);
  const starSize = windowSize.width <= 768 ? 0.08 : 0.1; // Reduce star size for small screens

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[starSize, 16, 16]} />
      {/* <boxGeometry args={[0.2, 0.2, 0.2]} /> */}
      {/* <icosahedronGeometry args={[1, 1]} /> */}
      <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />{" "}
      {/* <meshBasicMaterial wireframe color="grey" /> */}
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        key={decal.name}
        flatShading
      />
    </mesh>
  );
};

function Scene({ numStars = 200 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [20, 1]); // adjust the initial distance here
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0002
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} key={i} />);
  }

  return (
    <>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <Icosahedron />
        {stars}
      </Float>
    </>
  );
}

export default function Cube() {
  return (
    <div className="container cube  h-screen mx-auto">
      <Canvas
        gl={{ antialias: false }}
        className="w-100 position-fixed"
        // shadows
        dpr={[1, 2]}
        camera={{ position: [10, 3, 5], fov: 25 }}
        // gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Scene />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
