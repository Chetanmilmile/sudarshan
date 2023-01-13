import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "../Customer/AddCust.css";

const initialState = {
  name: "",
  quantity:"",
  date:"",
};

const AddCategory = () => {
  const [state, setState] = useState(initialState);

  const { name,quantity,date } = state;
  const navigate = useNavigate();

  const { id } = useParams;

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity || !date ) {
      toast.error("plase bhara tevda");
    } else {
      if (!id) {
        axios
          .post("http://localhost:7015/api/post", {
            name,
            quantity,
            date,
          })
          .then(() => {
            setState({ name: "", quantity: "", date: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Thank You BhaiJaan");
      }
    }
  };

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "900px",
          alignContent: "center",
        }}
        onSubmit={handelSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={name || ""}
          onChange={handelInputChange}
        />

        <label htmlFor="quantity">quantity</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="Your quantity"
          value={quantity || ""}
          onChange={handelInputChange}
        />

        <label htmlFor="date">date</label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Your date"
          value={date || ""}
          onChange={handelInputChange}
        />
    
        <div className="addbtn">
       
          <input type="submit" value={id ? "Update" : "Save"} />
          
          <Link to="/category">
            <input type="button" value="Go Back" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
