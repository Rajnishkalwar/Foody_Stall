import { useEffect, useState } from "react";
import { MENU_LINK } from "./Links";

const useResturantMenu=(resId)=>{
    const [resInfo,setResinfo]=useState(null); 
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async ()=>{
        const data= await fetch(MENU_LINK+resId);
        const json= await data.json();
        setResinfo(json.data);
    }
    return resInfo;
}
export default useResturantMenu;