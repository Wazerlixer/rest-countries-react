import {CurrencyExchange} from "../pages/CurrencyExchange"
import { TemperatureConverter } from "../pages/TemperatureConverter";

import "./style.sass"

export const App = () => {

  return (
    <div className="App">
      {/* <CurrencyExchange /> */}
      <TemperatureConverter/>
    </div>
  );
}