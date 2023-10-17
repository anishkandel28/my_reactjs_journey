import React from 'react';

const ReactHookChallenge2 = () => {
    const bioData=[
        {id:0, myName:"Anish", myAge:25},
        { id:1, myName:"Shree", myAge:24}
    ]

    const[text, setText]=React.useState(bioData)

    const clearButton=()=>{
        setText([]);
    }

    //This function 'removeElement ' takes an id as an argument. 
    //it uses the 'filter' method to create 
    //a new array called 'myNewArray' that doesn't include the object 
    //with the specified 'id'. Then it updtes the 'text' state with this new array, effectively
    //removing the selected person form the list.
    
    const removeElement=(id)=>{
    
       const myNewArray=text.filter((curElm)=>{
        return curElm.id !== id;
        }) 
       setText(myNewArray);
    }
    return (
        //Inside the 'return' statement, you are mapping over the 'text' array
    //and rendering information for each person using a 'map' function
        <>
        {
            text.map((curElm)=>{

                return(<h1 key={curElm.id}> Name: {curElm.myName} & Age: {curElm.myAge} 
                <button className="btn btn-warning" onClick= { () => removeElement(curElm.id)}> remove</button></h1>);
            })
            
            
        }
           
            <button className='btn'onClick={clearButton}> Clear</button>
        </>
    );
}

export default ReactHookChallenge2;
