
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "./actions/counter";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      Counter : {counter} <br />
  
      <button onClick={()=>dispatch(increment())} > Increment</button>
      <button onClick={()=>dispatch(decrement())} > Decrement</button>
    </div>
  );
};
export default Counter;
 