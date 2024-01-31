import React from "react";
import "./About.css";
import Navbar from "./Nav";

function About()
{
    return(
        <div className="about">
        <Navbar></Navbar>
        <br></br>
        <h1>About</h1>
        <p>Welcome to our Mobile Recharge App, the ultimate platform for seamless and convenient mobile top-ups. At the Mobile Recharge Portal, our primary goal is to simplify the recharge process and enhance your mobile experience..</p>
        <div className="aboutcon">
        {/* <img src={about1} style={{maxWidth:"15.8cm",marginTop:"1.2cm",maxHeight:"15cm"}}/> */}
        <div className="aboutcontainer">
        <h2>Our Mission</h2>
        <p> Our mission is to provide you with a user-friendly platform that offers quick and secure mobile recharge services..</p>
        
        <h2>What We Offer</h2>
        <p>Discover a range of services tailored to meet your mobile needs:</p>
        <ul>
        <li><strong>Easy Recharge:</strong> Swiftly recharge your mobile balance with just a few clicks. We support a variety of carriers to ensure you stay connected effortlessly.</li>
        <li><strong>Flexible Plans:</strong> PExplore a variety of prepaid plans and data packages to find the perfect fit for your communication needs. From talk time to data bundles, our app has you covered.</li>
        <li><strong>Secure Transactions:</strong> Your security is our priority. Benefit from our secure payment gateways, ensuring that your financial transactions are protected at all times.</li>
        <li><strong>Promotions and Discounts:</strong> Enjoy exclusive promotions and discounts on mobile recharges. Keep an eye out for special offers that add extra value to your transactions..</li>
        </ul>
        
        <h2>Our Team</h2>
        <p>Behind the scenes, we have a dedicated team working tirelessly to enhance your mobile recharge experience. From customer support to technical experts, our professionals are committed to providing you with a reliable and efficient service.</p>
        </div>
        
        </div>
        {/* <img src={about} style={{maxWidth:"37.8cm",marginTop:"1.2cm"}}/> */}
        </div>
    );
}
export default About;