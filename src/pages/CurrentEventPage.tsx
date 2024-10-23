import Navbar from "../components/EventsNavbar";

import Footer from "../components/Footer";

import CurrentEventPageContent from "../components/CurrentEventPage/CurrentEventPageContent";
import CurrentEventPageHeader from "../components/CurrentEventPage/CurrentEventPageHeader";
import "../styles/pages/Page.scss";

type CurrentEventPageProps = {
    object: any;
};

const CurrentEventPage = ({ object }: CurrentEventPageProps) => {
    return (
        <div className="page">
            <Navbar />

            <CurrentEventPageHeader object={object} />

            <CurrentEventPageContent object={object} />

            <Footer />
        </div>
    );
};

export default CurrentEventPage;
