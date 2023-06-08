import React, { useEffect, useState } from 'react'
import "./Login.css"
import { Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "./../../Images/logo.png"
import ConnectButton from './../../Components/ConnectButton';
import RegisterPage from '../RegisterPage/RegisterPage';
import IdToAddress from '../../Common/IdToAddress';
import Loader from '../../Components/Loader';
import UserInfo from '../../Common/UserInfo';
import AddressToId from '../../Common/AddressToId';
const Login = () => {
    const [viweId, setViewId] = useState("");
    const navigate = useNavigate()
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    async function viewLogin() {
        setLoading(true);
        console.log('first')
        try {
            const addr = await UserInfo(viweId);
            if (addr.userInfo[0] > 0) {
                //alert('find');
                localStorage.setItem("viewId", addr.userInfo[0]);
                localStorage.setItem("loginBy", 'view');
                localStorage.setItem('upline', 0);
                navigate("/dashboard")
                setLoading(false);
            } else {
                setMsg(<span className='text-danger'>User Not Exist.</span>);
                setLoading(false);
            }
        } catch (error) {
            setMsg(<span className='text-danger'>Something went wrong please check your network</span>);
            setLoading(false);
        }
    }


    async function automaticLogin() {
        setLoading(true);
        try {
            const { ethereum } = window;
            if (ethereum) {
                try {
                    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                    console.log("Found an account! Address: ", accounts[0]);
                    const userInfo = await AddressToId(accounts[0]);
                    if (userInfo > 0) {
                        localStorage.setItem("viewId", userInfo);
                        localStorage.setItem("loginBy", 'automatic');
                        localStorage.setItem('upline', 1);
                        navigate("/dashboard");
                        setLoading(false);
                    } else {
                        setMsg(<span className='text-danger'>Not Exist</span>);
                        setLoading(false);
                    }
                }
                catch (err) {
                    setLoading(false);
                    setMsg(<span className='text-danger'>Something went wrong</span>);
                }
            } else {
                setMsg(<span className='text-danger'>Wallet Not Exist</span>);
                setLoading(false);
            }
        } catch (error) {
            setMsg(<span className='text-danger'>Something Went Wrong</span>);
            setLoading(false);
        }
    }

    useEffect(() => {
        const viewInput = document.getElementById('viewInput');
        viewInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("viewBtn").click();
            }
        });
    }, [])

    return (
        <>
            {
                loading === true ? <Loader /> : ""
            }
            <div id='bgImage'>
                <Container id="logoContainer">
                    <img src={Logo} alt="logo.png" />
                    <ConnectButton />
                </Container>
                <div className="loginDiv">
                    <Container className="connectWalletContainer">
                        <Row className="connectWalletRow align-items-center">
                            <center>{msg}</center>
                            <Col md='6' className=" ">
                                <h4 className='heading'>AUTOMATIC REGISTRATION</h4>
                                <RegisterPage />
                                <p className='text-center'>Check the ID of Your inviter. <br></br>You can edit before proceed to payment.</p>
                            </Col>
                            <Col md='6' className="connectRegisterRight connectLoginRight connectRegisterLeft connectLoginLeft" >
                                <h3 className='heading' style={{ color: 'white' }}>Login to your personal account</h3>
                                <input type="text" id='viewInput' onChange={(e) => setViewId(e.target.value)} placeholder="Enter User ID." />
                                <div className="registerButtons">
                                    <button className="viewing bgOrange" id="viewBtn" onClick={viewLogin}>View</button>
                                </div>
                                <p style={{ color: 'white' }}>To access all the functions of your personal account use Auto Login</p>
                                <Link className="loginBtn" onClick={automaticLogin}>Automatic Login</Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Login