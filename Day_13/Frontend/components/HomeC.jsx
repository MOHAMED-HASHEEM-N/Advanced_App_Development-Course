import React from "react";
import Navbar from "./Nav";
import "./HomeC.css";
import Footer from "./Footer";
function Home() {
    return (
        <div className="home">
            <Navbar />
            <br />
            <h1>Welcome to Mobile Recharge Portal</h1>
            <div className="le">
            <h1></h1>
            </div>
            
            {/* <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Student Portal. All rights reserved.</p>
                </div>
            </footer> */}
            {/* <Footer/> */}
        </div>
    );
}

export default Home;