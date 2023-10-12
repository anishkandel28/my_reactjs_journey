import React,{useState} from 'react';

const Textform2 = (props) => {
    
    const handleUpClick=()=>{
        console.log("Button for uppercase is clicked " + text)
        let newTask = text.toUpperCase();
        setText(newTask)
    }

    const handleLowClick=()=>{
    let newTask=text.toLowerCase();
    setText(newTask)
    }

    const handleOnChange=(event)=>{
        console.log("its changing");
        setText(event.target.value)
    }
    const [text, setText]=useState("Enter here");
    return (
    <div>
        <h1>{props.head}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea> </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-secondary'onClick={handleLowClick}>Convert to lowercase</button>
    
    </div>
       
    );
}

export default Textform2;
