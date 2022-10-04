import React, { useState } from "react";
const FilterBar = ({
  categories,
  handleFilterName,
  handleFilterType,
  handleFilterDate,
  handleFilterRange,
  handleFilterCountry,
  countries,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    type: "",
    from: "",
    to: "",
    range: "",
    country: "",
  });
  const handleInput = (field) => (event) => {
    const { value } = event.target;
    setFilters({
      ...filters,
      [field]: value,
    });
    switch (field) {
      case "name":
        handleFilterName(value);
        break;
      case "type":
        handleFilterType(value);
        break;
      case "from":
        handleFilterDate(value, "from");
        break;
      case "to":
        break;
      case "range":
        handleFilterRange(value);
        break;
      case "country":
        handleFilterCountry(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="filter">
      <div className="input-container">
        <div className="input">
          <label htmlFor="name-search">Search Name</label>
          <input
            type="text"
            placeholder="Search..."
            value={filters.name}
            onChange={handleInput("name")}
          />
        </div>

        <div className="dropdown">
          <label htmlFor="category">Type</label>
          <select className="category" id="type" onChange={handleInput("type")}>
            {categories.map((category, index) => {
              return (
                <option value={category} key={index}>
                  {" "}
                  {category}{" "}
                </option>
              );
            })}
          </select>

          <label htmlFor="country">Country</label>
          <select
            className="country"
            id="country"
            onChange={handleInput("country")}
          >
            {countries.map((country, index) => {
              return (
                <option value={country} key={index}>
                  {" "}
                  {country}{" "}
                </option>
              );
            })}
          </select>
        </div>

        <div className="date">
          <label htmlFor="startDate">Move-in Date</label>
          <input
            type="date"
            className="date-pick"
            id="startDate"
            onChange={handleInput("from")}
          />

          <label htmlFor="price-range">Price range</label>
          <select
            className="price-range"
            id="range"
            onChange={handleInput("range")}
          >
            <option value="select" key={3}>
              All
            </option>
            <option value="lowest" key={0}>
              $2000 - $3000
            </option>
            <option value="mid" key={1}>
              $3000 - $5000
            </option>
            <option value="highest" key={2}>
              $5000 - $6500
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
