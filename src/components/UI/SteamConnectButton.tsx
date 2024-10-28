import { useNavigate } from "react-router-dom";
import "../../styles/components/UI/SteamConnectButton.scss";

type SteamConnectButtonProps = {
    connected?: boolean;
};

const SteamConnectButton = ({ connected }: SteamConnectButtonProps) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/steam-connect")}
            className={`steam-connect ${connected ? "connected" : ""}`}
        >
            {!connected ? (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M13.3359 8.69141C13.3359 7.46953 14.3266 6.47891 15.5477 6.47891C16.7688 6.47891 17.7594 7.46953 17.7594 8.69063C17.7594 9.9125 16.7695 10.9023 15.5477 10.9023C15.5477 10.9023 15.5477 10.9023 15.5469 10.9023C14.3258 10.9023 13.3359 9.9125 13.3359 8.69141C13.3359 8.69141 13.3352 8.69141 13.3352 8.69063L13.3359 8.69141ZM18.4836 8.69609C18.4836 7.07031 17.1656 5.75234 15.5398 5.75234C13.9141 5.75234 12.5961 7.07031 12.5961 8.69609C12.5961 10.3219 13.9141 11.6398 15.5398 11.6398C17.1648 11.6375 18.4813 10.3203 18.4836 8.69609ZM7.33984 17.7781L5.90156 17.1828C6.31094 18.025 7.16016 18.5953 8.14219 18.5953C9.17109 18.5953 10.0547 17.9695 10.4313 17.0773L10.4375 17.0609C10.5586 16.7781 10.6297 16.4484 10.6297 16.1031C10.6297 14.7305 9.51719 13.618 8.14453 13.618C7.82812 13.618 7.52578 13.6773 7.24766 13.7844L7.26484 13.7789L8.75156 14.3938C9.41719 14.6781 9.87578 15.3281 9.87578 16.0844C9.87578 17.0969 9.05469 17.918 8.04219 17.918C7.78906 17.918 7.54844 17.8664 7.32891 17.7742L7.34063 17.7789L7.33984 17.7781ZM11.6734 0C5.53516 0.00078125 0.500781 4.72344 0.00312505 10.7328L0 10.775L6.27969 13.3703C6.80156 13.0094 7.44766 12.7945 8.14453 12.7945C8.14531 12.7945 8.14609 12.7945 8.14609 12.7945C8.20781 12.7945 8.26797 12.7984 8.32969 12.8008L11.1227 8.75703V8.69922C11.125 6.26172 13.1016 4.28672 15.5391 4.28672C17.9781 4.28672 19.9555 6.26406 19.9555 8.70313C19.9555 11.1422 17.9781 13.1195 15.5391 13.1195H15.4367L11.457 15.9617C11.457 16.0125 11.4609 16.0641 11.4609 16.1172C11.4609 16.118 11.4609 16.1188 11.4609 16.1195C11.4609 17.9492 9.97734 19.4328 8.14766 19.4328C6.54844 19.4328 5.21328 18.2992 4.90312 16.7922L4.89922 16.7711L0.403125 14.9094C1.84141 19.8664 6.34141 23.4289 11.6727 23.4289C18.1422 23.4289 23.3867 18.1844 23.3867 11.7148C23.3867 5.24531 18.1422 0.000781287 11.6727 0.000781287L11.6734 0Z"
                            fill="white"
                        />
                    </svg>
                    Connect Steam
                </>
            ) : (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                    >
                        <path
                            d="M12.7292 5.87498C12.7292 5.3342 12.2908 4.89581 11.75 4.89581H11.2604C8.28613 4.89581 5.875 7.30691 5.875 10.2812C5.875 13.2555 8.28613 15.6666 11.2604 15.6666H16.1562C19.1306 15.6666 21.5417 13.2555 21.5417 10.2812C21.5417 7.84222 19.9203 5.78184 17.6965 5.11929C17.145 4.95497 16.6458 5.41366 16.6458 5.98915V6.03977C16.6458 6.52701 17.0125 6.92611 17.4629 7.11206C18.7075 7.62573 19.5833 8.85115 19.5833 10.2812C19.5833 12.174 18.049 13.7083 16.1562 13.7083H11.2604C9.36769 13.7083 7.83333 12.174 7.83333 10.2812C7.83333 8.3885 9.36769 6.85414 11.2604 6.85414H11.75C12.2908 6.85414 12.7292 6.41577 12.7292 5.87498Z"
                            fill="white"
                        />
                        <path
                            d="M10.2812 0C13.2556 0 15.6667 2.41113 15.6667 5.38541C15.6667 8.35973 13.2556 10.7708 10.2812 10.7708H9.79166C9.25087 10.7708 8.81249 10.3325 8.81249 9.79166C8.81249 9.25087 9.25087 8.81249 9.79166 8.81249H10.2812C12.174 8.81249 13.7083 7.27814 13.7083 5.38541C13.7083 3.49269 12.174 1.95833 10.2812 1.95833H5.38541C3.49269 1.95833 1.95833 3.49269 1.95833 5.38541C1.95833 6.81548 2.83421 8.04091 4.07875 8.55458C4.52911 8.74043 4.89583 9.13963 4.89583 9.62687V9.67749C4.89583 10.2529 4.39669 10.7117 3.84518 10.5474C1.62142 9.88478 0 7.82442 0 5.38541C0 2.41113 2.41113 0 5.38541 0H10.2812Z"
                            fill="white"
                        />
                    </svg>
                    Steam connected
                </>
            )}
        </button>
    );
};

export default SteamConnectButton;
