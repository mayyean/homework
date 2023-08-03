import { useState } from "react";
const Input = () => {
  const [text, setText] = useState("");
  return (
    <>
      <h1>{text}</h1>
      <input type="text" onChange={(event) => setText(event.target.value)} />
    </>
  );
};
export default Input;
