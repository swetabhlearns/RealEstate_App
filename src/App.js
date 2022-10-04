import { useState } from "react";
import dayjs from "dayjs";
import "./App.css";
import items from "./data";
import Properties from "./Properties";
import NavBar from "./NavBar";
import FilterBar from "./FilterBar";
const allCategories = ["All", ...new Set(items.map((item) => item.type))];
const allCountries = ["All", ...new Set(items.map((item) => item.country))];

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);

function App() {
  const [propertyItems, setPropertyItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [countries, setCountries] = useState(allCountries);

  const handleFilterName = (name) => {
    const filteredData = items.filter((item) => {
      if (item.name.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setPropertyItems(filteredData);
  };
  const handleFilterType = (type) => {
    if (type === "All") {
      console.log(items);
      setPropertyItems(items);
      return;
    }
    const filteredData = items.filter((item) => {
      if (item.type === type) {
        return items;
      }
    });
    setPropertyItems(filteredData);
  };

  const handleFilterCountry = (country) => {
    if (country === "All") {
      console.log(items);
      setPropertyItems(items);
      return;
    }
    const filteredData = items.filter((item) => {
      if (item.country === country) {
        return items;
      }
    });

    setPropertyItems(filteredData);
  };
  const handleFilterDate = (date, field) => {
    const filteredData = items.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setPropertyItems(filteredData);
  };

  const handleFilterRange = (range) => {
    const filteredData = items.filter((item) => {
      if (range === "lowest" && item.price < 3000) {
        return item;
      } else if (range === "mid" && item.price > 3000 && item.price < 5000) {
        return item;
      } else if (range === "highest" && item.price > 5000) {
        return item;
      } else if (range === "select" && item.price < 6500) {
        return item;
      }
    });
    setPropertyItems(filteredData);
  };

  return (
    <main>
      <NavBar />
      <article className="menu section">
        <section>
          <FilterBar
            categories={categories}
            handleFilterName={handleFilterName}
            handleFilterType={handleFilterType}
            handleFilterDate={handleFilterDate}
            handleFilterRange={handleFilterRange}
            handleFilterCountry={handleFilterCountry}
            countries={countries}
          />
          <Properties items={propertyItems} />
        </section>
      </article>
    </main>
  );
}

export default App;
