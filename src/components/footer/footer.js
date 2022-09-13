import React from "react";
import "./footer.css"

const Footer = () => {
    return(
        <div>
            <div className="footer-container">
                <div class="footer">
                    <div className="footer-heading footer-1">
                        <h2>Information</h2>
                        <a href="/About">About Us</a>
                        <a href="/">Directions</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Modern Slavery Statement</a>
                    </div>
                    <div className="footer-heading footer-2">
                        <h2>Contact</h2>
                        <a href="/">Contact us</a>
                        <a href="/">Phone</a>
                        <a href="/">Support</a>
                    <div className="footer-heading footer-3">
                        <h2>Social Media</h2>
                        <a href="/">Instagram</a>
                        <a href="/">Youtube</a>
                        <a href="/">Twitter</a>
                        <a href="/">Facebook</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;