import { Link } from "react-router-dom"

import { Routes } from "../../Router/Routes"

export const NewRouterExample = () => {
    return(
        <div className="router-example">
            <Link to={`./${Routes?.currencyExchange}`}>Currency Exchange</Link>
            <br />
            <Link to={`./${Routes?.temperatureConverter}`}>Temeprature Comverter</Link>
        </div>
    )
}