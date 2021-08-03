import logo from './logo.svg';
import './App.css';
import Product from './Product';
import AddProduct from './addProduct';
// import Counter from './couters';
export default function App() {
  // Tạo state
  // Đổ dữ liệu từ state app xuống dưới component product
  // Thông qua props
  return (
    <div className="App">
      <Product />
<AddProduct/>

    </div>
  );
  }

