import { useSelector } from "react-redux";

export const Orders = () => {
  const data = useSelector((store) => store.orderreducer) || [];
  console.log(data);
  return (
    <center>
      <div className="d-flex justify-content-center" style={{ display: "flex", flexWrap: "wrap" }}>
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
                    <h5 className="card-text">{`Price:${ele.prize}`}</h5>
                    <h6>{`Table no:- ${ele.table_number}`}</h6>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
        //   <div className="spinner-border text-success" role="status">
        //     <span className="sr-only">
        //       <center>Loading...</center>
        //     </span>
            <div className="text-center m-5">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
        //   </div>
        )}
      </div>
    </center>
  );
};
