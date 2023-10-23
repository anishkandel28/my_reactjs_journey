import React, {useState} from 'react';

const Hookprac2 = () => {
    const [count, setCount]=useState(0);

    const clickCount=()=>{
        setCount(count +1)
        // console.log(count)
    }
    return ( 
        <div className='container'>
            <p> You clicked {count } times</p>
            <button onClick={clickCount}> CLick Me</button>
           <hr></hr>
           {/* inline function  */}
            {/* <button onClick={()=>setCount(count+1)}>Click Me</button> 
            <button onClick={()=>setCount(count+1)}></button> */}
           
        </div>
    );
}

export default Hookprac2;
