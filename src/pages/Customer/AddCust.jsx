import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import "./AddCust.css";

const initialState = {
  name: "",
  email: "",
  contact: "",
  gender: "",
  states: "",
  city: "",
};

const AddCust = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact, gender, states, city } = state;
  const navigate = useNavigate();

  const { id } = useParams;

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name || !contact || !email || !gender || !states || !city) {
      toast.error("plase bhara tevda");
    } else {
      if (!id) {
        axios
          .post("http://localhost:7010/api/post", {
            name,
            contact,
            email,
            gender,
            states,
            city,
          })
          .then(() => {
            setState({
              name: "",
              contact: "",
              email: "",
              gender: "",
              states: "",
              city: "",
            });
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
        className="addcustform"
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "900px",
          alignContent: "center",
        }}
        onSubmit={handelSubmit}
      >
        <div>
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name || ""}
            onChange={handelInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={email || ""}
            onChange={handelInputChange}
          />
        </div>

        <div>
          <label htmlFor="contact">
            Contact<span>*</span>
          </label>
          <br />
          <input
            type="number"
            id="contact"
            name="contact"
            placeholder="Your contact"
            value={contact || ""}
            onChange={handelInputChange}
          />
        </div>
        <div>
          <label htmlFor="gender">
            Gender<span>*</span>
          </label>
          <br />
          <select
            name="gender"
            type="text"
            id="gender"
            value={gender || ""}
            onChange={handelInputChange}
          >
            <option value="none" selected>
              Gender
            </option>
            <option value="male">Male </option>
            <option value="female">Female</option>
            <option value="other">other</option>
          </select>
        </div>
        <div>
          <label htmlFor="states">
            State<span>*</span>
          </label>
          <br />
          <input
            type="text"
            id="states"
            name="states"
            placeholder="Your states"
            value={states || ""}
            onChange={handelInputChange}
          />
        </div>
        <div>
          <label htmlFor="city">
            City<span>*</span>
          </label>
          <br />
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Your city"
            value={city || ""}
            onChange={handelInputChange}
          />
        </div>
        <div className="addbtn">
          <input
            className="addbtn1"
            type="submit"
            value={id ? "Update" : "Save"}
          />
          <Link to="/">
            <input className="addbtn2" type="button" value="Back" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddCust;
