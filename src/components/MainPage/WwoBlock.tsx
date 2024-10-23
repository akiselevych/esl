import WwoOffer from "../UI/WWOOffer";

import "../../styles/components/MainPage/WwoBlock.scss";

const WwoBlock = () => {
    const svg1 = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
        >
            <path
                d="M23.5005 11.189H36.6614V4.39636H30.0725M7.58871 4.39636H0.999817V11.189H14.1606M18.2023 11.189H19.4759L18.8306 9.49087L18.2023 11.189Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M34.9631 11.189V36.6616H2.69794V11.189M15.7399 4.39636H22.125"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.8306 9.49087C20.2374 9.49087 21.3778 8.35042 21.3778 6.94361C21.3778 5.53681 20.2374 4.39636 18.8306 4.39636C17.4238 4.39636 16.2833 5.53681 16.2833 6.94361C16.2833 8.35042 17.4238 9.49087 18.8306 9.49087Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16.8099 5.3813C14.3136 2.885 10.7134 1.00003 8.64167 1.00003C6.56991 1.00003 7.79259 4.66807 7.79259 6.09454C7.79259 7.521 7.46994 11.189 9.49076 11.189C11.5116 11.189 16.8948 8.64179 16.8948 8.64179M20.9024 5.51716C23.3988 3.02085 26.9479 1.00003 29.0197 1.00003C31.0915 1.00003 29.8688 4.66807 29.8688 6.09454C29.8688 7.521 30.1914 11.189 28.1706 11.189C26.1498 11.189 20.9194 8.48895 20.9194 8.48895"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.8739 9.49088L12.8871 14.5854L15.4343 13.7363L16.2834 16.2836M16.2834 16.2836L18.8307 9.49088L21.3779 16.2836M16.2834 16.2836V36.6616M22.8723 9.40598L24.7743 14.5854L22.227 13.7363L21.3779 16.2836M21.3779 16.2836V36.6616"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
    const svg2 = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.4 16.2C32.4 15.2064 31.5936 14.4 30.6 14.4H5.4C4.4064 14.4 3.6 15.2064 3.6 16.2V30.6C3.6 31.5936 4.4064 32.4 5.4 32.4H9C9.9936 32.4 10.8 31.5936 10.8 30.6C10.8 29.6064 11.6064 28.8 12.6 28.8H23.4C24.3936 28.8 25.2 29.6064 25.2 30.6C25.2 31.5936 26.0064 32.4 27 32.4H30.6C31.5936 32.4 32.4 31.5936 32.4 30.6V16.2ZM36 14.4V32.4C36 34.389 34.389 36 32.4 36H25.2C23.211 36 21.6 34.389 21.6 32.4H14.4C14.4 34.389 12.789 36 10.8 36H3.6C1.611 36 0 34.389 0 32.4V14.4C0 12.411 1.611 10.8 3.6 10.8H16.2V7.2C16.2 5.211 17.811 3.6 19.8 3.6H23.4C24.3936 3.6 25.2 2.7936 25.2 1.8V0H28.8V3.6C28.8 5.589 27.189 7.2 25.2 7.2H21.6C20.6064 7.2 19.8 8.0064 19.8 9V10.8H32.4C34.389 10.8 36 12.411 36 14.4ZM27 18H23.4C22.4064 18 21.6 18.8064 21.6 19.8V21.6V23.4C21.6 24.3936 22.4064 25.2 23.4 25.2H27C27.9936 25.2 28.8 24.3936 28.8 23.4V21.6V19.8C28.8 18.8064 27.9936 18 27 18ZM14.4 19.8V21.6V23.4C14.4 24.3936 13.5936 25.2 12.6 25.2H9C8.0064 25.2 7.2 24.3936 7.2 23.4V21.6V19.8C7.2 18.8064 8.0064 18 9 18H12.6C13.5936 18 14.4 18.8064 14.4 19.8Z"
                fill="currentColor"
            />
        </svg>
    );
    const svg3 = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="36"
            viewBox="0 0 34 36"
            fill="none"
        >
            <path
                d="M16.1053 0C12.3085 0 8.6672 1.51714 5.98247 4.21766C3.29774 6.91819 1.78947 10.5809 1.78947 14.4V17.82C1.24965 18.2931 0.812249 18.8728 0.504419 19.523C0.196589 20.1733 0.024898 20.8802 0 21.6C0.0407595 22.6437 0.39402 23.6507 1.01349 24.489C1.63296 25.3274 2.48975 25.9579 3.47158 26.298C5.79789 31.896 10.4684 36 16.1053 36H21.4737V32.4H16.1053C12.0611 32.4 8.39263 29.34 6.54947 24.498L6.17368 23.508L5.11789 23.4C4.68793 23.3389 4.29472 23.1226 4.01158 22.7914C3.72844 22.4602 3.57467 22.0368 3.57895 21.6C3.58083 21.2859 3.66441 20.9777 3.82138 20.7061C3.97834 20.4346 4.20323 20.2091 4.47368 20.052L5.36842 19.53V16.2C5.36842 15.7226 5.55695 15.2648 5.89255 14.9272C6.22814 14.5896 6.6833 14.4 7.15789 14.4H25.0526C25.5272 14.4 25.9824 14.5896 26.318 14.9272C26.6536 15.2648 26.8421 15.7226 26.8421 16.2V25.2H19.5232C19.3607 24.7418 19.0782 24.3362 18.7055 24.0262C18.3328 23.7161 17.8837 23.5132 17.4057 23.4387C16.9278 23.3642 16.4387 23.4211 15.9902 23.6032C15.5417 23.7852 15.1505 24.0858 14.8578 24.4732C14.5652 24.8605 14.382 25.3202 14.3277 25.8036C14.2733 26.287 14.3499 26.7762 14.5492 27.2195C14.7485 27.6627 15.0631 28.0436 15.4599 28.3218C15.8566 28.6 16.3207 28.7652 16.8032 28.8H30.4211C31.3702 28.8 32.2806 28.4207 32.9517 27.7456C33.6229 27.0705 34 26.1548 34 25.2V21.6C34 20.6452 33.6229 19.7295 32.9517 19.0544C32.2806 18.3793 31.3702 18 30.4211 18V14.4C30.4211 10.5809 28.9128 6.91819 26.2281 4.21766C23.5433 1.51714 19.902 0 16.1053 0Z"
                fill="currentColor"
            />
        </svg>
    );

    return (
        <div className="wwo-block">
            <p className="fs-48 fw-600">What we offer</p>
            <div className="wwo-offers">
                <WwoOffer
                    logo={svg1}
                    title="Daily prizes"
                    description="All your hard-carrying and tower destruction will pay off. Play well and get your hands on some sweet prizes several times a day."
                />
                <WwoOffer
                    logo={svg2}
                    title="Fully-automated platform"
                    description="Play daily without hassle. Advance through your bracket automatically and explore our expanded post-match stats to level up your performance."
                />
                <WwoOffer
                    logo={svg3}
                    title="Immediate support"
                    description="Run into trouble? Our support team is always available on multiple channels: Discord, email, website — to assist with and resolve any problems."
                />
            </div>
        </div>
    );
};

export default WwoBlock;
