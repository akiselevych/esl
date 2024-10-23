import { useParams } from "react-router-dom";
import { tournaments } from "../../data/data";
import "../../styles/components/DetailedTournamentPage/DTPContent.scss";
import DTPInfoCard from "../UI/DTPInfoCard";
import SettingsTable from "../UI/SettingsTable";

const DTPContent = () => {
    // request (note for searching)
    const params = useParams();
    const test: any = tournaments.filter(
        (item: any) => item.game == params.game && item.id == params.id
    );

    const game: any = test[0];
    // const [game, setGame] = useState<any>({});

    // useEffect(() => {
    //     axios
    //         .get(
    //             `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/tournaments/${params.game}/${params.id}/`
    //         )
    //         .then((res) => setGame(res.data));
    // }, []);

    return (
        <div className="detailed-tournament-content">
            <DTPInfoCard />

            <div className="detailed-tournament-content-inner">
                <div className="detailed-tournament-content-wrapper">
                    <div className="detailed-tournament-settings-table-wrapper">
                        <p className="fs-32 fw-600">About the tournament</p>

                        <SettingsTable />
                    </div>

                    <div className="detailed-tournament-allowed-wrapper">
                        <p className="fs-32 fw-600">Map pool</p>

                        <div className="detailed-tournament-allowed">
                            {game.map_pool &&
                                game.map_pool.map((thing: any) => (
                                    <div className="detailed-tournament-allowed-thing">
                                        <div
                                            className="detailed-tournament-allowed-thing-image"
                                            style={{
                                                backgroundImage: `url(${thing.image})`,
                                            }}
                                        ></div>

                                        <p>{thing.name}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="detailed-tournament-description-wrapper">
                <div className="detailed-tournament-description">
                    <p className="fs-32 fw-600">Description</p>

                    <p className="desc fs-16">Prizes:</p>
                    {game.desciption &&
                        game.desciption?.prizes.map((prize: any) => (
                            <p className="desc fs-16">{prize}</p>
                        ))}
                </div>
            </div>

            <div className="detailed-tournament-participants-wrapper">
                <div className="detailed-tournament-participants">
                    <p className="fs-32 fw-600">Participants</p>

                    {game.participants_users &&
                        game.participants_users.map((user: any) => (
                            <div className="detailed-tournament-participant">
                                <div
                                    className="detailed-tournament-participant-avatar"
                                    style={{
                                        backgroundImage: `url(${user.image})`,
                                    }}
                                ></div>

                                <p className="fs-16 fw-600">{user.name}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default DTPContent;
