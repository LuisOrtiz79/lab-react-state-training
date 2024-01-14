import { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleCount1 = () => {
    let sum = count + 1;
    setCount(sum);
  }

  const handleCount2 = () => {
    let sum = count1 + 1;
    setCount1(sum);
  }

  return (
    <div>
        <button onClick={handleCount1}>{count} Likes</button>
        <button onClick={handleCount2}>{count1} Likes</button>
      
    </div>
  )
}

export default LikeButton;
