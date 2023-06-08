import React, { useEffect, useState } from 'react'
import "./RegisterPage.css"
import Loader from '../../Components/Loader';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import ContractDetails from '../../Contracts/ContractDetails';
import IsUserExists from '../../Common/IsUserExists';
import UserInfo from '../../Common/UserInfo';
import AddressToId from '../../Common/AddressToId';
const RegisterPage = () => {

    const navigate = useNavigate();
    const [spons, setSponsor] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const after = window.location.search.slice(window.location.search.indexOf('=') + 1);
        console.log("url here", after);
        setSponsor(after)
    }, [])
    async function CheckExist() {
        setLoading(true);
        try {
            const { ethereum } = window
            let myaccounts = await ethereum.request({ method: 'eth_requestAccounts' });
            let usInfo = await IsUserExists(myaccounts[0]);
            // alert(usInfo)
            return usInfo
        } catch (e) {
            setLoading(false);
            setMsg(<span className='text-danger'>Something Went Wrong</span>);
        }
    }
    async function register() {
        setLoading(true);
        try {
            let userEx = await CheckExist();
            if (userEx == false) {
                const userId = await UserInfo(spons);
                const { ethereum } = window;
                if (ethereum) {
                    if (userId.userInfo[0] > 0) {
                        const provider = new ethers.providers.Web3Provider(ethereum);
                        const signer = provider.getSigner();
                        const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer);
                        console.log("Instance : " + contractinstance);
                        let inc = await contractinstance.register(spons, { value: ethers.utils.parseEther('0') });

                        await inc.wait();
                        console.log("Tr Hash : " + inc.hash);

                        setMsg("Register Success.");
                        localStorage.setItem('upline', 1);
                        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                        let userIdd = await AddressToId(accounts[0])
                        localStorage.setItem("viewId", userIdd);
                        localStorage.setItem("loginBy", 'automatic');
                        navigate("/dashboard");
                        setLoading(false);
                    }
                    else {
                        setLoading(false);
                        setMsg(<span className='text-danger'>Sponsor Not Exist</span>);
                    }
                }
            } else {
                setLoading(false);
                setMsg(<span className='text-danger'>User Already Exists</span>);
            }
        } catch (error) {
            setMsg(<span className='text-danger'>Something went wrong</span>)
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        const viewInput = document.getElementById('sponsor');
        viewInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("registerBtn").click();
            }
        });
    }, [])

    return (
        <>
            {
                loading === true ? <Loader /> : ""
            }
            <span className='text-danger'>{msg}</span>
            <div className="connectRegisterLeft">
                <input type="text" placeholder="Enter Sponsor ID." value={spons} onChange={(e) => setSponsor(e.target.value)} id="sponsor" />
                <div className="registerButtons">
                    <button className="viewing bgOrange" id="registerBtn" onClick={register}>Register</button>
                </div>
            </div>
        </>
    )
}

export default RegisterPage