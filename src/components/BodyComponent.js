import RestaurantCard from "./RestaurantCard";
//not using keys(not acceptable) <<<<< index as key is not recommended <<<< unique id(best practice )
const resList = [
  {
    id: "671928",
    name: "KFC",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
    locality: "7th Block",
    areaName: "Koramangla",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "5.3K+",
    sla: {
      deliveryTime: 16,
      lastMileTravel: 1.2,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 02:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/big_rx.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹69",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "59627",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "ntjshqsv2k7vxtv7vmib",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹251 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.3,
    parentId: "4961",
    avgRatingString: "4.3",
    totalRatingsString: "18K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 03:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/big_rx.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.3",
        ratingCount: "2.0K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "18973",
    name: "Nandhana Palace",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
    locality: "Koramangala",
    areaName: "Koramangala",
    costForTwo: "₹500 for two",
    cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
    avgRating: 4.4,
    parentId: "2120",
    avgRatingString: "4.4",
    totalRatingsString: "40K+",
    sla: {
      deliveryTime: 14,
      lastMileTravel: 0.5,
      serviceability: "SERVICEABLE",
      slaString: "10-15 mins",
      lastMileTravelString: "0.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 02:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/rx_5_10_min.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Biryani.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/rx_5_10_min.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Biryani.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.3",
        ratingCount: "9.5K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "158855",
    name: "Candice's Gourmet Sandwiches & Wraps",
    cloudinaryImageId: "d1331113564b015c9d55c48ff48a2553",
    locality: "5th Block",
    areaName: "Koramangala",
    costForTwo: "₹600 for two",
    cuisines: ["Salads", "sandwich", "Snacks"],
    avgRating: 4.6,
    parentId: "465403",
    avgRatingString: "4.6",
    totalRatingsString: "4.3K+",
    sla: {
      deliveryTime: 17,
      lastMileTravel: 0.2,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "0.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-15 23:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/rx_5_10_min.png",
          description: "bolt!",
        },
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/rx_5_10_min.png",
              },
            },
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "352791",
    name: "Grameen Kulfi",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/74dd7e20-7278-44bf-84f4-e79cad39ca67_352791.jpg",
    locality: "8th Block",
    areaName: "Koramangala",
    costForTwo: "₹120 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.8,
    veg: true,
    parentId: "12175",
    avgRatingString: "4.8",
    totalRatingsString: "911",
    sla: {
      deliveryTime: 15,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-15 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹109",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "718430",
    name: "The Pizza Bakery - Wood Fired Sourdough",
    cloudinaryImageId: "0335dd45be555d0a4187255e57d2ca88",
    locality: "BTM Layout",
    areaName: "Koramangala",
    costForTwo: "₹700 for two",
    cuisines: [
      "Pizzas",
      "Pastas",
      "Italian",
      "Desserts",
      "Continental",
      "Beverages",
    ],
    avgRating: 4.5,
    parentId: "522292",
    avgRatingString: "4.5",
    totalRatingsString: "2.6K+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 1.6,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-16 23:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/big_rx.png",
              },
            },
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "390057",
    name: "NH1 Bowls - Highway To North",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/b1e9f652-dc8d-4789-9710-6485ec06846e_390057.jpg",
    locality: "6th Block",
    areaName: "Koramangala",
    costForTwo: "₹250 for two",
    cuisines: ["North Indian", "Punjabi", "Home Food"],
    avgRating: 4.6,
    parentId: "22452",
    avgRatingString: "4.6",
    totalRatingsString: "1.3K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 0.5,
      serviceability: "SERVICEABLE",
      slaString: "20-30 mins",
      lastMileTravelString: "0.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-08-17 02:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "android/static-assets/icons/big_rx.png",
          description: "bolt!",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "bolt!",
                imageId: "android/static-assets/icons/big_rx.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹100",
      discountCalloutInfo: {
        message: "Free Delivery",
        logoCtx: {
          logo: "v1655895371/free_delivery_logo_hqipbo.png",
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];
const BodyComponent = () => (
  <div className="body">
    <div className="search">search</div>
    <div className="res-container">
      {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  </div>
);
export default BodyComponent;
