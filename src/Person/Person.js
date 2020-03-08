import React from "react";
import Radium from "radium";
import "./Person.css";

var person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "425px"
    }
  };
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} yrs old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.value} />
    </div>
  );
};

export default Radium(person);
