import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTablenumberag} from "../Redux/Action/action";



const Table = () => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const active = "btn btn-outline-primary active m-2";
  const inactive = "btn btn-outline-primary m-2"; 
  //from store;
  const {table_number:tablenumber}=useSelector(store=>store.tablereducer);
  const dispatch=useDispatch();

  //console.log("tn",tablenumber);
  return (
    <div style={{ display: "inline" }}>
        <h4>please select your table</h4>
      {tables.map((ele, index) => {
        return (
          <button className={tablenumber===ele?active:inactive} key={index} onClick={()=>{
            dispatch(setTablenumberag(ele));        
          }}>
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default Table;
