import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas } from "./components";
import RetryWrapper from "./components/RetryWrapper";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <RetryWrapper maxRetries={5} retryDelay={1000}>
            <Hero />
          </RetryWrapper>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
