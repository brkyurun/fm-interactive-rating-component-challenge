import { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card />
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.github.com/brkyurun">Berkay Urun</a>.
      </div>
    </div>
  );
}

export default App;
