import { useNavigate, useParams } from "react-router-dom";

import "../../styles/components/UI/TournamentInfoCard.scss";

type TournamentInfoCardProps = {
    tournament: any;
};

const TournamentInfoCard = ({ tournament }: TournamentInfoCardProps) => {
    const navigate = useNavigate();
    const params = useParams();

    console.log(tournament);

    return (
        <tr
            onClick={() => navigate(`/${params.game}/${tournament.id}`)}
            className="tournament-content"
        >
            <td className="tournament-name-cell">
                <div
                    style={{
                        backgroundImage: `url(${tournament.cover_image})`,
                    }}
                    className="tournament-icon"
                ></div>
                <p className="tournament-name">{tournament.name}</p>
            </td>
            <td>
                <div className="tournament-status">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                    >
                        <circle cx="3" cy="3" r="3" fill="#FFAB2E" />
                    </svg>
                    {tournament.date}
                </div>
            </td>
            <td>{tournament.mode}</td>
            <td>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="tournament-access-icon"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                >
                    <path
                        d="M1 12.9376V6.57086C1 6.13132 1.35631 5.77502 1.79584 5.77502H9.75423C10.1938 5.77502 10.5501 6.13132 10.5501 6.57086V12.9376C10.5501 13.3771 10.1938 13.7334 9.75423 13.7334H1.79584C1.35631 13.7334 1 13.3771 1 12.9376Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M5.77527 11.3459C6.65433 11.3459 7.36695 10.6333 7.36695 9.75422C7.36695 8.87516 6.65433 8.16254 5.77527 8.16254C4.89621 8.16254 4.18359 8.87516 4.18359 9.75422C4.18359 10.6333 4.89621 11.3459 5.77527 11.3459Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.95801 5.77504V2.9896C8.95801 1.89077 9.84879 1 10.9476 1C12.0464 1 12.9372 1.89077 12.9372 2.9896V5.77504"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </td>
            <td>{tournament.participants}</td>
            <td>{tournament.prizes}</td>
        </tr>
    );
};

export default TournamentInfoCard;
