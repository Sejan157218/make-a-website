import React, { useState } from "react";
import { Col, Container, Row, ProgressBar } from "react-bootstrap";
import icon from "../../../Images/icon.png";
import Framework from "../Framework/Framework";
import Price from "../Price/Price";
import Project from "../Project/Project";
import Kajabi from "../Sidebar1/Kajabi/Kajabi";
import PhpLaravel from "../Sidebar1/PhpLaravel/PhpLaravel";
import PhpScratch from "../Sidebar1/PhpScratch/PhpScratch";
import Python from "../Sidebar1/Python/Python";
import Wordpress from "../Sidebar1/Wordpress/Wordpress";
import Blog from "../Sidebar2/Blog/Blog";
import Company from "../Sidebar2/Company/Company";
import Course from "../Sidebar2/Course/Course";
import Ecommerce from "../Sidebar2/Ecommerce/Ecommerce";
import PricePage from "../Sidebar3/PricePage";
import "./Home.css";

const Home = () => {
const [page, setPage] = useState(1);
const [progress, setProgress] = useState(33.67);
const [sidebar,setSidebar] = useState("Python");
const [sidebar2,setSidebar2] = useState("ecommerce");
const [makePage,setMakePage] = useState(1);
const [webPrice,setWebPrice] = useState(1500);





  const handlerToNext=()=>{
    if(page<3){
      const pagePlus = page+1
      const progressing = progress +33.33
      setPage(pagePlus)
      setProgress(progressing)
    }
  }
  const handlerToPREVIOUS=()=>{
    if(page>1){
      const pageMinus = page-1
      const progressing = progress -33.33
      setPage(pageMinus)
      setProgress(progressing)
    }
  }
  
  return (
    <div>
      {/* header */}
      <div className="border-bottom">
        <div className="container d-flex justify-content-between">
          <div>
            <img className="me-1" src={icon} alt="" />
            <img className="me-1" src={icon} alt="" />
            <img className="me-1" src={icon} alt="" />
          </div>
          <p className="mb-1">
            WANT TO DISCUSS YOUR PROJECT IN DETAIL?{" "}
            <span className="text-color">SCHEDULE A CALL HERE</span>
          </p>
          <div>
            <img className="me-1" src={icon} alt="" />
            <img className="me-1" src={icon} alt="" />
            <img className="me-1" src={icon} alt="" />
          </div>
        </div>
      </div>
      {/* calculate section */}
      <div className="text-center">
        <Container>
          <Row>
            <Col className="border-end py-5">
              {
                page =="1" &&  <Framework sidebar={sidebar} setSidebar={setSidebar}></Framework>
              }
              {
                page =="2" &&  <Project sidebar2={sidebar2} setSidebar2={setSidebar2} setWebPrice={setWebPrice}></Project>
              }
              {
                page =="3" &&  <Price  makePage={makePage} setMakePage={setMakePage}></Price>
              }
             
              <div className="mt-5 d-flex justify-content-center">
                <button onClick={handlerToPREVIOUS} className={page == 1 ? "progress-btn disable-btn" : "progress-btn"

                }>PREVIOUS</button>
                <ProgressBar
                  className="mx-4 mt-1"
                  style={{ width: "11.81rem" }}
                  now={progress}
                />
                <button onClick={handlerToNext} className={page ==3? "progress-btn disable-btn" : "progress-btn"}>NEXT</button>
              </div>
            </Col>
            <Col className="py-5">
            {
                sidebar =="Python" && page==1 &&  <Python></Python>
              }
            {
                sidebar =="Wordpress"  && page==1 &&  <Wordpress></Wordpress>
              }
            {
                sidebar =="PhpLaravel"  && page==1 &&  <PhpLaravel></PhpLaravel>
              }
            {
                sidebar =="Php"  && page==1 &&  <PhpScratch></PhpScratch>
              }
            {
                sidebar =="Kajabi"  && page==1 &&  <Kajabi></Kajabi>
              }
            {
                sidebar2 =="ecommerce" && page==2  &&  <Ecommerce></Ecommerce>
              }
                {
                sidebar2 =="course" && page==2 &&  <Course></Course>
              }
            {
                sidebar2 =="blog" && page==2 &&  <Blog></Blog>
              }
          
            {
                sidebar2 =="company" && page==2 &&  <Company></Company>
              }
            {
                page==3 &&  <PricePage makePage={makePage} webPrice={webPrice}></PricePage>
              }
          
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
