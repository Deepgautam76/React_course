import React from "react";
import ReactDOM from "react-dom/client";


import "./index.css";

// Data of the cart
const data = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "508825",
          name: "Pizza Galleria",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/12/4f9dc5bb-b355-429c-8b6a-b783dfd91987_b70156d6-7ab2-4c99-9a39-344554628363.jpg",
          locality: "C- Block",
          areaName: "West Patel Nagar",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Italian"],
          avgRating: 4.2,
          veg: true,
          parentId: "6557",
          avgRatingString: "4.2",
          totalRatingsString: "2.7K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 0.4,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-18 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=508825&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "40019",
          name: "The Laalten",
          cloudinaryImageId: "b1f6a791e2f53236e6f32e88406dc723",
          locality: "Kamla Nagar",
          areaName: "Kamla Nagar",
          costForTwo: "₹200 for two",
          cuisines: ["Chinese", "Italian"],
          avgRating: 3.5,
          parentId: "16643",
          avgRatingString: "3.5",
          totalRatingsString: "333",
          promoted: true,
          adTrackingId:
            "cid=25061628~p=9~adgrpid=25061628#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=40019~eid=9ac0023c-e072-41d8-97d8-1c5e9c07b9fa~srvts=1739816470124~collid=83631",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 5.8,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-17 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.7",
              ratingCount: "312",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "25061628",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=40019&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "952837",
          name: "MOJO Pizza - 2X Toppings",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/12/28/8355ca9b-9b73-4649-956f-8bb46d0cfb08_985d62b9-9746-41cc-a007-796735b2aec3.jpg",
          locality: "West Patel Nagar",
          areaName: "Patel Nagar",
          costForTwo: "₹250 for two",
          cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
          avgRating: 4.6,
          parentId: "11329",
          avgRatingString: "4.6",
          totalRatingsString: "133",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 0.2,
            serviceability: "SERVICEABLE",
            slaString: "20-30 mins",
            lastMileTravelString: "0.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-18 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=952837&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "510831",
          name: "Mr Singh Pizzeria",
          cloudinaryImageId: "hzqppn3w44bggw3svalw",
          locality: "Rajouri Garden",
          areaName: "Rajouri Garden",
          costForTwo: "₹450 for two",
          cuisines: ["Pizzas", "Italian", "Sandwich"],
          avgRating: 4,
          parentId: "520387",
          avgRatingString: "4.0",
          totalRatingsString: "1.3K+",
          promoted: true,
          adTrackingId:
            "cid=24869420~p=10~adgrpid=24869420#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=510831~eid=b4502b85-87a1-46cf-9d83-4b60dcafa926~srvts=1739816470124~collid=83631",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-17 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹139",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "112",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "24869420",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=510831&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "949752",
          name: "Pluto Pizza",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/14/287abc09-397e-4bc4-b34c-e395075dbce7_f65dc298-0632-442f-b954-8a3dbb4fc6cf.jpg_compressed",
          locality: "BLOCK-B",
          areaName: "New Rajinder Nagar",
          costForTwo: "₹600 for two",
          cuisines: ["Italian", "Pizzas"],
          avgRating: 4.3,
          parentId: "556180",
          avgRatingString: "4.3",
          totalRatingsString: "233",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-18 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=949752&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "818349",
          name: "Pizzaro",
          cloudinaryImageId: "0d54466b84e544a8248eeaf963493c42",
          locality: "GTB Nagar",
          areaName: "KAMLA NAGAR",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Pastas", "Fast Food"],
          avgRating: 3.8,
          parentId: "487695",
          avgRatingString: "3.8",
          totalRatingsString: "197",
          promoted: true,
          adTrackingId:
            "cid=25219550~p=11~adgrpid=25219550#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=818349~eid=41ba4dc8-9010-4e11-849d-e7258b2f936b~srvts=1739816470124~collid=83631",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 6.8,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-18 03:15:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹150",
            discountTag: "SAVE BIG",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
          campaignId: "25219550",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=818349&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "53774",
          name: "Pizza Hut",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          locality: "Tagore Market",
          areaName: "Kirti Nagar",
          costForTwo: "₹350 for two",
          cuisines: ["Pizzas"],
          avgRating: 4.3,
          parentId: "721",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-18 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Pizza.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Pizza.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=53774&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "65776",
          name: "Paparizza - Woodfired Pizzas",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/6/e266e7af-5d7f-41de-8c7e-14ccca2f7f78_65776.jpg",
          locality: "Hudson Lane\t",
          areaName: "Hudson Lane",
          costForTwo: "₹450 for two",
          cuisines: ["Pizzas", "Italian", "Continental"],
          avgRating: 4.2,
          parentId: "13711",
          avgRatingString: "4.2",
          totalRatingsString: "16K+",
          promoted: true,
          adTrackingId:
            "cid=24861104~p=12~adgrpid=24861104#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=65776~eid=34e806c4-92cc-4fe5-81a6-e77ae8f6b551~srvts=1739816470124~collid=83631",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 7.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "7.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-18 04:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
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
                      imageId:
                        "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹399",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
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
              ratingCount: "3.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "24861104",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=65776&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "952836",
          name: "LeanCrust Pizza- ThinCrust Experts",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/11/7/51bedbe7-34c0-4864-9adf-35f46cdc8da5_ed2844e7-aa5c-429d-9995-9f874bd80534.jpg",
          locality: "West Patel Nagar",
          areaName: "Patel Nagar",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Italian", "Desserts"],
          avgRating: 4.6,
          parentId: "11216",
          avgRatingString: "4.6",
          totalRatingsString: "108",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 0.2,
            serviceability: "SERVICEABLE",
            slaString: "20-30 mins",
            lastMileTravelString: "0.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-02-18 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=952836&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

// Header component of app
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/12/4f9dc5bb-b355-429c-8b6a-b783dfd91987_b70156d6-7ab2-4c99-9a39-344554628363.jpg"
          alt="Logo image"
        />
      </div>
      <div className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </div>
    </div>
  );
};

// This is the card component
const RestaurantCart = (prop) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = prop?.cardData?.info;
  return (
    <div className="restaurent-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          cloudinaryImageId
        }
        alt="Food Image"
        className="restaurant-image"
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} </h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} </h4>
    </div>
  );
};

// Body component of the app
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input 
        type="text" 
        placeholder="Search here food or reataurant" />
        <span>Enter food or restaurant name </span>
      </div>
      <div className="res-container">
        {data.map((item) => (
          <RestaurantCart
            key={item.card.card.info.id}
            cardData={item.card.card}
          />
        ))}
      </div>
    </div>
  );
};


// Main component
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App />);
