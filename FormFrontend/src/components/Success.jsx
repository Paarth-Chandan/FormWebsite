import React from "react";
import { useParams } from "react-router-dom";

const Success = () => {
  const { name } = useParams();
  return (
    <div className="head">
      <h1>Hooray! {name}</h1>
      <h1>You are successfully logged in</h1>
    </div>
  );
};

export default Success;
