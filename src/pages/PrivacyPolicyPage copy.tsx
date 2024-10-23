import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/pages/Page.scss";
import "../styles/pages/PrivacyPolicyPage.scss";

const TermsOfServicePage = () => {
    return (
        <div className="page">
            <Navbar />

            <div className="policy-container">
                <div className="policy-wrapper">
                    <p className="fs-32 fw-600">ESL Terms of Service</p>
                    <p>
                        These Terms of Service (“Terms”) are a contract between
                        you and ESL ESPORTS MEDIA, INC. They govern your use of
                        our sites, services, mobile apps, products, and content
                        (“Services”).
                    </p>
                    <p>
                        By visiting weplay.tv, you agree to these Terms. If you
                        don’t agree to any of the Terms, you can’t use the
                        services.
                    </p>
                    <p className="fs-24 fw-600">
                        Content rights &amp; responsibilities
                    </p>
                    <p>
                        You acknowledge that the Services contain information,
                        software, articles, reviews, content, photographs, audio
                        and video clips, graphics, links, logos, trademarks, the
                        “look and feel” of our websites, applications and
                        software and other material (collectively, the
                        “Content”) that are protected by copyright, trademark
                        and/or other proprietary rights of ESL ESPORTS MEDIA,
                        INC. or third parties. All Content on the Services is
                        protected by applicable copyright laws. You agree to
                        comply with all copyright laws and any copyright
                        notices, information, or restrictions contained in any
                        Content available on or accessed through the Services.
                        Users of the Services may use the Content only for their
                        personal, noncommercial use. Businesses, organizations
                        or other legal entities may not become Members, and are
                        not permitted to use the Services for any purpose,
                        including but not limited to collecting usernames and/or
                        email addresses of Members by electronic or other means
                        for the purpose of sending unsolicited email and
                        unauthorized framing of, or linking to, the Services or
                        users on the Services.
                    </p>
                    <p>
                        Except as expressly permitted, you may not (i) modify,
                        publish, transmit, reproduce, create derivative works
                        from, distribute, perform, display, adapt, aggregate,
                        sell, transfer or in any way exploit any of the Content,
                        code or Material (defined below), in whole or in part,
                        or (ii) use any robot, spider, site search and/or
                        retrieval application, or other device to scrape,
                        extract, retrieve or index any portion of the Services.
                        Content consisting of downloadable or web-based software
                        may not be reverse engineered unless specifically
                        authorized by the owner of the software’s patent and/or
                        copyright. You also agree not to circumvent, disable or
                        otherwise interfere with any security related features
                        of the Services or the Content, including features that
                        prevent or restrict use or copying, or that enforce
                        limitations on use. To the extent that you provide us
                        with any suggestions, feedback or other information
                        relating to our business or the Services (including, but
                        not limited to, suggested new products or services or
                        improvements to existing products and services), such
                        information is provided to us on a non-confidential and
                        unrestricted basis, and you hereby grant to the Licensee
                        a non-exclusive, worldwide, perpetual, royalty-free,
                        fully transferable and sublicensable right and license
                        to reproduce, display, distribute, use and fully exploit
                        such suggestions, feedback and information.
                    </p>
                    <p className="fs-24 fw-600">No children</p>
                    <p>
                        ESL is only for people 13 years old and over. By using
                        weplay.tv, you affirm that you are over 13. If we learn
                        someone under 13 is using weplay.tv, we’ll terminate
                        their account.
                    </p>
                    <p className="fs-24 fw-600">
                        Incorporated rules and policies
                    </p>
                    <p>
                        By using the Services, you agree to let Medium collect
                        and use information as detailed in our Privacy Policy.
                        If you’re outside the United States, you consent to
                        letting ESL transfer, store, and process your
                        information (including your personal information and
                        content) in and out of the United States.
                    </p>
                    <p>
                        By using weplay.tv, you agree to follow these Policies.
                        If you don’t, we may suspend or delete your account.
                    </p>
                    <p>
                        We may deny access to functionality for emails at our
                        sole discretion, for example, created using the services
                        of generating temporary emails, and whose reliability
                        level is below the maximum permissible according to the
                        respective ratings. Should it happen please use email
                        with another domain.
                    </p>
                    <p className="fs-24 fw-600">Miscellaneous</p>
                    <h3>Disclaimer of warranty.</h3>
                    <p>
                        ESL provides the Services to you as is. You use them at
                        your own risk and discretion. That means they don’t come
                        with any warranty. None express, none implied. No
                        implied warranty of merchantability, fitness for a
                        particular purpose, availability, security, title or
                        non-infringement.
                    </p>
                    <h3>Limitation of Liability.&nbsp;</h3>
                    <p>
                        ESL won’t be liable to you for any damages that arise
                        from your using the Services. This includes if the
                        Services are hacked or unavailable. This includes all
                        types of damages (indirect, incidental, consequential,
                        special or exemplary). And it includes all kinds of
                        legal claims, such as breach of contract, breach of
                        warranty, tort, or any other loss.
                    </p>
                    <h3>Severability.</h3>
                    <p>
                        If any provision of these terms is found invalid by a
                        court of competent jurisdiction, you agree that the
                        court should try to give effect to the parties’
                        intentions as reflected in the provision and that other
                        provisions of the Terms will remain in full effect.
                    </p>
                    <p>
                        Choice of law and jurisdiction. These Terms are governed
                        by Delaware state law, without reference to its conflict
                        of laws provisions. You agree that any suit arising from
                        the Services must take place in a court located in
                        Delaware state.
                    </p>
                    <h3>Entire agreement.&nbsp;</h3>
                    <p>
                        These Terms (including any document incorporated by
                        reference into them) are the whole agreement between ESL
                        ESPORTS MEDIA, INC. and you concerning the Services.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TermsOfServicePage;
