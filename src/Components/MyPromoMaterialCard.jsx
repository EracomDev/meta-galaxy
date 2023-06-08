import React from 'react'

const MyPromoMaterialCard = (props) => {
    return (
        <div className="promoMaterialCard">
            <h5 className="dashboardCardHeading d-block text-center">{props.name}</h5>
            <img src={props.img} alt="" />
            <button className="btnSecondary">Download</button>
        </div>
    )
}

export default MyPromoMaterialCard