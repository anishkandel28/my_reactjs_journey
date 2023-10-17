import React, {useState} from 'react';

const ArrayUseState = () => {
    const bioData=[
        {
            id:0, myName:"Anish", age:25
        },
        {
            id:1, myName:"Shree", age:20
        }
    ]
    // console.log(bioData)
    const[myArray, setmyArray]=useState(bioData);

    const clearArray=()=>{
        setmyArray([]);
    }
    return (
        <>

        {
         myArray.map((curElm)=><h1 key={curElm.id}> My name is {curElm.myName} & Age is {curElm.age}</h1>)
         }
         <button className='btn btn-primary' onClick={clearArray}> Clear</button>
        </>
    )
}

export default ArrayUseState;
