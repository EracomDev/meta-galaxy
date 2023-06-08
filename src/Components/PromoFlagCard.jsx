import React from 'react'
import { RxCopy } from "react-icons/rx"
import { HiOutlineDownload } from "react-icons/hi"
const PromoFlagCard = (props) => {
    return (
        <>
            <div className="promoCountry">
                <div>
                    <img src={props.img} alt="flag.png" />
                    <p>{props.name}</p>
                </div>
                <div>
                    <i><RxCopy /></i>
                    <i><HiOutlineDownload /></i>
                </div>
            </div>
        </>
    )
}

export default PromoFlagCard