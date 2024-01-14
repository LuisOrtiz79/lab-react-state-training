import maxence from "../assets/images/maxence.png";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import { useState } from "react";

const ClickablePicture = () => {
  const [isGlassesVisible, setIsGlassesVisible] = useState(false);

  const handleClick = () => {
    setIsGlassesVisible(!isGlassesVisible);
  };

  return (
    <div>
      <img src={isGlassesVisible ? maxenceGlasses : maxence} onClick={handleClick} />
    </div>
  )
}

export default ClickablePicture;
