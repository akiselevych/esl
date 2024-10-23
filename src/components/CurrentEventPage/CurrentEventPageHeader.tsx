import { useNavigate } from "react-router-dom";

import "../../styles/components/CurrentEventPage/CurrentEventPageHeader.scss";

import Button from "../UI/Button";
type CurrentEventPageHeaderProps = {
    object: any;
};

const CurrentEventPageHeader = ({ object }: CurrentEventPageHeaderProps) => {
    const navigate = useNavigate();

    return (
        <div className="c-event-page-header">
            <div className="c-event-page-header-inner">
                <div className="c-event-avatar-wrapper">
                    <img className="c-event-avatar" src={object.avatar} />
                </div>

                <div className="c-event-page-header-content">
                    <div className="c-event-page-tags">
                        {object.tags &&
                            object.tags.map((tag: string) => (
                                <div className="beta">{tag}</div>
                            ))}
                    </div>

                    <p className="fs-48 fw-600">{object.title}</p>
                    <p className="fs-16 desc">
                        Wrap yourself up in a comfy blanket. Make some hot cocoa
                        and have a merry little Dota2!
                    </p>

                    <div className="c-event-page-tournament-info">
                        <div className="c-event-page-tournament-info-category">
                            <p className="fs-14 desc">Prize pool</p>
                            <p className="fs-16 fw-600">{object.prizePool}</p>
                        </div>

                        <div className="c-event-page-tournament-info-category">
                            <p className="fs-14 desc">Date</p>
                            <p className="fs-16 fw-600">{object.date}</p>
                        </div>

                        <div className="c-event-page-tournament-info-category">
                            <p className="fs-14 desc">Participants</p>
                            <p className="fs-16 fw-600">
                                {object.participants}
                            </p>
                        </div>

                        <div className="c-event-page-tournament-info-category">
                            <p className="fs-14 desc">Location</p>
                            <p className="fs-16 fw-600">{object.location}</p>
                        </div>
                    </div>

                    <div className="c-event-page-tournament-winner">
                        <div className="c-event-page-tournament-winner-avatar-wrapper">
                            <img
                                className="c-event-page-tournament-winner-avatar"
                                src={object.winner.avatar}
                            />
                        </div>
                        <div className="c-event-page-tournament-winner-info">
                            <p className="fs-14 desc">Event winner</p>
                            <p className="fs-24 fw-600">{object.winner.name}</p>
                            <p className="price fs-16">{object.winner.prize}</p>
                        </div>
                    </div>

                    <div className="c-event-page-tournament-receive-updates">
                        <p className="fs-16 desc">Register now for updates</p>
                        <Button
                            text="sign in"
                            callback={() => navigate("/register")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentEventPageHeader;
