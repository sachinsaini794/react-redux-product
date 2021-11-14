import React, {useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from './ProductComponent'

const ProductListing = () => {

  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchAllProducts = async () => {
    const responce = await axios.get("https://fakestoreapi.com/products").catch((err)=> {
      console.log("Err", err)
    })

    dispatch(setProducts(responce.data));
  }

  useEffect(() => {
    fetchAllProducts()
  }, []);

  // console.log("Products: ", products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductListing;
