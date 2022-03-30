import logo from './logo.svg';
import './App.css';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

function App() {
  return (
    <div className="Container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
