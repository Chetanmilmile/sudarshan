import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./Vegetable.css";
import { Container } from "react-bootstrap";
const Plants = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:7013/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="cateveg">
      <div className="custhead">
        <h1>Plants List</h1>

        <Link to="/addproduct">
          <button className="addcustbtn"> Add Product</button>
        </Link>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className="catehead">
            <th>Sr No.</th>
            <th>Name</th>
            <th>Info</th>
            <th>Image</th>
            <th>select</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id} className="catehead1">
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.info}</td>
                <td>
                  <img className="cateimg" src={item.image} alt="" />
                </td>
                <td>
                  <Link to="/open">
                    <button className="open"> Open</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="addproductbtn"></div>
    </Container>
  );
};

export default Plants;
