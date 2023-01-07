import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { priceFormat } from '../../utils/priceFormat';

import { OrderItem } from './components/OrderItem';
import { CreateNewOrderForm } from './components/CreateNewOrderForm';

import { CartContext } from '../../contexts/CartContext';

import {
  CompleteOrderForm,
  OrderItemsContainer,
  OrderItems,
  OrderSummary,
} from './styles';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

export const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod
    .string()
    .min(1, 'Informe seu UF com duas letras')
    .max(2, 'Informe seu UF com duas letras'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    },
  }),
});

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>;

export function Cart() {
  const { cartItems, totalOrderItemsPrice, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length <= 0) {
      navigate('/');
    }
  }, []);

  const DELIVERY_PRICE = 3.5;
  const totalOrderPrice = DELIVERY_PRICE + totalOrderItemsPrice;

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  });

  const { handleSubmit, reset } = newOrderForm;

  function handleCreateNewOrder(data: NewOrderFormData) {
    navigate('/confirmedOrder', { state: data });

    reset();
    clearCart();
  }

  return (
    <CompleteOrderForm
      onSubmit={handleSubmit(handleCreateNewOrder)}
      className="container"
    >
      <FormProvider {...newOrderForm}>
        <CreateNewOrderForm />
      </FormProvider>

      <OrderItemsContainer>
        <h2>Cafés selecionados</h2>

        <OrderItems>
          {cartItems.length >= 1 ? (
            <>
              {cartItems.map((item) => (
                <OrderItem key={item.id} coffee={item} />
              ))}

              <OrderSummary>
                <div>
                  <p>Total de itens</p>
                  <p>R$ {priceFormat(totalOrderItemsPrice)}</p>
                </div>

                <div>
                  <p>Entrega</p>
                  <p>R$ {priceFormat(DELIVERY_PRICE)}</p>
                </div>

                <div className="totalOrder">
                  <p>Total</p>
                  <p>R$ {priceFormat(totalOrderPrice)}</p>
                </div>

                <button type="submit">CONFIRMAR PEDIDO</button>
              </OrderSummary>
            </>
          ) : (
            <h3>Seu carrinho está vazio</h3>
          )}
        </OrderItems>
      </OrderItemsContainer>
    </CompleteOrderForm>
  );
}
