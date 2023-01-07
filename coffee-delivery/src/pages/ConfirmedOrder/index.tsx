import { useEffect } from 'react';
import { paymentMethods } from '../Cart/components/PaymentInput/PaymentMethodOptions';

import { useLocation, useNavigate } from 'react-router-dom';

import { DetailItem } from '../../components/DetailItem';
import { NewOrderFormData } from '../Cart';

import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import {
  ConfirmedOrderContainer,
  ConfirmedOrderInfosContainer,
  ConfirmedOrderInfos,
} from './styles';

import confirmedOrderImg from '../../assets/confirmedOrderImg.png';

interface AddressAndPayment {
  state: NewOrderFormData;
}

export function ConfirmedOrder() {
  const { state } = useLocation() as AddressAndPayment;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);

  if (!state) return <></>;

  return (
    <ConfirmedOrderContainer className="container">
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você </p>

      <ConfirmedOrderInfosContainer>
        <ConfirmedOrderInfos>
          <DetailItem
            icon={<MapPin size={16} weight="fill" color="#FFF" />}
            backgroundColor="purple"
            title={
              <p>
                Entrega em <strong>{state.street}, 102</strong>
              </p>
            }
            subtitle={
              <p>
                {state.district} - {state.city}, {state.uf}
              </p>
            }
          />

          <DetailItem
            icon={<Clock size={16} weight="fill" color="#FFF" />}
            backgroundColor="yellow"
            title={<p>Previsão de entrega</p>}
            subtitle={
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            }
          />

          <DetailItem
            icon={<CurrencyDollar size={16} weight="fill" color="#FFF" />}
            backgroundColor="yellowDark"
            title={<p>Pagamento na entrega</p>}
            subtitle={
              <p>
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </p>
            }
          />
        </ConfirmedOrderInfos>

        <img src={confirmedOrderImg} alt="" />
      </ConfirmedOrderInfosContainer>
    </ConfirmedOrderContainer>
  );
}
