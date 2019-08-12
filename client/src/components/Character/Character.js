import React from "react";

const Character = props => {
  return (
    <section className="character">
      <img src={props.img} alt="" />
    </section>
  );
};

export default Character;
