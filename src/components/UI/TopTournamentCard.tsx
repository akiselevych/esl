import { useNavigate, useParams } from "react-router-dom";
import "../../styles/components/UI/TopTournamentCard.scss";

type TopTournamentCard = {
    title: string;
    prizes: string;
    background: string;
    link: any;
};

const TopTournamentCard = ({
    title,
    prizes,
    background,
    link,
}: TopTournamentCard) => {
    const navigate = useNavigate();
    const params = useParams();
    return (
        <div
            className="top-tournament-card"
            onClick={() => navigate(`/${params.game}/${link}`)}
        >
            <div className="beta">Top Notch</div>
            <div
                className="top-tournament-card-header"
                style={{ backgroundImage: `url(${background})` }}
            ></div>

            <div className="top-tournament-card-inner">
                <p className="fs-24 c-white">{title}</p>

                <div className="top-tournament-card-prizes">
                    <p className="fs-14 desc">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                d="M8.57143 4.4286H13V2.14288H10.7829M3.21714 2.14288H1V4.4286H5.42857M6.78857 4.4286H7.21714L7 3.85717L6.78857 4.4286Z"
                                stroke="currentColor"
                                strokeOpacity="0.52"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12.4284 4.4286V13H1.57129V4.4286M5.95986 2.14288H8.10843"
                                stroke="currentColor"
                                strokeOpacity="0.52"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.99972 3.85717C7.47311 3.85717 7.85686 3.47341 7.85686 3.00003C7.85686 2.52664 7.47311 2.14288 6.99972 2.14288C6.52633 2.14288 6.14258 2.52664 6.14258 3.00003C6.14258 3.47341 6.52633 3.85717 6.99972 3.85717Z"
                                stroke="currentColor"
                                strokeOpacity="0.52"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.3199 2.47429C5.4799 1.63429 4.26847 1 3.57133 1C2.87419 1 3.28561 2.23429 3.28561 2.71429C3.28561 3.19429 3.17704 4.42857 3.85704 4.42857C4.53704 4.42857 6.34847 3.57143 6.34847 3.57143M7.69704 2.52C8.53704 1.68 9.73133 1 10.4285 1C11.1256 1 10.7142 2.23429 10.7142 2.71429C10.7142 3.19429 10.8228 4.42857 10.1428 4.42857C9.46276 4.42857 7.70276 3.52 7.70276 3.52"
                                stroke="currentColor"
                                strokeOpacity="0.52"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.66857 3.85718L5 5.57147L5.85714 5.28576L6.14286 6.1429M6.14286 6.1429L7 3.85718L7.85714 6.1429M6.14286 6.1429V13M8.36 3.82861L9 5.57147L8.14286 5.28576L7.85714 6.1429M7.85714 6.1429V13"
                                stroke="currentColor"
                                strokeOpacity="0.52"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Prizes
                    </p>

                    <p className="fs-14 c-white">{prizes}</p>
                </div>
            </div>
        </div>
    );
};

export default TopTournamentCard;
