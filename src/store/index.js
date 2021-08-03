// import { createStore ,applyMiddleware} from "redux";
// import thunk from 'redux-thunk'
// import rootReducers from "../reducers";
// const store = createStore(rootReducers,applyMiddleware(thunk));

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slide/product";


const store = configureStore({
  reducer: {

    product: productSlice
  }
});
export default store;