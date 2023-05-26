import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect, Suspense } from "react";
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

import * as THREE from "three";

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color="#915EFF" />
  </mesh>
);
// const starTexture = new THREE.TextureLoader().load("../assets/github.png");

const Star = ({ p }) => {
  const ref = useRef();
  const [decal] = useTexture([logo]);

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
      {/* <sphereGeometry args={[0.1, 16, 16]} /> */}
      <boxGeometry args={[0.2, 0.2, 0.2]} />

      {/* <icosahedronGeometry args={[1, 1]} /> */}
      {/* <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />{" "} */}
      <meshBasicMaterial wireframe color="grey" />
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
  const distance = useTransform(scrollYProgress, [0, 1], [20, 3]); // adjust the initial distance here
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

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
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
    <div className="container  h-screen mx-auto">
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
