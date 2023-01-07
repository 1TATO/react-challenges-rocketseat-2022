import { useContext } from 'react';
import { priceFormat } from '../../../../utils/priceFormat';

import { QuantityInput } from '../../../../components/QuantityInput';

import { CartContext } from '../../../../contexts/CartContext';

import { Trash } from 'phosphor-react';
import { OrderItemContainer, ButtonsContainer, RemoveItem } from './styles';

interface CoffeeItemData {
  id: number;
  name: string;
  image: string;
  price: number;
  coffeeQuantity: number;
}

interface CoffeeProps {
  coffee: CoffeeItemData;
}

export function OrderItem({ coffee }: CoffeeProps) {
  const {
    removeCoffeFromCart,
    increaseCoffeeQuantity,
    decreaseCoffeeQuantity,
  } = useContext(CartContext);

  function handleIncreaseCoffeeQuantity(id: number) {
    increaseCoffeeQuantity(id);
  }

  function handleDecreaseCoffeeQuantity(id: number) {
    decreaseCoffeeQuantity(id);
  }

  function handleRemoveCoffe(coffee: CoffeeItemData) {
    removeCoffeFromCart(coffee);
  }

  const formattedPrice = coffee.price * coffee.coffeeQuantity;

  return (
    <OrderItemContainer>
      <div>
        <img src={coffee.image} alt="" />

        <div>
          <p>{coffee.name}</p>

          <ButtonsContainer>
            <QuantityInput
              coffeeQuantity={coffee.coffeeQuantity}
              onIncrease={() => handleIncreaseCoffeeQuantity(coffee.id)}
              onDecrease={() => handleDecreaseCoffeeQuantity(coffee.id)}
            />

            <RemoveItem type="button" onClick={() => handleRemoveCoffe(coffee)}>
              <Trash size={16} color={'#8047F8'} />
              REMOVER
            </RemoveItem>
          </ButtonsContainer>
        </div>
      </div>

      <p>R$ {priceFormat(formattedPrice)}</p>
    </OrderItemContainer>
  );
}
