import React from "react";
import Logo from "./logo";
// import { SidebarData } from './SidebarData';
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import "../App.css";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  // let link = document.querySelector('.link');

  //   link.addEventListener('click', () => {
  //
  //   });
  function active() {
    // let link = document.querySelector(".link");
    this.classList.add("active");
  }

  return (
    <>
      <div className="sidebar">
        <Logo />
        <ul className="sidebar-list">
          <li className="row">
            <Link to="/" className="link" onClick={active}>
              <div className="row-icon">
                <HomeIcon />
              </div>
              <div className="row-head">Home</div>
            </Link>
          </li>
          <li className="row">
            <Link to="/favourites" className="link" onClick={active}>
              <div className="row-icon">
                <FavoriteBorderIcon />
              </div>
              <div className="row-head">Favourites</div>
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
