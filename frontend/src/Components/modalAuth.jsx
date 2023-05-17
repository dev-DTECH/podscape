import React from 'react'
import banner from "../images/banner.jpg";
import banner2 from "../images/banner2.jpg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import "../modal.css";

const ModalAuth = () => {
    return (
        <>
            <div className="container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src={banner} alt="" />
                        <div className="text">
                            <span className="text-1">
                                Listen up and tune in,<br /> it's time for your <br />podcasting spin!
                            </span>
                            <span className="text-2">Let's get connected</span>
                        </div>
                    </div>
                    <div className="back">
                        <img src={banner2} alt="" className="backImage" />
                        <div className="text">
                            {/* <span className="text-1" style={{color: '#f2f2f2'}}>
                  Complete miles of journey <br /> with one step
                </span>
                <span className="text-2" style={{color: '#f2f2f2'}}>Let's get started</span> */}
                        </div>
                    </div>
                </div>
                <div className="forms">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Log in</div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <MailOutlineIcon style={{ color: "#7d2ae8" }} />
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <LockIcon style={{ color: "#7d2ae8" }} />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    {/* <div className="text"><a href="#">Forgot password?</a></div> */}
                                    <div className="button input-box">
                                        <input type="submit" value="Submit" />
                                    </div>
                                    <div className="text sign-up-text">
                                        Don't have an account?{" "}
                                        <label htmlFor="flip">Sigup now</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-form">
                            <div className="title">Sign up</div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <PersonIcon style={{ color: "#7d2ae8" }} />
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <MailOutlineIcon style={{ color: "#7d2ae8" }} />
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="input-box">
                                        <LockIcon style={{ color: "#7d2ae8" }} />
                                        <input
                                            type="password"
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <div className="button input-box">
                                        <input type="submit" value="Submit" />
                                    </div>
                                    <div className="text sign-up-text">
                                        Already have an account?{" "}
                                        <label htmlFor="flip">Login now</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalAuth
