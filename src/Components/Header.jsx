import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const data=useSelector(store=>store.orderreducer)||[];
  const navigate=useNavigate()
  return (
    <div>
      <center>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Restaurent
          </a>
          <button className="btn btn-primary" onClick={()=>{navigate("/orders")}}>
            Orders<span className="badge be-secondary">{data.length}</span>
          </button>
        </nav>
      </center>
    </div>
  );
};

export default Header;
