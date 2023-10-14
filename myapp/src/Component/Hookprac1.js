import React, {useState} from 'react';

const Hookprac1 = () => {
    const[text, setText]=useState("What's your name?")
    console.log(text)

    const changeName=()=>{
        if (text==="What's your name?") {
        setText("My Name is Anish Shree Kandel")
        } else{
        setText("What's your name?")
        }
    }


    return (
        <div className="container">
            <h1>{ text } </h1>
           <div><button className="btn btn-primary" onClick={changeName}>Click to get answer</button></div>
            
        </div>
    );
}

export default Hookprac1;
