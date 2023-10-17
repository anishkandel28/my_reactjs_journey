
import React, { useState } from 'react';

const RulesHooks = () => {
    const[myName , setmyName]=useState("Hook Rules");
    return (
        <div className='container'>
            <h1>{myName}</h1>
            <div>
            <li>1: Always write it inside the component or function</li>
            <li>2:Component name must    be PascalCase(first letter should be uppercase)</li>
            <li>3: We can directly import or we can directly write it using react.hookname
                <p>const[myName , setmyName]=React.useState("Horney Rider");</p></li>
            <li>4: Don't  call Hooks inside loops. conditions or nested functions, </li> 
            </div>

        </div>
    );
}

export default RulesHooks;
