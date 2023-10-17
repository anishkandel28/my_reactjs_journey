import React from 'react';
import { useState } from 'react';


const Hookprac1revise = () => {
    const [myText, setmyText]=useState("Click to get answer")
    console.log(myText)

     const btnClick=()=>{
        if (myText==="Click to get answer"){
            setmyText("wow, that value get changed")
        } else{
            setmyText("Click to get answer")
        }

}
    return (
    
        <div className='container'>
            <h1> {myText}</h1>
            <button className="btn btn-primary" onClick={btnClick}>Click Me please</button>
        </div>
    );
}

export default Hookprac1revise;
