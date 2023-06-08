import React from 'react'
import "./Support.css"
const Support = () => {
    return (
        <>
            <section className="dashboard">
                <h1 className="textHeadingWithMargin mt-0">Support</h1>
                <section className="supportSection">
                    <h5 className="dashboardCardHeading">
                        How we can help you?
                    </h5>
                    <input type="text" placeholder='Subject' />
                    <textarea placeholder='Write your text here'></textarea>
                    <div>
                        <button className='btnPrimary d-block ' style={{ width: "auto", padding: '12px 50px', marginLeft: "auto" }}>Submit</button>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Support