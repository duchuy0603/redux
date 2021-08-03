import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { addProduct } from './slide/product'
const AddProduct=()=>{
const dispatch=useDispatch();
const {register,handleSubmit}=useForm();
onsubmit=(data)=>{
    const newdata={
id:Math.random().toString(7),
...data
    }
    dispatch(addProduct(newdata))

}
return(
    <form onSubmit={handleSubmit(onsubmit)}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="name"{...register ("name")} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
)
}
export default AddProduct;