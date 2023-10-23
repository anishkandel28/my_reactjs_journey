import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TextTransform from './components/TextTransform';
import Navbar from './components/Navbar';
import About from './components/About';
import ArrayUsestateChallenge from './components/ArrayUsestateChallenge';




function App() {
  const[mode, setMode]=useState('light')

  const handleToggle=()=>{

   if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='grey'
   }else{
    setMode('light')
    document.body.style.backgroundColor='white'
   }
  }
  return (
    <>
    <Navbar head="Coinmeric Analytics" mode={mode} handleToggle={handleToggle} />
     {/* <TextTransform heading="This is revision of Text Utils Apps on Reaact JS using useState" mode={mode}/>   */}
     <About/> 
     <ArrayUsestateChallenge/>
    </>
  );
}

export default App;
