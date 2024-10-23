import { useEffect, useState } from "react";

import {useNavigate, useSearchParams} from "react-router-dom";
import "../../styles/components/ProfilePage/ProfileHeader.scss";
import { Auth } from "../../utils/auth";
import ChangeAvatarButton from "../UI/ChangeAvatarButton";
import SteamConnectButton from "../UI/SteamConnectButton";
import avatar from '../../sources/avatar.png'

const ProfileHeader = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [nickname, setNickname] = useState("");

    const checkIfLogged = async () => {
        Auth.checkIfUserLoggedIn(navigate);
    };

    const setUserInfo = async () => {
        await checkIfLogged();

        const response: any = await Auth.getUser();

        console.log(await response);

        setNickname(response.username);
    };

    useEffect(() => {
        setUserInfo();
    }, []);

    return (
        <div className="profile-header">
            <div className="profile-info-container">
                <div className="profile-user">
                    <img
                        className="profile-picture"
                        alt={nickname}
                        src={avatar}
                    />

                    <div className="profile-user-info">
                        <p className="fs-24 fw-600">{nickname}</p>
                        <p className="fs-14 desc">Playing since today</p>
                        <SteamConnectButton connected={searchParams.get('connected') === 'true' ?? false} />
                    </div>
                </div>

                <ChangeAvatarButton />
            </div>
        </div>
    );
};

export default ProfileHeader;
