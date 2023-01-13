import React from "react";
import "./Dashboard.css";
import { Container } from "react-bootstrap";
import { SlUser, SlUserFollow, SlUserFollowing } from "react-icons/sl";
import { FaMoneyCheckAlt } from "react-icons/fa";
import {
  FcCurrencyExchange,
  FcFlowChart,
  FcOrgUnit,
} from "react-icons/fc";

const Dashboard = () => {
  return (
    <Container className="dashboardrowmain">
      <div className="dashboardrow">
        <div className="dashboardcol">
          <div className="shiv">
            <SlUser className="dashicons" />
            <p>Here you can see </p>
          </div>
            <hr className="dashhr"></hr>
          <h3>50000</h3>
        </div>
        <div className="dashboardcol">
          <div className="shiv">
            <SlUser className="dashicons" />
            <p>Total users</p>
          </div>
            <hr className="dashhr"></hr>
          <h3>500</h3>
        </div>
        <div className="dashboardcol">
          <div className="shiv">
            <SlUserFollowing className="dashicons" />
            <p>Total active users </p>
          </div>
            <hr className="dashhr"></hr>
          <h3>50000</h3>
        </div>
        <div className="dashboardcol">
          <div className="shiv">
            <SlUserFollow className="dashicons" />
            <p>Total paid users </p>
          </div>
            <hr className="dashhr"></hr>
          <h3>500</h3>
        </div>
        <div className="dashboardcol">
          <div className="shiv">
            <FaMoneyCheckAlt className="dashicons" />
            <p>Total revenue</p>
          </div>
            <hr className="dashhr"></hr>
          <h3>00</h3>
        </div>
        <div className="dashboardcol">
          <div className="shiv">
            <FcCurrencyExchange className="dashicons" />
            <p>Monthly revenue </p>
          </div>
            <hr className="dashhr"></hr>
          <h3>00</h3>
        </div>
        <div className="dashboardcol">
          <div className="shiv">
            <FcFlowChart className="dashicons" />
            <p>Total categories</p>
          </div>
            <hr className="dashhr"></hr>
          <h3>00</h3>
        </div>
        <div className="dashboardcol">
          <div className="shiv">
            <FcOrgUnit className="dashicons" />
            <p>Categories-wises report </p>
          </div>
            <hr className="dashhr"></hr>
          <h3>00</h3>
        </div>
       
      </div>
    </Container>
  );
};

export default Dashboard;
