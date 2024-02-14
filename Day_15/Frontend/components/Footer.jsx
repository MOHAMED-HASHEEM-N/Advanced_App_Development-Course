import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <div className="footer-container">
        <div className="logo">
          <h1>Campus University</h1>
        </div>

        <div className="about-me">
          <h5>University Address</h5>
          <h6>Campus University-
           Admissions Office,
            123 Main Street,
          Mumbai, 12345,
India.</h6>
           
        

          <div className="icons">
            <ul>
              <li className="list-group">
                <a href="https://www.facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-group">
                <a href="https://www.instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-group">
                <a href="https://www.linkedin.com">
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-group">
                <a href="#">
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="links">
          <ul>
            <h5>Links</h5>
            <li className="list-group">
              {/* Use ScrollLink to scroll to a specific section */}
              {/* <ScrollLink
                className="footer-link"
                to="home-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </ScrollLink> */}
            </li>
            <li className="list-group">
              {/* <ScrollLink
                className="footer-link"
                to="aboutme-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </ScrollLink> */}
            </li>
            <li className="list-group">
              {/* <ScrollLink
                className="footer-link"
                to="demo-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                Demo
              </ScrollLink> */}
            </li>
            <li className="list-group">
              {/* <ScrollLink
                className="footer-link"
                to="services-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </ScrollLink> */}
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
      <div className="copyright p-3">Admissions Now Open !! </div>
    </footer>
  );
}

export default Footer;