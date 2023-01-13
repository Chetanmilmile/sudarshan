import React, { useState } from "react";
import {RxDashboard} from 'react-icons/rx'
import { FiMenu, FiSettings } from "react-icons/fi";
import {SlUser} from 'react-icons/sl'
import { NavLink } from "react-router-dom";
import {AiOutlineHome, AiOutlinePushpin} from 'react-icons/ai'
import {GoSettings} from 'react-icons/go'
import {BsFillCaretRightFill} from 'react-icons/bs'

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showdrop, setShowdrop] = useState(false);
  const [showPush, setShowPush] = useState(false);
  const [showPush1, setShowPush1] = useState(false);
  const toggle = () =>{ 

    setIsOpen(!isOpen)
    setShowdrop(false);
    setShowPush(false);
    setShowPush1(false);
  };

  const ShowCate = () => {
    setShowdrop(!showdrop);
  };

  const push = () => {
    setShowPush(!showPush);
  };
  const push1 = () => {
    setShowPush1(!showPush1);
  };

  return (
    <div className="container1">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FiMenu onClick={toggle} />
          </div>
        </div>

        <NavLink to="/dashboard" className="link" activeclassName="active">
          <div className="icon">
            <AiOutlineHome />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Dashboard
          </div>
        </NavLink>
        <NavLink to="/customer" className="link" activeclassName="active">
          <div className="icon">
            <SlUser />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Customer
          </div>
        </NavLink>
        <div className="link" activeclassName="active">
          <div className="icon">
            <RxDashboard />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
            onClick={ShowCate}
          >
            Categories
          </div>
        </div>
        {showdrop && (
          <div>
            <div className="sidedrop">
              <NavLink
                to="/dashboard"
                className="link"
                activeclassName="active"
                onClick={push}
              >
              <BsFillCaretRightFill/>Agriculture
              </NavLink>
              {showPush && (
                <div className="sidedrop1">
                  <NavLink
                    to="/vegetable"
                    className="link"
                    activeclassName="active"
                  >
                    Vegetable
                  </NavLink>
                  <NavLink
                    to="/seeds"
                    className="link"
                    activeclassName="active"
                  >
                    Seeds
                  </NavLink>
                  <NavLink
                    to="/plants"
                    className="link"
                    activeclassName="active"
                  >
                    Plants
                  </NavLink>
                </div>
              )}
              <NavLink
                to="/categories"
                className="link"
                activeclassName="active"
              >
                <BsFillCaretRightFill/>Hardware
              </NavLink>
              <NavLink
                to="/categories"
                className="link"
                activeclassName="active"
              >
                <BsFillCaretRightFill/>Pesticide
              </NavLink>
            </div>
          </div>
        )}
        <NavLink to="/comment" className="link" activeclassName="active">
          <div className="icon">
            <AiOutlinePushpin />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Custom Push
          </div>
        </NavLink>
        <div
          className="link"
          activeclassName="active"
        >
          <div className="icon">
            <GoSettings />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
            onClick={push1}
          >
            Ledger Management
          </div>
        </div>
        {showPush1 && (
          <div className="sidedrop">
            <NavLink to="/category" className="link" activeclassName="active">
            <BsFillCaretRightFill/>Categaory
            </NavLink>
            <NavLink
              to="/subcategory"
              className="link"
              activeclassName="active"
            >
              <BsFillCaretRightFill/>Sub Categaory
            </NavLink>
            <NavLink to="/plants" className="link" activeclassName="active">
            <BsFillCaretRightFill/>Plants
            </NavLink>
          </div>
        )}
        <NavLink to="/productList" className="link" activeclassName="active">
          <div className="icon">
            <FiSettings />
          </div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            Setting
          </div>
        </NavLink>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
