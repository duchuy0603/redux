// ACTIONS
import axios from "axios";
import { getAll ,remove,add} from '../api/productAPI';
export const addProduct = (item) => async (dispatch) =>{
   try {
     const {data}= await add(item);
     dispatch({type:"ADD_PRODUCT",payload:item})
   } catch (error) {
     
   }
  };
 export const deleteProduct = (id) => async(dispatch) =>{
   
      try {
        const {data}=await remove(id);
        dispatch({type:"DELETE_PRODUCT",payload:data})
      } catch (error) {
      console.log(error)
      }
    };

  export const fetchProduct=()=> async(dispatch)=>{
    try {
      const{data}= await getAll();
      dispatch({type: "FETCH_PRODUCT", payload: data})
    } catch (error) {
      console.log(error.respone)
    }
  }