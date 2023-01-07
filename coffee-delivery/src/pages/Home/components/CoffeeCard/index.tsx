import { useContext, useState } from 'react';
import { priceFormat } from '../../../../utils/priceFormat';

import { QuantityInput } from '../../../../components/QuantityInput';

import { CartContext } from '../../../../contexts/CartContext';

import { ShoppingCart } from 'phosphor-react';
import {
  CoffeCardContainer,
  Tags,
  CoffeeDescription,
  Footer,
  QuantityAndCart,
} from './styles';

interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeToCart } = useContext(CartContext);

  const [coffeeQuantity, setCoffeeQuantity] = useState(1);

  function handleIncreaseCoffeeQuantity() {
    setCoffeeQuantity((state) => state + 1);
  }

  function handleDecreaseCoffeeQuantity() {
    setCoffeeQuantity((state) => state - 1);
  }

  const formattedPrice = priceFormat(coffee.price);

  function handleAddCoffeeToCart({ id, image, name, price }: Coffee) {
    addCoffeToCart({
      id,
      image,
      name,
      price,
      coffeeQuantity,
    });
  }

  return (
    <CoffeCardContainer>
      <img src={coffee.image} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <CoffeeDescription>
        <h3>{coffee.name}</h3>
        <p>{coffee.description}</p>
      </CoffeeDescription>

      <Footer>
        <div>
          <p>{formattedPrice}</p>
        </div>

        <QuantityAndCart>
          <QuantityInput
            coffeeQuantity={coffeeQuantity}
            onIncrease={handleIncreaseCoffeeQuantity}
            onDecrease={handleDecreaseCoffeeQuantity}
          />

          <button onClick={() => handleAddCoffeeToCart(coffee)}>
            <ShoppingCart size={20} weight="fill" color="#FFF" />
          </button>
        </QuantityAndCart>
      </Footer>
    </CoffeCardContainer>
  );
}
