import React from "react";
import loader from '../../../assets/img/loader.gif'
import './loader.css'
 const Loader = () => {

    return (
        <div>
    <img className="loader" alt="loader" src={loader} />
        </div>
      
    );
};

export default Loader;
