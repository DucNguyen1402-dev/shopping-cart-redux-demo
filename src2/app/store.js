import {configureStore} from "react-redux";
import cartReducer from "../features/cart/CartSlice.js";


export const store = configureStore({
    reducers:{
        cart: cartReducer,
    }
});







