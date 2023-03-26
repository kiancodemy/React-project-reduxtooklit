import { useState } from "react";
import './Animal.css';
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svg = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  heart: heart,
  horse: horse,
};

function AnimalShow({ type }) {
  const [click, setclick] = useState(0);

  const hand = () => {
    setclick(click + 1);
  };
  return (
    <div className="animal-show" onClick={hand}>
      <img className="animal" src={svg[type]} alt="salam"></img>
      <img
        className="heart"
        alt="bye"
        src={heart}
        style={{ width: 10 + 10 * click + "px" }}
      ></img>
    </div>
  );
}

export default AnimalShow;
