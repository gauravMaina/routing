import React,{useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ViewUser = () => {
    const [user,setUser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const { id}= useParams();
    useEffect(()=>{
         loadUser();
    },[])
    const loadUser = async()=>{  
        const result= await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result.data)
        setUser(result.data);
      }
    return (
        <>
        <h1>View User Id:{id} </h1>
        <form>
        <ul class="list-group">
  <li class="list-group-item">Name:{user.name}</li>
  <li class="list-group-item">UserName:{user.username}</li>
  <li class="list-group-item">Email:{user.email}</li>
  <li class="list-group-item">Phone No:{user.phone}</li>
  <li class="list-group-item">Website Name:{user.website}</li>
</ul>
        </form>
        </>
    );
}
export default ViewUser;