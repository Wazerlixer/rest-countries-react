import { Navigate, createBrowserRouter } from "react-router-dom"

import { NewRouterExample } from "../pages/NewRouterExample"
import { CurrencyExchange } from "../pages/CurrencyExchange"
import { MainPage } from "../pages/MainPage"
import { TemperatureConverter } from "../pages/TemperatureConverter"
import { CurrentTime } from "../pages/TimeConverter/components/CurrentTime"
import { TimeConverter } from "../pages/TimeConverter"


export const Router = createBrowserRouter(
    [
        {
            path: "rest-countries-react",
            element: <Navigate to="/rest-countries-react/main" />
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
                },
                {
                    path: "time-converter",
                    element: <TimeConverter />
                }
            ]
        },
    ]
)