import { CoffeeCard } from '../CoffeeCard';
import { CoffeesWrapper, CoffeeList } from './styles';

import { coffees } from '../../../../data/coffees';

export function CoffeesContainer() {
  return (
    <CoffeesWrapper className="container">
      <h2>Nossos cafés</h2>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeesWrapper>
  );
}
