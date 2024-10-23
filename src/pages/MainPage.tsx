import Footer from "../components/Footer";
import HeroSection from "../components/MainPage/HeroSection";
import InAdditionWwo from "../components/MainPage/InAdditionWwo";
import Invocation from "../components/MainPage/Invocation";
import WwoBlock from "../components/MainPage/WwoBlock";
import Navbar from "../components/Navbar";

import "../styles/pages/Page.scss";

const MainPage = () => {
    return (
        <div className="page">
            <Navbar />

            <HeroSection />

            <WwoBlock />

            <InAdditionWwo />

            <Invocation />

            <Footer />
        </div>
    );
};

export default MainPage;
