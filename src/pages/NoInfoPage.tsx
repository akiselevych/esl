import "../styles/pages/NoInfoPage.scss";
import "../styles/pages/Page.scss";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type NoInfoPageProps = {
    title: string;
    description: string;
    background: string;
};

const NoInfoPage = ({ title, description, background }: NoInfoPageProps) => {
    const formatDescription = (array: string[]) => {
        return array
            .map((item: string) => item.trim())
            .filter((item: string | undefined) => item !== "");
    };

    return (
        <div className="page">
            <Navbar />

            <div className="no-info-container">
                <div
                    className="no-info-content"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="no-info-content-inner">
                        <p className="fs-32 fw-600 c-white">
                            Weekly tournaments
                        </p>
                        <p className="fs-16 c-white">
                            Find detailed info about tournaments in our Discord
                            channel
                        </p>
                    </div>
                </div>

                <div className="no-info-description">
                    <p className="fs-32 fw-600">{title} Tournaments</p>

                    <p className="fs-14 desc">0 tournaments</p>

                    <div className="no-info-tournaments">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            viewBox="0 0 35 35"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.7938 34.2231C7.51905 34.2231 0 26.5621 0 17.1117C0 7.66139 7.51905 0 16.7938 0C26.0686 0 33.5877 7.66139 33.5877 17.1117C33.5877 26.5621 26.0686 34.2231 16.7938 34.2231ZM6.2765 25.8553C5.71343 25.1571 5.21574 24.4018 4.79199 23.6001L17.5705 2.92505C20.6395 3.06739 23.4471 4.23109 25.6721 6.09261L6.2765 25.8553ZM10.4794 29.3599C9.68705 28.9317 8.94153 28.4274 8.25084 27.8552L27.635 8.10436C29.4512 10.3823 30.58 13.2505 30.7026 16.3832L10.4794 29.3599ZM13.7493 30.6141C22.5403 32.6073 29.1612 26.2722 30.4037 19.9275L13.7493 30.6141Z"
                                fill="black"
                            ></path>
                        </svg>
                        <p className="fs-16 fw-600">
                            We haven’t found any tournament, sorry :(
                        </p>
                    </div>

                    <div className="no-info-game-description">
                        {formatDescription(description.split("\n")).map(
                            (item: string, index: number) => (
                                <p className="fs-16 desc" key={index}>
                                    {item}
                                </p>
                            )
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default NoInfoPage;
