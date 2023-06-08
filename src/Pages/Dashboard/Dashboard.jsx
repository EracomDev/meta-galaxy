import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Row, Col, Container } from "react-bootstrap";
import { CgDollar } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import Rank from "./../../Images/rank1.png";
import { HiArrowTrendingUp } from "react-icons/hi2";
import News1 from "./../../Images/news1.jpg";
import { Link } from "react-router-dom";
import ProgramCard from "../../Components/ProgramCard/ProgramCard";
import UserInfo from "../../Common/UserInfo";
import Income from "../../Common/Income";
import Change from "../../Common/StringToSub";
import { IoCopyOutline } from "react-icons/io5";
import CopyToClipboard from "../../Common/CopyToClipboard";
import Loader from "../../Components/Loader";
import GetSlotIncome from "../../Common/GetSlotIncome";
import { ethers } from 'ethers';
import ContractDetails from "../../Contracts/ContractDetails";
const Dashboard = () => {
  const { BigInt } = window;
  const [userData, setUserData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);
  const [slotIncome, setSlotIncome] = useState([]);
  const [slotAmount, setSlotAmount] = useState(0);
  const [slotVal, setSlotVal] = useState(0);
  const [withdrawInput, setWithdrawInput] = useState(0)
  const [matrixData, setMatrixData] = useState([]);
  const [acc, setAccount] = useState(localStorage.getItem("viewId"));
  const [loading, setLoading] = useState(false);
  const upline = localStorage.getItem('upline');
  useEffect(() => {
    console.log('acc', acc)
    FetchData()
  }, [])
  let val = 0;
  function refresh() {
    FetchData()
  }
  async function FetchData() {
    if (val === 0) {
      val++;
      setLoading(true)
      try {
        let userD = await UserInfo(acc);
        console.log("userD", userD);
        setUserData(userD);

        let incomeD = await Income(acc);
        console.log("incomeD", incomeD);
        setIncomeData(incomeD);

        let slotD = await GetSlotIncome(acc);
        console.log('sdata', slotD)
        setSlotIncome(slotD[0]);
        setMatrixData(slotD[1]);
        localStorage.setItem('slotIncome', slotD[0]);
        localStorage.setItem('slotUsers', slotD[2]);

        setLoading(false);
      } catch (e) {
        setLoading(false);
        alert('Something went wrong please check your network')
      }
    }
  }
  async function FetchDataFromSelect(e) {
    let slotVal1 = e.target.value;
    setSlotVal(slotVal1)
    if (slotVal1 == 1) {
      setSlotAmount(10);
    } else if (slotVal1 <= 0) {
      setSlotAmount(0);
    } else {
      let x = 10 * (2 ** (slotVal1 - 1));
      setSlotAmount(x);
    }
  }

  async function increaseAllowance() {
    // {
    //   console.log('1', slotAmount);
    //   console.log('2', BigInt(slotAmount * 1e18));
    //   console.log('3', slotVal);
    // }
    if (upline == 1) {
      if (slotAmount > 0) {
        setLoading(true);
        const { ethereum } = window;
        if (ethereum) {
          try {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const busdInstance = new ethers.Contract(ContractDetails.BUSD, ContractDetails.BUSD_ABI, signer);
            console.log("Instance : " + busdInstance);

            let inc = await busdInstance.increaseAllowance(ContractDetails.contract, BigInt(slotAmount * 1e18), { value: ethers.utils.parseEther('0') });
            await inc.wait();
            await register();
            console.log("Tr Hash : " + inc);
          }
          catch (error) {
            setLoading(false);
          }
        }
        else {
          setLoading(false);
        }
      }
    } else {
      alert('Login with your account')
    }
  }

  async function withdrwal() {
    if (upline == 1) {
      try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer);
          let fee = await contractinstance.estimateGas.withdraw(BigInt(withdrawInput * 1e18));
          const overrides = {
            gasLimit: fee,
            gasPrice: ethers.utils.parseUnits('10', 'gwei'),
            value: ethers.utils.parseEther('0')
          };
          let inc = await contractinstance.withdraw(BigInt(withdrawInput * 1e18), overrides);
          await inc.wait();
          setLoading(false);
          alert("Withdrawal Success")
          refresh();
        }
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }
  }
  async function register() {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractinstance = new ethers.Contract(ContractDetails.contract, ContractDetails.contractABI, signer);
        let fee = await contractinstance.estimateGas.upgrade(slotVal);
        const overrides = {
          gasLimit: fee,
          gasPrice: ethers.utils.parseUnits('10', 'gwei'),
          value: ethers.utils.parseEther('0')
        };
        let inc = await contractinstance.upgrade(slotVal, overrides);
        await inc.wait();
        setLoading(false);
        alert("Transaction Success")
        refresh();
      }
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }
  return (
    <>
      {
        loading === true ? <Loader /> : ""
      }
      <section className="dashboard">
        <h1 className="textHeading">Dashboard</h1>
        <Row>
          <Col md="6" className="order2">
            <Row>
              <Col md="6" className="mb">
                <div className="dashboardMainAccountCard">
                  <h5 className="dashboardCardHeading">Upgrade With</h5>
                  <div className="div">
                    <div>
                      <i>
                        <CgDollar />
                      </i>
                    </div>
                  </div>
                  <h1 className="d-flex justify-content-center align-items-center" >{slotAmount} <span style={{ fontSize: "10px", marginLeft: "5px" }}>USDT</span></h1>
                  <select onChange={FetchDataFromSelect}>
                    <option value="0">Select Slot</option>
                    <option value="1">slot 1</option>
                    <option value="2">slot 2</option>
                    <option value="3">slot 3</option>
                    <option value="4">slot 4</option>
                    <option value="5">slot 5</option>
                    <option value="6">slot 6</option>
                    <option value="7">slot 7</option>
                    <option value="8">slot 8</option>
                    <option value="9">slot 9</option>
                    <option value="10">slot 10</option>
                  </select>
                  <button className="btnPrimary" onClick={increaseAllowance}>Deposit</button>
                </div>
              </Col>
              <Col md="6" className="mb">
                <div className="dashboardMainAccountCard">
                  <h5 className="dashboardCardHeading">Withdraw</h5>
                  <div className="div">
                    <div>
                      <i>
                        <CgDollar />
                      </i>
                    </div>
                  </div>
                  <h1 className="d-flex justify-content-center align-items-center" >{withdrawInput} <span style={{ fontSize: "10px", marginLeft: "5px" }}>USDT</span></h1>
                  <input type="number" placeholder="Amount" onChange={(e) => setWithdrawInput(e.target.value)} />
                  <button className="btnPrimary" onClick={withdrwal}>Withdraw</button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <Row>
              <Col xs="6">
                <div className="dashboardIncomeCard">
                  <h5 className="dashboardCardHeading">Slot Income</h5>
                  <h1>$ {parseFloat(incomeData?.poolIncome / 1e18).toFixed(2)} </h1>
                </div>
              </Col>
              <Col xs="6">
                <div className="dashboardIncomeCard">
                  <h5 className="dashboardCardHeading">Direct Income</h5>
                  <h1>$ {parseFloat(incomeData?.directIncome / 1e18).toFixed(2)} </h1>
                </div>
              </Col>
              <Col xs="6">
                <div className="dashboardIncomeCard">
                  <h5 className="dashboardCardHeading">Total Deposit</h5>
                  <h1>$ {parseFloat(userData?.userInfo?.totalDeposit / 1e18).toFixed(2)} </h1>
                </div>
              </Col>
              <Col xs="6">
                <div className="dashboardIncomeCard">
                  <h5 className="dashboardCardHeading">Total Directs</h5>
                  <h1>{String(userData?.userInfo?.directs)}</h1>
                </div>
              </Col>
              <Col xs="6">
                <div className="dashboardIncomeCard">
                  <h5 className="dashboardCardHeading">Sponsor</h5>
                  <h1 id="sponsorId" className="d-none">{String(userData?.userInfo?.referrer)}</h1>
                  <h1 >{Change(String(userData?.userInfo?.referrer))} <i onClick={() => CopyToClipboard("sponsorId")}><IoCopyOutline /></i></h1>
                </div>
              </Col>
              <Col xs="6">
                <div className="dashboardIncomeCard">
                  <h5 className="dashboardCardHeading">Balance</h5>
                  <h1>$ {parseFloat(userData?.userInfo?.balance / 1e18).toFixed(2)} </h1>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <section>
          <h1 className="textHeadingWithMargin">Meta Galaxy Packages</h1>
          <Row>

            {
              slotIncome.map((x, i) => {
                return (
                  <Col lg="6"><Link to='level' onClick={() => localStorage.setItem('slotNumber', i + 1)}><ProgramCard heading={i + 1} income={x} slotCount={matrixData[i]} /></Link></Col>
                )
              })
            }
          </Row>
        </section>

        {/* <h1 className="textHeadingWithMargin">Telegram Bot</h1>
        <div className="telegramBotDiv">
          <Row className="align-items-center">
            <Col md="6">
              <div id="telegramBotDivText">
                <i><FaTelegramPlane /></i>
                <div>
                  <h5>CompanyName Notifier Bot</h5>
                  <p>New partners and transactions notifications</p>
                </div>
              </div>
            </Col>
            <Col md="6"><button className="btnPrimary">Connect Bot</button></Col>
          </Row>
        </div> */}
      </section>
    </>
  );
};

export default Dashboard;
