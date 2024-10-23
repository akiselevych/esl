import { useState } from "react";
import { useNavigate } from "react-router-dom";

import matchesImage from "../../sources/matches_image.png";
import teamAvatar from "../../sources/nova_hopeless.png";
import user1 from "../../sources/user1.png";
import user2 from "../../sources/user2.png";
import user3 from "../../sources/user3.png";
import user4 from "../../sources/user4.png";

import "../../styles/components/ProfilePage/ProfileInfo.scss";
import Button from "../UI/Button";

const ProfileInfo = () => {
    const [category, setCategory] = useState(1);
    const navigate = useNavigate();

    return (
        <div className="profile-game-info-container">
            <div className="profile-game-info">
                <div className="auth-form-options">
                    <p
                        onClick={() => setCategory(1)}
                        className={`fs-16 auth-form-option ${
                            category === 1 || category < 1 ? "active" : ""
                        }`}
                    >
                        Overview
                    </p>
                    <p
                        onClick={() => setCategory(2)}
                        className={`fs-16 auth-form-option ${
                            category === 2 ? "active" : ""
                        }`}
                    >
                        Team
                    </p>
                    <p
                        onClick={() => navigate("/cs2")}
                        className={`fs-16 auth-form-option`}
                    >
                        Tournaments
                    </p>
                    <p
                        onClick={() => setCategory(3)}
                        className={`fs-16 auth-form-option ${
                            category === 3 || category > 3 ? "active" : ""
                        }`}
                    >
                        Matches
                    </p>
                </div>

                {category === 1 || category < 1 ? (
                    <div className="profile-game-info-category">
                        <p className="fs-24 fw-600">Performance details</p>

                        <div className="profile-game-info-full">
                            <div className="game-info">
                                <p className="fs-14 fw-600">N/A</p>
                                <p className="fs-12 desc">Maps played</p>
                            </div>

                            <div className="game-info">
                                <p className="fs-14 fw-600">N/A</p>
                                <p className="fs-12 desc">Rounds played</p>
                            </div>

                            <div className="game-info">
                                <p className="fs-14 fw-600">N/A</p>
                                <p className="fs-12 desc">
                                    Headshot percentage
                                </p>
                            </div>

                            <div className="game-info">
                                <p className="fs-14 fw-600">N/A</p>
                                <p className="fs-12 desc">Kills</p>
                            </div>

                            <div className="game-info">
                                <p className="fs-14 fw-600">N/A</p>
                                <p className="fs-12 desc">Deaths</p>
                            </div>

                            <div className="game-info">
                                <p className="fs-14 fw-600">N/A</p>
                                <p className="fs-12 desc">Assists</p>
                            </div>
                        </div>
                    </div>
                ) : category === 2 ? (
                    <div className="profile-game-info-category-container">
                        <div className="profile-game-info-category-mode">
                            <div className="profile-game-info-category-mode-2v2">
                                <div className="beta">
                                    <p className="fs-14">2v2</p>
                                </div>
                            </div>
                            <div className="profile-game-info-category-mode-header">
                                <p className="fs-32">Wingman team</p>
                                <p className="fs-16 desc">
                                    Have no permanent team? Invite your bro and
                                    boost your skills together
                                </p>
                            </div>

                            <div className="profile-game-info-category-users-container">
                                <div className="profile-game-info-category-users">
                                    <div className="profile-game-info-category-user">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="37"
                                            height="37"
                                            viewBox="0 0 225 225"
                                            fill="none"
                                        >
                                            <circle
                                                cx="112.5"
                                                cy="112.5"
                                                r="112.5"
                                                fill="#FCFF10"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M30 112.501C30 158.616 66.691 196 111.949 196C157.208 196 193.899 158.616 193.899 112.501C193.899 66.3856 157.208 29 111.949 29C66.691 29 30 66.3856 30 112.501Z"
                                                fill="black"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M53.3833 144.162C55.4511 148.074 57.8797 151.76 60.6273 155.167L155.273 58.7303C144.415 49.6466 130.715 43.968 115.739 43.2734L53.3833 144.162ZM70.2616 164.926C73.632 167.718 77.2699 170.179 81.1362 172.269L179.82 108.946C179.222 93.6588 173.714 79.6627 164.852 68.5471L70.2616 164.926ZM97.0924 178.389C139.991 188.115 172.299 157.201 178.362 126.241L97.0924 178.389Z"
                                                fill="white"
                                            />
                                        </svg>

                                        <svg
                                            className="profile-game-info-category-user-level-up"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                        >
                                            <circle
                                                cx="5.17399"
                                                cy="5.17387"
                                                r="4.82609"
                                                fill="#FF1967"
                                            />
                                            <path
                                                d="M6.53528 2.85022L5.57282 3.57207V4.82328L4.99534 4.39017L4.03287 5.11202V6.36323L3.45539 5.93012L2.49292 6.65197V7.85505H2.87791V6.84446L3.45539 6.41135L4.03287 6.84446V7.85505H4.41785V5.30451L4.99534 4.8714L5.57282 5.30451V7.85505H5.9578V3.76456L6.53528 3.33145L7.11276 3.76456V7.85505H7.49775V3.57207L6.53528 2.85022Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>

                                    <div className="profile-game-info-category-user">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="37"
                                            height="37"
                                            viewBox="0 0 225 225"
                                            fill="none"
                                        >
                                            <circle
                                                cx="112.5"
                                                cy="112.5"
                                                r="111.5"
                                                stroke="#000000"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M111.949 195C67.2609 195 31 158.082 31 112.501C31 66.9202 67.2609 30 111.949 30C156.638 30 192.899 66.9202 192.899 112.501C192.899 158.082 156.638 195 111.949 195Z"
                                                stroke="black"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M153.794 58.8089L60.7072 153.658C58.4011 150.698 56.3351 147.534 54.5364 144.199L116.279 44.3022C130.417 45.0842 143.378 50.3781 153.794 58.8089ZM178.796 108.414L81.0952 171.107C77.798 169.286 74.6723 167.19 71.7436 164.844L164.767 70.0607C172.983 80.7266 178.113 93.973 178.796 108.414ZM99.6872 177.912L176.873 128.385C169.91 157.515 139.684 185.641 99.6872 177.912Z"
                                                stroke="#000000"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate("/cs2")}
                                    className="profile-game-info-category-create"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="21"
                                        viewBox="0 0 28 21"
                                        fill="none"
                                    >
                                        <path
                                            d="M23.8411 11.7918C25.619 11.7918 27.0606 10.3512 27.0606 8.57329C27.0606 6.79541 25.619 5.35379 23.8411 5.35379C22.0637 5.35379 20.6221 6.79541 20.6221 8.57329C20.6221 10.3512 22.0637 11.7918 23.8411 11.7918Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M27.963 14.894C27.8196 14.032 27.107 12.8256 26.5677 12.2867C26.4967 12.2153 26.1792 12.1987 26.0934 12.2519C25.4377 12.6552 24.6675 12.8925 23.8408 12.8925C23.0151 12.8925 22.2448 12.6552 21.5891 12.2519C21.5029 12.1987 21.1859 12.2153 21.1148 12.2867C20.9641 12.4375 20.7996 12.6382 20.6392 12.8709C21.0731 13.6879 21.4173 14.5558 21.5414 15.3032C21.6656 16.0524 21.6253 16.7617 21.4245 17.4083C22.1375 17.6663 22.9926 17.7795 23.8408 17.7795C26.0532 17.7795 28.3172 17.0124 27.963 14.894Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M13.9172 10.4337C16.7985 10.4337 19.1345 8.09768 19.1345 5.21642C19.1345 2.33603 16.7985 0 13.9172 0C11.0363 0 8.70117 2.33603 8.70117 5.21642C8.70117 8.09768 11.0363 10.4337 13.9172 10.4337Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M18.3349 11.2328C18.2217 11.1201 17.7075 11.0913 17.5678 11.1778C16.5042 11.8322 15.2561 12.2153 13.9171 12.2153C12.5791 12.2153 11.3304 11.8322 10.2674 11.1778C10.1276 11.0912 9.61353 11.1201 9.50032 11.2328C8.62418 12.108 7.46945 14.0646 7.23714 15.4595C6.66434 18.8953 10.3343 20.1357 13.9171 20.1357C17.5009 20.1357 21.1708 18.8953 20.598 15.4595C20.3657 14.0646 19.211 12.108 18.3349 11.2328Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M4.15896 11.7918C5.93641 11.7918 7.37797 10.3512 7.37797 8.57329C7.37797 6.79541 5.93641 5.35379 4.15896 5.35379C2.38101 5.35379 0.939453 6.79541 0.939453 8.57329C0.939453 10.3512 2.38101 11.7918 4.15896 11.7918Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M6.29422 15.3032C6.42624 14.5183 6.79871 13.594 7.26569 12.7394C7.13553 12.5616 7.00543 12.4068 6.88534 12.2867C6.8143 12.2153 6.49722 12.1987 6.41109 12.2519C5.75533 12.6552 4.98506 12.8925 4.15895 12.8925C3.33273 12.8925 2.56197 12.6552 1.90676 12.2519C1.82101 12.1987 1.50306 12.2153 1.43202 12.2867C0.891322 12.8256 0.180659 14.032 0.0367213 14.894C-0.316997 17.0124 1.94663 17.7794 4.15895 17.7794C4.94847 17.7794 5.74576 17.6823 6.42624 17.4601C6.21181 16.8003 6.16642 16.0744 6.29422 15.3032Z"
                                            fill="white"
                                        />
                                    </svg>
                                    Create 2v2 team
                                </button>
                            </div>
                        </div>

                        <div className="profile-game-info-category-team">
                            <div className="profile-game-info-category-team-header">
                                <img
                                    className="profile-game-info-category-team-avatar"
                                    src={teamAvatar}
                                />
                                <p className="fs-24">Nova Hopeless</p>
                            </div>

                            <div className="profile-game-info-category-team-users">
                                <div className="profile-game-info-category-team-user">
                                    <img
                                        className="profile-game-info-category-team-user-avatar"
                                        src={user1}
                                    />

                                    <svg
                                        className="profile-game-info-category-user-level-up"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                    >
                                        <circle
                                            cx="5.17399"
                                            cy="5.17387"
                                            r="4.82609"
                                            fill="#FF1967"
                                        />
                                        <path
                                            d="M6.53528 2.85022L5.57282 3.57207V4.82328L4.99534 4.39017L4.03287 5.11202V6.36323L3.45539 5.93012L2.49292 6.65197V7.85505H2.87791V6.84446L3.45539 6.41135L4.03287 6.84446V7.85505H4.41785V5.30451L4.99534 4.8714L5.57282 5.30451V7.85505H5.9578V3.76456L6.53528 3.33145L7.11276 3.76456V7.85505H7.49775V3.57207L6.53528 2.85022Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>

                                <div className="profile-game-info-category-team-user">
                                    <img
                                        className="profile-game-info-category-team-user-avatar"
                                        src={user2}
                                    />
                                </div>

                                <div className="profile-game-info-category-team-user">
                                    <img
                                        className="profile-game-info-category-team-user-avatar"
                                        src={user3}
                                    />
                                </div>

                                <div className="profile-game-info-category-team-user">
                                    <img
                                        className="profile-game-info-category-team-user-avatar"
                                        src={user4}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : category === 3 || category > 3 ? (
                    <div className="profile-game-info-category">
                        <p className="fs-24 fw-600">Matches</p>

                        <div className="profile-game-info-category-matches">
                            <img alt="Matches" src={matchesImage} />
                            <p className="fs-16">Zero played matches so far</p>
                            <Button
                                text="Explore all tournaments"
                                callback={() => navigate("/cs2")}
                                style={{ width: "max-content" }}
                                noUpper={true}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ProfileInfo;
