import { useNavigate } from "react-router-dom";

import Navbar from "../components/EventsNavbar";
import Footer from "../components/Footer";
import EventCard from "../components/UI/EventCard";

import { events } from "../data/data";
import "../styles/pages/EventsPage.scss";
import "../styles/pages/Page.scss";

const EventsPage = () => {
    const navigate = useNavigate();

    // request (note for searching)

    return (
        <div className="page">
            <Navbar />

            <div className="events-header">
                <div className="events-header-inner">
                    <p className="fs-48 fw-600">
                        ESL Dota 2 Tug of War: Mad Moon
                    </p>
                    <button
                        className="events-button"
                        onClick={() => navigate("/mad-moon")}
                    >
                        About the event
                    </button>
                </div>
            </div>
            <div className="events-content-container">
                <div className="events-content">
                    <p className="fs-48 fw-600">Events we are proud of</p>
                    <p className="desc fs-16">
                        Tournaments that will forever remain in our hearts via
                        highlight reels on YouTube, Instagram photos and warm
                        feedback.
                    </p>

                    <div className="events-content-list">
                        {events &&
                            events.map((event) => <EventCard event={event} />)}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default EventsPage;
