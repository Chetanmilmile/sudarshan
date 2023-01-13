import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { toast } from "react-toastify";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";
import { Container, Modal } from "react-bootstrap";
import { MdDelete, MdKeyboardArrowRight } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";

import "./category.css";
const initialState = {
  name: "",
  category: "",
  quantity: "",
  date: "",
};

const Subcategory = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("print sucess"),
  });
  const { onDownload } = useDownloadExcel({
    currentTableRef: componentRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:7016/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("nakki udavu ka ?")) {
      axios.delete(`http://localhost:7016/api/remove/${id}`);
      toast.success("item delete");
      setTimeout(() => loadData(), 500);
    }
  };
  const [state, setState] = useState(initialState);
  const [modalShow, setModalShow] = useState(false);

  const { name, category, quantity, date } = state;

  const { id } = useParams;

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !quantity || !date) {
      toast.error("plase bhara tevda");
    } else {
      if (!id) {
        axios
          .post("http://localhost:7016/api/post", {
            name,
            category,
            quantity,
            date,
          })
          .then(() => {
            setState({ name: "", category: "", quantity: "", date: "" });
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
    <Container>
      <div className="custhead">
        <h1>Sub Category List</h1>
        <div className="ironman">
          <Link to="/">
            <p>
              Home <MdKeyboardArrowRight />{" "}
            </p>
          </Link>
          <h6>Customer List</h6>
          <button className="addcustbtn" onClick={() => setModalShow(true)}>
            {" "}
            Add Category
          </button>
        </div>
      </div>
      <div className="categorytable">
        <div className="pdf">
          <p onClick={handlePrint} className=" print">
            PRINT
          </p>
          <p onClick={onDownload} className=" excel">
            EXCEL
          </p>
          <p className=" copy">COPY</p>
          <p className=" pdf1">PDF</p>
        </div>

        <Table striped bordered hover size="sm" ref={componentRef}>
          <thead>
            <tr className="customerhead">
              <th>Sr No.</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quntity</th>
              <th>Date</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id} className="cutomerlist">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.date}</td>
                  <td>
                    <BiEditAlt className="edit" />
                    &nbsp; &nbsp; &nbsp;
                    <MdDelete
                      className="delete"
                      onClick={() => {
                        deleteContact(item.id);
                      }}
                    />{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Subcategory
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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

              <label htmlFor="name">Name</label>
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
                <label htmlFor="category"> Category</label>
                <br />
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Your category"
                  value={category || ""}
                  onChange={handelInputChange}
                />
              </div>
              <div>
                <label htmlFor="quantity">quantity</label>
                <br />
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  placeholder="Your quantity"
                  value={quantity || ""}
                  onChange={handelInputChange}
                />
              </div>
              <div>
                <label htmlFor="date">date</label>
                <br />
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Your date"
                  value={date || ""}
                  onChange={handelInputChange}
                />
              </div>

              <div className="addbtn">
                <input
                  className="addbtn1"
                  type="submit"
                  value={id ? "Update" : "Save"}
                />
                <Link to="/subcategory">
                  <input className="addbtn2" type="button" value="Go Back" />
                </Link>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </Container>
  );
};

export default Subcategory;
