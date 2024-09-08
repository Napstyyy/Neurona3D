import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

// Model component to load and render a GLTF model
function Model({ path }) {
  const gltf = useLoader(GLTFLoader, path);
  gltf.scene.scale.set(8, 8, 8);
  return <primitive object={gltf.scene} />;
}

// Function to create a line (vector) from a neuron part to the label
function Vector({ start, end }) {
  return (
    <Line
      points={[start, end]} // Start and end points
      color="#985cfc"
      lineWidth={2}
      dashed={false}
    />
  );
}

// Label component to display text at specific positions
function Label({ position, text }) {
  return (
    <Html position={position}>
      <div style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px', borderRadius: '5px', width: '250px' }}>
        {text}
      </div>
    </Html>
  );
}

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <Canvas style={{ height: '100vh' }} camera={{ position: [0, 0, 5], fov: 100 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        
        {/* Load the neuron model */}
        <Model path="./assets/neurona/source/Neurona.glb" />

        {/* Vectors pointing from neuron parts to their labels */}
        <Vector start={[-1.5, 0, 2.1]} end={[-2, 2, 2]} />  {/* Soma */}
        <Vector start={[-1.6, 0.1, 2.7]} end={[1.2, -1, 2]} />  {/* Núcleo */}
        <Vector start={[2.2, -0.4, 0.65]} end={[1.2, 1.4, 1.6]} />  {/* Axón */}
        <Vector start={[-1.2, -0.4, 2]} end={[1.2, 1.4, 1.6]} />  {/* Axón */}
        <Vector start={[-1.4, 0.5, 1.3]} end={[0, 1, 3]} />  {/* Dendritas */}
        <Vector start={[-0.7, 0.5, 2.8]} end={[0, 1, 3]} />  {/* Dendritas */}
        <Vector start={[-1.8, -1, 1.8]} end={[0, 1, 3]} />  {/* Dendritas */}
        <Vector start={[-2.5, 0.1, 2.7]} end={[0, 1, 3]} />  {/* Dendritas */}
        <Vector start={[-0.8, -0.4, 2]} end={[1.2, 0.8, 1.6]} />  {/* Vaina de mielina */}
        <Vector start={[1.6, -0.4, 0.8]} end={[1.2, 0.8, 1.6]} /> {/* Vaina de mielina */}
        <Vector start={[0.8, -0.4, 1.3]} end={[1.2, 0.8, 1.6]} /> {/* Vaina de mielina */}
        <Vector start={[0, -0.6, 1.4]} end={[1.2, 0.8, 1.6]} /> {/* Vaina de mielina */}
        <Vector start={[0.4, -0.6, 1.4]} end={[1.2, -0.5, 1.6]} />  {/* Nodos de Ranvier */}
        <Vector start={[3.2, 0.3, 0.6]} end={[3, 1, 1.2]} />  {/* Botones sinápticos */}
        <Vector start={[-1.4, -0.4, 2]} end={[0.4, 1, 2]} />  {/* Cono axónico */}

        {/* Labels */}
        <Label position={[-2, 2, 2]} text="Soma" />
        <Label position={[1.2, -1, 2]} text="Núcleo" />
        <Label position={[1.2, 1.4, 1.6]} text="Axón" />
        <Label position={[0, 1, 3]} text="Dendritas" />
        <Label position={[1.2, 0.8, 1.6]} text="Vaina de mielina" />
        <Label position={[1.2, -0.5, 1.6]} text="Nodos de Ranvier" />
        <Label position={[3, 1, 1.2]} text="Botones sinápticos" />
        <Label position={[0.4, 1, 2]} text="Cono axónico" />

        <OrbitControls />
      </Canvas>
    </section>
  );
};

export default Hero;
