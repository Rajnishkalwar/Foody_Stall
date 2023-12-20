import ResturantCard,{withPromotedLabel} from "./ResturantCard";
import resList from "../utilis/Data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";

const Body=()=>{
  const [ListofResturant,setListofResturant]=useState(resList);
  const [searchText,setSearchtext]=useState(""); 
  const ResturantCardPromoted =  withPromotedLabel(ResturantCard);

  useEffect(()=>{
    fetchData();

  },[]);
  const fetchData= async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9653506&lng=77.64930989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }
   const json= await data.json();
  setListofResturant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const onlinestatus = useOnlineStatus();
  if(onlinestatus===false)
  return(
<h1>
  Looks Like your are Offline!! Please check your Connection
</h1>);
  return ListofResturant.length === 0? (<Shimmer />):
(
    <div>
       <div className="m-3 p-3"> 
        <button className="px-4 py-1 bg-green-100 m-2 rounded-lg" onClick={()=>{
          const filtered=ListofResturant.filter(
            (res)=>res.info.avgRating> 4
          );
          setListofResturant(filtered);
          
        }}>Top rated Restuarant</button>

 </div>
     
     <div className="flex flex-wrap  ">
       {
         ListofResturant.map(
            (res)=>(
                <Link  key={res.info.id} to={"/resturant/"+ res.info.id } 
                style={{ listStyle: 'none', textDecoration: 'none', textDecorationColor: 'black'}}
                >
                  {res.info.promoted ?
                  (<ResturantCardPromoted resData={res}/>):
                  (<ResturantCard resData={res} />)}
                </Link>
            ))
       }
     </div>


    </div>
    );
};
export default Body;
