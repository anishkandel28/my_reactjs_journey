import React, {useState} from 'react';

const HookChallengeObj = () => {
  const [myObjs, setMyObjs] = useState([
    { id: 1, myName: "Anish", myAge: 25, myDegree: "MIT", myRoll: 1 },
    { id: 2, myName: "Kandel", myAge: 26, myDegree: "MSC", myRoll: 1 },
  ]);

  const changeObj = () => {
    // Find the object with ID 1 and update the 'myName' property
    const updatedObjs = myObjs.map(obj => {
      if (obj.id === 1) {
        return { ...obj, myName: "Shree" };
      }
      return obj;
    });
    setMyObjs(updatedObjs);
  };

  const handleRemove = (id) => {
    const updatedObjs = myObjs.filter(obj => obj.id !== id);
    setMyObjs(updatedObjs);
  };

    return (
        <div className="container">
      <h1>UseState Object Prac</h1>
      {myObjs.map(obj => (
        <div key={obj.id}>
          <h1>
            Name: {obj.myName} & Age: {obj.myAge} & Degree: {obj.myDegree}
            <button className="btn btn-warning" onClick={() => handleRemove(obj.id)}>Remove</button>
          </h1>
        </div>
      ))}
      <button className="btn btn-primary" onClick={changeObj}>Update</button>
    </div>
    );
}

export default HookChallengeObj;
