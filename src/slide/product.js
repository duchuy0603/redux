import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll,add,remove } from "../api/productAPI";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    try {
      const { data } = await getAll(); // GET/PUT/POST
      return data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

const productSlice = createSlice({
  name: "product", // tên của reducer
  initialState: {
    items: [],
    loading: false
  }, // khởi tạo state
  reducers: {
    addProduct(state, action) {
      const item = action.payload;
      state.items.push(item);
    },
    deleteProduct(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    }
  },
  extraReducers: {
    [fetchProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    }
  }
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;

// reducer(state, action)
