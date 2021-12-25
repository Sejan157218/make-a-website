import React from 'react';

const Project = ({setSidebar2,setWebPrice,sidebar2}) => {

     const handlerToEcom=()=>{
          setSidebar2('ecommerce');
          setWebPrice(1500)
     }
     const handlerToCourse=()=>{
          setSidebar2('course');
          setWebPrice(1000)
     }
     const handlerToBlog=()=>{
          setSidebar2('blog');
          setWebPrice(800)
     }
     const handlerToCompany=()=>{
          setSidebar2('company');
          setWebPrice(1200)
     }
    return (
        <div>
            <p style={{fontSize:"20px"}}>I WANT TO BUILD</p>
       <div onClick={handlerToEcom} className={sidebar2 == "ecommerce" ? "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded active" : "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded"}>
       <p> 
       An ecommerce site
            <br />
            Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit, sed do eiusmod tempor incididunt
        </p>
       </div>
       <div onClick={handlerToCourse} className={sidebar2 == "course" ? "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded active" : "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded"}>
       <p> 
       An online course platform
            <br />
            Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit, sed do eiusmod tempor incididunt
        </p>
       </div>
       <div onClick={handlerToBlog} className={sidebar2 == "blog" ? "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded active" : "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded"}>
       <p> 
       A blog site
            <br />
            Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit, sed do eiusmod tempor incididunt
        </p>
       </div>
       <div onClick={handlerToCompany} className={sidebar2 == "company" ? "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded active" : "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded"}>
       <p> 
       My company website with pice calculators
            <br />
            Lorem ipsum dolor sit amet, consectetur <br />
             adipiscing elit, sed do eiusmod tempor incididunt
        </p>
       </div>
        </div>
    );
};

export default Project;