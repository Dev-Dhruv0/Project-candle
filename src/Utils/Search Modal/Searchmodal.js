import React from "react";
import "./Searchmodal.css";

const Searchmodal = () => {
  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex="-1"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          {/* Modal Body */}
          <div className="modal-body">
            {/* Box Container */}
            <div className="search-box-container">
              <form className="d-flex align-items-center w-100">
                {/* Search Button */}
                <button className="btn" type="button">
                  {/* Search Icon */}
                  <i className="fi fi-rr-search"></i>
                </button>

                {/* Search Input */}
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchmodal;
