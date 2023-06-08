import React from 'react'
import "./Promo.css"
import pr1 from "./../../Images/pr2.png"
import pr3 from "./../../Images/pr3.png"
import f1 from "./../../Images/f1.png"
import f2 from "./../../Images/f2.png"
import f3 from "./../../Images/f3.png"
import f4 from "./../../Images/f4.png"
import f5 from "./../../Images/f5.png"
import f6 from "./../../Images/f6.png"
import f7 from "./../../Images/f7.png"
import f8 from "./../../Images/f8.png"
import f9 from "./../../Images/f9.png"
import m1 from "./../../Images/m1.png"
import m2 from "./../../Images/m2.jpg"
import m3 from "./../../Images/m3.png"
import m4 from "./../../Images/m4.png"
import m5 from "./../../Images/m5.png"
import m6 from "./../../Images/m6.png"
import m7 from "./../../Images/m7.png"
import m8 from "./../../Images/m8.png"
import m9 from "./../../Images/m9.png"
import { Col, Row } from 'react-bootstrap'
import PromoFlagCard from '../../Components/PromoFlagCard'
import MyPromoMaterialCard from '../../Components/MyPromoMaterialCard'
const Promo = () => {
    return (
        <section className="dashboard">
            <h1 className="textHeadingWithMargin mt-0">
                Presentation
            </h1>
            <section id='PresentationSection'>
                <h5 className="dashboardCardHeading">Presentation</h5>
                <img src={pr1} alt="" />
                <div className="presentationPdfCountry">
                    <Row className='mt-3'>
                        <Col md="4" className='mb'> <PromoFlagCard img={f1} name="India" /></Col>
                        <Col md="4" className='mb'> <PromoFlagCard img={f2} name="English" /></Col>
                        <Col md="4" className='mb'> <PromoFlagCard img={f3} name="Brazil" /></Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md="4" className='mb'> <PromoFlagCard img={f4} name="Argentina" /></Col>
                        <Col md="4" className='mb'> <PromoFlagCard img={f5} name="Spain" /></Col>
                        <Col md="4" className='mb'> <PromoFlagCard img={f6} name="Switzerland" /></Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md="4" className='mb'> <PromoFlagCard img={f7} name="britain" /></Col>
                        <Col md="4" className='mb'> <PromoFlagCard img={f8} name="vietnam" /></Col>
                        <Col md="4" className='mb'> <PromoFlagCard img={f9} name="iceland" /></Col>
                    </Row>
                </div>
            </section>
            <h1 className="textHeadingWithMargin">Online promo materials</h1>
            <div id="promoBanner">
                <h5 className="dashboardCardHeading">Banners</h5>
                <img src={pr3} alt="" />
                <button style={{ width: '300px', margin: "auto", display: 'block' }} className='btnSecondary'>Download</button>
            </div>
            <h1 className="textHeadingWithMargin">Offline promo materials</h1>
            <Row className='mt-3'>
                <Col md="4" className='mb'><MyPromoMaterialCard img={m1} name="Logo files" /></Col>
                <Col md="4" className='mb'><MyPromoMaterialCard img={m2} name="T-Shirt" /></Col>
                <Col md="4" className='mb'><MyPromoMaterialCard img={m3} name="T-Shirt 2" /></Col>
            </Row>
            <Row className='mt-3'>
                <Col md="4" className='mb'><MyPromoMaterialCard img={m4} name="Note" /></Col>
                <Col md="4" className='mb'><MyPromoMaterialCard img={m5} name="Pen" /></Col>
                <Col md="4" className='mb'><MyPromoMaterialCard img={m6} name="Cap" /></Col>
            </Row>
            <Row className='mt-3'>
                <Col md="4" className='mb'><MyPromoMaterialCard img={m7} name="Note" /></Col>
                <Col md="4" className='mb'><MyPromoMaterialCard img={m8} name="Rollup" /></Col>
                <Col md="4" className='mb'><MyPromoMaterialCard img={m9} name="Presswall" /></Col>
            </Row>
        </section>
    )
}

export default Promo