import { useState } from "react"

import { CurrentCurrency } from "./components/CurrentCurrency"
import { currencies } from "../../constants/currencies"

import "./style.sass"

export const CurrencyExchange = () => {

    const [currentValue, setCurrentValue] = useState(1);

    return (
        <div className="currency-exchange">
            {
                currencies.map(
                    (currency) =>
                        <CurrentCurrency currency={currency} value={currentValue} setCurrentValue={setCurrentValue} />
                )
            }
        </div>
    )
}