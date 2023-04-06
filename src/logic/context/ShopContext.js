import { createContext, useEffect, useState } from "react";
import mockData from "../mokeData/mokeData";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  let [currentState, setCurrentState] = useState({
    productList: [], // List for all the products we have
    currentPageList: [], // List for all the products in current page
    renderedProductList: [], // List for all the products displayed in current page
    currentPageIndex: 1,
    pageQty: 0,
    productsPerPage: 16,
    cartProductList: [], // List for keeping all the items added to cart
    priceUnit: "RS" // Selected price unit
  });

  // Function to fetchData from api and calculate how many pages there will be.
  // For the sake of this exercise, we will use mockData since we don't have an api.
  function fetchData() {
    const newState = { ...currentState };

    newState.productList = mockData;

    // This is where we calculate the number of pages.
    newState.pageQty = Math.ceil(
      newState.productList.length / newState.productsPerPage
    );

    if (newState.pageQty === 1) {
      newState.currentPageList = [...newState.productList];
    } else {
      newState.currentPageList = newState.productList.slice(
        0,
        newState.productsPerPage
      );
      newState.renderedProductList = [...newState.currentPageList];
    }
    setCurrentState(newState);
  }

  // This useEffect will enable us to run fetchData in mounting stage only.
  useEffect(() => {
    fetchData();
  }, []);

  // Fucntion to execute for numbered page buttons
  const updatePage = (index) => {
    if (currentState.currentPageIndex !== index) {
      let newState = { ...currentState };

      if (index !== newState.pageQty) {
        newState.currentPageList = newState.productList.slice(
          newState.productsPerPage * (index - 1),
          newState.productsPerPage * index
        );
      } else {
        newState.currentPageList = newState.productList.slice(
          newState.productsPerPage * (index - 1)
        );
        console.log(newState.currentPageList[0]);
      }

      newState.renderedProductList = [...newState.currentPageList];
      newState.currentPageIndex = index;
      setCurrentState(newState);
    }
  };

  // Function to execute for next & previous buttons
  const updatePageAlt = (btn) => {
    if (btn === "next") {
      if (currentState.currentPageIndex < currentState.pageQty) {
        let newState = { ...currentState };
        newState.currentPageIndex++;
        if (newState.currentPageIndex !== newState.pageQty) {
          newState.currentPageList = newState.productList.slice(
            newState.productsPerPage * (newState.currentPageIndex - 1),
            newState.productsPerPage * newState.currentPageIndex
          );
        } else {
          newState.currentPageList = newState.productList.slice(
            newState.productsPerPage * (newState.currentPageIndex - 1)
          );
          console.log(newState.currentPageList[0]);
        }
        newState.renderedProductList = [...newState.currentPageList];
        setCurrentState(newState);
      }
    } else {
      if (currentState.currentPageIndex > 1) {
        let newState = { ...currentState };
        newState.currentPageIndex--;
        newState.currentPageList = newState.productList.slice(
          newState.productsPerPage * (newState.currentPageIndex - 1),
          newState.productsPerPage * newState.currentPageIndex
        );
        newState.renderedProductList = [...newState.currentPageList];
        setCurrentState(newState);
      }
    }
  };

  const getProduct = (sku) => {
    const dummy = mockData.filter((product) => product.sku === sku);
    return dummy[0];
  };

  return (
    <ShopContext.Provider
      value={{ currentState, updatePage, updatePageAlt, getProduct }}
    >
      {children}
    </ShopContext.Provider>
  );
}
