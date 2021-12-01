import { useState, useEffect } from "react";

import ShoppingItem from "./ShoppingItem";
import classes from "./WebStore.module.css";

function WebStore() {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    const fetchStore = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/jewelery?limit=5"
      );

      const responseData = await response.json();

      let loadedStore = [];
      for (const key in responseData) {
        loadedStore.push({
          id: key,
          category: responseData[key].category,
          title: responseData[key].title,
          description: responseData[key].description,
          image: responseData[key].image,
          price: responseData[key].price,
          rating: responseData[key].rating
        });
      }

      setStoreData(loadedStore);
    };
    fetchStore();
  }, []);

  const shoppingList = storeData.map((item) => (
    <ShoppingItem key={item.id} image={item.image} />
  ));

  return (
    <section className={classes.store}>
      <ul>{shoppingList}</ul>
    </section>
  );
}

export default WebStore;
