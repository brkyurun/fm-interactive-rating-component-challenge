import { FormEvent } from "react";
import star from "../../public/icon-star.svg";
import illustration from "../../public/illustration-thank-you.svg";

interface ICardProps {
  ratings: string[];
  selectedRating: number | null;
  variant: "ratingCard" | "thanksCard";
  onClick: (rating: string | number) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function Card({
  ratings,
  selectedRating,
  variant = "ratingCard",
  onClick,
  onSubmit,
}: ICardProps): JSX.Element {
  if (variant === "ratingCard") {
    return (
      <form className="card" onSubmit={onSubmit}>
        <div className="star-wrapper">
          <img src={star} alt="" />
        </div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="ratings-wrapper">
          {Array.isArray(ratings) &&
            ratings.map((rating) => (
              <li
                className={
                  selectedRating === +rating ? "rating selected" : "rating"
                }
                key={rating}
                onClick={() => onClick(rating)}
              >
                {rating}
              </li>
            ))}
        </ul>
        <button type="submit">Submit</button>
      </form>
    );
  } else {
    return (
      <div className="card">
        <div className="illustration-wrapper">
          <img src={illustration} alt="" />
        </div>
        <p className="selection-report">
          You selected {selectedRating} out of 5
        </p>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    );
  }
}
