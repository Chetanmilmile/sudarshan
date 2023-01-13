import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./AddCust.css";
import { Container, Modal } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { MdDelete, MdKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useReactToPrint } from "react-to-print";

const initialState = {
  name: "",
  email: "",
  contact: "",
  gender: "",
  states: "",
  city: "",
};

const Customer = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact, gender, states, city } = state;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("print success"),
  });
  const { onDownload } = useDownloadExcel({
    currentTableRef: componentRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const loadData = async () => {
    const response = await axios.get("http://localhost:7010/api/get");
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
    <Container>
      <div className="custhead">
        <h1>Customer</h1>
        <div className="ironman">
          <Link to="/">
            <p>
              Home <MdKeyboardArrowRight />{" "}
            </p>
          </Link>
          <h6>Customer List</h6>

          <button className="addcustbtn" onClick={() => setModalShow(true)}>
            {" "}
            Add Customer
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
              <th>Contact No.</th>
              <th>Email</th>
              <th>Gender</th>
              <th>State</th>
              <th>City</th>
              <th>select</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index} className="customerhead1">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.contact}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.states}</td>
                  <td>{item.city}</td>
                  <td>
                    <BiEditAlt className="edit" />
                    &nbsp; &nbsp; &nbsp;
                    <MdDelete
                      className="delete"
                      onClick={() => {
                        deleteContact(item.id);
                      }}
                    />
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
              Add New Customer
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
                   Select
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
                value={"Save"}
                onClick={() => setModalShow(false)}
              />
              <Link to="/">
                <input className="addbtn2" type="button" value="Back" />
              </Link>
            </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </Container>
  );
};

export default Customer;
