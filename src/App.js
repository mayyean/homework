import React from "react";
import Input from "./components/Input";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";

function App() {
  let stylesArr = [
    {
      width: "300px",
      height: "150px",
      backgroundColor: "red",
    },
    { width: "250px", height: "100px", backgroundColor: "darkred" },
    { width: "280px", height: "130px", backgroundColor: "green" },
    { width: "320px", height: "170px", backgroundColor: "black" },
  ];

  let cardObj = {
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    alt: "",
  };

  return (
    <>
      <Input />
      <Boxes stylesArr={stylesArr} />
      <Card cardObj={cardObj}>
        <Avatar />
      </Card>
      <Counter />
    </>
  );
}

export default App;
