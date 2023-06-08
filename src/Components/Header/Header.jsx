import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "./../../Images/logo.png";
import Logo2 from "./../../Images/logo2.png";
import { FiCopy } from "react-icons/fi";
import { HiMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiMenu } from "react-icons/fi";
import { setSidebarDisplay } from "./../../Redux/SideDisplaySlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserInfo from "../../Common/UserInfo";
import User from './../../Images/user.png'
import axios from 'axios';
const Header = () => {
  const [profileData, setProfileData] = useState([]);
  const [logo, setLogo] = useState(Logo);
  const [alertmsg, setAlertmsg] = useState("-130px");
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(0);
  const acc = localStorage.getItem("viewId");
  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  useEffect(() => {
    FetchData();
  }, [])

  async function FetchData() {
    try {
      let userD = await UserInfo(acc);
      console.log("userD", userD);
      setUserData(userD);

      axios({
        method: "get",
        url: 'https://meta-galaxy.us/project/user/update/getprofile',
        data: {
          id: userD?.userInfo?.id
        },
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          setProfileData(response?.data)
        })
        .catch(function (response) {
          console.log(response);
        });
    } catch (e) {
      console.log('e', e);
    }
  }
  const Dark = () => {
    localStorage.setItem('theme', 'dark')
    setLogo({ Logo });
    let ThemeColor = document.querySelector(":root");
    var rs = getComputedStyle(ThemeColor);
    ThemeColor.style.setProperty("--bodyColor", "#151515");
    ThemeColor.style.setProperty("--containerColor", "#1D1D1D");
    ThemeColor.style.setProperty("--textHeading", "#FFFFFF");
    ThemeColor.style.setProperty("--sideActiveColor", "#FFFFFF");
    ThemeColor.style.setProperty("--lightColor", "#252525");
    ThemeColor.style.setProperty("--borderColor", "#fff");
    ThemeColor.style.setProperty("--darkLightText", "#fff");
    ThemeColor.style.setProperty("--darkLightBackground", "#181818");
    ThemeColor.style.setProperty("--activeTextColor", "#FFFFFF");
  };
  const Light = () => {
    localStorage.setItem('theme', 'light')
    setLogo({ Logo2 });
    let ThemeColor = document.querySelector(":root");
    ThemeColor.style.setProperty("--bodyColor", "#F8F9F7");
    ThemeColor.style.setProperty("--containerColor", "#fff");
    ThemeColor.style.setProperty("--textHeading", "#151515");
    ThemeColor.style.setProperty("--sideActiveColor", "#73BA3F");
    ThemeColor.style.setProperty("--lightColor", "#d2ebd3");
    ThemeColor.style.setProperty("--borderColor", "#73BA3F");
    ThemeColor.style.setProperty("--darkLightText", "#73BA3F");
    ThemeColor.style.setProperty("--darkLightBackground", "#EFEFEF");
    ThemeColor.style.setProperty("--activeTextColor", "#73BA3F");
  };
  function Copycode(id) {
    var text = document.getElementById("myLink").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    console.log(elem.value);
    document.body.removeChild(elem);
  }
  const AlertMsg = async () => {
    setAlertmsg("20px");
    let delayres = await delay(1000);
    setAlertmsg("-130px");
  };
  function MyChange(string) {
    if (string) {
      let firstFour = string.slice(0, 6);
      let lastFour = string.slice(-8);
      let subString = firstFour + "..." + lastFour;
      return subString;
    } else {
      return ""
    }
  };

  return (
    <>
      <div className="header">
        <div className="alertMsg" style={{ top: alertmsg }}>
          Link Copied!
        </div>
        <div>
          <div>
            <img id="logoicon" src={Logo} alt="logo.png" />
          </div>
          <div className="headerLogoLink headerLinkHeader">
            <div
              className="headerLinkDiv"
              onClick={() => (Copycode(), AlertMsg())}
            >
              <div className="linktext">
                <p>your refferal link</p>
                <p className='d-none ' id="myLink">{parseInt(userData?.userInfo?.id) != 0 ? window.location.origin + '/?ref=' + acc : 'Not Register'}</p>
                <span >{MyChange(window.location.origin + '/?ref=' + acc)}</span>
              </div>
              <i>
                <FiCopy />
              </i>
            </div>
          </div>
        </div>
        <div className="headerProfileColorDiv">
          <div className="themeChangeIcons">
            <p>
              color <br></br>mode
            </p>
            <i id="moon" onClick={Dark}>
              {" "}
              <HiMoon />
            </i>
            <i onClick={Light}>
              <HiSun />
            </i>
          </div>
          <Link to="profile">
            <div className="headerProfile">
              <img src={User} alt="user.png" className="userImage" />

              <h5>{profileData?.name}</h5>
              <i>
                <TiArrowSortedDown />
              </i>
            </div>
          </Link>
          <i
            className="menuIcon"
            onClick={() => dispatch(setSidebarDisplay("block"))}
          >
            <FiMenu />
          </i>
        </div>
      </div>
    </>
  );
};
export default Header;
