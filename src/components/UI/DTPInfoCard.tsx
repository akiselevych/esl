import { tournaments } from "../../data/data";
import "../../styles/components/UI/DTPInfoCard.scss";

import { useNavigate, useParams } from "react-router-dom";

const DTPInfoCard = () => {
    const navigate = useNavigate();
    const params = useParams();
    const test: any = tournaments.filter(
        (item: any) => item.id == params.id && item.game == params.game
    );

    const game: any = test[0];

    console.log(game);

    // const [game, setGame] = useState<any>({});
    // // request (note for searching)
    // useEffect(() => {
    //     axios
    //         .get(
    //             `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/tournaments/${params.game}/${params.id}`
    //         )
    //         .then((res) => setGame(res.data));
    // }, []);

    return (
        <div className="detailed-tournament-info-card-path">
            <div className="detailed-tournament-info-card">
                <div className="detailed-tournament-info-card-inner">
                    <div className="detailed-tournament-game-info">
                        <div className="detailed-tournament-info-card-category">
                            <div className="detailed-tournament-info-card-category-inner">
                                <div
                                    className="detailed-tournament-info-card-category-game-avatar"
                                    style={{
                                        backgroundImage: `url(${game.cover_image})`,
                                    }}
                                ></div>
                                <div className="detailed-tournament-info-card-category-game-info">
                                    <p className="fs-16 fw-600">
                                        {game.game_name}
                                    </p>
                                    <p className="desc fs-14">5v5</p>
                                </div>
                            </div>

                            <div className="detailed-tournament-info-card-category-inner">
                                <div className="detailed-tournament-info-card-category-status">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="6"
                                        height="6"
                                        viewBox="0 0 6 6"
                                        fill="none"
                                    >
                                        <circle
                                            cx="3"
                                            cy="3"
                                            r="3"
                                            fill="#FFAB2E"
                                        />
                                    </svg>

                                    <p className="fs-16 fw-600">{game.date}</p>
                                </div>
                            </div>
                        </div>

                        <div className="detailed-tournament-info-card-category">
                            <div className="detailed-tournament-info-card-category-inner">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                >
                                    <path
                                        d="M13.8412 15.4936L10.1032 13.4246C11.4925 12.3325 11.8701 10.1863 11.8701 8.98274V6.47768C11.8701 4.81911 9.66446 2.9719 7.44872 2.9719C5.23417 2.9719 2.96975 4.81911 2.96975 6.47768V8.98274C2.96975 10.0772 3.43285 12.2904 4.83639 13.4151L1.00219 15.493C1.00219 15.493 0 15.9391 0 16.4949V17.9981C0 18.5515 0.449441 19 1.00219 19H13.8412C14.394 19 14.8434 18.551 14.8434 17.9981V16.4949C14.8434 15.9053 13.8406 15.493 13.8406 15.493L13.8412 15.4936ZM13.656 17.8148H1.18743V16.7542C1.27233 16.6919 1.39166 16.6201 1.48547 16.5774C1.51337 16.5649 1.54128 16.5513 1.568 16.5359L5.40279 14.4579C5.75248 14.2681 5.98403 13.9169 6.01966 13.5213C6.05528 13.1256 5.88963 12.7382 5.57971 12.4897C4.58406 11.6919 4.15718 9.92591 4.15718 8.98333V6.47827C4.15718 5.62585 5.76495 4.15888 7.44872 4.15888C9.16396 4.15888 10.6827 5.60628 10.6827 6.47827V8.98333C10.6827 9.91227 10.3941 11.6865 9.36938 12.4921C9.0559 12.7388 8.88669 13.1268 8.91994 13.5236C8.95319 13.9205 9.18474 14.2752 9.53444 14.4662L13.2725 16.5353C13.3051 16.5531 13.3473 16.5727 13.3817 16.5881C13.4696 16.6254 13.577 16.6871 13.656 16.7417V17.8148ZM17.9966 12.5401L14.2028 10.4711C15.5921 9.37899 16.0255 7.23281 16.0255 6.02922V3.52416C16.0255 1.86559 13.7646 0 11.5489 0C10.1091 0 8.63734 0.782423 7.78061 1.78373C8.26923 1.81399 8.80773 1.81458 9.2732 1.96288C9.89898 1.47587 10.6898 1.18698 11.5489 1.18698C13.2641 1.18698 14.8381 2.65217 14.8381 3.52476V6.02982C14.8381 6.95876 14.4937 8.733 13.4696 9.53856C13.1555 9.78533 12.9869 10.1733 13.0201 10.5701C13.0534 10.9676 13.2843 11.3217 13.6346 11.5127L17.4284 13.5818C17.4611 13.5996 17.5033 13.6191 17.5377 13.6346C17.6256 13.6719 17.733 13.7336 17.812 13.7882V14.8435H15.4152C15.7773 15.1164 15.8866 15.5067 16.0273 16.0299H17.9978C18.5506 16.0299 19 15.5808 19 15.028V13.5432C18.9994 12.953 17.9966 12.5401 17.9966 12.5401Z"
                                        fill="black"
                                        fill-opacity="0.52"
                                    />
                                </svg>

                                <p className="fs-16 fw-600">
                                    {game.participants}
                                </p>
                            </div>

                            <div className="detailed-tournament-info-card-category-inner">
                                {game.access === true ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        viewBox="0 0 14 15"
                                        fill="none"
                                    >
                                        <path
                                            d="M1 12.9376V6.57086C1 6.13132 1.35631 5.77502 1.79584 5.77502H9.75423C10.1938 5.77502 10.5501 6.13132 10.5501 6.57086V12.9376C10.5501 13.3771 10.1938 13.7334 9.75423 13.7334H1.79584C1.35631 13.7334 1 13.3771 1 12.9376Z"
                                            stroke="#199EFF"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5.77527 11.3459C6.65433 11.3459 7.36695 10.6333 7.36695 9.75422C7.36695 8.87516 6.65433 8.16254 5.77527 8.16254C4.89621 8.16254 4.18359 8.87516 4.18359 9.75422C4.18359 10.6333 4.89621 11.3459 5.77527 11.3459Z"
                                            stroke="#199EFF"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.95898 5.77504V2.9896C8.95898 1.89077 9.84977 1 10.9486 1C12.0474 1 12.9382 1.89077 12.9382 2.9896V5.77504"
                                            stroke="#199EFF"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        viewBox="0 0 12 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M1 14.1667V7.50002C1 7.03977 1.3731 6.66669 1.83333 6.66669H10.1667C10.6269 6.66669 11 7.03977 11 7.50002V14.1667C11 14.6269 10.6269 15 10.1667 15H1.83333C1.3731 15 1 14.6269 1 14.1667Z"
                                            stroke="#FF1967"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M5.99967 12.5C6.92015 12.5 7.66634 11.7538 7.66634 10.8334C7.66634 9.91288 6.92015 9.16669 5.99967 9.16669C5.0792 9.16669 4.33301 9.91288 4.33301 10.8334C4.33301 11.7538 5.0792 12.5 5.99967 12.5Z"
                                            stroke="#FF1967"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M2.66699 6.66669V5.00002C2.66699 3.15907 4.15938 1.66669 6.00033 1.66669C7.84124 1.66669 9.33366 3.15907 9.33366 5.00002V6.66669H2.66699Z"
                                            stroke="#FF1967"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>
                        </div>

                        <div className="detailed-tournament-info-card-category">
                            <div className="detailed-tournament-info-card-category-inner">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                >
                                    <path
                                        d="M13.4055 6.61755H20.6615V2.8725H17.0288M4.6327 2.8725H1V6.61755H8.25604M10.4843 6.61755H11.1865L10.8308 5.68129L10.4843 6.61755Z"
                                        stroke="black"
                                        stroke-opacity="0.52"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M19.7246 6.61755V20.6615H1.93555V6.61755M9.12605 2.8725H12.6464"
                                        stroke="black"
                                        stroke-opacity="0.52"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.8302 5.68129C11.6058 5.68129 12.2346 5.05252 12.2346 4.27689C12.2346 3.50127 11.6058 2.8725 10.8302 2.8725C10.0546 2.8725 9.42578 3.50127 9.42578 4.27689C9.42578 5.05252 10.0546 5.68129 10.8302 5.68129Z"
                                        stroke="black"
                                        stroke-opacity="0.52"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9.71599 3.41556C8.33968 2.03925 6.3548 1 5.21256 1C4.07032 1 4.74443 3.02233 4.74443 3.80879C4.74443 4.59525 4.56654 6.61758 5.6807 6.61758C6.79485 6.61758 9.7628 5.21319 9.7628 5.21319M11.9724 3.49046C13.3487 2.11415 15.3055 1 16.4477 1C17.59 1 16.9159 3.02233 16.9159 3.80879C16.9159 4.59525 17.0937 6.61758 15.9796 6.61758C14.8654 6.61758 11.9817 5.12892 11.9817 5.12892"
                                        stroke="black"
                                        stroke-opacity="0.52"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.64816 5.68127L7.55273 8.49006L8.95713 8.02193L9.42526 9.42633M9.42526 9.42633L10.8297 5.68127L12.2341 9.42633M9.42526 9.42633V20.6615M13.058 5.63446L14.1066 8.49006L12.7022 8.02193L12.2341 9.42633M12.2341 9.42633V20.6615"
                                        stroke="black"
                                        stroke-opacity="0.52"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <p className="fs-16 fw-600">{game.prizes}</p>
                            </div>
                        </div>
                    </div>

                    <div className="detailed-tournament-card-button-wrapper">
                        <button className="detailed-tournament-card-button">
                            Join the tournament
                        </button>
                        <p className="fs-16">
                            <span
                                className="detailed-tournament-card-button-link"
                                onClick={() => navigate("/steam-connect")}
                            >
                                Login
                            </span>{" "}
                            to join the tournament.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DTPInfoCard;
