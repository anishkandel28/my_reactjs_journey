import React from 'react';
import {useState} from 'react'; //UseState is hooks and we have imported useState from react to make state for the component


export default function TextForm(props) {
    const handleUpClick=()=>{ //Made a function on click for upercase
        console.log("Uppercase was clicked" + text); 
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLowClick=()=>{
        console.log("lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{ //Made a function on click for upercase
        console.log("On Change");
        setText(event.target.value); 
    }

    const [text, setText]= useState("enter text here") //const [count, setCount]=useState(0); in count, the value stored, and when we have to update or change state, we use setCount
    // text="new text"; //Wrong way to chnage the state
    // setText("new text");// Correct way to chnage the state
    return (
        <div>
           
                <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" />
  </div>
  <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
  <button className='btn btn-secondary' onClick={handleLowClick}>Convert to lowercase</button>


        </div>
    );
}


