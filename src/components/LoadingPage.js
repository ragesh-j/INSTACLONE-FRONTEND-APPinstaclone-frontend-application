import React from "react";
import { Link } from "react-router-dom";
import mainImg from "./images/Lens.png"
import "./Styles/Loadings.css"

function LoadingPage() {
    return <>
        <div id="Loading-main-div">
            <div id="loading-img">
                <img src={mainImg} alt="Loading..." />
            </div>
            <div id="loading-txt-btn-div">
                <h2>10x team 04</h2>
                <Link to="/post"><button id="loading-btn">Enter</button></Link>
            </div>
        </div>

    </>
}

export default LoadingPage


