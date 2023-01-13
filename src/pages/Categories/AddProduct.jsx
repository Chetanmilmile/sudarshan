import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "./AddProduct.css";

const initialState = {
  name: "",
  info: "",
  image: "",
};

const AddProduct = () => {
  const [state, setState] = useState(initialState);

  const { name, info, image } = state;
  const navigate = useNavigate();

  const { id } = useParams;

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name || !info || !image) {
      toast.error("plase bhara tevda");
    } else {
      if (!id) {
        axios
          .post("http://localhost:7013/api/post", {
            name,
            info,
            image,
          })
          .then(() => {
            setState({ name: "", info: "", image: "" });
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

      <label htmlFor="info">info</label>
      <input
        type="text"
        id="info"
        name="info"
        placeholder="Your info"
        value={info || ""}
        onChange={handelInputChange}
      />

      <label htmlFor="image">image</label>
      <input
        type="file"
        id="image"
        name="image"
        placeholder="Your image"
        value={image || ""}
        onChange={handelInputChange}
      />
     

     
      <div className="addbtn">
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </div>
    </form>
  </div>

  );
};

export default AddProduct;
