import React from 'react'
const MyNewsCard = (props) => {
  return (<>
    <div className="newsCard">
        <img src={props.img} alt="img.png" />
        <p>February 24</p>
        <h4>CompanyName Technologies Official Launch Conference</h4>
        <h5>CompanyName Technologies will be officially launched in early spring in Dubai, UAE - the world capital of cryptocurrency, decentralization, wealth and success! It will be the most important event of 2023 for every partner of the company!</h5>
    </div>
  </>
  )
}

export default MyNewsCard