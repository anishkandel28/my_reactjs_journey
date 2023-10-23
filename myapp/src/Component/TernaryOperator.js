import React from 'react';

const TernaryOperator = () => {
    const isRaining=(true);
    const weather=isRaining ? "Bring and umbrella" : "Leave the umbrella at home"
    console.log("let's go", weather)
    return (
        <div>
            Hi let me learn ternary Operator
        </div>
    );
}

export default TernaryOperator;

//Ternary operator is a concise way to write conditional 
//statements in many programming languages, including Javascript.
//It's often used when you want to assign a value to a variable or
//return a value based on a condition

// condition ? expressionIfTrue : expressionIfFalse

//if the condition is true, the expression immediately after the `?` is executed 
//else the expression immediately after the `:` is executed 
