import { Plus, Minus } from 'phosphor-react';
import { InputContainer } from './styles';

interface QuantityInputProps {
  coffeeQuantity: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export function QuantityInput({
  coffeeQuantity,
  onIncrease,
  onDecrease,
}: QuantityInputProps) {
  return (
    <InputContainer>
      <button type="button" onClick={onDecrease} disabled={coffeeQuantity <= 1}>
        <Minus size={14} />
      </button>

      <input type="number" readOnly value={coffeeQuantity} />

      <button type="button" onClick={onIncrease}>
        <Plus size={14} />
      </button>
    </InputContainer>
  );
}
