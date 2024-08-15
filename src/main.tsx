import ReactDOM from 'react-dom/client'
// Подключение существующих путей
import { MainRouterProvider } from "./router/Router";
import "./style.scss";

import { store } from "./store/store";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MainRouterProvider />
  </Provider>
)
