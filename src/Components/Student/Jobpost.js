import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/Jobpost.css";
import Sidebar from "./Sidebar";

const Jobpost = () => {
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9002/companydata").then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Sidebar />
      <h1>Couriers : </h1>
      <div className="grid">
        {mydata.slice(0, 9).map((post) => {
          const { companyname, email, address, city, state, zipcode } = post;
          return (
            <div className="card">
              <h2>Company Name : {companyname}</h2>
              <h3>Address : {address}</h3>
              <h3>City : {city}</h3>
              <h3>State : {state}</h3>
              <h3>Zipcode : {zipcode}</h3>
              <h3>Email ID : {email}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobpost;
