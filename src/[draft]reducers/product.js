import { ADD_PRODUCT,FETCH_PRODUCT } from "../constant";
 const initialState={
  
   products: [
 
   ]
 }

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products:[...state.products,action.payload]
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products:state.products.filter(item=>item.id!==action.payload)
      };
      case "FETCH_PRODUCT":
      return {
        ...state,
        products:action.payload


      }
    default:
      return state;
  }
};
export default productReducer;