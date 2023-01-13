import React, { useEffect, useState, useRef } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { toast } from "react-toastify";
import {useReactToPrint} from "react-to-print";
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Container,Modal } from "react-bootstrap";
import { MdDelete, MdKeyboardArrowRight } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import "./category.css";

const initialState = {
  name: "",
  quantity:"",
  date:"",
};



const Category = () => {
  const componentRef = useRef();
  const [state, setState] = useState(initialState);
  const [modalShow, setModalShow] = useState(false);


  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    onAfterPrint:()=>alert ('print sucess')
  });
  const { onDownload } = useDownloadExcel({
    currentTableRef: componentRef.current,
    filename: 'Users table',
    sheet: 'Users'
})

  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:7015/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("nakki udavu ka ?")) {
      axios.delete(`http://localhost:7015/api/remove/${id}`);
      toast.success("item delete");
      setTimeout(() => loadData(), 500);
    }
  };

  
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
    <Container>
      <div className="custhead">
        <h1>Category List</h1>
        <div className="ironman">
          <Link to="/">
            <p>
              Home <MdKeyboardArrowRight /> </p>
          </Link>
               <h6>Customer List</h6>  
       
          <button className="addcustbtn" onClick={() => setModalShow(true)}> Add Category</button>
       
      </div>
      </div>
      <div className="categorytable">
        <div className="pdf">
          <p onClick={handlePrint} className=" print">PRINT</p>
          <p onClick={onDownload} className=" excel">EXCEL</p>
          <p  className=" copy">COPY</p>
          <p className=" pdf1">PDF</p>
        </div>
        <Table
          striped
          bordered
          hover
          size="sm"
          ref={componentRef}
        >
          <thead>
            <tr className="customerhead">
              <th>Sr No.</th>
              <th>Name</th>
              <th>Quntity</th>
              <th>Date</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id} className="customerhead1">
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.date}</td>
                  <td>
                    <BiEditAlt className="edit" /> &nbsp;
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
              Add New Category
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
        <br/>
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

          <br/>
    
        <div className="addbtn">
       
          <input className="addbtn1" type="submit" value={id ? "Update" : "Save"} />
          
          <Link to="/category">
            <input className="addbtn2"  type="button" value="Back" />
          </Link>
        </div>
      </form>
          </Modal.Body>
        </Modal>
      </div>
    </Container>
  );
};

export default Category;
