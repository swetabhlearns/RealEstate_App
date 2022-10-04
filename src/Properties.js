import React, { useState } from "react";
import Property from "./Property";

const Properties = ({ items }) => {
  return (
    <section>
      <div className="map">
        {items.map((item) => {
          return <Property key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Properties;
