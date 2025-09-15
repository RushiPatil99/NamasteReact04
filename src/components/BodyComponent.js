import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";

// import resList from "../utils/mockData";
//not using keys(not acceptable) <<<<< index as key is not recommended <<<< unique id(best practice )

const BodyComponent = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); // <-- new state
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const json = await data.json();
      console.log(json);
      const restaurants =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(restaurants);
      setAllRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      setListOfRestaurants([]);
      setAllRestaurants([]);
    }
  };
  console.log("BodyComponent Rendered");

  //   if (ListOfRestaurants.length === 0) {
  //     return <ShimmerComponent />; // Show shimmer effect while loading
  //   }
  return ListOfRestaurants.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-button">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              //filter the restaurant cards and update the UI
              //searchText
              //   console.log(searchText);
              const filteredRestaurants = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filteredRestaurants);
              console.log(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = ListOfRestaurants.filter(
              (res) => parseFloat(res.info.avgRating) > 4.4
            );
            setListOfRestaurants(FilteredList);
            // console.log($(` FilteredList~`), FilteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info ? restaurant.info.id : restaurant.id}
            to={`/restaurants/${
              restaurant.info ? restaurant.info.id : restaurant.id
            }`}
          >
            <RestaurantCard
              key={restaurant.info ? restaurant.info.id : restaurant.id}
              resData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;
