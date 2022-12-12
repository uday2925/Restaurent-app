import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterag } from "../Redux/Action/filteraction";

const Filter = () => {
  const cat = ["All Items", "Rice Items", "Cold Drinks", "Pizza", "Hot Drinks"];
  const [filter, setFilter] = useState("All Items");
  const dispatch = useDispatch(); 
  return (
    <div>
      <center>
        <span className="h3 m-2">Filter :</span>
        <select
          name="filter"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          className="p-1 m-1"
        >
          {cat.map((ele, index) => {
            return (
              <option value={ele} key={index}>
                {ele}
              </option>
            );
          })}
        </select>
        <button
          className="btn btn-sm btn-primary m-2"
          onClick={() => {
            dispatch(filterag(filter));
          }}
        >
          Filter
        </button>
      </center>
    </div>
  );
};

export default Filter;
