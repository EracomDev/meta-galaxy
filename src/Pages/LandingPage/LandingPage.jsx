import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import "./LandingPage.css";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Logo from "./../../Images/logo.png";
import NavPages from "../../NavPages";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarDisplay } from "./../../Redux/SideDisplaySlice";
import { FiCopy } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { ImSwitch } from "react-icons/im";
import { TbLogout } from "react-icons/tb";
import UserInfo from "../../Common/UserInfo";
const LandingPage = () => {
  const sideDisplay = useSelector((state) => state.sideDisplay.value);
  const [alertmsg, setAlertmsg] = useState("-130px");
  const [userData, setUserData] = useState([])
  const acc = localStorage.getItem("viewId");
  const delay = (delayInms) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("load", () => { });
  });
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    });
    return windowDimensions;
  }
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    // console.log(width)
    if (width > 1000) {
      dispatch(setSidebarDisplay("block"));
    } else {
      dispatch(setSidebarDisplay("none"));
    }
  }, [width]);
  const AlertMsg = async () => {
    setAlertmsg("20px");
    let delayres = await delay(1000);
    setAlertmsg("-130px");
  };
  function Copycode() {
    var text = document.getElementById("myLink").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    console.log(elem.value);
    document.body.removeChild(elem);
  }
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/')
  }
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
  useEffect(() => {
    FetchData();
  }, [])

  async function FetchData() {
    try {
      let userD = await UserInfo(acc);
      console.log("userD", userD);
      setUserData(userD);
    } catch (e) {

    }
  }
  return (
    <>
      <section className="landingPage">
        <div id="CopiedMsg" className="alertMsg" style={{ top: alertmsg }}>
          Link Copied!
        </div>
        <Container fluid>
          <section className="landingPageContent">
            <div className="sidebar" style={{ display: sideDisplay }}>
              <div className="sidebarlogoDiv">
                <img src={Logo} alt="" />
                <i onClick={() => dispatch(setSidebarDisplay("none"))}>
                  <RxCross2 />
                </i>
              </div>

              <div id="sideItems">
                <NavLink
                  to="/dashboard"
                  exact={true}
                  end
                  activeClassName="activeTab"
                  onClick={() =>
                    width < 1000 ? dispatch(setSidebarDisplay("none")) : ""
                  }
                >
                  <div className="sideLink">
                    <i>
                      <RxDashboard />
                    </i>
                    <h5>Dashboard</h5>
                  </div>
                </NavLink>
                <NavLink
                  to="/dashboard/partners"
                  exact={true}
                  activeClassName="activeTab"
                  onClick={() =>
                    width < 1000 ? dispatch(setSidebarDisplay("none")) : ""
                  }
                >
                  <div className="sideLink">
                    <i>
                      <HiOutlineUserGroup />
                    </i>
                    <h5>Partners</h5>
                  </div>
                </NavLink>
                {/* <div id="partnershipSideFullDiv">
                  <div
                    className="sideLink"
                    onClick={() => (
                      partnerSideIcon === "180deg"
                        ? setPartnerSideIcon("0deg")
                        : setPartnerSideIcon("180deg"),
                      partnerDropdown === "0px"
                        ? setPartnerDropdown("105px")
                        : setPartnerDropdown("0px"),
                      partnerDropdownVisi === "hidden"
                        ? setPartnerDropdownVisi("visible")
                        : setPartnerDropdownVisi("hidden")
                    )}
                  >
                    <i>
                      <HiOutlineUserGroup />
                    </i>
                    <div id="partnershipSideDiv">
                      <h5>Partnership </h5>
                      <i style={{ transform: `rotate(${partnerSideIcon})` }}>
                        <IoIosArrowUp />
                      </i>
                    </div>
                  </div>
                  <div
                    id="sideDropdown"
                    style={{
                      height: partnerDropdown,
                      visibility: partnerDropdownVisi,
                    }}
                  >
                    <NavLink
                      to="/dashboard/my_team"
                      exact={true}
                      activeClassName="activeTab"
                      onClick={() =>
                        width < 1000 ? dispatch(setSidebarDisplay("none")) : ""
                      }
                    >
                      <p>My Team</p>
                    </NavLink>
                    <NavLink
                      to="/dashboard/bonus_system"
                      exact={true}
                      activeClassName="activeTab"
                      onClick={() =>
                        width < 1000 ? dispatch(setSidebarDisplay("none")) : ""
                      }
                    >
                      <p>Bonus System</p>
                    </NavLink>

                    <NavLink
                      to="/dashboard/binary_system"
                      exact={true}
                      activeClassName="activeTab"
                      onClick={() =>
                        width < 1000 ? dispatch(setSidebarDisplay("none")) : ""
                      }
                    >
                      <p>Binary System</p></NavLink>
                  </div>
                </div>
                <NavLink
                  to="/dashboard/plans"
                  exact={true}
                  activeClassName="activeTab"
                  onClick={() =>
                    width < 1000 ? dispatch(setSidebarDisplay("none")) : ""
                  }
                >
                  <div className="sideLink">
                    <i>
                      <BsBookmarkCheck />
                    </i>
                    <h5>Plans</h5>
                  </div>
                </NavLink>
                <NavLink
                  to="/dashboard/news"
                  exact={true}
                  activeClassName='activeTab'
                  onClick={() =>
                    width < 1000 ? dispatch(setSidebarDisplay("none")) : ""
                  }
                >
                  <div className="sideLink">
                    <i>
                      <BiNews />
                    </i>
                    <h5>News</h5>
                  </div></NavLink>
                <NavLink
                  to="/dashboard/promo"
                  exact={true}
                  activeClassName='activeTab'

                  onClick={() =>
                    width < 1000 ? dispatch(setSidebarDisplay("none")) : ""
                  }
                >
                  <div className="sideLink">
                    <i>
                      <FaRegStar />
                    </i>
                    <h5>Promo</h5>
                  </div></NavLink>
                <NavLink
                  to="/dashboard/support"
                  exact={true}
                  activeClassName='activeTab'
                  onClick={() =>
                    width < 1000 ? dispatch(setSidebarDisplay("none")) : ""
                  }
                >
                  <div className="sideLink">
                    <i>
                      <MdOutlineSupport />
                    </i>
                    <h5>Support</h5>
                  </div></NavLink> */}
                <div className="sideLink" onClick={logout}>
                  <i>
                    <TbLogout />
                  </i>
                  <h5>Logout</h5>
                </div>
              </div>
            </div>
            <div className="dashboardPages">
              <Header />
              <div className="headerLogoLink headerLinkDash">
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
              <div id="topNotification">
                <div className="planTopImg">
                  <div>
                    <p>Official Launch Dubai</p>
                    <button
                      className="btnPrimary m-0"
                      style={{
                        width: "150px",
                        background: "#F1C455",
                        boxShadow: "0px 0px 10px 0 #F1C455",
                      }}
                    >
                      More info
                    </button>
                  </div>
                </div>
              </div>
              <NavPages />
            </div>
          </section>
          <Footer />
        </Container>

        <div className="bottomNavbar">
          <Row>
            <Col xs="4">
              <NavLink activeClassName="activeTab" end to="/dashboard"><div>

                <div className="activeNav">
                  <i><AiFillHome /></i>
                  <p>Dashboard</p>
                </div>
              </div></NavLink>
            </Col>

            <Col xs="4">
              <NavLink activeClassName="activeTab" to="/dashboard/partners">
                <div className="activeNav">
                  <i><IoIosPeople /></i>
                  <p>Partners</p>
                </div>
              </NavLink></Col>

            <Col xs="4">
              <div className="activeNav text-center" onClick={logout}>
                <i><ImSwitch /></i>
                <p>Sign Out</p>
              </div></Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
