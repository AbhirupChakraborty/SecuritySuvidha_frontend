import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/Oncompany.css";
const Oncompany = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitform = () => {
    let { cname, email, address, status } = user;
    console.log(user)
    if (cname && email && address && status) {
      // alert("posted")
      axios.post("http://localhost:9002/company", user).then((res) => {
        alert(res.data.message);
        console.log(res);
      });
    } else {
      console.log(cname);
      alert("Invalid Input ");
    }
  };

  return (
    <>
      <form className="form-container">
        <h1>Add Courier Details:</h1>
        <div className="form-group">
          <label htmlFor="cname" className="form-label">
            Courier Name:
          </label>
          <input
            type="text"
            name="cname"
            value={user.cname}
            placeholder="Courier Name"
            onChange={handleChange}
            id="cname"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyemail" className="form-label">
            Courier-ID:
          </label>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Courier ID"
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
            placeholder="Courier Address"
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
            Proof:
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
        <br />
            <div  type="submit"
          className="form-button" onClick={() => history.push("/deletecourior")}>
              Delete Courior
            </div>
          
      </form>
    </>
  );
};
export default Oncompany;
