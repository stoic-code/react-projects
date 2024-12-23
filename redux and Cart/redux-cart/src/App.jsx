import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import CartList from "./components/CartList";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Pagenotfound from "./pages/Pagenotfound";
function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
          <Route path="*" element={<Pagenotfound />}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
