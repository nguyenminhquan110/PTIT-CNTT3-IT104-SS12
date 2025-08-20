import React from "react";
import ColorBox from "./ColorBox";

const Ex4: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ColorBox color="red" />
      <ColorBox color="blue" />
      <ColorBox color="green" />
    </div>
  );
};

export default Ex4;
