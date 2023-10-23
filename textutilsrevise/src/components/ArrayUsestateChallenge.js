import React, { useState } from 'react';

const ArrayUsestateChallenge = () => {
    const myObj=[
        {id:0, myName:"Anish", myAge:25, myDegree:"MIT"},
        {id:1, myName:"Kandel", myAge:24, myDgree:"MSC"}
    ]
    const handleRemove=(id)=>{
        const newArray=text.filter((curElm)=>{
            return curElm.id!==id
        })
        setText(newArray)
    }

    const clearBtn=()=>{
        setText([])
    }

    const [text, setText]=useState(myObj)
    return (
        <>
            {
                text.map((curElm)=>{

                    return(<h1 key={curElm.id}>My name {curElm.myName}, age {curElm.myAge} and dgeree is {curElm.myDegree}
                    <button className='btn btn-primary' onClick={()=>handleRemove(curElm.id)}> Remove</button></h1>) 

                })
                
            }
            <button className='btn btn-primary'onClick={clearBtn}> Remove</button>
        </>
    );
}

export default ArrayUsestateChallenge;
