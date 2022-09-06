import React from "react";

export const DisplayData = (props) => {
  return (
    <>
      {props.data.map((item) => {
        return (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h3>{item.name} - </h3>
            <h3> - {item.city}</h3>
          </div>
        );
      })}
    </>
  );
};

export default DisplayData;
