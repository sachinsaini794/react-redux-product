import React, {useEffect} from 'react'
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction";
import ProductComponent from './ProductComponent'

const ProductListing = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  // console.log("Products: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductListing;
