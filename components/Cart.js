import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utilis/cartSlice';

const Cart = () => {
    const cartItems =useSelector(
        (store)=>store.cart.items
    );
    const dispatch=useDispatch();
    const handleClearitems=()=>{
        dispatch(clearCart())
    };



  return (
    <div className=' text-center   p-4 m-4'>
        <button className='p-2 m-2 bg-black text-white rounded-md'
        onClick={handleClearitems}> Clear cart</button>
        { cartItems.length===0 && <h1>Please Add items to Cart</h1>}
        <div className='w-6/12  m-auto'>
            <ItemList items={cartItems}/>
        </div>


    </div>
  )
}

export default Cart;