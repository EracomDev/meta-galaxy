import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserInfo from '../../Common/UserInfo';
import './ProfilePage.css';
import User from "./../../Images/user.png"
import Loader from '../../Components/Loader';
const ProfilePage = () => {
    const acc = localStorage.getItem("viewId");
    const [profileData, setProfileData] = useState([]);
    const [newName, setNewName] = useState("");
    const upline = localStorage.getItem('upline');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        FetchData();
    }, [])

    async function FetchData() {
        setLoading(true);
        try {
            let userD = await UserInfo(acc);
            console.log("userD", userD);

            axios({
                method: "get",
                url: 'https://meta-galaxy.us/project/user/update/getprofile',
                data: {
                    id: userD?.userInfo?.id
                },
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    console.log(response)
                    setProfileData(response?.data);
                    setLoading(false);
                })
                .catch(function (response) {
                    console.log(response);
                    setLoading(false);
                });
        } catch (e) {
            console.log('e', e);
            setLoading(false);
        }
    }


    async function UpdateProfile() {
        if (upline == 1) {
            setLoading(true);
            axios({
                method: "post",
                url: 'https://meta-galaxy.us/project/user/update/profile',
                data: {
                    "username": newName,
                    "id": acc
                },
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            })
                .then(function (response) {
                    console.log('response', response);
                    FetchData();
                    location.reload();
                    setLoading(false)
                })
                .catch(function (response) {
                    console.log(response);
                    setLoading(false)
                });
        } else {
            alert("Login with your account");
            setLoading(false)
        }
    }
    return (
        <>
            {
                loading === true ? <Loader /> : null
            }
            <section className="dashboard">
                <Container>
                    <Row>
                        <Col lg="6" >
                            <div className='profileDetail mb-4'>
                                <img src={User} alt="" />
                                <h5>{profileData?.name}</h5>
                                <div className='profileDetailUpdate'>
                                    <input type="text" placeholder='Enter Your Name' value={newName} onChange={(e) => setNewName(e.target.value)} />
                                    <button onClick={UpdateProfile}>Update</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProfilePage

