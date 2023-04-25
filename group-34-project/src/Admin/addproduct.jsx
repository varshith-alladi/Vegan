import React, { useEffect } from "react";
import "./addproduct.css";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function AddProduct(){
const [state, setState] = useState({
    id:"",
    title:"",
    desc: "",
    category: "",
    price: "",
});
const [image, setImage] = useState(null);
const navigate=useNavigate();
// const [records, setRecords] = useState([]);

// useEffect(()=> console.log(image),[image])


const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
};

function handleChange(event) {
  setImage(event.target.files[0].name);
  console.log(event.target.files[0].name);
}
// const { name, email, phonenumber, message } = state;
const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append('state',state);
    // formData.append('image',image);
    axios.post(`http://localhost:3001/products`,
    {
        id:state.id,
        title:state.title,
        desc:state.desc,
        category:state.category,
        price:state.price,
        image:image
    }
    , {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res=>{
     console.log(res);
     alert("Your product is successfully added.");
     navigate("/adminhome2");
    })
    .catch(err => console.log(err))
   
};

const getProducts=async ()=>{
  try{
    await axios.get('http://localhost:3001/allProducts');
  }catch(error){
    console.log("Error while calling add product Api",error);
  }
}

    return(<><div className="b6"><div class="b1">
        <div class="tb">
          <h1 id="t1">WELLCOME TO Vegan Shala!</h1>
          <hr/>
          <p id="desc">Add the products</p>
        </div>
      <div class="con1">
        <form id="add1" onSubmit={handleSubmit}>
      
          <div class="lb">
            <label id="name" for="name">Title</label>
          </div>
          <div class="ib">
            <input class="if" type="text" id="title" name="title" placeholder="Enter Product Title" required autofocus onChange={handleInputChange}
                                    value={state.title}/>
          </div>
      
          <div class="lb">
            <label id="id" for="id">ProductId</label>
          </div>
          <div class="ib">
            <input class="if" type="text" id="id" name="id" placeholder="Enter product Id" required onChange={handleInputChange}
                                    value={state.id}/>
          </div>

          <div class="lb">
            <label id="desc" for="desc">Description</label>
          </div>
          <div class="ib">
            <input class="if" type="text" id="desc" name="desc"  placeholder="Enter the description" required onChange={handleInputChange}
                                    value={state.desc}/>
          </div>
         
          <div class="lb">
            <label id="price" for="price">Price</label>
          </div>
          <div class="ib">
            <input class="if" type="number" id="price" name="price" min="1" max="1000"  placeholder="Ex: 150" required onChange={handleInputChange}
                                    value={state.price}/>
          </div>
          <div class="lb">
            <label id="image" for="image">Price</label>
          </div>
          <div class="ib">
            <input class="if" type="file" id="image" name="image" accept="image/*" required onChange={handleChange}
                                    />
          </div>
            {/* <Button variant='contained' component='label'>Upload
          <input type="file" accept="image/*" name="image" value={state.image} onChange={handleInputChange} id="image"
                placeholder="File" hidden required /> </Button>&nbsp;{state.image} */}
          <br></br>
          <br></br>
          <div class="lb">
            <label for="category">Category</label>
          </div>
          <div class="ib">
            <select id="category" name="category" onChange={handleInputChange}
                                    value={state.category}>

              <option disabled value selected>Select an option</option>
              <option value="Dairy">Dairy</option>
              <option value="Fitness">Fitness</option>
              <option value="Meat">Meat</option>
              <option value="Desserts">Desserts</option>
              <option value="other">Other</option>
            </select>
          </div>
      
          
        
      
          <div class="bnt">
            <button id="submit" type="submit">Submit</button>
          </div>
      
        </form>
      </div>
      </div>
      </div>
      </>);
}