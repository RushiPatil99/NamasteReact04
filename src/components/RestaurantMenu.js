import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //   const params = useParams();
  const { resId } = useParams();
  //   console.log(params);
  useEffect(() => {
    fetchMenu();
  }, []);

  // empty dependency array to run only once on mount

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  console.log(itemCards);

  if (resInfo === null) return <ShimmerComponent />;
  {
    return (
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.join(" , ")} - {costForTwoMessage}
        </p>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
          {/* <li>{itemCards[0]?.card?.info?.name}</li>
          <li>{itemCards[1]?.card?.info?.name}</li>
          <li>{itemCards[2]?.card?.info?.name}</li> */}
          <li>Burger</li>
          <li>Diet Coke</li>
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
