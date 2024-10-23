import Footer from "../components/Footer";
import ProfileHeader from "../components/ProfilePage/ProfileHeader";
import ProfileInfo from "../components/ProfilePage/ProfileInfo";
import Navbar from "../components/ProfilePage/ProfileNavbar";

import { useNavigate } from "react-router-dom";
import "../styles/pages/Page.scss";

const ProfilePage = () => {
    const navigate = useNavigate();

    return (
        <div className="page">
            <Navbar />

            <ProfileHeader />

            <ProfileInfo />

            <Footer />
        </div>
    );
};

export default ProfilePage;
