import { useEffect } from "react";
import { deleteProduct,fetchProduct } from "./slide/product";
import {useSelector,useDispatch} from 'react-redux'
const Product = () => {
  const products = useSelector((state) => state.product.items);
  console.log(products);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <div>
      {products.map((item, index) => {
        return (
          <div key={index}>
            {item.name} <button onClick={()=>dispatch(deleteProduct(item.id))} >Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default Product;
