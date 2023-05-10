import React from "react";
import ReactLoading from "react-loading";
import "../css/Loading.css";
function Loading() {
  return (
    <div className="loading">
      <ReactLoading type="bubbles" color="green" height={100} width={50} />
    </div>
  );
}

export default Loading;
