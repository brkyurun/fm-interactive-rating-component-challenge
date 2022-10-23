import { FormEvent, useState } from "react";
import { Card } from "./components/Card";

const mockRatings = ["1", "2", "3", "4", "5"];

function App() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleClick(rating: number | string) {
    setSelectedRating(+rating);
    console.log(selectedRating);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>
      {!isSubmitted ? (
        <Card
          ratings={mockRatings}
          selectedRating={selectedRating}
          variant="ratingCard"
          onClick={handleClick}
          onSubmit={handleSubmit}
        />
      ) : (
        <Card
          ratings={mockRatings}
          selectedRating={selectedRating}
          variant="thanksCard"
          onClick={handleClick}
          onSubmit={handleSubmit}
        />
      )}
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
