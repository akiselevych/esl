import AuthForm from "../components/AuthPage/AuthForm";
import Navbar from "../components/AuthPage/AuthNavbar";

import "../styles/pages/Page.scss";

const AuthPage = () => {
    return (
        <div className="page">
            <Navbar />

            <AuthForm />
        </div>
    );
};

export default AuthPage;
