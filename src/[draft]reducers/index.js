import {combineReducers}from 'redux'
import productReducer from './product';
import Counterredux from './counter';
 const rootReducers=combineReducers({
  products:  productReducer,
  counter:Counterredux
}
    
    )
    export default rootReducers;