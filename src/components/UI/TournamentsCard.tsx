import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/components/UI/TournamentsCard.scss";

type TournamentsCardProps = {
    logo: any;
    image: string;
    url: string;
};

const TournamentsCard = ({ logo, image, url }: TournamentsCardProps) => {
    const navigate = useNavigate();

    const onHover = () => {
        const cards = document.querySelectorAll(".hero-lower-part-content");

        if (cards) {
            cards.forEach((card) => {
                card.addEventListener("mouseenter", () => {
                    card.classList.add("active");
                });

                card.addEventListener("mouseleave", () => {
                    card.classList.remove("active");
                });
            });
        }
    };

    useEffect(() => {
        onHover();
    }, []);

    return (
        <div onClick={() => navigate(url)} className="hero-lower-part-content">
            <img className="hero-lower-part-content-background" src={image} />
            <div className="hero-lower-part-inner">
                <div className="hero-lower-part-logo">{logo}</div>
                <div className="tournament-link">
                    Go to tournaments
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                    >
                        <path
                            d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TournamentsCard;
