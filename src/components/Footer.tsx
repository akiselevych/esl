import { useNavigate } from "react-router-dom";

import Logo from "./UI/Logo";

import "../styles/components/Footer.scss";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer>
            <div className="footer-upper-part">
                <div className="footer-logo">
                    <Logo />
                </div>

                <div className="footer-categories">
                    <div className="footer-category">
                        <p className="fs-16 fw-600 upper">Events</p>
                        <p
                            onClick={() => navigate("/events")}
                            className="fs-12"
                        >
                            Home
                        </p>
                        <p
                            className="fs-12"
                            onClick={() => navigate("/bukovel")}
                        >
                            ESL Bukovel Minor 2020
                        </p>
                        <p
                            className="fs-12"
                            onClick={() => navigate("/mad-moon")}
                        >
                            ESL Dota 2 Tug of War: Mad Moon
                        </p>
                    </div>

                    <div className="footer-category">
                        <p className="fs-16 fw-600 upper">
                            Tournament platform
                        </p>
                        <p className="fs-12" onClick={() => navigate("/cs2")}>
                            CS2 Tournamets
                        </p>
                        <p
                            className="fs-12"
                            onClick={() => navigate("/dota-2")}
                        >
                            Dota 2 Tournaments
                        </p>
                    </div>

                    <div className="footer-category">
                        <p className="fs-16 fw-600 upper">POLICY</p>
                        <p
                            className="fs-12"
                            onClick={() => navigate("/terms-of-service")}
                        >
                            Terms of Service
                        </p>
                        <p
                            className="fs-12"
                            onClick={() => navigate("/privacy-policy")}
                        >
                            Privacy Policy
                        </p>
                    </div>
                </div>
                <div className="footer-follow-us">
                    <p className="fs-16 fw-600 upper">Follow us</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        viewBox="0 0 45 33"
                        fill="none"
                    >
                        <path
                            d="M15.4326 27.6636C14.4513 29.1046 13.3439 30.5471 12.2241 31.8828C4.08718 31.6513 1 26.37 1 26.37C1.11565 18.887 2.92902 11.528 6.30333 4.84795C9.26943 2.52753 12.8836 1.18668 16.6454 1.01103L17.7479 3.55795C19.3227 3.33933 20.9102 3.22515 22.5 3.21615C24.0969 3.22141 25.6917 3.33191 27.2741 3.54692L28.3767 1C32.1422 1.18517 35.7567 2.53772 38.7187 4.87C42.0822 11.5451 43.8879 18.8962 44 26.37C44 26.37 40.9128 31.6513 32.7759 31.8828C31.6551 30.5363 30.6026 29.1343 29.6226 27.682M36.7451 24.4846C32.5113 26.6295 28.4147 28.7736 22.5 28.7736C16.5853 28.7736 12.4887 26.6295 8.25487 24.4846"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.7159 22.5993C17.7558 22.5993 19.4095 20.9457 19.4095 18.9057C19.4095 16.8658 17.7558 15.2122 15.7159 15.2122C13.676 15.2122 12.0223 16.8658 12.0223 18.9057C12.0223 20.9457 13.676 22.5993 15.7159 22.5993Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M29.284 22.5993C31.324 22.5993 32.9776 20.9457 32.9776 18.9057C32.9776 16.8658 31.324 15.2122 29.284 15.2122C27.2441 15.2122 25.5905 16.8658 25.5905 18.9057C25.5905 20.9457 27.2441 22.5993 29.284 22.5993Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="footer-lower-part">
                <p className="desc fs-14">
                    1013 Centre RD STE 403B, Wilmington, DE, USA
                </p>
                <p className="desc fs-14">© 2024 ESL All rights reserved</p>
                <p className="desc fs-14">Germany, Frankfurt, ESL Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;
