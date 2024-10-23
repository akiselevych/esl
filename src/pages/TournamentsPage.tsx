import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TournamentsContent from "../components/TournamentsPage/TournamentsContent";
import TournamentsHeader from "../components/TournamentsPage/TournamentsHeader";

import "../styles/pages/Page.scss";

type TournamentsPageProps = {
    logo: any;
    title: string;
    description: string;
    link: string;
    topLink: string;
};

const TournamentsPage = ({
    logo,
    title,
    description,
}: TournamentsPageProps) => {
    // request (note for searching) ???

    return (
        <div className="page">
            <Navbar />

            <TournamentsHeader logo={logo} title={title} />

            <TournamentsContent title={title} description={description} />

            <Footer />
        </div>
    );
};

export default TournamentsPage;
