import React, { useContext } from "react";
// import { useEffect } from 'react';
import { useRef } from "react";
import alertContext from "../context/alerts/AlertContext";

const Alert = () => {
  const alertcontext = useContext(alertContext);
  const { show, alertInfo} = alertcontext;
  const openref = useRef(null);
  const closeref = useRef(null);
  if (show) openref.current.click();

  if(show){
	  setTimeout(() => {
	   closeref.current.click();
	 }, 2000);

  }

  return (
    <>
      <div className="text-center d-none">
        {/* <!-- Button HTML (to Trigger Modal) --> */}
        <a
          href="#myModal"
          ref={openref}
          className="trigger-btn"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Click to Open Success Modal
        </a>
      </div>

      {/* <!-- Modal HTML --> */}
	
      <div id="myModal" className="modal fade">
        <div className="modal-dialog modal-confirm">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <div className="icon-box">
                <i className="material-icons">&#xE876;</i>
              </div>
              <button
                type="button"
                ref={closeref}
                className="close"
                data-bs-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body text-center">
              <h4>{alertInfo.type} !</h4>
              <p>{alertInfo.msg}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Alert;
