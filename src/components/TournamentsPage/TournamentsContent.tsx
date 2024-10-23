import TournamentInfo from "../UI/TournamentInfo";

import "../../styles/components/TournamentsPage/TournamentsContent.scss";

type TournamentsContentProps = {
    title: string;
    description: string;
};

const TournamentsContent = ({
    title,
    description,
}: TournamentsContentProps) => {
    const formatDescription = (array: string[]) => {
        return array
            .map((item: string) => item.trim())
            .filter((item: string | undefined) => item !== "");
    };

    return (
        <div className="tournaments-content-container">
            <div className="tournaments-content">
                <TournamentInfo />

                <div className="tournaments-content-description">
                    <p className="fs-32">{title} Tournaments</p>

                    <div className="tournaments-content-description-inner">
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
        </div>
    );
};

export default TournamentsContent;
