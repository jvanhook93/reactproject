import React from "react";
import { createContext } from 'react';
import addToCart from './globalState.jsx';

const StoreContext = createContext({
    cart: {},
    user: {},

    addToCart: () => {


        return addToCart;
    },
    removeFromCart: () => {},


});

export default StoreContext;