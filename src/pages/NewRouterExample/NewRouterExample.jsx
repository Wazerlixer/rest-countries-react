import { Outlet } from "react-router-dom"
import { MainPage } from "../MainPage"

export const NewRouterExample = () => {
    return(
        <div className="router-example">
            <MainPage/>
            <Outlet />
        </div>
    )
}