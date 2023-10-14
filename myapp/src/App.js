import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Hookprac1 from './Component/Hookprac1';



function App() {
  return(
       <>
       
       {/* <Navbar title="Coinmeric Analytics" news="Trends"/> */}
       <Navbar title='Coinmeric Analytics'/>
      <div className="container my-3"><TextForm heading="Enter the Textsize Below"/></div>
      <hr>
      </hr>
     <Hookprac1/>
      
       
      </>
  );
}

export default App;