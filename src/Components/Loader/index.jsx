import React from "react"; 

const Loading = ({ loading, width, height}) => (
  <div className={`load${loading ? "" : " loaded"}`} style={{width:width,height:height}}>
    <div className="load__icon-wrap">
    <svg id="svg-spinner" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <circle cx="24" cy="4" r="4" fill="transparent"/>
    <circle cx="12.19" cy="7.86" r="3.7" fill="#007ACC"/>
    <circle cx="5.02" cy="17.68" r="3.4" fill="#007ACC"/>
    <circle cx="5.02" cy="30.32" r="3.1" fill="#007ACC"/>
    <circle cx="12.19" cy="40.14" r="2.8" fill="#007ACC"/>
    <circle cx="24" cy="44" r="2.5" fill="#007ACC"/>
    <circle cx="35.81" cy="40.14" r="2.2" fill="#007ACC"/>
    <circle cx="42.98" cy="30.32" r="1.9" fill="#007ACC"/>
    <circle cx="42.98" cy="17.68" r="1.6" fill="#007ACC"/>
    <circle cx="35.81" cy="7.86" r="1.3" fill="#007ACC"/>
  </svg>
    </div>
  </div>
);

Loading.defaultProps = {
  loading: false,
};

export default Loading;
