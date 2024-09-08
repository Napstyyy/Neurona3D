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
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 mb-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`text-white text-5xl font-bold`}>
            La <span className='text-[#915EFF]'>Neurona</span>
          </h1>
          <p className={`mt-2 text-white-100 text-lg`}>
            Encargada de recibir, procesar y transmitir <br className='sm:block hidden' />
            información mediante señales químicas y eléctricas <br className='sm:block hidden' />
            <span className='text-[#915EFF]'>Soma: </span> Aquí suceden todos los procesos metabólicos de la neurona, también está el material genético de la neurona, y es donde se sintetizan las moléculas que permiten la supervivencia de la célula, y garantizan que se transmitan las señales eléctricas. <br className='sm:block hidden' />
            <span className='text-[#915EFF]'>Núcleo: </span> Controla la expresión del material genético y, además, es la base central de la neurona, donde se regulan todos los procesos.  <br className='sm:block hidden' />
            <span className='text-[#915EFF]'>Axón: </span> Cuando las dendritas reciben los neurotransmisores y el cuerpo se ha activado a nivel eléctrico, el axón tiene la función de conducir la señal eléctrica hasta los botones sinápticos. En esos botones se liberarán los neurotransmisores para informar a la siguiente neurona.  <br className='sm:block hidden' />
            <span className='text-[#915EFF]'>Dendritas: </span> Captan la información en forma de señales químicas (neurotransmisores), y activan al cuerpo de que la anterior neurona de la red está intentando enviar un impulso. Estos se envían desde los órganos sensoriales al cerebro o al revés (del cerebro a los órganos).  <br className='sm:block hidden' />
            <span className='text-[#915EFF]'>Vaina de mielina: </span> Permite que los impulsos eléctricos se transmitan de manera rápida y eficiente a lo largo de las neuronas.  <br className='sm:block hidden' />
            <span className='text-[#915EFF]'>Nodos de Ranvier: </span> Permiten que los impulsos se transmitan más eficiente y rápidamente en el sistema nervioso.  <br className='sm:block hidden' />
            <span className='text-[#915EFF]'>Botones sinápticos: </span> Liberar al medio externo los neurotransmisores, una vez el impulso eléctrico se transmite por todo el axón. Estos neurotransmisores serán captados por las dendritas de la siguiente neurona del circuito o red neuronal.  <br className='sm:block hidden' />
            <span className='text-[#915EFF]'>Cono axónico: </span> Inicia el potencial de acción, es el impulso eléctrico que se transmite a lo largo del axón para extender información a otras neuronas, músculos o glándulas.  <br className='sm:block hidden' />
          </p>
        </div>
      </div>

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
