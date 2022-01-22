import { useState } from "react";

const initialState = {
  cart: [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (product) => {
    setState({ ...state, cart: [...state.cart, product] });
  };

  const removeToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id != payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeToCart,
  };
};
