import {useDispatch} from "react-redux"

import {increaseQty, decreaseQty, removeFromCart} from "../features/Cart/CartSlice.js";


export default function CartItem({item}){

    const dispatch = useDispatch();
    

    return (
        <div className ="space-y-3 border rounded-md p-4">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.quantity}</p>

           <div className ="flex items-center gap-2">
                 <button onClick ={()=> dispatch(decreaseQty(item.id))}>-</button>
              <button onClick = {() => dispatch(increaseQty(item.id))}>
                +
            </button>
       
            
           </div>
           <button onClick ={()=> dispatch(removeFromCart(item.id))} className ="border-none p-2 rounded-md bg-red-500 text-white text-sm">remove</button>
        </div>
    )

}