import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import DTPContent from "../components/DetailedTournamentPage/DTPContent";
import { tournaments } from "../data/data";
import "../styles/pages/DetailedTournamentPage.scss";
import "../styles/pages/Page.scss";

const DetailedTournamentPage = () => {
    const params = useParams();
    const test: any = tournaments.filter(
        (item: any) => item.game == params.game
    );

    const game: any = test[0];
    // const [game, setGame] = useState<any>({});

    // // request (note for searching)
    // useEffect(() => {
    //     axios
    //         .get(
    //             `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/tournaments/${params.game}/${params.id}/`
    //         )
    //         .then((res) => setGame(res.data));
    // }, []);

    return (
        <div className="page">
            <Navbar />

            <div
                className="detailed-tournament-header"
                style={{ backgroundImage: `url(${game.cover_image})` }}
            >
                <div className="detailed-tournament-inner">
                    <p className="fs-32 fw-600 c-white">{game.name}</p>
                </div>
            </div>

            <DTPContent />

            <Footer />
        </div>
    );
};

export default DetailedTournamentPage;
