import React from 'react';
import "./Framework.css";

const Framework = ({setSidebar,sidebar}) => {

    return (
        <div>
            <p style={{fontSize:"20px"}}>I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)</p>
           <div onClick={()=>setSidebar('Python')} className={sidebar == "Python" ? "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded active" : "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded"}>
           <p> 
            Python
                <br />
                Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit, sed do eiusmod tempor incididunt
            </p>
           </div>
           <div onClick={()=>setSidebar('Wordpress')} className={sidebar == "Wordpress" ? "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded active" : "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded"}>
           <p> 
           Wordpress
                <br />
                Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit, sed do eiusmod tempor incididunt
            </p>
           </div>
           <div onClick={()=>setSidebar('PhpLaravel')} className={sidebar == "PhpLaravel" ? "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded active" : "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded"}>
           <p> 
           Php Laravel
                <br />
                Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit, sed do eiusmod tempor incididunt
            </p>
           </div>
           <div onClick={()=>setSidebar('Php')} className={sidebar == "Php" ? "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded active" : "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded"}>
           <p> 
           Php (From Scratch)
                <br />
                Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit, sed do eiusmod tempor incididunt
            </p>
           </div>
           <div onClick={()=>setSidebar('Kajabi')} className={sidebar == "Kajabi" ? "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded active" : "px-3 py-2 text-start frame-div mx-auto shadow bg-body rounded"}>
           <p> 
           Kajabi
                <br />
                Lorem ipsum dolor sit amet, consectetur <br />
                 adipiscing elit, sed do eiusmod tempor incididunt
            </p>
           </div>
        </div>
    );
};

export default Framework;