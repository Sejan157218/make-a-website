import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "./Price.css";
const Price = ({makePage,setMakePage}) => {
  const [progressBar,setProgressBar] = useState(25);
  const [active,setActive] = useState("");
  const [paymentOption,setPaymentOption] = useState("");
  
  

  const handerToMakePagePlus=()=>{
    if(makePage<4){
    const newPage = makePage + 1;
    const newProgressBar= progressBar + 25;
    setMakePage(newPage);
    setProgressBar(newProgressBar)
    }
  }
  const handerToMakePageMinus=()=>{
    if(makePage>1){
      const newPage = makePage - 1;
    const newProgressBar= progressBar - 25;
    setMakePage(newPage);
    setProgressBar(newProgressBar)
    }
  }
  return (
    <div>
      <div>
        <p style={{ fontSize: "20px" }}>DO YOU HAVE UX DESIGN READY?</p>
        <button onClick={()=>setActive("yes")} className={active== "yes" ? "price-btn shadow px-3 py-1 bg-body rounded active" : "price-btn shadow px-3 py-1 bg-body rounded"}>
          YES
        </button>
        <button onClick={()=>setActive("no")} className={active== "no" ? "price-btn shadow px-3 py-1 bg-body rounded active" : "price-btn shadow px-3 py-1 bg-body rounded"}>
          NO
        </button>
      </div>

      <div className="my-5">
        <p style={{ fontSize: "20px" }}>
          HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE?
        </p>
       
        <div className="d-flex justify-content-center mt-5">
        <button onClick={handerToMakePageMinus} className= "progress-btn"><i className="fas fa-minus-circle"></i></button>
      
        <div  style={{ width: "20.5rem" }}>
        <p className="text-start ms-3">{makePage} Pages</p>
        <ProgressBar
          className="mx-2"
          style={{ marginBottom: "2.5rem" }}
          now={progressBar}
        />
        </div>
          <button onClick={handerToMakePagePlus}  className="progress-btn"><i className="fas fa-plus-circle"></i></button>
      </div>
    
        </div>
      <div>
        <p style={{ fontSize: "20px" }}>ANY PAYMENT GATEWAY INTEGRATION?</p>
        <button onClick={()=>setPaymentOption('Stripe')} className={paymentOption == "Stripe" ? "price-btn shadow px-3 py-1 bg-body rounded active": "price-btn shadow px-3 py-1 bg-body rounded" }>
          Stripe
        </button>
        <button onClick={()=>setPaymentOption('Paypal')} className={paymentOption == "Paypal" ? "price-btn shadow px-3 py-1 bg-body rounded active": "price-btn shadow px-3 py-1 bg-body rounded" }>
          Paypal
        </button>
        <button onClick={()=>setPaymentOption('Both')} className={paymentOption == "Both" ? "price-btn shadow px-3 py-1 bg-body rounded active": "price-btn shadow px-3 py-1 bg-body rounded" }>
          Both
        </button>
        <button onClick={()=>setPaymentOption('None')} className={paymentOption == "None" ? "price-btn shadow px-3 py-1 bg-body rounded active": "price-btn shadow px-3 py-1 bg-body rounded" }>
          None
        </button>
      </div>
    </div>
  );
};

export default Price;
