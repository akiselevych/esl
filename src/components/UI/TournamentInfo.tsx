import { useParams } from "react-router-dom";

import TournamentInfoCard from "./TournamentInfoCard";

import { tournaments as games } from "../../data/data";

import "../../styles/components/UI/TournamentInfo.scss";

const TournamentInfo = () => {
    const params = useParams();
    const tournaments = games.filter((item) => item.game == params.game);
    // const [tournaments, setTournaments] = useState([]);

    // request (note for searching)
    // axios
    //     .get(
    //         `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/tournaments/${params.game}`
    //     )
    //     .then((res) => setTournaments(res.data));

    console.log(tournaments);

    return (
        <table className="tournament-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Mode</th>
                    <th>Access</th>
                    <th>Participants</th>
                    <th>Prizes</th>
                </tr>
            </thead>
            <tbody>
                {tournaments &&
                    tournaments.map((tournament: any) => (
                        <TournamentInfoCard tournament={tournament} />
                    ))}
            </tbody>
        </table>
    );
};

export default TournamentInfo;
