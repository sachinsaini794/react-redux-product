import FakeApiStore from '../../apis/FakeApiStore'
import { ActionTypes } from "../contants/action-types";

export const fetchProducts = () => async (dispatch) => {
    const responce = await FakeApiStore.get("/products");
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: responce.data,
    });
  }

export const fetchProduct = (id) => async (dispatch) => {
  const responce = await FakeApiStore.get(`/products/${id}`);
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: responce.data,
  });
};


export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};