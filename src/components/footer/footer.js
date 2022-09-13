import React from "react";
import "./footer.css"

const Footer = () => {
    return(
        <div>
            <div className="footer-container">
                <div class="footer">
                    <div className="footer-heading footer-1">
                    <h2>Social Media</h2>
                        <a href="/">Instagram</a>
                        <a href="/">Youtube</a>
                        <a href="/">Twitter</a>
                        <a href="/">Facebook</a>
                    </div>
                    <div className="footer-heading footer-2">
                        <h2>Get in touch</h2>
                        <a href="/Contact">Contact us</a>
                    </div>
                    <div className="footer-heading footer-3">
                        <h2>Discussion</h2>
                        <a href="/">Forum</a>
                    </div>
                    <div className="footer-heading footer-4">
                        <h2>Info</h2>
                        <a href="/About">About us</a>
                        <a href="/">Getting there</a>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;