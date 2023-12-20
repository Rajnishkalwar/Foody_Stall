import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_LINK } from "../utilis/Links";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utilis/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const RestMenuPage=()=>{
    const {resId}= useParams();
    resInfo=useResturantMenu(resId);
    const[showIndex,setshowIndex]=useState(0);
    if (resInfo === null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    const category=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
        c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
        return(
        <div className="text-center">
        <h2 className="font-bold my-6 text-2xl">{name}</h2>
        <p className="font-bold text-lg">{cuisines.join(', ')} - {costForTwoMessage}</p>
      {
          category.map((category,index) => (
            <ResturantCategory key={category?.card?.card?.title}
             data={category?.card?.card}
             showItems={index===showIndex ? true:false}
             setshowIndex={()=>setshowIndex(index)}/> 
          ))
      }
        </div>
    )
};
export default RestMenuPage;