import React from "react";

export default function Input(props) {
  return (
    <p>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type="number"
        name={props.id}
        id={props.id}
        onChange={props.changeHandeler}
        value={props.value}
        required
      />
    </p>
  );
}
