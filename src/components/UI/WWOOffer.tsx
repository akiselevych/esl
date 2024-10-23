import "../../styles/components/UI/WWOOffer.scss";

type WwoOfferProps = {
    logo: any;
    title: string;
    description: string;
};

const WwoOffer = ({ logo, title, description }: WwoOfferProps) => {
    return (
        <div className="wwo-offer">
            <div className="wwo-logo">{logo}</div>
            <p className="fs-24 fw-600">{title}</p>
            <p className="desc fs-14">{description}</p>
        </div>
    );
};

export default WwoOffer;
