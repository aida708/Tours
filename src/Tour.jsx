import React, { useState } from "react";

export default function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  console.log(info.substring(0, 10));

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>

        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          type="button"
          className="info-btn"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "" : "Read more"}
        </button>

        <button
          type="button"
          className="btn btn-block delete"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}
