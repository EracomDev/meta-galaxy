import React from "react";
import { Row, Col } from "react-bootstrap";
import { CgDollar } from "react-icons/cg";
import { RiExchangeDollarLine } from "react-icons/ri";
import { ImTree } from "react-icons/im";
import "./Partners.css";
const Partners = () => {

  const slot = localStorage.getItem('slotUsers');
  var slotUsers = slot.split(",");

  return (
    <section className="dashboard">
      <h1 className="textHeading">Partners</h1>
      {
        console.log('slotUsers', slotUsers.length)
      }
      <Row>
        <Col lg="12">
          <section className="partnersSlotUser">
            <div id="partnersSlotUserHeadings">
              <p>Slot No.</p>
              <p>Users</p>
            </div>
            {
              slotUsers.map((x, i) => {
                return (
                  <div>
                    <p>Slot {i + 1}</p>
                    <p>{x}</p>
                  </div>
                )
              })
            }
          </section>
        </Col>
      </Row>




      {/* <Row>
        <Col md="4">
          <div className="financeDailyIncome mb-3">
            <div>
              <h5 className="dashboardCardHeading">Total daily income</h5>
              <i>
                <RiExchangeDollarLine />
              </i>
            </div>
            <h1 className="usd">USD0.0</h1>
          </div>
        </Col>
        <Col md="4">
          <div className="financeDailyIncome">
            <div>
              <h5 className="dashboardCardHeading">Affiliate income</h5>
              <i style={{ fontSize: "21px" }}>
                <ImTree />
              </i>
            </div>
            <h1 className="usd">USD0.0</h1>
          </div>
        </Col>
        <Col md="4">
          <div className="financeDailyIncome">
            <div>
              <h5 className="dashboardCardHeading">Affiliate income</h5>
              <i style={{ fontSize: "21px" }}>
                <ImTree />
              </i>
            </div>
            <h1 className="usd">USD0.0</h1>
          </div>
        </Col>
        <Col md="4">
          <div className="financeDailyIncome">
            <div>
              <h5 className="dashboardCardHeading">Affiliate income</h5>
              <i style={{ fontSize: "21px" }}>
                <ImTree />
              </i>
            </div>
            <h1 className="usd">USD0.0</h1>
          </div>
        </Col>
        <Col md="4">
          <div className="financeDailyIncome">
            <div>
              <h5 className="dashboardCardHeading">Affiliate income</h5>
              <i style={{ fontSize: "21px" }}>
                <ImTree />
              </i>
            </div>
            <h1 className="usd">USD0.0</h1>
          </div>
        </Col>
        <Col md="4">
          <div className="financeDailyIncome">
            <div>
              <h5 className="dashboardCardHeading">Affiliate income</h5>
              <i style={{ fontSize: "21px" }}>
                <ImTree />
              </i>
            </div>
            <h1 className="usd">USD0.0</h1>
          </div>
        </Col>
      </Row>
      <section className="history">
        <h1 className="textHeading mt-4 ">History</h1>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>date</th>
                <th>time</th>
                <th>operation</th>
                <th>account</th>
                <th>ammount</th>
                <th>status</th>
              </tr>
            </thead>
          </table>
          <p>No history yet</p>
        </div>
      </section> */}
    </section>
  );
};

export default Partners;
