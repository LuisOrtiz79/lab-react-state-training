import { useState, useEffect } from "react";
import emptyDice from "../assets/images/dice-empty.png";

const Dice = () => {
  const [dice, setDice] = useState(emptyDice);

  const getRandomDice = () => {
    const diceImages = ['../assets/images/dice1.png', '../assets/images/dice2.png', '../assets/images/dice3.png', 
                         '../assets/images/dice4.png', '../assets/images/dice5.png', '../assets/images/dice6.png'];
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    return diceImages[randomIndex];
  };

  let timeoutId;

  const changeDice = () => {
    const randomDice = getRandomDice();
    setDice(randomDice);
  };

  const handleTouchStart = () => {
    timeoutId = setTimeout(changeDice, 1000);
  };

  const handleTouchEnd = () => {
    clearTimeout(timeoutId);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className="dice-img" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <img src={dice} alt="Dice"  height={'100vh'} width={'100vw'}/>
    </div>
  );
};

export default Dice;
