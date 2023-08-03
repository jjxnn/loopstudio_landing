
import './App.scss';
import app_style from './styles/app.module.scss'
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header'
import Creation from './components/Creation';

const App = () => {
  return (
    <>
      <Header/>
    
    <main className="App">
      <About/>
      <h2 className={`text-[2rem] text-center mt-16 mb-4 ${app_style.text}`}>Our Creations</h2>
      <Creation/>
    </main>

    <Footer/>
    </>
    
  );
}

export default App;
