import React, { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef();
  const count = useRef(1);

  const handleClick = () => {
    inputRef.current.focus();
    console.log("inputref.current", inputRef.current);
  };

  useEffect(() => {
    setTimeout(() => {
      count.current = 300;
    }, 3000);
  });
  return (
    <>
      Foco: <input ref={inputRef} />
      <button onClick={handleClick}>Focar</button>
    </>
  );
}

export default App;
