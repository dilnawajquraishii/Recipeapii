import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages.jsx/Home';
import Signup from './pages.jsx/Signup';
import Login from './pages.jsx/Login';
import  React from 'react'
import Navbar from './components/Navbar';
import Singlerecipi from './Singlerecipi';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    {/* // In props any element send use curly bracket */}
    {/* variable name anything like this abc in this route variable use abc and data */}
    <Route path='/Signup' element={<Signup/>}/> 
    <Route path='/Login' element={<Login />}/>
    <Route path='/single' element={<Singlerecipi/>}/>


   

   </Routes>
   </BrowserRouter>
    </div>
  
  );
}

export default App;
