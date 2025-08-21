import { createContext, useContext, useEffect, useState } from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../services/localstorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    getFromLocalStorage("cartItems") || []
  );

  useEffect(() => {
    saveToLocalStorage("cartItems", cartItems);
  }, [cartItems]);

  const addToCart = (product) => {
    const exist = cartItems.find(
      (item) => item.id_produk === product.id_produk
    );

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id_produk === product.id_produk
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCartItems(cartItems.filter((item) => item.id_produk !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id_produk === id ? { ...item, qty } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id_produk !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems"); // agar localStorage ikut kosong
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQty, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
