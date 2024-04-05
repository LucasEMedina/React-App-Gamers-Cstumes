import React from "react";
import productsApi from "./apiProduct";;

function ProductsList() {
  return (
    <>
        {productsApi.productsList()}
    </>
  )
}

export default ProductsList