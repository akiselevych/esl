import { useNavigate } from "react-router-dom";

import Logo from "./UI/Logo";

import "../styles/components/EventsNavbar.scss";
import "../styles/components/Navbar.scss";
import Button from "./UI/Button";

import { toggleNavbar } from "../utils/navbarToggle";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={toggleNavbar} className="navbar-mobile-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 601 468"
                    fill="none"
                >
                    <path
                        d="M34 34H567.333M34 234H367.333M34 434H200.667"
                        stroke="currentColor"
                        strokeWidth="66.6667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <nav>
                <div className="navbar-upper-part">
                    <div className="navbar-section">
                        <Logo />
                    </div>

                    <div
                        onClick={() => navigate("/cs2")}
                        className="navbar-button"
                    >
                        <div className="navbar-button-inner">
                            <p className="fs-16 upper">Events</p>
                            <p className="desc fs-14">Esportaiment to the go</p>
                        </div>
                    </div>

                    <div
                        onClick={() => navigate("/")}
                        className="navbar-button"
                    >
                        <div className="navbar-button-inner">
                            <div className="navbar-button-inner-beta">Beta</div>
                            <p className="fs-16 upper">Tournament platform</p>
                            <p className="desc fs-14">
                                The beginning of your esports journey
                            </p>
                        </div>
                    </div>

                    <div className="navbar-section">
                        <Button
                            text="Register"
                            callback={() => {
                                navigate("/register");
                            }}
                        />
                    </div>
                </div>

                <div className="navbar-lower-part">
                    <div
                        onClick={() => {
                            navigate("/events");
                        }}
                        className="navbar-link"
                    >
                        Home
                    </div>

                    <div
                        onClick={() => {
                            navigate("/bukovel");
                        }}
                        className="navbar-link"
                    >
                        ESL Bukovel Minor 2020
                    </div>

                    <div
                        onClick={() => {
                            navigate("/mad-moon");
                        }}
                        className="navbar-link"
                    >
                        ESL Dota 2 Tug of War: Mad Moon
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
