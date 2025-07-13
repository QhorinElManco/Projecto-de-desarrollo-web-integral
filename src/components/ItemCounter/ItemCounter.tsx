import type {FC} from 'react';
import {IconMinus, IconPlus} from "@tabler/icons-react";
import "./ItemCounter.css";

interface Props {
    maxValue?: number;
    currentValue: number;
    onChangeQuantity: (value: number) => void;
}

export const ItemCounter: FC<Props> = ({
                                           maxValue,
                                           currentValue,
                                           onChangeQuantity
                                       }) => {
    const handleIncrement = () => {
        if (maxValue && currentValue >= maxValue) return;
        onChangeQuantity(currentValue + 1);
    };

    const handleDecrement = () => {
        if (currentValue > 1) {
            onChangeQuantity(currentValue - 1);
        }
    };

    return (
        <div className={`item-counter`}>
            <button
                type="button"
                className="item-counter__icon item-counter__icon--outline"
                onClick={handleDecrement}
                aria-label="Decrementar"
            >
                <IconMinus size={14}/>
            </button>
            <span className="item-counter__value">{currentValue}</span>
            <button
                type="button"
                className="item-counter__icon item-counter__icon--outline"
                onClick={handleIncrement}
                aria-label="Incrementar"
            >
                <IconPlus size={14}/>
            </button>
        </div>
    );
};
