import React from 'react';
import "./PricePage.css";

const PricePage = ({makePage,webPrice}) => {
    const totalPrice = makePage * webPrice

    return (
        <div>
            <div style={{width: "377.14px"}} className="px-3 py-2 mx-auto shadow bg-body rounded">
                <p style={{color: "#13A2E2"}} className='mb-1'>Est Cost</p>
                <p className='p-0 m-0'>${totalPrice} - ${totalPrice + 500}</p>
           <p> 
           "This cost will include 2 rounds of corrections at UI design stage, and once the design is finalized, we will proceed to development. Project will be divided into 2 - 3 milestone payments."
            </p>
           </div>
           <button className='start-btn'>START YOUR PROJECT NOW</button>
        </div>
    );
};

export default PricePage;