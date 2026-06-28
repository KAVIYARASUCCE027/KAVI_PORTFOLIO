"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, Stars, MeshDistortMaterial, Line } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";

const TECH_CARDS = [
  {
    label: "AWS",
    color: "#FF9900",
    icon: (
      <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19A5.5 5.5 0 0 0 18 8.02a1 1 0 0 0-.8-.78A7 7 0 0 0 3.65 10.3a1 1 0 0 0 .54.96 5.5 5.5 0 0 0 2.31 9.74z" />
      </svg>
    ),
  },
  {
    label: "Docker",
    color: "#2496ED",
    icon: (
      <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="6" y1="21" x2="6" y2="17" />
        <line x1="18" y1="21" x2="18" y2="17" />
        <line x1="10" y1="17" x2="10" y2="21" />
        <line x1="14" y1="17" x2="14" y2="21" />
      </svg>
    ),
  },
  {
    label: "Spring Boot",
    color: "#6DB33F",
    icon: (
      <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a7 7 0 0 1-9 10z" />
        <path d="M9 22v-4h4" />
      </svg>
    ),
  },
  {
    label: "Kubernetes",
    color: "#326CE5",
    icon: (
      <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: "MongoDB",
    color: "#47A248",
    icon: (
      <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    label: "AI Brain",
    color: "#a855f7",
    icon: (
      <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
      </svg>
    ),
  },
];

function OrbitSystem() {
  const purpleRingRef = useRef<THREE.Group>(null);
  const blueRingRef = useRef<THREE.Group>(null);
  const dashedRingRef = useRef<THREE.Group>(null);

  const dot1Ref = useRef<THREE.Mesh>(null);
  const dot2Ref = useRef<THREE.Mesh>(null);
  const dot3Ref = useRef<THREE.Mesh>(null);

  const circlePoints = useMemo(() => {
    const pts = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta), Math.sin(theta), 0));
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    
    // Rotate rings slowly
    if (purpleRingRef.current) purpleRingRef.current.rotation.z = t * 0.05;
    if (blueRingRef.current) blueRingRef.current.rotation.z = -t * 0.04;
    if (dashedRingRef.current) dashedRingRef.current.rotation.z = t * 0.02;

    // Animate glowing dots along the orbits
    if (dot1Ref.current) {
      const angle = t * 0.25;
      dot1Ref.current.position.set(Math.cos(angle) * 1.8, Math.sin(angle) * 1.8, 0);
    }
    if (dot2Ref.current) {
      const angle = -t * 0.2;
      dot2Ref.current.position.set(Math.cos(angle) * 2.2, Math.sin(angle) * 2.2, 0);
    }
    if (dot3Ref.current) {
      const angle = t * 0.15;
      dot3Ref.current.position.set(Math.cos(angle) * 2.6, Math.sin(angle) * 2.6, 0);
    }
  });

  return (
    <group>
      {/* 1. Purple Orbit Ring (solid, radius 1.8) */}
      <group ref={purpleRingRef}>
        <Line
          points={circlePoints.map(p => p.clone().multiplyScalar(1.8))}
          color="#a855f7"
          lineWidth={1}
          transparent
          opacity={0.4}
        />
      </group>
      {/* Moving Dot 1 */}
      <mesh ref={dot1Ref}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#a855f7" />
      </mesh>

      {/* 2. Blue Orbit Ring (solid, radius 2.2) */}
      <group ref={blueRingRef}>
        <Line
          points={circlePoints.map(p => p.clone().multiplyScalar(2.2))}
          color="#38bdf8"
          lineWidth={1.2}
          transparent
          opacity={0.3}
        />
      </group>
      {/* Moving Dot 2 */}
      <mesh ref={dot2Ref}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* 3. Dashed Outer Ring (dashed, radius 2.6) */}
      <group ref={dashedRingRef}>
        <Line
          points={circlePoints.map(p => p.clone().multiplyScalar(2.6))}
          color="#8b5cf6"
          lineWidth={1}
          dashed
          dashSize={0.12}
          gapSize={0.08}
          transparent
          opacity={0.3}
        />
      </group>
      {/* Moving Dot 3 */}
      <mesh ref={dot3Ref}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#a78bfa" />
      </mesh>
    </group>
  );
}

function GlowingPortal() {
  const portalRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (portalRef.current) {
      portalRef.current.rotation.z = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <mesh ref={portalRef} position={[0, 0, -0.6]}>
      <torusGeometry args={[1.7, 0.12, 32, 100]} />
      <MeshDistortMaterial
        color="#4c1d95"
        emissive="#8b5cf6"
        emissiveIntensity={0.9}
        distort={0.25}
        speed={1.8}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function TechCard({
  label,
  color,
  index,
  icon,
}: {
  label: string;
  color: string;
  index: number;
  icon: React.ReactNode;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMousePosition();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime * 0.04;
    
    // Orbit radius and angle to keep it safely within bounds
    const radius = 2.35;
    const angle = t + (index * Math.PI * 2) / 6;

    groupRef.current.position.x = Math.cos(angle) * radius;
    groupRef.current.position.y = Math.sin(angle) * radius;
    groupRef.current.position.z = Math.sin(state.clock.elapsedTime + index) * 0.08;

    // 3D Tilt based on mouse
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1 + mouse.x * 0.2;
    groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4 + index) * 0.08 - mouse.y * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Glass backing */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.9, 0.9, 0.06]} />
          <meshStandardMaterial
            color="#050816"
            transparent
            opacity={0.8}
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>
        {/* Glow rim */}
        <mesh position={[0, 0, -0.01]}>
          <boxGeometry args={[0.94, 0.94, 0.04]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={1.2}
            transparent
            opacity={0.35}
          />
        </mesh>
        <Html
          center
          distanceFactor={5.8}
          style={{ pointerEvents: "none" }}
        >
          <div
            className="flex flex-col items-center justify-center p-3 w-[82px] h-[82px] rounded-2xl backdrop-blur-xl border transition-all duration-300 shadow-[0_4px_20px_rgba(56,189,248,0.25)] hover:scale-105"
            style={{
              background: "rgba(5, 8, 22, 0.45)",
              borderColor: "rgba(168, 85, 247, 0.4)",
              boxShadow: "0 0 15px rgba(56, 189, 248, 0.35)",
            }}
          >
            <div className="mb-1 transition-transform duration-300 hover:scale-110" style={{ color }}>
              {icon}
            </div>
            <span
              className="text-[9px] font-extrabold tracking-wider uppercase text-white whitespace-nowrap"
            >
              {label}
            </span>
          </div>
        </Html>
      </group>
    </Float>
  );
}

function FloatingGeometry() {
  const cubes = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3 - 2,
        ] as [number, number, number],
        scale: 0.08 + Math.random() * 0.12,
        speed: 0.5 + Math.random() * 1,
      })),
    []
  );

  return cubes.map((cube, i) => (
    <Float key={i} speed={cube.speed} rotationIntensity={1} floatIntensity={2}>
      <mesh position={cube.position} scale={cube.scale}>
        {i % 2 === 0 ? (
          <boxGeometry />
        ) : (
          <icosahedronGeometry args={[1, 0]} />
        )}
        <meshStandardMaterial
          color={i % 2 === 0 ? "#a855f7" : "#38bdf8"}
          emissive={i % 2 === 0 ? "#a855f7" : "#38bdf8"}
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
          wireframe={i % 3 === 0}
        />
      </mesh>
    </Float>
  ));
}

function ParticleField() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#a78bfa" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMousePosition();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.x * 0.12;
      groupRef.current.rotation.x = mouse.y * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      <OrbitSystem />
      <GlowingPortal />
      {TECH_CARDS.map((card, i) => (
        <TechCard key={card.label} {...card} index={i} />
      ))}
      <FloatingGeometry />
      <ParticleField />
    </group>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#8b5cf6" castShadow />
      <pointLight position={[-5, -3, 3]} intensity={1.2} color="#38bdf8" />
      <pointLight position={[0, 0, -0.6]} intensity={3.5} distance={4} color="#a855f7" />
      <spotLight
        position={[0, 5, 4]}
        angle={0.6}
        penumbra={1}
        intensity={2}
        color="#a78bfa"
        castShadow
      />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneLights />
          <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={0.5} />
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
