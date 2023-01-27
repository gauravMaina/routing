import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Route, Routes ,Link, useNavigate, useLocation} from "react-router-dom";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Error from "./Components/pages/Error";
import Home from "./Components/pages/Home";
import Service from "./Components/pages/Service";
import Navbar from './Components/layout/Navbar'
import AddUser from "./Components/user/AddUser";
import EditUser from "./Components/user/EditUser";
import ViewUser from "./Components/user/ViewUser";
import './App.css'
const App = ()=>{
  // const navigate = useNavigate()
  // const location = useLocation();
  // console.log("pathname",location.pathname);
  return (
    <>
 <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/users/add" element={<AddUser/>} />
      <Route path="/users/edit/:id" element={<EditUser/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/view/:id" element={<ViewUser/>} />
    </Routes>
    </>
  );
}
export default App;
