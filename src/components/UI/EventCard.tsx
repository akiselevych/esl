import "../../styles/components/UI/EventCard.scss";

type EventCardProps = {
    event: any;
};

const EventCard = ({ event }: EventCardProps) => {
    return (
        <div className="event-card">
            <div className="event-card-header">
                <div className="event-card-game">
                    {event.game === "Dota 2" ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                        >
                            <path
                                d="M21.3628 7.72973L21.9931 7.41169V0.947203L21.308 0.601508L19.2526 0.470144L18.7113 0.836581V0.255814L14.6004 0L14.4223 0.836581L13.4768 0.947203L12.2709 0H9.03706L7.94768 0.802011H5.89224L5.72096 0.546197L0.239801 0.401006L0.171286 1.55563C0.291456 2.168 0.348854 2.79123 0.342572 3.41546C0.337516 4.12076 0.221895 4.8208 0 5.48963V6.61659L0.431641 8.60779L0.232949 9.29918V9.87995L0.746808 10.3086V10.8894L0.232949 11.4978V13.7725L0.685145 14.4639L0.630333 16.2822L0.232949 17.0911V18.626L0.404236 18.9164V19.5456L0.267207 19.9258V20.7624L0.781065 21.1634H3.69293L4.09717 20.9629L4.46714 21.1634L4.83712 20.9906L5.21395 21.1358L6.18686 21.198L7.21457 20.9076L7.3242 21.198L8.44098 21.2533L8.70134 20.9629L9.53036 22L10.2155 21.3985L10.4142 21.6266L11.0993 21.5713L11.6475 22L12.5656 21.4538H16.1078L16.512 21.0805L16.9984 21.3086H19.739L19.4855 20.8799H20.1707L22 21.3432V12.5764H21.2737L21.8767 11.9472V10.1288L20.9928 8.74607L21.3902 8.34507L21.3628 7.72973ZM16.327 3.89252L17.848 4.75676L17.3616 7.84727L13.1 4.75676L16.327 3.89252ZM6.11834 18.2665H4.40548L2.86391 16.9667L4.17938 13.0949L8.55061 17.3055L6.11834 18.2665ZM18.0193 18.0314H15.6145L2.48708 4.30044L4.09031 3.60905L19.4787 14.0767L18.0193 18.0314Z"
                                fill="black"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="22"
                            viewBox="0 0 17 22"
                            fill="none"
                        >
                            <path
                                d="M5.81844 0.398707C6.02238 0.220167 6.26817 0.0961169 6.53294 0.0380984C6.79771 -0.0199202 7.07286 -0.0100213 7.33277 0.066874C7.53261 0.132874 7.70494 0.252957 7.89102 0.372124C8.03769 0.464707 8.21002 0.505041 8.34294 0.611374C8.40894 0.664541 8.35577 0.758041 8.35577 0.824041C8.52902 1.23654 8.62161 1.68754 8.47494 2.12571C8.35577 2.27237 8.14311 2.31179 7.97077 2.37871C7.94327 2.56479 8.01019 2.73621 8.03677 2.92321C7.99736 2.94979 7.97077 2.97637 7.93044 3.00296C8.18344 2.98921 8.43552 2.93604 8.68852 2.88379C8.78111 2.79029 8.92686 2.84346 9.04602 2.82971C9.05977 2.64362 9.12669 2.47129 9.12669 2.28521C9.16343 2.2827 9.19943 2.2737 9.23302 2.25862C9.24586 2.39154 9.23302 2.52446 9.27244 2.65737C9.33936 2.71054 9.44569 2.68396 9.52544 2.69679C9.52544 2.74996 9.52544 2.80312 9.53827 2.85629C11.0792 2.84346 12.6339 2.85629 14.1748 2.85629V3.08271H14.3214V2.21829H14.4938C14.4938 2.45662 14.4809 2.68304 14.4938 2.92229C14.512 2.93909 14.5359 2.94855 14.5607 2.94887C14.5607 2.97546 14.5735 3.02862 14.5735 3.05521C14.6267 3.00204 14.6927 2.96171 14.7734 2.98829C14.7862 3.02862 14.7999 3.06804 14.8128 3.12121C14.7596 3.17437 14.733 3.24037 14.7596 3.32104C15.1849 3.33387 15.6103 3.32104 16.0484 3.32104C16.0888 3.26787 16.1548 3.24129 16.2217 3.21471C16.2502 3.22937 16.2769 3.2472 16.3014 3.26787H16.9248C16.9489 3.3678 16.9536 3.47143 16.9385 3.57312H16.3005C16.2768 3.59864 16.25 3.62111 16.2208 3.64004C16.1548 3.59971 16.1016 3.57312 16.0356 3.53371H14.8797C14.6533 3.59971 14.414 3.58687 14.1885 3.54654V3.79862H12.2874C12.213 3.8645 12.1202 3.90608 12.0215 3.91779C12.0619 4.11762 11.8364 4.17079 11.7557 4.31746C11.7046 4.39247 11.6302 4.44854 11.5439 4.47696C11.477 4.88854 11.6237 5.27446 11.73 5.65946C11.6109 5.68604 11.477 5.72546 11.3579 5.75204C11.2909 6.01787 11.2249 6.29654 11.1718 6.56237C11.1418 6.68139 11.084 6.79162 11.0033 6.88403C10.9225 6.97644 10.821 7.0484 10.707 7.09404C10.5475 7.28012 10.3349 7.46621 10.0819 7.47904C9.98927 7.50654 9.92236 7.43962 9.85636 7.38646C9.52452 7.41304 9.21836 7.25354 8.92594 7.12062C8.60786 6.97396 8.31544 6.78787 8.00927 6.61646C8.03677 6.80162 7.94327 6.96112 7.87636 7.12062C8.02302 7.18662 8.22194 7.23979 8.30169 7.39929C8.35486 7.51846 8.40802 7.65229 8.40802 7.79804C8.39519 8.27654 8.34202 8.75504 8.31544 9.23262C8.32827 9.57821 8.15594 9.92379 7.91669 10.1768C7.75719 10.163 7.62427 10.0961 7.47852 10.0301C7.42536 10.1493 7.30527 10.2685 7.37219 10.4151C7.42536 10.5884 7.42536 10.7745 7.50511 10.934C7.96075 11.4063 8.33743 11.9489 8.62069 12.5409C8.89936 13.1129 9.11202 13.7105 9.33844 14.3082C9.37786 14.3082 9.45761 14.2945 9.49794 14.2945C9.55111 14.4677 9.49794 14.6666 9.60427 14.8261C9.69686 14.9728 9.67027 15.1451 9.67027 15.3175C9.64369 15.7162 9.61711 16.115 9.57769 16.5137C9.55019 16.7924 9.48419 17.072 9.44477 17.3506C9.45761 17.5633 9.55111 17.776 9.53736 17.9886C9.52452 18.1875 9.52452 18.4002 9.36502 18.546C9.37786 18.9979 9.25869 19.4498 9.41819 19.888C9.63086 20.1813 9.87011 20.459 10.1222 20.712C10.4009 20.845 10.7336 20.8715 10.9729 21.1108C11.0645 21.2575 11.0123 21.4289 10.9857 21.5884C10.4171 21.6681 9.84013 21.6681 9.27152 21.5884C9.04602 21.5352 8.83336 21.4426 8.60786 21.416C8.30169 21.4289 7.94327 21.549 7.66369 21.3363C7.63802 20.9779 7.77094 20.6323 7.83694 20.2867C7.86352 20.1675 7.98361 20.0878 7.96986 19.9677C7.94236 19.5552 7.91669 19.1308 7.89011 18.7192C7.83694 18.6917 7.74344 18.666 7.75719 18.5863C7.75719 18.3865 7.69119 18.1875 7.63802 18.0015C7.54907 17.4924 7.50003 16.9772 7.49136 16.4605C7.47852 16.3139 7.57111 16.2075 7.67744 16.115C7.70494 15.8895 7.73061 15.6502 7.74436 15.4238C7.70402 15.3046 7.61144 15.2111 7.55827 15.1048C7.31902 15.1323 6.97344 15.1845 6.82769 14.9325C6.48211 14.4145 6.12277 13.8829 5.77811 13.365C5.63144 13.3512 5.45911 13.365 5.32619 13.2715C5.17952 13.112 5.08694 12.9002 4.99344 12.7004C4.95402 12.8599 4.92744 13.0322 4.83394 13.1651C4.75419 13.298 4.62219 13.3915 4.52869 13.5107C4.43611 13.7234 4.35636 13.936 4.27661 14.1487C4.18311 14.4145 4.05019 14.6804 4.02361 14.9728C4.01349 15.1138 3.98229 15.2526 3.93102 15.3844C3.86411 15.4907 3.74494 15.531 3.63861 15.5833C3.55886 15.7565 3.50569 15.9289 3.38652 16.0755C3.30677 16.1681 3.17386 16.1947 3.12069 16.3139C3.06752 16.4734 2.98777 16.62 2.92086 16.7658C2.89427 16.9253 3.00061 17.0985 2.94836 17.2571C2.85486 17.6559 2.65502 18.028 2.46986 18.3865C2.37636 18.6523 2.31036 18.9319 2.17652 19.184C2.12427 19.2903 1.99136 19.3169 1.88502 19.3306C1.76586 19.6221 1.63202 19.9017 1.55319 20.207C1.51748 20.5022 1.50828 20.8001 1.52569 21.097C1.52569 21.23 1.60636 21.3363 1.65952 21.4555C1.71177 21.615 1.67236 21.7745 1.64577 21.934C1.12786 22.0009 0.59619 22.0531 0.091107 21.8945C0.0379403 21.8542 0.0516902 21.7882 0.0379402 21.735C-0.00147642 21.4958 -0.0280597 21.2437 0.0516903 21.0173C0.224024 20.393 0.37069 19.7688 0.543024 19.1445C0.477024 19.0776 0.383524 19.0254 0.383524 18.9181C0.37069 18.7458 0.383524 18.5597 0.423857 18.3865C0.503607 18.094 0.715357 17.8685 0.82169 17.589C0.862024 17.4698 0.84919 17.3506 0.862024 17.2315C0.862024 16.9519 1.02152 16.7264 1.14069 16.4871C1.25986 16.2873 1.35336 16.0746 1.51286 15.9023C1.61919 15.8097 1.61919 15.664 1.69894 15.5439C1.77869 15.3972 1.91161 15.278 1.91161 15.1048C1.93819 14.893 1.85844 14.6804 1.88411 14.4677C1.93819 13.8435 2.05827 13.232 2.16369 12.6069C2.11052 12.5409 2.03077 12.4749 2.00419 12.3814C2.01794 12.3154 2.03169 12.2622 2.04452 12.1953L1.92536 11.9964C1.97761 11.9166 2.03077 11.824 2.08394 11.7443C2.03077 11.704 1.96477 11.6508 1.91161 11.6114C1.97761 11.4115 1.95102 11.1191 2.19027 11.0265C2.21777 11.0394 2.28377 11.0531 2.30944 11.066C2.27002 10.7213 2.27002 10.362 2.23061 10.0164C2.14223 9.64677 2.11958 9.26449 2.16369 8.88704C2.29661 8.68812 2.54869 8.60837 2.77511 8.59554C2.48269 8.52862 2.19027 8.50204 1.91161 8.40946C1.89786 8.17021 1.93819 7.93096 1.97761 7.69171C2.09677 7.22696 2.04452 6.74846 2.11052 6.27087C2.17744 6.13704 2.34977 6.11046 2.49552 6.13704C2.66877 6.16454 2.84111 6.11046 3.01436 6.05729C3.01436 5.99129 3.02719 5.91062 3.01436 5.84462C2.90802 5.37987 2.93461 4.90137 3.01436 4.45037C3.12069 3.86554 3.35994 3.29446 3.79811 2.88287C4.09052 2.60329 4.51586 2.47037 4.91369 2.48412C5.04661 2.48412 5.12636 2.61704 5.23269 2.69679C5.28586 2.64362 5.33902 2.59046 5.37936 2.53729C5.31244 2.31087 5.20611 2.07162 5.21986 1.83237C5.24644 1.30071 5.41877 0.756207 5.81752 0.397791M9.96269 4.15796C9.98927 4.18454 9.98927 4.18454 9.96269 4.15796V4.15796ZM10.1488 4.18454C10.1616 4.27712 10.1882 4.37062 10.135 4.45037C10.069 4.47696 9.98836 4.47696 9.92236 4.51637C10.1084 4.51637 10.2945 4.53012 10.4815 4.51637C10.6273 4.47696 10.5732 4.29087 10.5732 4.18454C10.4815 4.07821 10.2817 4.14421 10.1488 4.18454ZM9.68402 4.74279C9.81694 4.88854 9.88294 5.11404 10.0021 5.26071C10.1754 5.03429 10.3083 4.79504 10.5072 4.59612C10.2689 4.58237 10.0287 4.60987 9.79036 4.58237C9.75002 4.63554 9.72344 4.68962 9.68402 4.74279Z"
                                fill="black"
                            />
                        </svg>
                    )}

                    <p className="fs-14">{event.game}</p>
                </div>

                <p className="fs-14">{event.name}</p>
            </div>

            <div className="event-card-between">
                <img className="event-avatar" src={event.winner_image} />
                <p className="fs-32">{event.winner_name}</p>
                <p className="price fs-32">{event.prize_pool}</p>
                <button
                    onClick={() =>
                        (window.location.href = "https://weplay.tv/")
                    }
                    className="event-card-button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                    >
                        <path
                            d="M1 4.5H15M15 4.5L11.5 1M15 4.5L11.5 8"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Know more
                </button>
                <div className="event-card-time desc">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                    >
                        <path
                            d="M1 4.33333H11M3.22222 1V2.11111M8.77778 1V2.11111M3.22222 6.55556H8.77778V8.77778H3.22222V6.55556ZM2.77778 11H9.22222C9.8445 11 10.1557 11 10.3933 10.8789C10.6024 10.7724 10.7724 10.6024 10.8789 10.3933C11 10.1557 11 9.8445 11 9.22222V3.88889C11 3.26661 11 2.95547 10.8789 2.71779C10.7724 2.50872 10.6024 2.33874 10.3933 2.23222C10.1557 2.11111 9.8445 2.11111 9.22222 2.11111H2.77778C2.1555 2.11111 1.84436 2.11111 1.60668 2.23222C1.39761 2.33874 1.22763 2.50872 1.12111 2.71779C1 2.95547 1 3.26661 1 3.88889V9.22222C1 9.8445 1 10.1557 1.12111 10.3933C1.22763 10.6024 1.39761 10.7724 1.60668 10.8789C1.84436 11 2.15549 11 2.77778 11Z"
                            stroke="black"
                            stroke-opacity="0.52"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <p>{event.date}</p>
                </div>
            </div>

            <div className="event-card-info">
                <div className="event-card-tags">
                    {event.tags.map((tag: any) => (
                        <div className="beta">{tag}</div>
                    ))}
                </div>

                <div className="event-card-links">
                    <div className="event-card-link">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                        >
                            <path
                                d="M11 4.55556V17M13.5 8.11111H13.5083M13.5 10.7778H13.5083M13.5 13.4444H13.5083M12.6667 1L8.5 4.55556L4.33333 1M5 17H12C13.4002 17 14.1002 17 14.635 16.7093C15.1054 16.4537 15.4878 16.0458 15.7275 15.544C16 14.9735 16 14.2268 16 12.7333V8.82222C16 7.32871 16 6.58201 15.7275 6.01158C15.4878 5.50981 15.1054 5.10187 14.635 4.8462C14.1002 4.55556 13.4002 4.55556 12 4.55556H5C3.59987 4.55556 2.8998 4.55556 2.36503 4.8462C1.89462 5.10187 1.51217 5.50981 1.27248 6.01158C1 6.58201 1 7.32871 1 8.82222V12.7333C1 14.2268 1 14.9735 1.27248 15.544C1.51217 16.0458 1.89462 16.4537 2.36503 16.7093C2.8998 17 3.59987 17 5 17Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        ESL Youtube!
                    </div>

                    <div className="event-card-link">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="17"
                            viewBox="0 0 12 17"
                            fill="none"
                        >
                            <path
                                d="M6 1C5.3428 1.00028 4.69214 1.13042 4.08539 1.38293C3.47864 1.63545 2.92777 2.00537 2.46442 2.47144C1.52596 3.41541 0.999447 4.69257 1 6.02365C1 7.61942 1.41308 8.78029 3.00106 10.7254C3.73876 11.564 4.38513 12.4788 4.92923 13.4542C5.505 14.627 5.43712 15.4231 6 15.4231C6.56288 15.4231 6.495 14.627 7.07077 13.4542C7.61487 12.4788 8.26123 11.564 8.99894 10.7254C10.5869 8.78029 11 7.61933 11 6.02365C11.0005 4.69257 10.474 3.41543 9.53558 2.47144C9.07223 2.00537 8.52136 1.63545 7.91461 1.38293C7.30786 1.13042 6.6572 1.00028 6 1Z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                d="M6.0012 7.92309C7.06329 7.92309 7.92428 7.0621 7.92428 6.00001C7.92428 4.93793 7.06329 4.07693 6.0012 4.07693C4.93912 4.07693 4.07812 4.93793 4.07812 6.00001C4.07812 7.0621 4.93912 7.92309 6.0012 7.92309Z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                        {event.location}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;