import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect, Suspense } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import CanvasLoader from "./Loader";
import { OrbitControls, Preload } from "@react-three/drei";

// import * as THREE from "three";

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color="#915EFF" />
  </mesh>
);
// const starTexture = new THREE.TextureLoader().load("../assets/github.png");

const Star = ({ p }) => {
  const ref = useRef();

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
      {/* <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial map={starTexture} /> */}
      <boxGeometry args={[0.07, 0.07, 0.07]} />
      <meshBasicMaterial wireframe color="grey" />
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
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
      <Icosahedron />
      {stars}
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
        // dpr={[1, 2]}
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
