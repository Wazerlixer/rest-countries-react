import { RouterProvider } from "react-router-dom";
import { Router } from "../Router/Router";

import "./style.sass"

export const App = () => {

  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}