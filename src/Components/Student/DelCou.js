import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "../Css/delcou.css"
const Delcou =()=>{
    const history = useHistory();
    const [page, setPage] = useState(true);
    const [data, setData] = useState({});

    useEffect(()=>{
        handleupdate();
    },[]);

    const handleupdate=()=>{
        axios.get("http://localhost:9002/getallcourior").then((res)=>{
            setData(res.data);
            console.log(res.data);

        });
    };
    const handleDelete = (email) => {
        axios
          .delete(`http://localhost:9002/courior/delete/${email}`)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return(
        <>
         <div className="list">
                <h1>List Of Members : </h1>
                <div className="gridd">
                  {Array.from(data).map((post) => {
                    const { email } = post;
                    return (
                      <div className="cardd">
                        <p>{email}</p>
                        <div
                          className="delete"
                          onClick={() => handleDelete(email)}
                        >
                          DEL
                        </div>
                      </div>
                    );
                  })}
                </div>
                </div>
                <div className="form-button1" onClick={() => history.push("/login")}>
              Logout
            </div>

        </>
    );
};
export default Delcou