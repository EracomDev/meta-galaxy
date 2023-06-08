import React from 'react'
import "./News.css"
import News2 from "./../../Images/news2.png"
import { Col, Row } from 'react-bootstrap'
import MyNewsCard from '../../Components/MyNewsCard'
const News = () => {
  return (
    <section className="dashboard">
        <h1 className="textHeadingWithMargin mt-0">
            News
        </h1>
        <Row className='mt-3'>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
        </Row>
        <Row className='mt-3'>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
        </Row>
        <Row className='mt-3'>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
        </Row>
        <Row className='mt-3'>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
            <Col md="4" className='mb'><MyNewsCard img={News2}/></Col>
        </Row>
    </section>
  )
}

export default News