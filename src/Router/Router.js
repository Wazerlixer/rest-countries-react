import { Navigate, createBrowserRouter } from "react-router-dom"

import { NewRouterExample } from "../pages/NewRouterExample"
import { CurrencyExchange } from "../pages/CurrencyExchange"
import { MainPage } from "../pages/MainPage"
import { TemperatureConverter } from "../pages/TemperatureConverter"

export const Router = createBrowserRouter(
    [
        {
            path: "",
            element: <Navigate to="rest-countries-react/main" />
        },
        {
            path: "rest-countries-react",
            element: <NewRouterExample />,
            children: [
                {
                    path: "main",
                    element: <MainPage />
                },
                {
                    path: "currency-exchange",
                    element: <CurrencyExchange />
                },
                {
                    path: "temperature-converter",
                    element: <TemperatureConverter />
                },
                {
                    path: "current-time",
                    element: <CurrentTime />
                }
            ]
        },
    ]
)