import { useFormContext } from 'react-hook-form';

import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import {
  AddressContainer,
  AddressInformation,
  OrderInput,
  OrderAddressAndPaymentContainer,
  PaymentContainer,
  TitleContainer,
} from './styles';
import { PaymentMethodOptions } from '../PaymentInput/PaymentMethodOptions';

export function CreateNewOrderForm() {
  const { register } = useFormContext();

  return (
    <OrderAddressAndPaymentContainer>
      <h2>Complete seu pedido</h2>

      <AddressContainer>
        <TitleContainer>
          <MapPinLine size={22} color="#C47F17" />

          <div>
            <p>Endereço de entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </TitleContainer>

        <AddressInformation>
          <OrderInput placeholder="CEP" className="cep" {...register('cep')} />
          <OrderInput
            placeholder="Rua"
            className="street"
            {...register('street')}
          />
          <OrderInput placeholder="Número" {...register('number')} />
          <OrderInput
            placeholder="Complemento"
            className="complement"
            {...register('complement')}
          />
          <OrderInput placeholder="Bairro" {...register('district')} />
          <OrderInput placeholder="Cidade" {...register('city')} />
          <OrderInput placeholder="UF" {...register('uf')} />
        </AddressInformation>
      </AddressContainer>

      <PaymentContainer>
        <TitleContainer>
          <CurrencyDollar size={22} color="#8047F8" />

          <div>
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </TitleContainer>

        <PaymentMethodOptions />
      </PaymentContainer>
    </OrderAddressAndPaymentContainer>
  );
}
