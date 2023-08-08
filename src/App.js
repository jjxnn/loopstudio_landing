
import './App.scss';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header'
import Creation from './components/Creation';
import DesktopCreation from './components/DesktopCreation';
import { useEffect, useState } from 'react';


const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <>
      <Header/>
    
    <main className="App p-8 lg:p-32 flex flex-col gap-8">
      <About/>
      { width < 1024 ? <Creation/> : <DesktopCreation/>}
    </main>

    <Footer/>
    </>
    
  );
}

export default App;
