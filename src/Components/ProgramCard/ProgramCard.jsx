import React from 'react'
import "./ProgramCard.css"
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationArrow } from 'react-icons/fa'
const ProgramCard = (props) => {
    return (
        <>
            <div className="programCard">
                <Row className="align-items-center pb-2">
                    <Col xs="6" className="programCardHeading">Slot {props.heading}</Col>
                    <Col xs="6" className="programCardPrice">{parseFloat(props.income / 1e18).toFixed(2)} <span> &nbsp;USDT</span></Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Row className="px-2">
                            <Col md="12">
                                <Row className="programCardRow">
                                    {[...Array(parseInt(10))].map((x, i) =>
                                        props.slotCount <= i ?
                                            <Col xs="2" style={{ background: "#80808080" }} className="programCardInnerDiv"></Col>
                                            :
                                            <Col xs="2" className="programCardInnerDiv"></Col>
                                    )}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6" className='d-flex align-items-end'>
                        <Link to="level" className='previewBtn'><button className="btnPrimary">Preview <i><FaLocationArrow /></i></button></Link>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProgramCard