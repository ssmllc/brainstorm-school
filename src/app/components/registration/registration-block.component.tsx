"use client";
import React from "react";

const RegistrationBlock = ({
  primary = false,
  heading,
  text,
  faq,
}: {
  primary: boolean;
  heading: string;
  text?: string;
  faq?: boolean;
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {primary ? <h1>{heading}</h1> : <h2>{heading}</h2>}
      {text && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi
          qui est suscipit illum animi numquam aut accusantium provident
          perferendis iure consequuntur consectetur praesentium voluptate
          aspernatur aliquam et, harum dignissimos.
        </p>
      )}
      <button>Register Today</button>
      {faq && <p>FAQ</p>}
    </div>
  );
};

export default RegistrationBlock;
