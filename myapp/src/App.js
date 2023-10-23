import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Hookprac1 from './Component/hookprac1';
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Hookprac1revise from './Component/Hookprac1revise';
import Hookprac2 from './Component/hookprac2';
import RulesHooks from './Component/rulesHooks';
import ArrayUseState from './Component/ArrayUseState';
import UseStateObject from './Component/UseStateObject';
import ReactHookChallenge2 from './Component/ReactHookChallenge2';
import HookChallengeExaple from './Component/HookChallengeExaple';
import HookChallengeObj from './Component/HookChallengeObj';
import About from './Component/About';
import TernaryOperator from './Component/TernaryOperator';
import Alert from './Component/Alert';


function App() {
  const [mode, setMode]=useState('light'); //wether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
       setAlert(null)
     },1500);
  }
  const toggleMode=()=>{

     if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#0C1337'
      showAlert("Dark Mode has been enabled", "success")
     }
     else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled", 'success')
     }
  }
  const toggleStyle=()=>{
    if(mode==='light'){
      setMode('primary')
      document.body.style.backgroundColor='primary'
    }
  }
  return(
   
      <div>
       {/* <Navbar title="Coinmeric Analytics" news="Trends"/> */}
       <Navbar title='Coinmeric TextUtils' mode={mode} toggleMode={toggleMode} toggleStyle={toggleStyle}/>
       <Alert alert={alert}/>
      <div className="container my-3" ><TextForm mode={mode} showAlert={showAlert} heading="Enter the Textsize Below"/></div>
      <hr>
      </hr>
     {/* <Hookprac1/>
      <hr>
      </hr>
      <Hookprac1revise/>
      <hr></hr>
      <Hookprac2/>
      <hr></hr>
      <RulesHooks></RulesHooks>
      <hr>
      </hr>
      <ArrayUseState/>
      <hr>
      </hr>
      <UseStateObject/> 
      <hr></hr>
      <ReactHookChallenge2/>
      <hr></hr>
      <HookChallengeExaple/>
      <hr></hr>
      <HookChallengeObj/> */}
      {/* <About/>
      <TernaryOperator></TernaryOperator> */}
      </div>
      
  );
}

export default App;