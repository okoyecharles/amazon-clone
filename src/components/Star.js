import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Star({ text }) {
  return text === "BsStarFill" ? <BsStarFill /> : text === "BsStarHalf" ? <BsStarHalf /> : <BsStar />;
}

export default Star;
