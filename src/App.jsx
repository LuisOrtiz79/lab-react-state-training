import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      {/* Iteration #1 */}
      <LikeButton />

      <br />

      {/* Iteration #2 */}
      <Counter />
      
      <br />

      {/* Iteration #3 */}
      <ClickablePicture />

      <br />

      {/* Iteration #4 */}
      <Dice />
    </div>
  );
}

export default App;
