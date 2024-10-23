import { useNavigate } from "react-router-dom";

import Logo from "../UI/Logo";

import "../../styles/components/Navbar.scss";
import "../../styles/components/ProfilePage/ProfileNavbar.scss";
import { toggleNavbar } from "../../utils/navbarToggle";
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
                <div className="navbar-upper-part prof-navbar-upper-part">
                    <div
                        onClick={() => navigate("/")}
                        className="navbar-section prof-navbar-section"
                    >
                        <Logo />
                    </div>

                    <div
                        onClick={() => navigate("/cs2")}
                        className="navbar-section prof-navbar-section"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 17 22"
                        >
                            <path d="M5.81844 0.398768C6.02238 0.220228 6.26817 0.0961779 6.53294 0.0381594C6.79771 -0.0198591 7.07286 -0.00996023 7.33277 0.066935C7.53261 0.132935 7.70494 0.253018 7.89102 0.372185C8.03769 0.464768 8.21002 0.505102 8.34294 0.611435C8.40894 0.664602 8.35577 0.758102 8.35577 0.824102C8.52902 1.2366 8.62161 1.6876 8.47494 2.12577C8.35577 2.27243 8.14311 2.31185 7.97077 2.37877C7.94327 2.56485 8.01019 2.73627 8.03677 2.92327C7.99736 2.94985 7.97077 2.97643 7.93044 3.00302C8.18344 2.98927 8.43552 2.9361 8.68852 2.88385C8.78111 2.79035 8.92686 2.84352 9.04602 2.82977C9.05977 2.64368 9.12669 2.47135 9.12669 2.28527C9.16343 2.28276 9.19943 2.27376 9.23302 2.25868C9.24586 2.3916 9.23302 2.52452 9.27244 2.65743C9.33936 2.7106 9.44569 2.68402 9.52544 2.69685C9.52544 2.75002 9.52544 2.80318 9.53827 2.85635C11.0792 2.84352 12.6339 2.85635 14.1748 2.85635V3.08277H14.3214V2.21835H14.4938C14.4938 2.45668 14.4809 2.6831 14.4938 2.92235C14.512 2.93915 14.5359 2.94861 14.5607 2.94893C14.5607 2.97552 14.5735 3.02868 14.5735 3.05527C14.6267 3.0021 14.6927 2.96177 14.7734 2.98835C14.7862 3.02868 14.7999 3.0681 14.8128 3.12127C14.7596 3.17443 14.733 3.24043 14.7596 3.3211C15.1849 3.33393 15.6103 3.3211 16.0484 3.3211C16.0888 3.26793 16.1548 3.24135 16.2217 3.21477C16.2502 3.22943 16.2769 3.24726 16.3014 3.26793H16.9248C16.9489 3.36786 16.9536 3.47149 16.9385 3.57318H16.3005C16.2768 3.5987 16.25 3.62118 16.2208 3.6401C16.1548 3.59977 16.1016 3.57318 16.0356 3.53377H14.8797C14.6533 3.59977 14.414 3.58693 14.1885 3.5466V3.79868H12.2874C12.213 3.86456 12.1202 3.90614 12.0215 3.91785C12.0619 4.11768 11.8364 4.17085 11.7557 4.31752C11.7046 4.39254 11.6302 4.4486 11.5439 4.47702C11.477 4.8886 11.6237 5.27452 11.73 5.65952C11.6109 5.6861 11.477 5.72552 11.3579 5.7521C11.2909 6.01793 11.2249 6.2966 11.1718 6.56243C11.1418 6.68145 11.084 6.79168 11.0033 6.88409C10.9225 6.9765 10.821 7.04847 10.707 7.0941C10.5475 7.28018 10.3349 7.46627 10.0819 7.4791C9.98927 7.5066 9.92236 7.43968 9.85636 7.38652C9.52452 7.4131 9.21836 7.2536 8.92594 7.12068C8.60786 6.97402 8.31544 6.78793 8.00927 6.61652C8.03677 6.80168 7.94327 6.96118 7.87636 7.12068C8.02302 7.18668 8.22194 7.23985 8.30169 7.39935C8.35486 7.51852 8.40802 7.65235 8.40802 7.7981C8.39519 8.2766 8.34202 8.7551 8.31544 9.23268C8.32827 9.57827 8.15594 9.92385 7.91669 10.1769C7.75719 10.1631 7.62427 10.0962 7.47852 10.0302C7.42536 10.1494 7.30527 10.2685 7.37219 10.4152C7.42536 10.5884 7.42536 10.7745 7.50511 10.934C7.96075 11.4064 8.33743 11.9489 8.62069 12.5409C8.89936 13.1129 9.11202 13.7106 9.33844 14.3083C9.37786 14.3083 9.45761 14.2945 9.49794 14.2945C9.55111 14.4678 9.49794 14.6667 9.60427 14.8262C9.69686 14.9728 9.67027 15.1452 9.67027 15.3175C9.64369 15.7163 9.61711 16.115 9.57769 16.5138C9.55019 16.7924 9.48419 17.072 9.44477 17.3507C9.45761 17.5633 9.55111 17.776 9.53736 17.9887C9.52452 18.1876 9.52452 18.4003 9.36502 18.546C9.37786 18.9979 9.25869 19.4498 9.41819 19.888C9.63086 20.1813 9.87011 20.4591 10.1222 20.7121C10.4009 20.845 10.7336 20.8716 10.9729 21.1108C11.0645 21.2575 11.0123 21.4289 10.9857 21.5884C10.4171 21.6682 9.84013 21.6682 9.27152 21.5884C9.04602 21.5353 8.83336 21.4427 8.60786 21.4161C8.30169 21.4289 7.94327 21.549 7.66369 21.3363C7.63802 20.9779 7.77094 20.6324 7.83694 20.2868C7.86352 20.1676 7.98361 20.0879 7.96986 19.9678C7.94236 19.5553 7.91669 19.1308 7.89011 18.7193C7.83694 18.6918 7.74344 18.6661 7.75719 18.5863C7.75719 18.3865 7.69119 18.1876 7.63802 18.0015C7.54907 17.4925 7.50003 16.9773 7.49136 16.4606C7.47852 16.3139 7.57111 16.2076 7.67744 16.115C7.70494 15.8895 7.73061 15.6503 7.74436 15.4239C7.70402 15.3047 7.61144 15.2112 7.55827 15.1049C7.31902 15.1324 6.97344 15.1846 6.82769 14.9325C6.48211 14.4146 6.12277 13.8829 5.77811 13.365C5.63144 13.3513 5.45911 13.365 5.32619 13.2715C5.17952 13.112 5.08694 12.9003 4.99344 12.7004C4.95402 12.8599 4.92744 13.0323 4.83394 13.1652C4.75419 13.2981 4.62219 13.3916 4.52869 13.5108C4.43611 13.7234 4.35636 13.9361 4.27661 14.1488C4.18311 14.4146 4.05019 14.6804 4.02361 14.9728C4.01349 15.1139 3.98229 15.2526 3.93102 15.3844C3.86411 15.4908 3.74494 15.5311 3.63861 15.5834C3.55886 15.7566 3.50569 15.9289 3.38652 16.0756C3.30677 16.1682 3.17386 16.1948 3.12069 16.3139C3.06752 16.4734 2.98777 16.6201 2.92086 16.7659C2.89427 16.9254 3.00061 17.0986 2.94836 17.2572C2.85486 17.6559 2.65502 18.0281 2.46986 18.3865C2.37636 18.6523 2.31036 18.9319 2.17652 19.184C2.12427 19.2903 1.99136 19.3169 1.88502 19.3307C1.76586 19.6222 1.63202 19.9018 1.55319 20.207C1.51748 20.5023 1.50828 20.8002 1.52569 21.0971C1.52569 21.23 1.60636 21.3363 1.65952 21.4555C1.71177 21.615 1.67236 21.7745 1.64577 21.934C1.12786 22.0009 0.59619 22.0532 0.091107 21.8946C0.0379403 21.8543 0.0516902 21.7883 0.0379402 21.7351C-0.00147642 21.4958 -0.0280597 21.2438 0.0516903 21.0173C0.224024 20.3931 0.37069 19.7689 0.543024 19.1446C0.477024 19.0777 0.383524 19.0254 0.383524 18.9182C0.37069 18.7458 0.383524 18.5598 0.423857 18.3865C0.503607 18.0941 0.715357 17.8686 0.82169 17.589C0.862024 17.4699 0.84919 17.3507 0.862024 17.2315C0.862024 16.9519 1.02152 16.7264 1.14069 16.4872C1.25986 16.2873 1.35336 16.0747 1.51286 15.9023C1.61919 15.8098 1.61919 15.664 1.69894 15.5439C1.77869 15.3973 1.91161 15.2781 1.91161 15.1049C1.93819 14.8931 1.85844 14.6804 1.88411 14.4678C1.93819 13.8435 2.05827 13.2321 2.16369 12.6069C2.11052 12.5409 2.03077 12.4749 2.00419 12.3814C2.01794 12.3154 2.03169 12.2623 2.04452 12.1954L1.92536 11.9964C1.97761 11.9167 2.03077 11.8241 2.08394 11.7444C2.03077 11.704 1.96477 11.6509 1.91161 11.6114C1.97761 11.4116 1.95102 11.1192 2.19027 11.0266C2.21777 11.0394 2.28377 11.0532 2.30944 11.066C2.27002 10.7214 2.27002 10.362 2.23061 10.0164C2.14223 9.64683 2.11958 9.26456 2.16369 8.8871C2.29661 8.68818 2.54869 8.60843 2.77511 8.5956C2.48269 8.52868 2.19027 8.5021 1.91161 8.40952C1.89786 8.17027 1.93819 7.93102 1.97761 7.69177C2.09677 7.22702 2.04452 6.74852 2.11052 6.27093C2.17744 6.1371 2.34977 6.11052 2.49552 6.1371C2.66877 6.1646 2.84111 6.11052 3.01436 6.05735C3.01436 5.99135 3.02719 5.91068 3.01436 5.84468C2.90802 5.37993 2.93461 4.90143 3.01436 4.45043C3.12069 3.8656 3.35994 3.29452 3.79811 2.88293C4.09052 2.60335 4.51586 2.47043 4.91369 2.48418C5.04661 2.48418 5.12636 2.6171 5.23269 2.69685C5.28586 2.64368 5.33902 2.59052 5.37936 2.53735C5.31244 2.31093 5.20611 2.07168 5.21986 1.83243C5.24644 1.30077 5.41877 0.756268 5.81752 0.397852M9.96269 4.15802C9.98927 4.1846 9.98927 4.1846 9.96269 4.15802V4.15802ZM10.1488 4.1846C10.1616 4.27718 10.1882 4.37068 10.135 4.45043C10.069 4.47702 9.98836 4.47702 9.92236 4.51643C10.1084 4.51643 10.2945 4.53018 10.4815 4.51643C10.6273 4.47702 10.5732 4.29094 10.5732 4.1846C10.4815 4.07827 10.2817 4.14427 10.1488 4.1846ZM9.68402 4.74285C9.81694 4.8886 9.88294 5.1141 10.0021 5.26077C10.1754 5.03435 10.3083 4.7951 10.5072 4.59618C10.2689 4.58243 10.0287 4.60993 9.79036 4.58243C9.75002 4.6356 9.72344 4.68968 9.68402 4.74285Z" />
                        </svg>

                        <p className="fs-16">CS 2</p>
                    </div>

                    <div
                        onClick={() => navigate("/events")}
                        className="navbar-section prof-navbar-section"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            viewBox="0 0 29 29"
                            fill="none"
                        >
                            <path
                                d="M21.2502 1.61556C22.2512 1.80659 22.8446 2.01654 23.3574 2.64813C23.9997 3.4391 23.9657 4.29399 23.8978 6.00376C23.6538 12.1504 22.2763 19.9001 14.5004 19.9001C6.72436 19.9001 5.34684 12.1504 5.10282 6.00376C5.03494 4.29399 5.001 3.4391 5.64322 2.64813C6.28544 1.85717 7.05409 1.72748 8.59138 1.4681C10.1089 1.21207 12.0925 1 14.5004 1C15.47 1 16.3708 1.0344 17.2001 1.09219"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M23.9503 5.04993L25.2309 5.47681C26.5676 5.92234 27.2358 6.14511 27.618 6.67544C28.0003 7.20578 28.0003 7.91023 28.0002 9.31911V9.41702C28.0002 10.579 28.0002 11.16 27.7205 11.6354C27.4407 12.1107 26.9329 12.3929 25.9171 12.9572L21.9253 15.175"
                                stroke="black"
                                strokeWidth="2"
                            />
                            <path
                                d="M5.04994 5.04993L3.7693 5.47681C2.43271 5.92234 1.76442 6.14511 1.38219 6.67544C0.999947 7.20578 0.99996 7.91023 1 9.31911V9.41702C1.00004 10.579 1.00005 11.16 1.27976 11.6354C1.55946 12.1107 2.06736 12.3929 3.08313 12.9572L7.07495 15.175"
                                stroke="black"
                                strokeWidth="2"
                            />
                            <path
                                d="M14.5 21.2501V23.9501"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M19.225 28.0001H9.7749L10.2329 25.7104C10.3591 25.0794 10.9131 24.6251 11.5566 24.6251H17.4432C18.0868 24.6251 18.6408 25.0794 18.767 25.7104L19.225 28.0001Z"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M22.6 28.0001H6.3999"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        <p className="fs-16">Events</p>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
