import React from "react";
import "../styling/Amazon.css";
import list from "../Data";
import Cards from "./Cards";

const Amazon = (props) => {
  return (
    <section>
      {list.map((item) => (
        <Cards items={item} key={item.id} handleClick={props.handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
