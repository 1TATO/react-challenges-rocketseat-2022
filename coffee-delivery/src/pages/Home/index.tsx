import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';
import { CoffeesContainer } from './components/CoffeesContainer';

import {
  HomeContainer,
  HomeBanner,
  HomeContent,
  HomeDetails,
  BenefitsItems,
} from './styles';

import coffeeDelivery from '../../assets/coffeeDelivery.png';
import { DetailItem } from '../../components/DetailItem';

export function Home() {
  return (
    <HomeContainer>
      <HomeBanner>
        <HomeContent>
          <HomeDetails>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>

            <BenefitsItems>
              <DetailItem
                icon={<ShoppingCart size={16} weight="fill" color="#FFF" />}
                backgroundColor={'yellowDark'}
                title={'Compra simples e segura'}
              />

              <DetailItem
                icon={<Package size={16} weight="fill" color="#FFF" />}
                backgroundColor={'baseText'}
                title={'Emabalagem mantém o café intacto'}
              />

              <DetailItem
                icon={<Timer size={16} weight="fill" color="#FFF" />}
                backgroundColor={'yellow'}
                title={'Entrega rápida e rastreada'}
              />

              <DetailItem
                icon={<Coffee size={16} weight="fill" color="#FFF" />}
                backgroundColor={'purple'}
                title={'O café chega fresquinho até você'}
              />
            </BenefitsItems>
          </HomeDetails>

          <img src={coffeeDelivery} alt="" />
        </HomeContent>
      </HomeBanner>

      <CoffeesContainer />
    </HomeContainer>
  );
}
