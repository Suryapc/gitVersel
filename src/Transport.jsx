import React from "react";
 import Office from "./assets/Images/office.jpg";
import "./Routing.css"
const Routing = () => {
  
  let imgStyle = {
    width: "20%",
    padding: "10px 15px",
  };

  return (
    // row starts
     <>
    <h3 className="text-center p-5 border border-secondary bg-warning h2 fw-bold title_design">HINDUSTAN TRANSPORT</h3>
    <div class="row">

   {/* col1 starts */}
    <div className="col-sm-3 ">
      
    {/* <img src={Office} style={imgStyle} />  */}
      
        <div className="h3 p-4 border border-secondary ">AIRWAYS</div>
        <div className="h3 p-4 border border-secondary ">ROADWAYS </div>
        <div className="h3 p-4 border border-secondary ">WATER WAYS </div>
   
    </div>
     {/* col2 starts */}
    <div className="col-sm-3 sidebar">

      Hello
    </div>

    </div>
    {/* // row ends */}
    </>
  );
};

export default Routing;
