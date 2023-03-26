import { useState } from "react";
import "./App.css";
import AnimalShow from "./AnimalShow";

function getanimal() {
  const animal = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animal[Math.floor(Math.random() * animal.length)];
}

function App() {
  const [animal, setanimal] = useState([]);
  const hand = () => {
    setanimal([...animal, getanimal()]);
  };

  const render = animal.map((value, index) => {
    return <AnimalShow type={value} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={hand}>Add animal</button>
      <div className="animal-list">{render}</div>
    </div>
  );
}

export default App;
