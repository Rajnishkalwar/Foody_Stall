import React from 'react';
import { CDN_IMG } from '../utilis/Links';
import { useDispatch } from 'react-redux';
import { additem } from '../utilis/cartSlice';
// import { useSelector } from "react-redux";

const ItemList = ({items}) => {
//   const cartItems =useSelector(
//     (store)=>store.cart.items
// );

 const dispatch=useDispatch();
 const handleAddItem=(item)=>{
    dispatch(additem(item));
 };


  return (
    <div>
{ items.map((item)=>(
    <div
    key={item.card.info.id}
    className='p-2 m-2 border border-grey-200  border-b-4  flex justify-between text-left'
    >
     
       <div className='w-9/12'>
       <div className='py-2'>
            
            <span>{item.card.info.name}</span>
            <span>
                -₹{item.card.info.price/100}</span>
        </div>
        <p className='test-xls'>{item.card.info.description}</p>
       </div>
       <div className='w-3/12 p-4'>
        <img src={CDN_IMG + item.card.info.imageId} />
        <div className='absolute right-[460px] '>
        <button className='p-2   bg-black text-white rounded-md x-16 absolute bottom-1 right-3'
          onClick={()=>handleAddItem(item)} 
           
           >Add+</button>
        </div>
       </div>
       
    </div>
))}
    </div>
  )
}

export default ItemList;