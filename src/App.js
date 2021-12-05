import WebStore from "./components/Webstore/WebStore";
import Header from "./components/UI/Header";
import CartProvider from "./store/CartProvider";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <WebStore />
      </div>
    </CartProvider>
  );
}

export default App;
