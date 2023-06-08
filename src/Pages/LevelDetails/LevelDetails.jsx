import React, { useEffect, useState } from 'react'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import './LevelDetails.css'
import { MdPeopleAlt, } from 'react-icons/md'
import Change from '../../Common/StringToSub'
import GetPoolUser from '../../Common/GetPoolUser'
import Loader from '../../Components/Loader'
const LevelDetails = () => {
    const cycleInc = localStorage.getItem('levelDetailIncome');
    const cycleNum = localStorage.getItem('levelDetailCycle');
    const usersCount = localStorage.getItem('levelDetailUsers');
    const slotNumber = localStorage.getItem('slotNumber');
    const acc = localStorage.getItem("viewId");
    const [poolUserData, setPoolUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    let x = 0;
    useEffect(() => {
        FetchData();
    }, [])

    async function FetchData() {
        if (x === 0) {
            x++;
            try {
                setLoading(true)
                const poolUserD = await GetPoolUser(acc, slotNumber, cycleNum)
                //alert(cycleNum);
                console.log('poolUserD', poolUserD);
                setPoolUserData(poolUserD)
                setLoading(false)
            } catch (e) {
                setLoading(false)
            }
        }
    }

    return (
        <>
            {
                loading === true ? <Loader /> : ""
            }
            <section className="dashboard">
                <p className='topId'><span>
                    ID: {Change(acc)} / Slot {slotNumber} / </span>Cycle {cycleNum}</p>

                <div className='programTopHeading'>
                    <h1>Cycle {cycleNum}</h1>
                </div>

                <div className="levelDetailCard">
                    <div id='levelDetailCardHeadings'>
                        {/* <h5>ID: {Change(acc)}</h5> */}
                    </div>
                    <div className="levelDetailCardTree">
                        <div id='programLevelDiv2'>
                            {/* <div id='LevelDetailTree0' className='levelDetailTreeMain'>
                                {
                                    poolUserData[0] ? <span title={poolUserData[0]} className='bgColor'>{Change(poolUserData[0])}</span> :
                                        <span>Null</span>
                                }
                            </div> */}
                            <div id='LevelDetailTree1' className='levelDetailTreeMain'>
                                {
                                    poolUserData?.[0]?.[0] ? <span className='bgColor' title={poolUserData?.[0][0]}>{poolUserData[0][0]}</span> :
                                        <span>Null</span>
                                }
                                {
                                    poolUserData?.[0]?.[1] ? <span className='bgColor' title={poolUserData?.[0][1]}>{poolUserData[0][1]}</span> :
                                        <span>Null</span>
                                }
                            </div>
                            <div id='LevelDetailTree2' className='levelDetailTreeMain'>
                                {
                                    poolUserData?.[1]?.[0] ? <span className='bgColor' title={poolUserData?.[1][0]}>{poolUserData[1][0]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[1]?.[1] ? <span className='bgColor' title={poolUserData?.[1][1]}>{poolUserData[1][1]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[1]?.[2] ? <span className='bgColor' title={poolUserData?.[1][2]}>{poolUserData[1][2]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[1]?.[3] ? <span className='bgColor' title={poolUserData?.[1][3]}>{poolUserData[1][3]}</span> :
                                        <span>Null</span>
                                }
                            </div>
                            <div id='LevelDetailTree3' className='levelDetailTreeMain'>
                                {
                                    poolUserData?.[2]?.[0] ? <span className='bgColor' title={poolUserData?.[2][0]}>{poolUserData?.[2][0]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[2]?.[1] ? <span className='bgColor' title={poolUserData?.[2][1]}>{poolUserData?.[2][1]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[2]?.[2] ? <span className='bgColor' title={poolUserData?.[2][2]}>{poolUserData?.[2][2]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[2]?.[3] ? <span className='bgColor' title={poolUserData?.[2][3]}>{poolUserData?.[2][3]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[2]?.[4] ? <span className='bgColor' title={poolUserData?.[2][4]}>{poolUserData?.[2][4]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[2]?.[5] ? <span className='bgColor' title={poolUserData?.[2][5]}>{poolUserData?.[2][5]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[2]?.[6] ? <span className='bgColor' title={poolUserData?.[2][6]}>{poolUserData?.[2][6]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[2]?.[7] ? <span className='bgColor' title={poolUserData?.[2][7]}>{poolUserData?.[2][7]}</span> :
                                        <span>Null</span>
                                }
                            </div>
                            <div id='LevelDetailTree4' className='levelDetailTreeMain'>
                                {
                                    poolUserData?.[3]?.[0] ? <span title={poolUserData?.[3][0]} className='bgColor'>{poolUserData?.[3][0]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[1] ? <span title={poolUserData?.[3][1]} className='bgColor'>{poolUserData?.[3][1]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[2] ? <span title={poolUserData?.[3][2]} className='bgColor'>{poolUserData?.[3][2]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[3] ? <span title={poolUserData?.[3][3]} className='bgColor'>{poolUserData?.[3][3]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[4] ? <span title={poolUserData?.[3][4]} className='bgColor'>{poolUserData?.[3][4]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[5] ? <span title={poolUserData?.[3][5]} className='bgColor'>{poolUserData?.[3][5]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[6] ? <span title={poolUserData?.[3][6]} className='bgColor'>{poolUserData?.[3][6]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[7] ? <span title={poolUserData?.[3][7]} className='bgColor'>{poolUserData?.[3][7]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[8] ? <span title={poolUserData?.[3][8]} className='bgColor'>{poolUserData?.[3][8]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[9] ? <span title={poolUserData?.[3][9]} className='bgColor'>{poolUserData?.[3][9]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[10] ? <span title={poolUserData?.[3][10]} className='bgColor'>{poolUserData?.[3][10]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[11] ? <span title={poolUserData?.[3][11]} className='bgColor'>{poolUserData?.[3][11]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[12] ? <span title={poolUserData?.[3][12]} className='bgColor'>{poolUserData?.[3][12]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[13] ? <span title={poolUserData?.[3][13]} className='bgColor'>{poolUserData?.[3][13]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[14] ? <span title={poolUserData?.[3][14]} className='bgColor'>{poolUserData?.[3][14]}</span> :
                                        <span>Null</span>
                                } {
                                    poolUserData?.[3]?.[15] ? <span title={poolUserData?.[3][15]} className='bgColor'>{poolUserData?.[3][15]}</span> :
                                        <span>Null</span>
                                }
                            </div>
                        </div>
                    </div>
                    <div id='programLevelDiv3'>
                        <div>
                            <p style={{ marginBottom: "5px" }}>Partners</p>
                            <p><i><MdPeopleAlt /></i>{usersCount}</p>
                        </div>
                        <div >
                            <p style={{ marginBottom: "5px" }}>Total level revenue</p>
                            <p className='justify-content-end'><i><RiMoneyDollarCircleFill /> </i>{cycleInc}</p>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default LevelDetails