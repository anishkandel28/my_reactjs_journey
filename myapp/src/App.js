import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Hookprac1 from './Component/hookprac1';
import React from 'react'
import ReactDOM from 'react-dom'
import Hookprac1revise from './Component/Hookprac1revise';
import Hookprac2 from './Component/hookprac2';
import RulesHooks from './Component/rulesHooks';
import ArrayUseState from './Component/ArrayUseState';
import UseStateObject from './Component/UseStateObject';
import ReactHookChallenge2 from './Component/ReactHookChallenge2';
import HookChallengeExaple from './Component/HookChallengeExaple';
import HookChallengeObj from './Component/HookChallengeObj';



function App() {
  return(
      <div>
       {/* <Navbar title="Coinmeric Analytics" news="Trends"/> */}
       <Navbar title='Coinmeric Analytics'/>
      <div className="container my-3"><TextForm heading="Enter the Textsize Below"/></div>
      <hr>
      </hr>
     <Hookprac1/>
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
      <HookChallengeObj/>
      </div>
      
  );
}

export default App;