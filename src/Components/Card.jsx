import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderitemag } from "../Redux/Action/orderitemaction";

const Card = () => {
  const [data, setData] = useState([]);
  //for filtering
  const [sparedata, setsparedata] = useState([]);
  const filterres = useSelector((store) => store.filterreducer.filter_name);
  //console.log(filterres)
  const { table_number } = useSelector((store) => store.tablereducer);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(
      "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.items);
        setsparedata(res.items);
      });
  }, []);

  useEffect(() => {
    if (filterres !== "All Items") {
      setData(
        sparedata.filter((ele) => {
          return ele.category === filterres;
        })
      );
      // console.log(data)
    } else {
      setData(sparedata);
    }
  }, [filterres]);

  return (
    <center>
      <div  className="d-flex justify-content-center m-1" style={{ display: "flex", flexWrap: "wrap" }}>
        {data.length > 0 ? (
          data.map((ele, ind) => {
            return (
              <div className="col-md-4" key={ele.id}>
                <div className="card m-2 p-1">
                  <img
                    src={ele.url}
                    className="card-img-top"
                    alt={ele.id}
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">{ele.name}</h4>
                    <div className="card-text">{`price:${ele.prize}`}</div>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        if (table_number === null) {
                          alert("Please select table");
                        } else {
                          dispatch(orderitemag({...ele,table_number:table_number}));
                        }
                      }}
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="spinner-border text-success m-2" role="status">
            <center>
              <span className="sr-only">Loading...</span>
            </center>
          </div>
        )}
      </div>
    </center>
  );
};

export default Card;
