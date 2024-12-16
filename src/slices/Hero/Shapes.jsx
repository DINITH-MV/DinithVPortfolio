"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Shapes() {
  return (
    <div className="row-span-1 row-start-1 aspect-square md:col-span-1 md:col-start-2 md:mt-[20px] lg:pt-[60px]">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 30], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geometries />
          <ContactShadows
            position={[0, -3.1, 0]}
            opacity={0.65}
            scale={35}
            blur={1}
            far={7}
            color={"#ffffff"}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [-0.4, 1.27, 1],
      r: 0.65,
      geometry: new THREE.TorusKnotGeometry(2.5,.74,104,122,213,18), // Gem
      sounds: [
        new Audio("/sounds/Impact1.wav"),
        new Audio("/sounds/Impact2.wav"),
        new Audio("/sounds/Impact3.wav"),
        new Audio("/sounds/Impact4.wav"),
        new Audio("/sounds/Impact5.wav"),
      ]
    },
    {
      position: [1.8, 0, 3],
      r: 0.65,
      geometry: new THREE.TorusKnotGeometry(1.2,.5,70,12,3,18), // Gem
      sounds: [
        new Audio("/sounds/Spin1.wav"),
        new Audio("/sounds/Spin2.wav"),
        new Audio("/sounds/Spin3.wav"),
      ]
    },
    {
      position: [2.5, 3, -1],
      r: 0.4,
      geometry: new THREE.IcosahedronGeometry(1.7,0), // Pill
      sounds: [
        new Audio("/sounds/Impact01.wav"),
        new Audio("/sounds/Impact02.wav"),
        new Audio("/sounds/Impact03.wav"),
        new Audio("/sounds/Impact04.wav"),
        new Audio("/sounds/Impact05.wav"),
      ]
    }
  ];

  const materials = [
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, metalness: 0.4, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xe8a317, metalness: 0.4, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 0.1,
      color: 0x2980b9,
    }),
  ];

  return geometries.map(({ position, r, geometry, sounds }) => (
    <Geometry
      key={JSON.stringify(position)} // Unique key
      position={position.map((p) => p * 2)}
      geometry={geometry}
      materials={materials}
      soundEffects={sounds}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, soundEffects, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e) {
    const mesh = e.object;

    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(0.57,.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        ></mesh>
      </Float>
    </group>
  );
}
