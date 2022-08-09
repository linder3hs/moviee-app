import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("movieapp.shoppingcart")) ?? []
  );

  // que debemos guardar
  //* obj pelicula
  //* cantidad (como minimo 1)

  function saveInCart(movie, user_id) {
    const object = {
      movie,
      user_id,
      quantity: 1,
    };

    //* estamos diciendo que object se guarde en items en la posicion 0
    //* items[0] = object;
    //* Entonces la segunda vez items.length = 1
    //* items[1] = object;
    items[items.length] = object;
    setItems([...items]);
    saveInLocalStorage(items);
  }

  function saveInLocalStorage(items) {
    localStorage.setItem("movieapp.shoppingcart", JSON.stringify(items));
  }

  return (
    <ShoppingCartContext.Provider value={{ items, saveInCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
