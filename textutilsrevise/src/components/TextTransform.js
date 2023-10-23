import React,{useState} from 'react';

const TextTransform = (props) => {
    const handleUpCase=()=>{
        let newText=text.toUpperCase()
        setText(newText)

    }
    const handleChange=(event)=>{
        setText(event.target.value)
    }

    const handleLowCase=()=>{
        let newText=text.toLowerCase();
        setText(newText)

    }

    const handleClear=()=>{
        setText(" ");
    }

    const handleCopyText=()=>{
       let newText=document.getElementById('myBox')
       newText.select()
      navigator.clipboard.writeText(newText.value)

    }

    const removeSpace=()=>{
         let newText=text.replace(/ +/g, ' ');
         setText(newText)

    }
    const[text, setText]=useState("")
    return (
        
        <>
               
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>   
            {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}  id="myBox"  rows="10"></textarea>
            </div>
            <div className='container my-3'>
            <button className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
            <button className="btn btn-secondary" onClick={handleLowCase}>Convert to Lowercase</button>
            <button className="btn btn-warning" onClick={handleClear}>Clear the Text</button>
            <button className="btn btn-primary"onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary" onClick={removeSpace}>Remove Extra Space</button>
            {/* <button className="btn btn-primary">Convert to Uppercase</button> */}
            </div>
            
            <div className='container my-4' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1> Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <p> {text.length>0?text:"write something in above textarea to preview it"}</p>
            </div>
        </>
    );
}

export default TextTransform;
