import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';


function App() {
  return(
       <>
       {/* <Navbar title="Coinmeric Analytics" news="Trends"/> */}
       <Navbar title='Coinmeric Analytics'/>
      <div className="container my-3"><TextForm heading="Enter the Textsize Below"/></div>
      
       
      </>
  );
}

export default App;