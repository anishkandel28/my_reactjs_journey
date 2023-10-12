import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Textform2 from './Component/textform2';

function App() {
  return(
       <>
       {/* <Navbar title="Coinmeric Analytics" news="Trends"/> */}
       <Navbar title='Coinmeric Analytics'/>
      {/* <div className="container my-3"><TextForm heading="Enter the Textsize Below"/></div> */}
      <div className="container my-4"><Textform2 head="This is for prac"></Textform2></div>
       
      </>
  );
}

export default App;