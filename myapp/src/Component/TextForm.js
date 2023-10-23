import React from 'react';
import {useState} from 'react'; //UseState is hooks and we have imported useState from react to make state for the component
import '../App.css';


export default function TextForm(props) {

    const handleUpClick=()=>{ //Made a function on click for upercase
        // console.log("Uppercase was clicked" + text); 
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Upper case has been done", "success")
    }
    const handleLowClick=()=>{ //Made a function on click for upercase
        // console.log("Uppercase was clicked" + text); 
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert(" Lowercase has been done", "success")
    }
   

    const handleOnChange=(event)=>{ //Made a function on click for upercase
        // console.log("On Change");
        setText(event.target.value); 
    }
    
    const handleBlankClick=()=>{
        let newText=("");
        setText(newText)
        console.log("Text Cleared", newText)
        props.showAlert("text has been cleared", 'success')

    }
    const handleRepeatText=()=>{
        let newText=text
        console.log('it"s get repeated', newText)
        setText(newText)

    }
   //Copy the text
    const handleCopyText=()=>{
        console.log("I am copy");
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('Text has been copied to clipboard', 'success')
        
    }
    //Handle the extra Spaces
    const handleTextSpace=()=>{
        let newText=text.split(/[ ]+/);
        // let newText=text.replace(/ +/g, ' '); another method
        setText(newText.join(" "))
        console.log("extra spaces", newText)
        props.showAlert('Extra spaces has been removed', 'success')
    }


    //ANother Method to copy the text
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
    // const [applyColor, setApplyColor]=useState(false);
        
    const [myStyle, setMyStyle]=useState({
        color:""
    })

    // const handleColor=()=>{
    //     setApplyColor(!applyColor);    
    // }
    // console.log(text)
    // const handleColor = () => {
    //     setMyStyle(prevStyle => ({
    //       color: prevStyle.color === 'red' ? 'black' : 'red'
    //     }));
    //   };

    return (
        <>
        <div className="container" style={{color:props.mode==='dark' ? 'white':'black'}}>
           <h1>{props.heading}</h1>
           <div className="mb-3">
           {/* <textarea className= {`form-control, mb-3 ${ applyColor?'red-text' : ''}`} value={text} onChange={handleOnChange} id="myBox" rows="8" /> */}
           <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" />
           </div>
            <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-secondary mx-2' onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-warning mx-2" onClick={handleBlankClick}> Clear Button</button>
            <button className="btn btn-warning mx-2" onClick={handleRepeatText}> Repeat The text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleTextSpace}>Remove Extra Spaces</button>
            {/* <button className="btn btn-primary my-3" onClick={handleColor}>Color Change</button> */}
            {/* <button className='btn btn-secondary mx-2' onClick={handleColorClick}>Convert Red Color Text</button> */}
        </div>
        <div className="container mb-3" style={{color:props.mode==='dark' ? 'white':'#0a0d54'}}>
            <h1> Summary </h1>
        
            <p>{text.split(/\s+/).filter((word) => word !== "").length}  words and {text.length} characters</p>
            <p>{text.trim().length>0?text.trim().split(" ").length:"0"} words</p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <p> {text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h2> Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    );
}


