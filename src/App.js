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
import Product from  './Components/UI/Products/Product';
import Login from './Components/UI/Login';
import Register from './Components/UI/Register';
import Addcustomer from './Components/UI/Customer/Addcustomer';
import AddDeliverypartner from './Components/UI/DeliveryPartner/AddDeliverypartner';
import AddProduct from './Components/UI/Products/AddProduct';
import Invoice from './Components/UI/Invoice/Invoice';
import Customer from './Components/UI/Invoice/Customer'; 
import Profile from './Components/UI/Profile/Profile';
import Settings from './Components/UI/Settings/Settings';
import UpdatePrice from './Components/UI/Settings/UpdatePrice';
import PaymentMethod from './Components/UI/Settings/PaymentMethod';
 
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
              <Route path="Invoice" element={<Invoice />} />
              <Route path="customerpage" element={<Customer />} />




              <Route path="addcustomer" element={<Addcustomer />} />
              <Route path="addpartner" element={<AddDeliverypartner />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="updateprice" element={<UpdatePrice />} />
              <Route path="paymentmethod" element={<PaymentMethod />} />

              </Route>
            </Routes>
           
    </BrowserRouter>
  );
}

export default App;
