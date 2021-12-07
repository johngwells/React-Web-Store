import { useState, useEffect, useContext } from "react";

import ShoppingItem from "./ShoppingItem";
import classes from "./WebStore.module.css";
import CartContext from "../../store/cart-context";

function WebStore() {
  const [storeData, setStoreData] = useState([]);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    const fetchStore = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery?limit=5"
      );

      const responseData = await response.json();

      let loadedStore = [];
      for (const key in responseData) {
        loadedStore.push({
          id: responseData[key].id,
          category: responseData[key].category,
          title: responseData[key].title,
          description: responseData[key].description,
          image: responseData[key].image,
          price: responseData[key].price,
          rating: responseData[key].rating
        });
      }
      console.log(loadedStore)
      setStoreData(loadedStore)
      // cartCtx.addData(loadedStore);
    };
    fetchStore();
  }, []);

  // console.log(cartCtx)
  const shoppingList = storeData.map((item) => (
    <ShoppingItem key={item.id} id={item.id} image={item.image} title={item.title} description={item.description} price={item.price} />
  ));

  return (
    <section className={classes.store}>
      <ul>{shoppingList}</ul>
    </section>
  );
}

export default WebStore;
