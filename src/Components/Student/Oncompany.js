import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/Oncompany.css";
const Oncompany = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitform = () => {
    const { companyname, email, address, status } = user;

    if (companyname && email && address && status) {
      // alert("posted")
      axios.post("http://localhost:9002/company", user).then((res) => {
        alert(res.data.message);
        console.log(res);
      });
    } else {
      alert("Invalid Input ");
    }
  };

  return (
    <>
      <form className="form-container">
        <h1>Add Courier Deatails</h1>
        <div className="form-group">
          <label htmlFor="companyName" className="form-label">
            Courier Name:
          </label>
          <input
            type="text"
            name="companyname"
            value={user.companyname}
            placeholder="Company Name"
            onChange={handleChange}
            id="companyName"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyemail" className="form-label">
            Email ID:
          </label>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Your Email ID"
            onChange={handleChange}
            id="email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyAddress" className="form-label">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={user.address}
            placeholder="Comapany Address"
            onChange={handleChange}
            id="companyAddress"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyAddress" className="form-label">
            Status:
          </label>
          <select name="status" value={user.status} onChange={handleChange} >
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>

        </div>
        
       
        <div className="form-group">
          <label htmlFor="companyjaf" className="form-label">
            file:
          </label>
          <input type="file" id="companyjaf" className="form-input" />
        </div>
        
        <div type="submit" className="form-button" onClick={submitform}>
          Submit
        </div>
        <br />
        <div
          type="submit"
          className="form-button"
          onClick={() => history.push("/login")}
        >
          LogOut
        </div>
      </form>
    </>
  );
};
export default Oncompany;
