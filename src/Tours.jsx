import React from "react";
import Tour from "./Tour";
//render tours: map over the tour array and render a Tour comp for each tour.

export default function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          console.log(tour);
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}
