import React from 'react';

const HookChallengeExaple = () => {
       const myData=[
            {id:0, myName:"Anish", myAge:25, myDegree:"MIT"},
            {id:1, myName:"Shree", myAge:27, myDegree:"MSC"},
            {id:2, myName:"Kandel", myAge:28, myDegree:"MDC"},]

        const[text, setText]=React.useState(myData)

        const clearData=()=>{
            setText([]);

        }
        const removeElement=(id)=>{

            const newArray=text.filter((curElm)=>{
                return curElm.id !== id;
            })
            setText(newArray);
        }
        return (
        <>
        {
            text.map((curElm)=>{

                return( <h1 key={curElm.id}> Name:{curElm.myName} Age: {curElm.age} and myDegree is {curElm.myDegree}
                    <button className='btn btn-secondary' onClick={ ()=> removeElement(curElm.id)}>Remove</button></h1>)
               
            })
        }
              <button className="btn btn-primary" onClick={clearData}>Clear Me</button>
        </>
    );
}

export default HookChallengeExaple;
