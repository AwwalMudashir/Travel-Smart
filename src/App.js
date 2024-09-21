import './App.css';
import Display from './components/display';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import GoToTop from './components/Top';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Display/>
      <Footer/>
      <GoToTop/>
    </div>
  );
}

export default App;
