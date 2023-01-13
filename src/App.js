import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Comment from './pages/Comment.jsx';
import ProductList from './pages/ProductList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customer from './pages/Customer/Customer';
import AddCust from './pages/Customer/AddCust';
import AddProduct from './pages/Categories/AddProduct';
import Navbars from './components/Navbars';
import Vegetable from './pages/Categories/Vegetable.jsx';
import Plants from './pages/Categories/Plants';
import Seeds from './pages/Categories/Seeds';
import LedgerManagement from './pages/Ledger Management/LedgerManagement';
import Category from './pages/Ledger Management/category';
import AddCategory from './pages/Ledger Management/AddCategory';
import Subcategory from './pages/Ledger Management/Subcategory';
import AddSubCategory from './pages/Ledger Management/AddSubCategory copy';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';


const App = () => {

  return (

    <BrowserRouter>

        <Routes>
           <Route exact path="/" element={<LoginPage />} />
        </Routes>
        <Sidebar>
        <Navbars/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/vegetable" element={<Vegetable />} />
          <Route path='/plants' element={<Plants/>}/>
          <Route path='/seeds' element={<Seeds/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/subcategory' element={<Subcategory/>}/>
          <Route path="/ledgermanagement" element={<LedgerManagement />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
        {/* <Footer/> */}
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;