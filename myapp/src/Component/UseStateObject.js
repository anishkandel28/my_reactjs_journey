import React, {useState} from 'react';

const UseStateObject = () => {
    const [myObj, setmyObj] = useState({
        myName:"Anish", myAge:25, myDegree:"MIT", myRoll:1,
        myName:"Kandel", myAge:26, myDegree:"MSC", myRoll:1
        
    });
     const changeObj=()=>{
        setmyObj({...myObj, myName:"shree"})
        //... three dots (spread operator) is used when we have to show all object's value not have to copy remaining, if one have to be edited
     }
     const handleRemove=()=>{

     }
    return (
     
        <div className='container'>
            <h1> UseState Object Prac</h1>
            <h1>Name : { myObj.myName } & Age:{myObj.myAge} & Degree: {myObj.myDegree} <button className='btn btn-warning' onClick={handleRemove}> Remove</button></h1>
            <button className='btn btn-primary' onClick={changeObj}>Update</button>
        </div>
    );
}

export default UseStateObject;
