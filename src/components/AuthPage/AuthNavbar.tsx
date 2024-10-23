import Logo from "../UI/Logo";

import "../../styles/components/Navbar.scss";
import { toggleNavbar } from "../../utils/navbarToggle";

const Navbar = () => {
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
                </div>
            </nav>
        </>
    );
};

export default Navbar;
