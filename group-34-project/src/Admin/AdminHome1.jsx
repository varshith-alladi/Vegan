import React from "react";
import "./admin.css";
import axios from "axios";
import { useState,useEffect } from "react";
import Display from "./Contactdisplay";
import { color } from "@mui/system";
import Userdisplay from "./Userdisplay";
export default function AdminHome(){
  const [products, setproducts] = useState([]);
    useEffect(()=>{
        loadproducts();
    },[]);

    const loadproducts = async()=>{
         const result = await axios.get("http://localhost:3001/allProducts");
         setproducts(result.data);
    };
    const[contacts,setcontacts]=useState([]);
    useEffect(()=>{
        loadItems();
    },[]);
    const loadItems =async()=>{
         const result = await axios.get("http://localhost:3001/getmessages");
         setcontacts(result.data);
    };
    const[users,setusers]=useState([]);
    useEffect(()=>{
        loadusers();
    },[]);
    const loadusers =async()=>{
         const result = await axios.get("http://localhost:3001/users");
         setusers(result.data);
    };
    return(<><div>
    <hgroup>
    <h2>Dashboard</h2>
  </hgroup>
  <br></br>
  <div className="menu-tabs c1">
      <div className="m2 c2 d-flex justify-content-around">
      <a href="/adminhome1" class="abc">Users</a>
      <a href="/adminhome" class="abc">Messages</a>
      <a href="/adminhome2" class="abc">Products</a>
      <a href="/addproduct" class="abc">AddProduct</a>
      <a href="/" class="abc">logout</a>
    </div>
    </div>
  <br></br>
  <section className="s3">
    <dl>
      <dt>Users</dt>
      <dd>{users.length}</dd>
    </dl>
    <dl>
      <dt>Messages</dt>
      <dd>{contacts.length}</dd>
    </dl>
    <dl>
      <dt>Active Users</dt>
      <dd>10</dd>
    </dl>
    <dl>
      <dt>Products</dt>
      <dd>{products.length}</dd>
    </dl>
  </section>
<br></br>
  
    
<div className="displayu">
    <Userdisplay/>
</div>
  </div>
  </>);
}