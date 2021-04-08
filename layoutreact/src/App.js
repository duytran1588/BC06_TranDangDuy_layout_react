import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
