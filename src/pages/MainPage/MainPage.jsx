import { Link } from "react-router-dom"

import { Routes } from "../../Router/Routes"

export const MainPage = () => {
    return (
        <div className="main-page">
            <Link to={Routes?.currencyExchange}>Currency Exchange</Link>
            <br />
            <Link to={Routes?.temperatureConverter}>Temeprature Converter</Link>
            <br />
            <Link to={Routes?.timeConverter}>Time Converter</Link>
        </div>
    )
}