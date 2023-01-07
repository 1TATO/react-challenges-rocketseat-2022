import { createContext, ReactNode, useState } from 'react';
import { produce } from 'immer';

interface CoffeeItem {
  id: number;
  name: string;
  image: string;
  price: number;
  coffeeQuantity: number;
}

interface CartContextType {
  cartItems: CoffeeItem[];
  totalOrderItemsPrice: number;
  addCoffeToCart: (coffe: CoffeeItem) => void;
  removeCoffeFromCart: (coffe: CoffeeItem) => void;
  increaseCoffeeQuantity: (id: number) => void;
  decreaseCoffeeQuantity: (id: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CoffeeItem[]>([]);

  const totalOrderItemsPrice = cartItems.reduce((totalPrice, cartItem) => {
    return totalPrice + cartItem.price * cartItem.coffeeQuantity;
  }, 0);

  function addCoffeToCart(coffee: CoffeeItem) {
    const isCoffeeInCart = cartItems.findIndex((item) => item.id === coffee.id);

    const newCart = produce(cartItems, (draft) => {
      if (isCoffeeInCart < 0) {
        draft.push(coffee);
      } else {
        draft[isCoffeeInCart].coffeeQuantity += coffee.coffeeQuantity;
      }
    });

    setCartItems(newCart);
  }

  function removeCoffeFromCart(coffee: CoffeeItem) {
    const newCart = produce(cartItems, (draft) => {
      const isCoffeeInCart = cartItems.findIndex(
        (item) => item.id === coffee.id
      );

      if (isCoffeeInCart >= 0) {
        draft.splice(isCoffeeInCart, 1);
      }
    });

    setCartItems(newCart);
  }

  function increaseCoffeeQuantity(id: number) {
    const cartWithUpdatedQuantity = produce(cartItems, (draft) => {
      const isCoffeeInCart = cartItems.findIndex((item) => item.id === id);

      if (isCoffeeInCart >= 0) {
        const coffeeItem = draft[isCoffeeInCart];

        draft[isCoffeeInCart].coffeeQuantity = coffeeItem.coffeeQuantity + 1;
      }
    });

    setCartItems(cartWithUpdatedQuantity);
  }

  function decreaseCoffeeQuantity(id: number) {
    const cartWithUpdatedQuantity = produce(cartItems, (draft) => {
      const isCoffeeInCart = cartItems.findIndex((item) => item.id === id);

      if (isCoffeeInCart >= 0) {
        const coffeeItem = draft[isCoffeeInCart];

        draft[isCoffeeInCart].coffeeQuantity = coffeeItem.coffeeQuantity - 1;
      }
    });

    setCartItems(cartWithUpdatedQuantity);
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalOrderItemsPrice,
        addCoffeToCart,
        removeCoffeFromCart,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
