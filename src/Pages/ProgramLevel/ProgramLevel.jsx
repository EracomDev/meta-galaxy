import React, { useEffect, useState } from 'react'
import './ProgramLevel.css'
import { Col, Row } from 'react-bootstrap'
import ProgramLevelCard from './ProgramLevelCard'
import { Link } from 'react-router-dom'
import GetMatrix from '../../Common/GetMatrix'
import Loader from '../../Components/Loader'
import Nodata from "./../../Images/nodata.png"
import Change from '../../Common/StringToSub'
const ProgramLevel = () => {


    const acc = localStorage.getItem("viewId");
    const slotNumber = localStorage.getItem("slotNumber");
    const [cycleInfo, setCycleInfo] = useState([]);
    const slotIncome = localStorage.getItem("slotIncome").split(",").map(Number);
    const [matrixData, setMatrixData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0)
        FetchData()
    }, [])
    let x = 0;
    async function FetchData() {
        if (x === 0) {
            x++;
            setLoading(true);
            try {
                const matrixD = await GetMatrix(acc, slotNumber);
                console.log("matrixD", matrixD)

                setMatrixData(matrixD);
                setCycleInfo(matrixD.cycleInfo);
                setLoading(false)
            } catch (e) {
                setLoading(false)
                alert('Something Went Wrong');
            }
        }
    }
    
    const setvar = async (aa,bb,cc) => {
        //alert(cc);
        localStorage.setItem('levelDetailCycle', cc);
        localStorage.setItem('levelDetailUsers', bb);
        localStorage.setItem('levelDetailIncome', parseFloat(aa / 1e18).toFixed(2));
        return false;
    } 

    return (
        <>
            {
                loading === true ? <Loader /> : ""
            }
            {
                // console.log('cycleInfo9999999999', String(cycleInfo[1][0]))
            }
            <section className="dashboard">
                <p className='topId'><span>ID {Change(acc)} / </span>Meta Galaxy Slot {slotNumber}</p>

                <div className='programTopHeading'>
                    <h1>Meta Galaxy Slot {slotNumber}</h1>
                    <h1>{parseFloat(slotIncome[parseInt(slotNumber - 1)] / 1e18).toFixed(2)} <span>USDT</span></h1>
                </div>
                <div>
                    <Row className='prCard'>
                        
                        {
                           
                            matrixData?.currentCycle > 0 ?
                                [...Array(parseInt(matrixData?.currentCycle))].map((x, i) =>
                                    <Col lg='3' md="4" sm="6" xs="12"><Link to="/dashboard/level_details" onClick={  () => setvar(cycleInfo[0][i],cycleInfo[1][i],(i + 1))}  ><ProgramLevelCard
                                        income={(cycleInfo[0][i])} users={cycleInfo[1][i]} cycle={i + 1}
                                    /></Link></Col>
                                ) :
                                <div id="nodata" >
                                    <img src={Nodata} alt='No Data'></img>
                                    <h1 id="noCycle">No Cycle To Show</h1>
                                </div>
                        }
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ProgramLevel