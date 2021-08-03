import React, { useContext } from "react";
import { ThemeContex } from "./Theme";
import Form from "./Form";

function Card() {
  const theme = useContext(ThemeContex);
  console.log(theme)


  return (
    <div style={{ padding: "50px" }}>
      <Form theme={theme} />
      <button style={{ background: theme.background, color: theme.color }}>
        Card Button
      </button>
    </div>
  );
}

export default Card;
