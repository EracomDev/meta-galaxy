import React from "react";
import "./Plans.css";
import { GiDeadEye } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RxLapTimer } from "react-icons/rx";
import { Col, Row } from "react-bootstrap";
import UpgradeCard from "../../Components/UpgradeCard/UpgradeCard";
const Plans = () => {
  return (
    <>
      <section className="dashboard">
        <h1 className="textHeadingWithMargin mt-0">Your Plan</h1>
        <div className="planDiv">
          <Row>
            <Col md="4" className="mb">
              <div className="planDivItems">
                <p>Plan name</p>
                <div>
                  <i>
                    <GiDeadEye />
                  </i>
                  <h1>No plan</h1>
                </div>
              </div>
            </Col>
            <Col md="4" className="mb">
              <div className="planDivItems">
                <p>Days left</p>
                <div>
                  <i>
                    <RxLapTimer />
                  </i>
                  <h1>0/0</h1>
                </div>
              </div>
            </Col>
            <Col md="4" className="mb">
              <div className="planDivItems">
                <p>Daily income</p>
                <div>
                  <i>
                    <RiMoneyDollarCircleFill />
                  </i>
                  <h1>0</h1>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <h1 className="textHeadingWithMargin">Upgrades</h1>
        <section className="upgradesCardSection">
          <Row className="mt-3">
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
          </Row>
          <Row className="mt-4">
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
          </Row>
          <Row className="mt-4">
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
          </Row>
          <Row className="mt-4">
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
            <Col md="3" className="mb"><UpgradeCard /></Col>
          </Row>

        </section>
      </section>
    </>
  );
};

export default Plans;
