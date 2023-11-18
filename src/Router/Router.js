import { createBrowserRouter } from "react-router-dom"

import { NewRouterExample } from "../pages/NewRouterExample"
import { CurrencyExchange } from "../pages/CurrencyExchange"
import { TemperatureConverter } from "../pages/TemperatureConverter"

export const Router = createBrowserRouter(
    [
        {
            path: "",
            element: <NewRouterExample />
        },
        {
            path:  "currency-exchange",
            element: <CurrencyExchange />
        },
        {
            path:  "temperature-converter",
            element: <TemperatureConverter />
        }
    ]
)