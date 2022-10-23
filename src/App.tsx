import React, { useState } from "react";
import { Card } from "./components/Card";

const mockRatings = ["1", "2", "3", "4", "5"];

function App() {
  return (
    <>
      <Card ratings={mockRatings} variant="ratingCard" />
      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://www.github.com/brkyurun">Berkay Urun</a>.
      </div>
    </>
  );
}

export default App;
