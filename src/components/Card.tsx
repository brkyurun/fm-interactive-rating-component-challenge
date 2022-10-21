import star from "../../public/icon-star.svg";

export function Card(): JSX.Element {
  return (
    <form className="card">
      <img src={star} alt="" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="stars">
        <li className="star">1</li>
        <li className="star">2</li>
        <li className="star">3</li>
        <li className="star">4</li>
        <li className="star">5</li>
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
}
