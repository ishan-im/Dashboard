import React from "react";
import classes from "./Navbar.module.css";

import { pink } from "@mui/material/colors";

import { NavLink } from "react-router-dom";

import { Radio } from "@mui/material";

import { MdSpaceDashboard } from "react-icons/md";

function Navbar() {
  return (
    <div className="col-auto col-md-3 col-xl-2">
      <nav
        className={`${classes.sidebar__Wrapper}  d-flex flex-column align-items-center   pt-2 text-white vh-100`}
      >
        <a
          href="/"
          className={`d-flex align-items-center  text-white text-decoration-none ${classes.navbar__Header}`}
        >
          <MdSpaceDashboard className={classes.button} />
          <span className="fs-5 d-none d-sm-inline">Dashboard</span>
        </a>
        <ul
          className={`nav nav-pills flex-column mb-sm-auto mb-0  align-items-center justify-content-start container-fluid ${classes.Navbar__List}`}
          id="menu"
        >
          <li className={classes.List__item}>
            <NavLink to="/users" className={`nav-link px-0 align-middle ${(navData) => navData.isActive ? classes.List__item__active : ''}`}>
              <div className="form-check">
                <Radio
                  sx={{
                    color: pink[50],
                    "&.Mui-checked": {
                      color: pink[50],
                    },
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Users
                </label>
              </div>
            </NavLink>
          </li>
          
          <li className={classes.List__item}>
            <NavLink to="/groups" className={`nav-link px-0 align-middle ${(navData) => navData.isActive ? classes.List__item__active : ''}`}>
              <div className="form-check">
                <Radio
                  sx={{
                    color: pink[50],
                    "&.Mui-checked": {
                      color: pink[50],
                    },
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Groups
                </label>
              </div>
            </NavLink>
          </li>
        
          <li className={classes.List__item}>
            <NavLink to="links" className={`nav-link px-0 align-middle ${(navData) => navData.isActive ? classes.List__item__active : ''}`}>
              <div className="form-check">
                <Radio
                  sx={{
                    color: pink[50],
                    "&.Mui-checked": {
                      color: pink[50],
                    },
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
            </NavLink>
          </li>
          <li className={classes.List__item}>
            <NavLink to="new" className={`nav-link px-0 align-middle ${(navData) => navData.isActive ? classes.List__item__active : ''}`}>
              <div className="form-check">
                <Radio
                  sx={{
                    color: pink[50],
                    "&.Mui-checked": {
                      color: pink[50],
                    },
                  }}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
            </NavLink>
          </li>
        </ul>
        <hr />
      </nav>
    </div>
  );
}

export default Navbar;
