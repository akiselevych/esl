import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/components/MainPage/InAdditionWwo.scss";
import img from '../../sources/naviImage.png'

const InAdditionWwo = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const chooseOption = (hash: string) => {
        navigate(hash);
    };

    const result =
        location.hash === "#expanded-stats" ? ( // if hash is #expanded-stats
            <img src={img} width={"100%"} />
        ) : !location.hash ? ( // if hash is undefined
            <img src={img} width={"100%"} />
        ) : (
            // else
            <img src={img} width={"100%"} />
        );

    return (
        <div className="in-addition-wwo">
            <p className="fs-48 fw-600">But wait, there’s more</p>
            <div className="in-addition-wwo-content">
                <div className="in-addition-wwo-options">
                    <div
                        onClick={() => chooseOption("#expanded-stats")}
                        className={`in-addition-wwo-option ${
                            location.hash === "#expanded-stats"
                                ? "active"
                                : !location.hash
                                ? "active"
                                : ""
                        }`}
                    >
                        <p className="fs-24 fw-600">Expanded stats</p>
                        <p className="desc fs-14">
                            Analyze your stats to make better decisions. As Sun
                            Tzu said in the Art of War, "If you know the enemy
                            and know yourself, you need not fear the result of a
                            hundred battles." And we couldn’t agree more.
                        </p>
                    </div>
                </div>

                <div className="in-addition-wwo-result">{result}</div>
            </div>
        </div>
    );
};

export default InAdditionWwo;
