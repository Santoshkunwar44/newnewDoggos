import React, { useState, useEffect, useContext } from "react";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./Navbar.css";
import { DoggosContext } from "../context/context";
import AuthenticationModal from "./modal/Authenticate";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Link } from "react-router-dom"
import { getLoggedOut } from "../services/utilityFunctions";
function Navbar() {

  const [appWidth, setAppWidth] = useState(null);
  const { dispatch, showSidebar, userData } = useContext(DoggosContext);

  useEffect(() => {
    setAppWidth(window.innerWidth);
    window.addEventListener("resize", handleResponsive);
  }, []);

  const handleResponsive = () => {
    let width = window.innerWidth;
    setAppWidth(width);
  };

  useEffect(() => {
    if (+appWidth < 700) {
      if (!showSidebar) {
        dispatch({ type: "setShowSidebar" });
      }
    } else {
      if (showSidebar) {
        dispatch({ type: "setHideSidebar" });
      }
    }
  }, [appWidth]);

  return (
    <nav className="navbar">
      <div className="nav_left">
        <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
          <img
            width={"55px"}
            src="/images/logo.png"
            alt="logo"
            draggable={"false"}
          />
          <h2>
            <span className="logo_text_first" style={{ color: "#CE6816" }}>
              Pets
            </span>{" "}
            <span>Heaven</span>{" "}
          </h2>
        </Link>
      </div>
      <div className="nav_right">
        <div className="app_text">
          <h1>Adopt Us Today!</h1>
        </div>

        {userData ? (
          <div className="registration_box">
            <button
              className="mainBtns"
              onClick={() => {
                getLoggedOut();
                dispatch({ type: "logout" });
                dispatch({ type: "setSnackData", payload: { open: true, text: "You Logged Out of PetHeaven" } })
              }}
            >
              <LockIcon className="navIcons" style={{ color: "white" }} />{" "}
              <span>Logout</span>
            </button>{" "}
          </div>
        ) : (
          <div className="registration_box">
            <AuthenticationModal type={"LOgin"}>
              <button className="mainBtns">
                <LockOpenIcon className="navIcons" />
                <span>Login</span>
              </button>
            </AuthenticationModal>
            <div className="hrLineBox">
              <div className="hrLine"></div>
              <span>Or</span>

              <div className="hrLine"></div>
            </div>
            <AuthenticationModal type={"SignUP"}>
              <button className="mainBtns">
                <HowToRegIcon className="navIcons" />
                <span>Sign up</span>
              </button>
            </AuthenticationModal>
          </div>
        )}

        <ListOutlinedIcon
          onClick={() =>
            dispatch({
              type: showSidebar ? "setHideSidebar" : "setShowSidebar",
            })
          }
          className="mainIcons nav_more_icon"
          sx={{ position: "absolute", right: "20px", fontSize: "2rem" }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
