import "../../styles/components/UI/CurrentEventPageBracket.scss";

type CurrentEventPageBracketProps = {
    tournaments: any[];
};

const CurrentEventPageBracket = ({
    tournaments,
}: CurrentEventPageBracketProps) => {
    const svg1 = (
        <svg className="c-event-c-svg" width="60">
            <path
                d="M0, 51 H20 V202 H0"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M20, 125 H40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );
    const svg1_1 = (
        <svg className="c-event-c-svg" width="60">
            <path
                d="M0, 51 H20 V202 H0"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M20, 130 H40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );
    const svg2 = (
        <svg className="c-event-c-svg" width="60">
            <path
                d="M0, 51 H20 V500 H0"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M20, 275 H40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );

    const unic = (array: any) => {
        const newArray: any = [];
        array.forEach((item: any) => {
            item.tournaments.forEach((tournament: any) => {
                newArray.push([tournament.teams[0], tournament.teams[1]]);
            });
        });

        return newArray;
    };

    let teams = unic(tournaments);

    return (
        <div className="c-event-bracket">
            <div className="c-event-round semifinals">
                <div className="c-event-matches-duos">
                    {/* First column */}
                    <div className="c-event-c-event-match">
                        <div
                            className={`c-event-matchup ${
                                teams[0][0].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[0][0].image} />
                                {teams[0][0].name}
                            </div>
                            <div className="c-event-score">
                                {teams[0][0].score}
                            </div>
                        </div>
                        <div
                            className={`c-event-matchup ${
                                teams[0][1].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[0][1].image} />
                                {teams[0][1].name}
                            </div>
                            <div className="c-event-score">
                                {teams[0][1].score}
                            </div>
                        </div>
                    </div>

                    {svg1_1}

                    <div className="c-event-match">
                        <div
                            className={`c-event-matchup ${
                                teams[1][0].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[1][0].image} />
                                {teams[1][0].name}
                            </div>
                            <div className="c-event-score">
                                {teams[1][0].score}
                            </div>
                        </div>
                        <div
                            className={`c-event-matchup ${
                                teams[1][1].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[1][1].image} />
                                {teams[1][1].name}
                            </div>
                            <div className="c-event-score">
                                {teams[1][1].score}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="c-event-matches-duos">
                    {/* Second column */}
                    <div className="c-event-match">
                        <div
                            className={`c-event-matchup ${
                                teams[3][0].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[3][0].image} />
                                {teams[3][0].name}
                            </div>
                            <div className="c-event-score">
                                {teams[3][0].score}
                            </div>
                        </div>
                        <div
                            className={`c-event-matchup ${
                                teams[3][1].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[3][1].image} />
                                {teams[3][1].name}
                            </div>
                            <div className="c-event-score">
                                {teams[3][1].score}
                            </div>
                        </div>
                    </div>

                    {svg1}

                    <div className="c-event-match">
                        <div
                            className={`c-event-matchup ${
                                teams[4][0].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[4][0].image} />
                                {teams[4][0].name}
                            </div>
                            <div className="c-event-score">
                                {teams[4][0].score}
                            </div>
                        </div>
                        <div
                            className={`c-event-matchup ${
                                teams[4][1].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[4][1].image} />
                                {teams[4][1].name}
                            </div>
                            <div className="c-event-score">
                                {teams[4][1].score}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c-event-round finals">
                <div className="c-event-matches-duos">
                    {/* Fisrt column */}
                    <div className="c-event-match">
                        <div
                            className={`c-event-matchup ${
                                teams[2][0].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[2][0].image} />
                                {teams[2][0].name}
                            </div>
                            <div className="c-event-score">
                                {teams[2][0].score}
                            </div>
                        </div>
                        <div
                            className={`c-event-matchup ${
                                teams[2][1].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[2][1].image} />
                                {teams[2][1].name}
                            </div>
                            <div className="c-event-score">
                                {teams[2][1].score}
                            </div>
                        </div>
                    </div>
                </div>

                {svg2}

                <div className="c-event-matches-duos">
                    {/* Second column */}
                    <div className="c-event-match">
                        <div
                            className={`c-event-matchup ${
                                teams[5][0].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[5][0].image} />
                                {teams[5][0].name}
                            </div>
                            <div className="c-event-score">
                                {teams[5][0].score}
                            </div>
                        </div>
                        <div
                            className={`c-event-matchup ${
                                teams[5][1].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[5][1].image} />
                                {teams[5][1].name}
                            </div>
                            <div className="c-event-score">
                                {teams[5][1].score}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c-event-round grand">
                <div className="c-event-matches-duos">
                    {/* First column */}
                    <div className="c-event-match">
                        <div
                            className={`c-event-matchup ${
                                teams[6][0].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[6][0].image} />
                                {teams[6][0].name}
                            </div>
                            <div className="c-event-score">
                                {teams[6][0].score}
                            </div>
                        </div>
                        <div
                            className={`c-event-matchup ${
                                teams[6][1].winner && "winner"
                            }`}
                        >
                            <div className="c-event-team">
                                <img src={teams[6][1].image} />
                                {teams[6][1].name}
                            </div>
                            <div className="c-event-score">
                                {teams[6][1].score}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentEventPageBracket;
