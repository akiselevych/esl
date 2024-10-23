import { useNavigate } from "react-router-dom";

import "../../styles/components/CurrentEventPage/CurrentEventPageContent.scss";

import Button from "../UI/Button";
import CurrentEventPageBracket from "../UI/CurrentEventPageBracket";

import dotaUnderlords from "../../sources/dota-underlords.jpg";

type CurrentEventPageContentProps = {
    object: any;
};

const CurrentEventPageContent = ({ object }: CurrentEventPageContentProps) => {
    const navigate = useNavigate();

    return (
        <div className="c-event-content">
            <div className="c-event-past-matches">
                {object.tournaments &&
                    object.tournaments.map((info: any) => (
                        <div className="c-event-past-match">
                            <p className="fs-16 fw-600">
                                Past Games: {info.date}
                            </p>
                            {info.tournaments.map((tournament: any) => (
                                <div className="c-event-past-game">
                                    <div className="c-event-past-game-time">
                                        <p className="desc">
                                            {tournament.time}
                                        </p>
                                    </div>

                                    <div className="c-event-past-game-category-teams">
                                        {tournament.teams.map((team: any) => (
                                            <div className="c-event-past-game-category-team">
                                                <div className="c-event-past-game-category-team-info">
                                                    <img src={team.image} />
                                                    {team.name}
                                                </div>

                                                <div className="c-event-past-game-category-team-score">
                                                    {team.winner && (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="19"
                                                            viewBox="0 0 20 19"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M18 6L16 18H4L2 6M18 6L16.2838 7.37299C15.1678 8.2657 14.6099 8.7121 14.0474 8.7814C13.5547 8.8421 13.057 8.7173 12.6511 8.4314C12.1879 8.1051 11.9064 7.4483 11.3435 6.13476L10 3M18 6C17.4477 6 17 5.55228 17 5C17 4.44772 17.4477 4 18 4C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6ZM2 6L3.7162 7.373C4.8322 8.2657 5.3901 8.7121 5.9526 8.7814C6.4453 8.8421 6.943 8.7173 7.3489 8.4314C7.8121 8.1051 8.0936 7.4483 8.6565 6.13476L10 3M2 6C1.4477 6 1 5.55228 1 5C1 4.44772 1.4477 4 2 4C2.5523 4 3 4.44772 3 5C3 5.55228 2.5523 6 2 6ZM10 3C9.4477 3 9 2.55228 9 2C9 1.44772 9.4477 1 10 1C10.5523 1 11 1.44772 11 2C11 2.55228 10.5523 3 10 3ZM10 2H9.99M2 5H1.99M18 5H17.99"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    )}

                                                    <p>{team.score}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="c-event-past-game-category">
                                        <p className="desc">
                                            {tournament.location}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>

            <div className="c-event-standings">
                <p className="fs-24">Standings</p>
                <CurrentEventPageBracket tournaments={object.tournaments} />
            </div>

            <div
                className="c-event-offer"
                style={{ backgroundImage: `url(${dotaUnderlords})` }}
            >
                <div className="c-event-offer-content">
                    <p className="c-white fs-32 fw-600">
                        Join Dota 2 Tournaments
                    </p>
                    <p className="desc fs-16">
                        Play in tournaments to earn up to $45 in prize money. Go
                        it your all!
                    </p>
                    <Button
                        text="Go to tournament list"
                        callback={() => navigate("/dota-2")}
                        style={{ width: "auto" }}
                    />
                </div>
            </div>

            <div className="c-event-ships-wrapper">
                <div className="c-event-ships">
                    {object.ships &&
                        object.ships.map((ship: any) => (
                            <div className="c-event-ship">
                                <p className="desc fs-14">{ship.type}</p>
                                <img
                                    onClick={() =>
                                        window.open(
                                            ship.link,
                                            "_blank",
                                            "noreferrer"
                                        )
                                    }
                                    src={ship.image}
                                />
                            </div>
                        ))}
                </div>
            </div>

            <div className="c-event-disclaimer">
                <p className="fs-24 fw-600">Disclaimer</p>
                <p className="fs-16 desc">
                    No part of nor the entirety of a nickname or username will
                    be considered a direct identifier of any person. ESL Esports
                    does not recognize nicknames or usernames as personal
                    information identifying specific individual. Thus, all games
                    played on the tournament platform are anonymous in nature
                    and ESL Esports does not collect or process any personal
                    information related to natural persons.
                </p>
            </div>

            <div className="c-event-description">
                <p className="fs-24 fw-600">{object.title}</p>
                <p className="fs-21 desc">{object.description}</p>
            </div>
        </div>
    );
};

export default CurrentEventPageContent;
