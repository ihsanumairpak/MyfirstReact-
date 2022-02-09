import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.jpeg";
const Common=(props)=>{
    return(
        <>
        <section id="header" className="d-flex justify-content-center ">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 order-2 d-flex flex-column justify-content-center">
                <h1> {props.name} <strong className="brand-name">Business</strong> with us</h1>
                <h2 className="my-3">The Group of <strong>Talented</strong> people</h2>
                <div className="my-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary ">{props.btname}</NavLink>
             </div>
                </div>
                {/* header image section */}
                <div className="col-lg-6 order-1 order-lg-2 header_img pt-2">
                <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                </div>
                </div>
                </div>
            </div>
        </div>
        </section>
       
        </>
    )
};
export default Common;