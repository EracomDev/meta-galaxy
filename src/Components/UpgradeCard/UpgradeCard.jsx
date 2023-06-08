import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./UpgradeCard.css";
const UpgradeCard = () => {
  return (
    <>
      <div className="upgradesCard">
        <h1>MX100</h1>
        <div>
          <p>Binary bonus</p>
          <h5>5%</h5>
        </div>
        <div className="upgradeCardLight">
          <p>Work time</p>
          <h5>365 days</h5>
        </div>
        <div>
          <p>Average return rate</p>
          <h5>0.6%-1.2%</h5>
        </div>
        <div className="upgradeCardLight">
          <p>Matching bonus</p>
          <h5>
            <i>
              <RxCross2  />
            </i>
          </h5>
        </div>
        <div>
          <p>PRICE</p>
          <h5>100 MUSD</h5>
        </div>
        <button className="simplePrimaryButton">Buy</button>
      </div>
    </>
  );
};

export default UpgradeCard;
