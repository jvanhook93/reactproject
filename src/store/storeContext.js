import React from "react";
import { createContext } from 'react';

const StoreContext = createContext({
    cart: {},
    user: {},

    addToCart = () => {


        return addToCart;
    },
    removeFromCart = () => {},


});

export default StoreContext;