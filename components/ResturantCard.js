import {CDN_IMG} from "../utilis/Links";

const ResturantCard=(props)=>{
    const{resData}=props;
    const{name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info;
    const {deliveryTime}=resData?.info.sla;
    return(
       <div className="w-[208px] h-[390px] m-4 p-4 bg-green-100 rounded-lg">
        <img  className="rounded-lg h-[160px] w-[225px]" src={CDN_IMG + cloudinaryImageId}></img>
        <h2 className="font-bold py-4 text-lg" >{name}</h2>
        <h4 className="break-words text-ellipsis ">Cusinies:{cuisines.join(",")}</h4>
        <h3>Rating:{avgRating}</h3>
        <h4>Rs {costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
       </div>
    )
  
  };
  //Higher Order Component
  // input-resturant card=>promoted resturant Card
  export const withPromotedLabel=(ResturantCard)=>{
   return(props)=>{
      return(
         <div>
            <label>Promoted</label>
            <ResturantCard {...props}/>
         </div>
      )
   };
  };
  export default ResturantCard;