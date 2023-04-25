import React, { useState, createContext } from 'react';
import {  Routes, Route, } from 'react-router-dom'
import NoMatch from './NoMatch';
import Register from './Signup';
import Login from './Login';
import UserProfile from './UserProfile';
import EditUserDetails from './EditUserDetails';
import AboutUs from './AboutUs';
import FaqMain from './FaqMain';
import Contactus from './Contactus';
import Card from '../products/Menu';
import Home from '../products/Home';
import OrderCart from '../products/Ordercart';
import SingleRecipe from '../Recipies/Singlerecipe';
import Recipe from '../Recipies/FoodRecipe';
import Display from '../Admin/Contactdisplay';
import UserDisplay from '../Admin/Userdisplay';
import AdminLogin from '../Admin/AdminLogin';
import Homepro from '../ProHome/Homepro';
import Paymentmethod from './Payment';
import SingleRecipe1 from '../Recipies/SingleRecipe1';
import AdminHome from '../Admin/AdminHome';
import AdminHome1 from '../Admin/AdminHome1';
import AddProduct from '../Admin/addproduct';
import Productlist from '../Admin/Productlist';
import EditProduct from '../Admin/EditProduct';
import Adminhome2 from '../Admin/Adminhome2';
export const store = createContext();

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="wbd">
      
        <Routes>
        
          {/* <Route exact path="/" element={user && user._id ? <Homepro setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />}/> */}
          
          <Route path="/login" element={<Login/>}/>
          
          <Route path="/register" element ={<Register />}/>

      <Route path='/' element={<Homepro />} exact />
      <Route path='/product' element={<Home />} exact />
      <Route path='/Menu' element={<Card />} exact />
      <Route path='/cart' element={<OrderCart />} exact />
      <Route path='/faq' element={<FaqMain />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path='/user-profile' element={<UserProfile />} />
      <Route path='/edit-details' element={<EditUserDetails />} />
      <Route path='/recipe' element={<Recipe />} />
      <Route path='/recipe/1' element={<SingleRecipe />} />
      <Route path='/recipe/2' element={<SingleRecipe1 />} />
      <Route path='/ContactDisplay' element={<Display />} />
      <Route path='/UserDisplay' element={<UserDisplay />} />
      <Route path='/Alogin' element={<AdminLogin />} />
      <Route path='/payment' element={<Paymentmethod />} />
      <Route path='/adminhome' element={<AdminHome />} />
      <Route path='/adminhome1' element={<AdminHome1 />} />
      <Route path='/adminhome2' element={<Adminhome2 />} />
      <Route path='/addproduct' element={<AddProduct />} />
     <Route path='/productlist' element={<Productlist />} />
    <Route path='/editproduct/:id' element={<EditProduct />} />
     <Route path='*' element={<NoMatch />} />


    </Routes>


    </div >
  );
}

export default App;

             