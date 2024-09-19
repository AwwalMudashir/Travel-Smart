import './App.css';
import Display from './components/display';
import Footer from './components/footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Display/>
      <Footer/>
    </div>
  );
}

export default App;
