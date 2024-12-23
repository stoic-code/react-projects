import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/apiSlice";
import ProductData from "./ProductData";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <p>hello</p>
        <ProductData />
      </ApiProvider>
    </Provider>
  );
}

export default App;
