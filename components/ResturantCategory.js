import React, { useState } from 'react';
import ItemList from './ItemList';


const ResturantCategory = ({data,showItems,setshowIndex}) => {

  const handleClick=()=>{
     setshowIndex();
  }
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
            <div 
            className='flex justify-between cursor-pointer'
            onClick={handleClick}>
            <span className='font-bold'>{data.title} ({data.itemCards.length})</span>
            <span>𒃿 </span>
            </div>
            {showItems &&
            <ItemList items ={data.itemCards}/>
}
        </div>
    </div>
  )
}

export default ResturantCategory;