import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar } from "./components"; // Solo importé los componentes necesarios para simplificar
import RetryWrapper from "./components/RetryWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen flex flex-col'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center flex-grow'>
          <Navbar />
          <RetryWrapper maxRetries={5} retryDelay={1000}>
            <div className='relative top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 mb-10'>
              <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                <div className='w-1 sm:h-80 h-40 violet-gradient' />
              </div>

              <div>
                <h1 className='text-white text-5xl font-bold'>
                  La <span className='text-[#915EFF]'>Neurona</span>
                </h1>
                <p className='mt-2 text-white-100 text-lg'>
                  Encargada de recibir, procesar y transmitir <br className='sm:block hidden' />
                  información mediante señales químicas y eléctricas <br className='sm:block hidden' />
                  <span className='text-[#915EFF]'>Soma: </span> Aquí suceden todos los procesos metabólicos de la neurona, también está el material genético de la neurona, y es donde se sintetizan las moléculas que permiten la supervivencia de la célula, y garantizan que se transmitan las señales eléctricas. <br className='sm:block hidden' />
                  <span className='text-[#915EFF]'>Núcleo: </span> Controla la expresión del material genético y, además, es la base central de la neurona, donde se regulan todos los procesos. <br className='sm:block hidden' />
                  <span className='text-[#915EFF]'>Axón: </span> Cuando las dendritas reciben los neurotransmisores y el cuerpo se ha activado a nivel eléctrico, el axón tiene la función de conducir la señal eléctrica hasta los botones sinápticos. En esos botones se liberarán los neurotransmisores para informar a la siguiente neurona. <br className='sm:block hidden' />
                  <span className='text-[#915EFF]'>Dendritas: </span> Captan la información en forma de señales químicas (neurotransmisores), y activan al cuerpo de que la anterior neurona de la red está intentando enviar un impulso. Estos se envían desde los órganos sensoriales al cerebro o al revés (del cerebro a los órganos). <br className='sm:block hidden' />
                  <span className='text-[#915EFF]'>Vaina de mielina: </span> Permite que los impulsos eléctricos se transmitan de manera rápida y eficiente a lo largo de las neuronas. <br className='sm:block hidden' />
                  <span className='text-[#915EFF]'>Nodos de Ranvier: </span> Permiten que los impulsos se transmitan más eficiente y rápidamente en el sistema nervioso. <br className='sm:block hidden' />
                  <span className='text-[#915EFF]'>Botones sinápticos: </span> Liberan al medio externo los neurotransmisores, una vez el impulso eléctrico se transmite por todo el axón. Estos neurotransmisores serán captados por las dendritas de la siguiente neurona del circuito o red neuronal. <br className='sm:block hidden' />
                  <span className='text-[#915EFF]'>Cono axónico: </span> Inicia el potencial de acción, es el impulso eléctrico que se transmite a lo largo del axón para extender información a otras neuronas, músculos o glándulas. <br className='sm:block hidden' />
                </p>
              </div>
            </div>

            {/* Aseguramos que el Hero se pegue al fondo */}
            <div className='flex-grow flex items-end'>
              <Hero />
            </div>
          </RetryWrapper>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
