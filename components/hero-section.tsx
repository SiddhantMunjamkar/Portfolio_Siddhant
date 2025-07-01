"use client"

import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Text, OrbitControls, Float, Environment, Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useTheme } from "next-themes"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={0.8} position={[3, 0, -2]}>
      <MeshDistortMaterial color="#78716c" attach="material" distort={0.3} speed={2} roughness={0.4} metalness={0.8} />
    </Sphere>
  )
}

function FloatingText() {
  const { theme } = useTheme()

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        font="/fonts/Inter_Bold.json"
        fontSize={1.5}
        color={theme === "dark" ? "#f5f5f4" : "#1c1917"}
        anchorX="center"
        anchorY="middle"
      >
        CREATIVE
      </Text>
    </Float>
  )
}

function Scene() {
  const { theme } = useTheme()

  return (
    <>
      <Environment preset={theme === "dark" ? "night" : "dawn"} />
      <ambientLight intensity={theme === "dark" ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={theme === "dark" ? 0.8 : 1} />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={theme === "dark" ? 0.5 : 0.3}
        color={theme === "dark" ? "#3b82f6" : "#f59e0b"}
      />
      <FloatingText />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 dark:from-stone-950 dark:via-stone-900 dark:to-stone-800 transition-colors duration-500"
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-stone-400/30 dark:bg-stone-600/30 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-serif text-6xl md:text-8xl font-light mb-6 tracking-tight text-stone-900 dark:text-stone-100">
            Siddhant Munjamkar
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 mb-8 font-light tracking-wide"
          >
            Automation Engineer, AI Agent Builder & Web Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg text-stone-500 dark:text-stone-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting intelligent systems and scalable web platforms at the crossroads of automation, AI, and
            infrastructure engineering.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToWork}
            className="inline-flex items-center px-8 py-4 border border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 font-medium tracking-wide hover:bg-stone-900 hover:text-stone-50 dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-all duration-300"
          >
            View Work
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-px h-16 bg-stone-400 dark:bg-stone-600 relative"
        >
          <motion.div
            animate={{
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute inset-0 bg-stone-400 dark:bg-stone-600 origin-center"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
