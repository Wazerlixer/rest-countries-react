import { Link } from "react-router-dom"

import { Routes } from "../../Router/Routes"

import "./style.sass"

export const MainPage = () => {
    return (
        <div className="main-page">
            <Link to={Routes?.currencyExchange}>Currency Exchange</Link>
            <br />
            <Link to={Routes?.temperatureConverter}>Temperature Converter</Link>
            <br />
            <Link to={Routes?.timeConverter}>Time Converter</Link>
            <br />
            <Link to={Routes?.hooksWay}>Hooks Way</Link>
        </div>
    )
}