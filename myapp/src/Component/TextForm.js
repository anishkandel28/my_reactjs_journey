import React from 'react';
import {useState} from 'react'; //UseState is hooks and we have imported useState from react to make state for the component



export default function TextForm(props) {

    const handleUpClick=()=>{ //Made a function on click for upercase
        // console.log("Uppercase was clicked" + text); 
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{ //Made a function on click for upercase
        // console.log("Uppercase was clicked" + text); 
        let newText=text.toLowerCase();
        setText(newText)
    }
   

    const handleOnChange=(event)=>{ //Made a function on click for upercase
        // console.log("On Change");
        setText(event.target.value); 
    }
    
    const handleBlankClick=()=>{
        let newText=("");
        setText(newText)
        console.log("Text Cleared", newText)

    }
    const handleRepeatText=()=>{
        let newText=text
        console.log('it"s get repeated', newText)
        setText(newText)

    }

    const handleCopyText=()=>{
        console.log("I am copy");
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    //ANother Method
    // const handleCopyText = () => {
    //     // Create a text area element to copy text
    //     const textArea = document.createElement('textarea');
    //     textArea.value = text;
    
    //     // Append the text area to the document
    //     document.body.appendChild(textArea);
    
    //     // Select the text inside the text area
    //     textArea.select();
    
    //     // Copy the selected text to the clipboard
    //     document.execCommand('copy');
    
    const [text, setText]= useState("") //const [count, setCount]=useState(0); in count, the value stored, and when we have to update or change state, we use setCount
    // text="new text"; //Wrong way to chnage the state
    // setText("new text");// Correct way to chnage the state
   
    return (
        <>
        <div className='container'>
           <h1>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" />
           </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-secondary mx-2' onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-warning mx-2" onClick={handleBlankClick}> Clear Button</button>
            <button className="btn btn-warning my-2" onClick={handleRepeatText}> Repeat The text</button>
            <button className="btn btn-primary my-2" onClick={handleCopyText}>Copy Text</button>
            {/* <button className='btn btn-secondary mx-2' onClick={handleColorClick}>Convert Red Color Text</button> */}
        </div>
        <div className='container my-2'>
            <h1> Summary </h1>
            <p> {text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2> Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}


