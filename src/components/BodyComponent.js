import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
//not using keys(not acceptable) <<<<< index as key is not recommended <<<< unique id(best practice )

const BodyComponent = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = ListOfRestaurants.filter(
              (res) => res.avgRating > 4.5
            );
            setListOfRestaurants(FilteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;
