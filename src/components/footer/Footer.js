import React from "react";
import "./Footer.css"

const Footer = () => {
    return(
        <div>
            <div className="footer-container">
                <div class="footer">
                    <div className="footer-heading footer-1">
                    <h2>Social Media</h2>
                        <a className="fa-brands fa-instagram" href="http.instagram.com"></a>
                        <a className="fa-brands fa-youtube" href="/"></a>
                        <a className="fa-brands fa-twitter" href="/"></a>
                        <a className="fa-brands fa-facebook" href="/"></a>
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
                        <a href="/Gettinghere">Getting there</a>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;