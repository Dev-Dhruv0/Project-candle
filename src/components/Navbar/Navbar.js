import { NavLink, Outlet } from "react-router-dom";
import './Navbar.css';
import Searchmodal from "../../Utils/Search Modal/Searchmodal";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body py-2" id="navbar">
        <div className="container">
          <div className="d-flex w-100 align-items-center">
            <div className="me-auto d-flex align-items-center">
              {/* Offcanvas Toggle Button for small Screens */}
              <button
                className="btn d-lg-none btn-lg"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasLeft"
                aria-controls="offcanvasLeft"
              >
                <i className="fi fi-rr-menu-burger"></i>
              </button>

              {/* Offcanvas Toggle Button for Large Screens */}
              <button
                className="btn btn d-none d-lg-block btn-sm"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasLeft"
                aria-controls="offcanvasLeft"
                style={{ fontSize: "24px" }}
              >
                <i className="fi fi-rr-menu-burger"></i>
              </button>
            </div>

            {/* <a className="navbar-brand fs-3 mx-auto" href="#">
              Navbar
            </a> */}

            <NavLink to="/" className="navbar-brand fs-3 mx-auto">
            <img src="/Images/SEVA_HOME_Logo.avif" alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
            </NavLink>

            {/* Nav Links for Large Screens */}
            <div className="d-none d-md-flex ms-auto">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                  <li className="nav-item">
                    <NavLink to="/" className="nav-link me-3">
                      <i className="fi fi-rr-home fs-4"></i>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link me-3">
                      <i className="fi fi-rr-user fs-4"></i>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <button 
                    className="btn nav-link me-3"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                    >
                      <i className="fi fi-rr-search fs-4"></i>
                    </button>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/wishlist" className="nav-link me-3">
                      <i className="fi fi-rr-heart fs-4"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu for All Screens */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasLeft"
        aria-labelledby="offcanvasLeftLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLeftLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link offcanvas-nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link offcanvas-nav-link">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/wishlist" className="nav-link offcanvas-nav-link">
                Wishlist
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Searchmodal />
      <Outlet />
    </>
  );
};

export default Navbar;
