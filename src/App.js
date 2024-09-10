import logo from './logo.svg';
import './App.css';
import SideNav from './Components/UI/SideNav';
import Main from './Components/UI/Main';
import Navbar from './Components/UI/Navbar';
import Dashboard from './Components/UI/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerDetail from './Components/UI/Customer/CustomerDetail';
import DeliveryPartner from './Components/UI/DeliveryPartner/DeliveryPartner';
import Payment from './Components/UI/Payment/Payment';
import Product from './Components/UI/Products/Product';
import Login from './Components/UI/Login';
import Register from './Components/UI/Register';
import Addcustomer from './Components/UI/Customer/Addcustomer';
import AddDeliverypartner from './Components/UI/DeliveryPartner/AddDeliverypartner';
import AddProduct from './Components/UI/Products/AddProduct';

function App() {
  return (
    <BrowserRouter>
      
            <Routes>
     
            <Route path='/' element={<Login />}/>
            <Route path='register' element={<Register />}/>
              
              <Route path='/' element={<Main />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="customer" element={<CustomerDetail />} />
              <Route path="DeliveryPartner" element={<DeliveryPartner />} />
              <Route path="Payment" element={<Payment />} />
              <Route path="Product" element={<Product />} />
              <Route path="addProduct" element={<AddProduct />} />


              <Route path="addcustomer" element={<Addcustomer />} />
              <Route path="addpartner" element={<AddDeliverypartner />} />







        


              
              </Route>
              

              {/* <Route path="/login" */}

              {/* Add other routes here */}
            </Routes>
          {/* </main>
        </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
