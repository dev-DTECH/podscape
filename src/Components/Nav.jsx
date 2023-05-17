import {React, useState } from "react";
import Modal from "react-modal";
import SearchIcon from "@mui/icons-material/Search";
import profile from "../images/profile.jpg";
import ModalAuth from "./modalAuth";
import "../App.css";

Modal.setAppElement("#root");

const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // function openModal() {
  //   setModalIsOpen(true);
  // }

  
    // setModalIsOpen(false);
  

  const modalStyle = {
    content: {
      width: "50%",
      height: "61%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#f2f2f2",
      borderRadius: "20px",
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };
  return (
    <>
      <div className="nav">
        <div className="search">
          <a href="#">
            <SearchIcon className="search-icon" />
          </a>
          <input type="text" placeholder="Search" className="search-box" />
        </div>
        <div className="dp">
          <a href="#">
            <img
              src={profile}
              alt="dp"
              className="account"
              // onClick={openModal}
            />
          </a>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={closeModal}
        contentLabel="Login/Signup Modal"
        style={modalStyle}
      >
      <ModalAuth />
      </Modal>
    </>
  );
};

export default Nav;
