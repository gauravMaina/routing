import React,{useState} from "react";
import AddUser from "../user/AddUser";
import { NavLink} from "react-router-dom";
import './nav.css'
const Navbar = ()=>{
  //className="navbar navbar-expand-lg navbar-dark bg-dark"
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-NavLink active" exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink" exact to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink" exact to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  AddUser
</button>
{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
      <AddUser/>
      </div>
    </div>
  </div>
</div>
  </div>
</nav>
    );
}
export default Navbar;