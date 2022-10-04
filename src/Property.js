import React from "react";

const Property = ({
  id,
  img,
  name,
  country,
  address,
  price,
  bathroom,
  bed,
  area,
}) => {
  return (
    <article key={id} className="single-tour">
      <img src={img} alt="type" />
      <footer>
        <h4 className="tour-price">
          {" "}
          <span>${price}</span> <div className="month">/month</div>
        </h4>
        <div className="tour-info">
          <h3> {name} </h3>
        </div>
        <div className="tour-loc">{address}</div>
        <div className="tour-desc">
          <h4>{bed} Beds</h4>
          <h4>{bathroom} Bathrooms</h4>
          <h4>
            {area} m<sup>2</sup>
          </h4>
        </div>
      </footer>
    </article>
  );
};

export default Property;
