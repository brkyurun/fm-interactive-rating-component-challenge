import star from "../../public/icon-star.svg";

interface ICardProps {
  ratings: string[];
}

export function Card({ ratings }: ICardProps): JSX.Element {
  return (
    <form className="card">
      <div className="star-wrapper">
        <img src={star} alt="" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="ratings-wrapper">
        {Array.isArray(ratings) &&
          ratings.map((rating) => (
            <li className="rating" key={rating}>
              {rating}
            </li>
          ))}
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
}
