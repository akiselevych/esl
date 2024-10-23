import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import EventsPage from "../pages/EventsPage";
import MainPage from "../pages/MainPage";
import NoInfoPage from "../pages/NoInfoPage";
import ProfilePage from "../pages/ProfilePage";
import SteamConnectPage from "../pages/SteamConnectPage";
import TournamentsPage from "../pages/TournamentsPage";

import CurrentEventPage from "../pages/CurrentEventPage";
import DetailedTournamentPage from "../pages/DetailedTournamentPage";
import rustBc from "../sources/rustBc.jpg";

import GambitEsports from "../sources/GambitEsports.png";
import GeekFam from "../sources/GeekFam.png";
import RNG from "../sources/RNG.png";
import TeamNigma from "../sources/TeamNigma.png";

import AggressiveMode from "../sources/AggressiveMode.png";
import B8 from "../sources/B8.png";
import TeamSecret from "../sources/TeamSecret.png";
import VirtusPro from "../sources/VierusPro.png";

// sponsors bukovel

import Bukovel from "../sources/Bukovel.png";
import GosuAi from "../sources/GosuAi.png";
import HotSpawn from "../sources/HotSpawn.png";
import HyperX from "../sources/HyperX.png";
import JoinDota from "../sources/JoinDota.png";
import Lays from "../sources/Lays.png";
import McDelivery from "../sources/McDelivery.png";
import PariMatch from "../sources/PariMatch.png";
import Pepsi from "../sources/Pepsi.png";
import Raygaming from "../sources/Raygaming.png";
import SecretLab from "../sources/SecretLab.png";
import Wingg from "../sources/Wingg.png";

// sponsors mad moon

import Dota2Net from "../sources/Dota2net.png";
import GosuGamers from "../sources/GosuGamers.png";
import Inven from "../sources/Inven.png";
import Isport from "../sources/Isport.png";
import Pixotope from "../sources/Pixotope.png";
import VPGame from "../sources/VpGame.png";
import CyberSports from "../sources/cybersports.png";
import KissFM from "../sources/kissfm.png";
import Moneyveo from "../sources/moneyveo.png";

import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import BukovelMinor2020Avatar from "../sources/BukovelMinor2020.png";
import MadMoonAvatar from "../sources/MadMoon.png";
import TermsOfServicePage from "../pages/PrivacyPolicyPage copy";

const Router = () => {
    const rustDescription = `Rust has experienced a meteoric rise in popularity over recent years. As a survival-oriented multiplayer title, Rust offers intense gameplay opportunities for both casual players and those aspiring to compete on a global stage. While it may not have the same formal tournament structure as some esports titles, Rust's open-world nature provides a highly competitive environment where only the most skilled and strategic players can thrive.

In the competitive ecosystem of Rust, it's challenging for an unprepared player to make their mark. The game is populated by experienced clans and players who dominate servers with tactical brilliance and game knowledge. Even if you're not entirely familiar with Rust's competitive scene, you've probably heard of the infamous clans and solo players who have made a name for themselves. But how can a newcomer break into this challenging yet thrilling world of Rust competitions? Well, everyone starts somewhere.

First and foremost, you need to hone your skills in Rust's brutal environment. Survival is key, but to truly excel, you must master combat, resource management, and strategic base building. You'll need to adapt quickly to dynamic situations, whether you're raiding enemy bases or defending your own. And while it's possible to play solo, forming a team with friends—even if they're not professional players—can greatly increase your chances of success. Team coordination and understanding of Rust’s mechanics will set you on the right path toward competing in Rust servers and community-organized tournaments.

Platforms like BattleMetrics and Rustafied offer opportunities for players to dive into Rust events. These platforms provide easy access to community-driven tournaments and competitive events, allowing you to test your skills against others. Whether you're a newcomer or a seasoned player, you can join in and start your journey toward becoming a top-tier Rust competitor.

Good luck in your quest to survive and dominate the world of Rust!
    `;

    const cs2Description = `
    CS2 is among the most popular and well-known multiplayer shooters in the world. Millions of people turn on their computer to play CS2 every day, to break into the world of battles, adrenaline and experience the sense of victory over the enemy. This is not just a game. CS2 tournaments are part of the esports world, which has long occupied his niche among other types of entertainment.
    Once there were non-professional tournaments for beginners and amateurs, but today esports is a brand new and fully completed show. Now we have big tournaments including international ones and the competitions that the whole world is watching. It is not surprising that many people want to get into this sport and become a part of history, participate in tournaments that aggregate huge stadiums. Not everyone knows where to start, but there is always a solution. 
    How to become a pro player? Easy-peasy! You just need to sharpen your skills. To do so, you may start with something little: enter CS2 tournaments for beginners, for example. You don't need to have a full team of five players at the start, as your individual skill is what matters at the beginning of your esports path.
    In addition to the usual practice in matchmaking, sometimes you have to try yourself in competitive matches. These are completely different emotions, and also the ability to get rewards changes the approach to the game.
    The most popular are online tournaments, and we have a special platform to hold them. ESL Esports team have created a series of weekly CS2 tournaments for all those who wish to join the world of Counter-Strike, including beginners. Here you can compete with other players in any convenient format, as well as make new acquaintances, discuss the problems of CS2 and even find a team.
    Free tournaments for beginners is a great way to acquire skills at playing Counter-Strike, as well as prepare for competitions with stronger opponents.
    `;

    const dota2Description = `
    Dota 2 has reached stellar heights of popularity in the course of recent years. Being an esports-oriented title, the game offers exciting opportunities for many world-famous teams to perform on the global arena via a series of official Dota 2 tournaments called Dota Pro Circuit.
    In the highly competitive ecosystem of Dota 2 tournaments, it’s fairly hard for an unprepared player to do something to be noticed. The esports scene is occupied by well-known organizations and clans, and even if you happen to be far from the overall idea of Dota 2 tournaments, you’ve definitely heard about the famous teams. But what can be done to enter this engaging, yet overcrowded world of esports? Well, everyone has to start somewhere.
    First, you need to make sure that you are skilled enough to perform at a reasonably high level. You need to train more so that you can adjust your strategies on the go in accordance with the unfolding events during the matches. You obviously need a team of friends – and your crew doesn’t have to be a professional one. Simply learn the game and improve your team play – that’s a great start to advance for online Dota 2 tournaments for beginners.
    ESL Esports team has established an easy-to-use tournament platform so that you can make the first steps towards the professional competitive Dota 2 stage. It’s completely free, and you can jump in regardless of your current level of plays. Good luck on your way to the top!
    `;

    const teamFightTacticsDescription = `Autobattlers had burst into our lives swiftly and vividly, but contrary to the saying they managed to gain a foothold in our hearts. Riot Games’ Teamfight Tactics is a project to keep an eye on — a part of the League of Legends universe and a unique autobattler, which differs from its competitors in high dynamics, delightful graphics, and innovative mechanics. Moreover, spending time playing your favorite game can be not only pleasant but also useful at the same time — it doesn’t matter at all if this is an endless struggle for the highest rank or just attempts to sharpen personal skills.
    We introduce you to the Teamfight Tactics Tournament Platform! Now you can play TFT not only for the soul but also earn valuable prizes in online tournaments organized by ESL Moving forward step by step will help not only to level-up personally but also bring unforgettable emotions. And, of course, you’ll get rewards for all the efforts made in the battles.
    How to become a top-player at Teamfight Tactics, develop your autobattler skills, and achieve the highest rank in TFT? Only by fighting against valid opponents, motivated and strong ones. There is no difference if you set yourself a goal to achieve the professional level or just play Teamfight Tactics because your love for this game is boundless (although one does not contradict the other at all) — on our tournament platform fans with the most diverse game skills can step into battle not only to get valuable prizes but also for the infinitely valuable experience of TFT online tournaments.
    Anyone can take part in our Teamfight Tactics online tournaments, you just need to register and choose one of the proposed options. ESL is organizing TFT online competitions as frequently as possible, as well as ESL plans to hold major Teamfight Tactics events, where prize pools will rise together with the number of contestants.`;

    const tournaments = [
        {
            date: "January 9",
            tournaments: [
                {
                    time: "11:00",
                    teams: [
                        {
                            image: GeekFam,
                            name: "Geek Fam",
                            score: 2,
                            winner: true,
                        },
                        {
                            image: GambitEsports,
                            name: "Gambit Esports",
                            score: 0,
                            winner: false,
                        },
                    ],
                    location: "Bukovel Minor • Initial Matches • BO3",
                },
                {
                    time: "14:00",
                    teams: [
                        {
                            image: TeamNigma,
                            name: "Team Nigma",
                            score: 1,
                            winner: false,
                        },
                        {
                            image: RNG,
                            name: "RNG",
                            score: 2,
                            winner: true,
                        },
                    ],
                    location: "Bukovel Minor • Initial Matches • BO3",
                },
                {
                    time: "17:00",
                    teams: [
                        {
                            image: GeekFam,
                            name: "Geek Fam",
                            score: 1,
                            winner: false,
                        },
                        {
                            image: RNG,
                            name: "RNG",
                            score: 2,
                            winner: true,
                        },
                    ],
                    location: "Bukovel Minor • Winners Matches • BO3",
                },
            ],
        },
        {
            date: "January 10",
            tournaments: [
                {
                    time: "11:00",
                    teams: [
                        {
                            image: GeekFam,
                            name: "Geek Fam",
                            score: 2,
                            winner: true,
                        },
                        {
                            image: GambitEsports,
                            name: "Gambit Esports",
                            score: 0,
                            winner: false,
                        },
                    ],
                    location: "Bukovel Minor • Initial Matches • BO3",
                },
                {
                    time: "14:00",
                    teams: [
                        {
                            image: GambitEsports,
                            name: "Gambit Esports",
                            score: 1,
                            winner: false,
                        },
                        {
                            image: TeamNigma,
                            name: "Team Nigma",
                            score: 2,
                            winner: true,
                        },
                    ],
                    location: "Bukovel Minor • Initial Matches • BO3",
                },
                {
                    time: "17:00",
                    teams: [
                        {
                            image: GeekFam,
                            name: "Geek Fam",
                            score: 0,
                            winner: false,
                        },
                        {
                            image: TeamNigma,
                            name: "Team Nigma",
                            score: 2,
                            winner: true,
                        },
                    ],
                    location: "Bukovel Minor • Winners Matches • BO3",
                },
            ],
        },
        {
            date: "January 11",
            tournaments: [
                {
                    time: "11:00",
                    teams: [
                        {
                            image: TeamNigma,
                            name: "Team Nigma",
                            score: 3,
                            winner: true,
                        },
                        {
                            image: RNG,
                            name: "RNG",
                            score: 2,
                            winner: false,
                        },
                    ],
                    location: "Bukovel Minor • Winners Matches • BO3",
                },
            ],
        },
    ];

    const ships = [
        {
            type: "Sponsor",
            image: HyperX,
            link: "https://hyperx.com/",
        },
        {
            type: "Media Partner",
            image: HotSpawn,
            link: "https://www.hotspawn.com/",
        },
        {
            type: "Sponsor",
            image: McDelivery,
            link: "https://www.mcdonalds.com/",
        },
        {
            type: "Partner",
            image: Bukovel,
            link: "https://bukovel.com/",
        },
        {
            type: "Media Partner",
            image: Wingg,
            link: "https://win.gg/",
        },
        {
            type: "Sponsor",
            image: PariMatch,
            link: "https://parimatch.com/",
        },
        {
            type: "Sponsor",
            image: Pepsi,
            link: "https://www.pepsi.com/",
        },
        {
            type: "Media Partner",
            image: JoinDota,
            link: "https://www.joindota.com/",
        },
        {
            type: "Sponsor",
            image: GosuAi,
            link: "https://gosu.ai/",
        },
        {
            type: "Sponsor",
            image: Lays,
            link: "https://lays.com/",
        },
        {
            type: "Sponsor",
            image: Raygaming,
            link: "https://www.raygaming.com/",
        },
        {
            type: "Sponsor",
            image: SecretLab,
            link: "https://secretlab.co/",
        },
    ];

    const shipsMadMoon = [
        {
            type: "Media Partner",
            image: GosuGamers,
            link: "https://gosugamers.net/",
        },
        {
            type: "Media Partner",
            image: VPGame,
            link: "https://www.vpgame.com/",
        },
        {
            type: "Media Partner",
            image: Inven,
            link: "https://www.invenglobal.com/",
        },
        {
            type: "Sponsor",
            image: McDelivery,
            link: "https://www.mcdonalds.com/",
        },
        {
            type: "Sponsor",
            image: PariMatch,
            link: "https://parimatch.com/",
        },
        {
            type: "Partner",
            image: Pixotope,
            link: "https://www.pixotope.com/",
        },
        {
            type: "Media Partner",
            image: Isport,
            link: "https://isport.ua/",
        },
        {
            type: "Media Partner",
            image: Dota2Net,
            link: "https://dota2.net/",
        },
        {
            type: "Media Partner",
            image: CyberSports,
            link: "https://cyber.sports.ru/",
        },
        {
            type: "Sponsor",
            image: Moneyveo,
            link: "https://moneyveo.ua/uk/",
        },
        {
            type: "Media Partner",
            image: KissFM,
            link: "https://www.kissfm.ua/",
        },
    ];

    const tournamentsMadMoon = [
        {
            date: "February 19",
            tournaments: [
                {
                    time: "18:00",
                    teams: [
                        {
                            image: GambitEsports,
                            name: "Gambit Esports",
                            score: 0,
                            winner: false,
                        },
                        {
                            image: VirtusPro,
                            name: "Virtus Pro",
                            score: 2,
                            winner: true,
                        },
                    ],
                    location: "Mad Moon • First Round • BO3",
                },
                {
                    time: "21:00",
                    teams: [
                        {
                            image: TeamSecret,
                            name: "Team Secret",
                            score: 2,
                            winner: true,
                        },
                        {
                            image: TeamNigma,
                            name: "Team Nigma",
                            score: 1,
                            winner: false,
                        },
                    ],
                    location: "Mad Moon • First Round • BO3",
                },
                {
                    time: "23:00",
                    teams: [
                        {
                            image: VirtusPro,
                            name: "Virtus Pro",
                            score: 0,
                            winner: false,
                        },
                        {
                            image: TeamSecret,
                            name: "Team Secret",
                            score: 2,
                            winner: true,
                        },
                    ],
                    location: "Mad Moon • Winners Round • BO3",
                },
            ],
        },
        {
            date: "February 20",
            tournaments: [
                {
                    time: "9:00",
                    teams: [
                        {
                            image: B8,
                            name: "B8",
                            score: 0,
                            winner: false,
                        },
                        {
                            image: GambitEsports,
                            name: "Gambit Esports",
                            score: 2,
                            winner: true,
                        },
                    ],
                    location: "Mad Moon • First Round • BO3",
                },
                {
                    time: "13:00",
                    teams: [
                        {
                            image: AggressiveMode,
                            name: "Aggressive Mode",
                            score: 1,
                            winner: false,
                        },
                        {
                            image: TeamNigma,
                            name: "Team Nigma",
                            score: 2,
                            winner: true,
                        },
                    ],
                    location: "Mad Moon • First Round • BO3",
                },
                {
                    time: "18:00",
                    teams: [
                        {
                            image: GambitEsports,
                            name: "Gambit Esports",
                            score: 0,
                            winner: false,
                        },
                        {
                            image: TeamNigma,
                            name: "Team Nigma",
                            score: 2,
                            winner: true,
                        },
                    ],
                    location: "Mad Moon • Winners Round • BO3",
                },
            ],
        },
        {
            date: "February 21",
            tournaments: [
                {
                    time: "9:00",
                    teams: [
                        {
                            image: TeamNigma,
                            name: "Team Nigma",
                            score: 3,
                            winner: true,
                        },
                        {
                            image: TeamSecret,
                            name: "Team Secret",
                            score: 2,
                            winner: false,
                        },
                    ],
                    location: "Mad Moon • Winners Round • BO3",
                },
            ],
        },
    ];

    const BukovelMinor2020 = {
        title: "ESL Bukovel Minor 2020",
        description:
            "Can you feel a happy atmosphere of Christmas time coming? Are you planning presents for your family and friends? The winter holidays will come to your home very soon. ESL is ready not only to bring this time closer and make the expectation of Christmas miracles pleasant and comfortable but also to extend the celebration right up to January 12! Dota 2 fans will get a special New Year present, because of ESL Bukovel Minor 2020 will be held like an endless winter fairy tale at the beginning of the next year. We all love miracles and beautiful wintertime when snow covers everything around, leaving only faith in a new, fresh start with the next calendar year. Our New Year's wishes will be renewed, as well as the positions of teams in the DPC bracket with the launch of a new season and participation in Dota 2 tournaments. The atmosphere of the Bukovel ski resort (Ukraine) is the best choice for a confident start to the New Year along with the essential DPC points, a slot for Major and an impressive prize pool of $ 300,000. Dota 2 Minor qualifiers start on December 5, 2019, and will last two days in six regions (Southeast Asia, South America, North America, Eastern Europe, Western Europe, China). According to their results, eight of the strongest teams from around the world will compete in the Double Elimination bracket for the final New Year gifts of ESL Bukovel Minor 2020. ESL Christmas Elf team will be waiting for you on live broadcasts from January 9 to 12, 2020. We're expecting a lot of hilarious fun moments, gifts, warm and cosy matches and analytics straight from the snow-capped peaks of Bukovel. Stay tuned for updates on our social networks and articles on the site so as not to miss the most important news about the participants, the format and the event itself.",
        avatar: BukovelMinor2020Avatar,
        prizePool: "$300 000 & Major Seed",
        date: "05 December - 12 January",
        participants: "26 Teams",
        location: "Ukraine, Bukovel ski resort",
        tags: ["Minor"],
        tournaments: tournaments,
        ships: ships,
        winner: {
            avatar: TeamNigma,
            name: "Team Nigma",
            prize: "$72 000",
        },
    };

    const MadMoon = {
        title: "ESL Dota 2 Tug of War: Mad Moon",
        description:
            "The split of the Mad Moon and the fateful fall of the Ancients' powers as crystals to the Earth has led to an unprecedented and endless confrontation between Dire and Radiant sides. All life on the planet saw the light of new power and rushed to it, including the strongest Dota 2 teams, who are looking forward to the start of ESL Dota 2 Tug of War: Mad Moon matches. The rays of crystals attract all curious travelers, but only the strongest will have the right to raise the Champion’s cup above their head and put an end to the confrontation between the light and the dark. Famous squads from the Dota 2 tournament universe, where the battle for the power of Mad Moon does not stop, will compete for the impressive $300.000 prize pool. The Mad Moon matches will begin on February 19, 2020, and will last for 5 days, until the Grand Finals on February 23, where two battle-hardened teams will find out which side - Dire or Radiant, is the strongest. The attentive and fortunate Dota 2 fans will soon be able to witness the LAN finals in Kyiv, by getting free tickets for the ESL Mad Moon tournament directly. Those who will not be able to join them and will be watching the stream live - they won't remain deprived - many stunning and funny moments await them at the online broadcast of an unforgettable ESL Dota 2 Tug of War: Mad Moon show. After the extremely successful Bukovel Minor 2020, the ESL team doesn't plan to rest on the laurels and has already prepared high-quality content for Dota 2 fans. Follow the schedule, bracket and match results by the special tag ESL Mad Moon, and don't miss important news about the participants, standings, format, and events on our social networks.",
        avatar: MadMoonAvatar,
        prizePool: "$300 000",
        date: "19 February - 23 February",
        participants: "8 Teams",
        location: "Ukraine, Kyiv, Concert hall VDNG, 9th pavilion",
        tags: ["Series", "Lan"],
        tournaments: tournamentsMadMoon,
        ships: shipsMadMoon,
        winner: {
            avatar: TeamNigma,
            name: "Team Nigma",
            prize: "$130 000",
        },
    };

    return (
        <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/register" element={<AuthPage />} />

            <Route path="/profile" element={<ProfilePage />} />

            <Route
                path="/rust"
                element={
                    <NoInfoPage
                        title="Rust"
                        description={rustDescription}
                        background={rustBc}
                    />
                }
            />


            <Route
                path="/:game"
                element={
                    <TournamentsPage
                        logo={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="32"
                                viewBox="0 0 57 74"
                                fill="none"
                            >
                                <path
                                    d="M19.5697 1.33835C20.2557 0.737755 21.0824 0.320457 21.9729 0.125286C22.8634 -0.0698847 23.7888 -0.0365854 24.663 0.222086C25.3352 0.444106 25.9148 0.848058 26.5407 1.24893C27.034 1.56037 27.6136 1.69605 28.0606 2.05375C28.2826 2.2326 28.1038 2.54713 28.1038 2.76915C28.6865 4.15677 28.9979 5.67391 28.5046 7.14787C28.1038 7.64125 27.3885 7.77385 26.8089 7.99895C26.7164 8.62492 26.9415 9.20156 27.0309 9.83062C26.8983 9.92004 26.8089 10.0095 26.6732 10.0989C27.5242 10.0526 28.372 9.87379 29.223 9.69802C29.5344 9.38349 30.0246 9.56234 30.4254 9.51609C30.4716 8.89011 30.6967 8.3104 30.6967 7.68442C30.8203 7.67598 30.9413 7.6457 31.0543 7.595C31.0975 8.04212 31.0543 8.48924 31.1869 8.93637C31.412 9.11522 31.7696 9.02579 32.0378 9.06896C32.0378 9.24781 32.0378 9.42666 32.081 9.60551C37.2637 9.56234 42.4927 9.60551 47.6754 9.60551V10.3672H48.1687V7.45932H48.7483C48.7483 8.26106 48.7052 9.02271 48.7483 9.82753C48.8098 9.88403 48.8899 9.91587 48.9734 9.91696C48.9734 10.0064 49.0166 10.1852 49.0166 10.2747C49.1954 10.0958 49.4174 9.96013 49.6887 10.0496C49.7318 10.1852 49.7781 10.3178 49.8213 10.4967C49.6424 10.6755 49.553 10.8975 49.6424 11.1689C51.073 11.2121 52.5036 11.1689 53.9773 11.1689C54.1129 10.9901 54.3349 10.9006 54.56 10.8112C54.6559 10.8605 54.7458 10.9205 54.8282 10.9901H56.9247C57.0059 11.3262 57.0216 11.6748 56.971 12.0169H54.8251C54.7454 12.1027 54.6553 12.1783 54.5569 12.242C54.3349 12.1063 54.1561 12.0169 53.9341 11.8843H50.0463C49.2848 12.1063 48.4801 12.0631 47.7216 11.9275V12.7755H41.3273C41.077 12.9971 40.7651 13.1369 40.4332 13.1763C40.5688 13.8486 39.8104 14.0274 39.5391 14.5208C39.3672 14.7731 39.1168 14.9617 38.8269 15.0573C38.6018 16.4419 39.0951 17.7401 39.4527 19.0352C39.0519 19.1246 38.6018 19.2572 38.201 19.3466C37.9759 20.2409 37.7539 21.1783 37.5751 22.0725C37.4743 22.4729 37.28 22.8437 37.0083 23.1546C36.7366 23.4654 36.3952 23.7075 36.012 23.861C35.4755 24.487 34.7602 25.113 33.9093 25.1562C33.5979 25.2487 33.3728 25.0236 33.1509 24.8447C32.0348 24.9341 31.005 24.3976 30.0215 23.9505C28.9516 23.4571 27.9681 22.8311 26.9384 22.2545C27.0309 22.8774 26.7164 23.4139 26.4913 23.9505C26.9846 24.1725 27.6537 24.3513 27.9219 24.8879C28.1007 25.2888 28.2795 25.739 28.2795 26.2293C28.2364 27.8389 28.0575 29.4485 27.9681 31.0551C28.0113 32.2176 27.4317 33.3801 26.627 34.2312C26.0905 34.185 25.6435 33.9599 25.1532 33.7378C24.9744 34.1387 24.5705 34.5396 24.7956 35.033C24.9744 35.6158 24.9744 36.2417 25.2427 36.7783C26.7752 38.3672 28.0421 40.1924 28.9948 42.1839C29.9321 44.108 30.6474 46.1185 31.4089 48.1291C31.5415 48.1291 31.8097 48.0828 31.9454 48.0828C32.1242 48.6656 31.9454 49.3347 32.303 49.8713C32.6144 50.3647 32.525 50.9444 32.525 51.5241C32.4356 52.8655 32.3462 54.2068 32.2136 55.5482C32.1211 56.4856 31.8991 57.4261 31.7665 58.3636C31.8097 59.079 32.1242 59.7944 32.0779 60.5098C32.0348 61.1789 32.0348 61.8943 31.4983 62.3846C31.5415 63.9048 31.1407 65.425 31.6771 66.899C32.3924 67.8857 33.1971 68.8201 34.045 69.6712C34.9822 70.1183 36.1014 70.2077 36.9061 71.0125C37.2144 71.5059 37.0387 72.0825 36.9492 72.6191C35.0368 72.8874 33.0963 72.8874 31.1838 72.6191C30.4254 72.4402 29.7101 72.1288 28.9516 72.0394C27.9219 72.0825 26.7164 72.4865 25.776 71.7711C25.6897 70.5654 26.1368 69.4029 26.3588 68.2404C26.4482 67.8395 26.852 67.5712 26.8058 67.1673C26.7133 65.7796 26.627 64.3519 26.5376 62.9674C26.3587 62.8749 26.0443 62.7885 26.0905 62.5203C26.0905 61.848 25.8685 61.1789 25.6897 60.5529C25.3905 58.8406 25.2256 57.1074 25.1964 55.3694C25.1533 54.876 25.4646 54.5183 25.8223 54.2069C25.9148 53.4483 26.0011 52.6435 26.0474 51.8818C25.9117 51.4809 25.6003 51.1664 25.4215 50.8087C24.6168 50.9012 23.4545 51.077 22.9642 50.229C21.8019 48.4868 20.5933 46.6983 19.4341 44.956C18.9408 44.9098 18.3612 44.956 17.9141 44.6415C17.4208 44.1049 17.1094 43.3926 16.7949 42.7204C16.6624 43.257 16.5729 43.8367 16.2585 44.2838C15.9902 44.7309 15.5463 45.0454 15.2318 45.4463C14.9204 46.1617 14.6522 46.8771 14.3839 47.5925C14.0695 48.4868 13.6224 49.381 13.533 50.3647C13.499 50.8392 13.394 51.3059 13.2216 51.7492C12.9965 52.1069 12.5957 52.2426 12.2381 52.4184C11.9699 53.0012 11.791 53.5809 11.3902 54.0743C11.122 54.3857 10.6749 54.4751 10.4961 54.876C10.3173 55.4125 10.0491 55.9059 9.82401 56.3962C9.73459 56.9328 10.0922 57.5156 9.9165 58.049C9.60202 59.3904 8.9299 60.6423 8.30711 61.848C7.99263 62.7423 7.77065 63.6828 7.32052 64.5308C7.14478 64.8885 6.69773 64.9779 6.34008 65.0242C5.93928 66.0047 5.48914 66.9453 5.224 67.9721C5.1039 68.9654 5.07294 69.9674 5.1315 70.9663C5.1315 71.4134 5.40282 71.7711 5.58164 72.172C5.75738 72.7085 5.6248 73.2451 5.53539 73.7816C3.79343 74.0067 2.00523 74.1825 0.306429 73.649C0.127608 73.5133 0.173855 73.2913 0.127608 73.1125C-0.0049658 72.3076 -0.0943758 71.4596 0.173855 70.698C0.753481 68.5981 1.24678 66.4981 1.8264 64.3982C1.60442 64.1731 1.28994 63.9973 1.28994 63.6365C1.24678 63.0568 1.28994 62.4308 1.4256 61.848C1.69383 60.8644 2.40603 60.1058 2.76367 59.1653C2.89933 58.7644 2.85617 58.3636 2.89933 57.9627C2.89933 57.0222 3.43579 56.2636 3.8366 55.4588C4.2374 54.7866 4.55188 54.0712 5.08834 53.4915C5.44598 53.18 5.44598 52.6897 5.71421 52.2858C5.98244 51.7924 6.4295 51.3915 6.4295 50.8087C6.51891 50.0964 6.25067 49.381 6.337 48.6656C6.51891 46.5657 6.92279 44.5089 7.27735 42.4059C7.09853 42.1839 6.8303 41.9618 6.74089 41.6473C6.78714 41.4253 6.83338 41.2464 6.87655 41.0213L6.47574 40.3522C6.65148 40.0839 6.8303 39.7725 7.00912 39.5042C6.8303 39.3685 6.60832 39.1897 6.4295 39.0571C6.65148 38.3848 6.56207 37.4012 7.36676 37.0897C7.45926 37.1329 7.68124 37.1792 7.76757 37.2223C7.63499 36.0629 7.63499 34.8541 7.50242 33.6916C7.20518 32.4483 7.129 31.1623 7.27735 29.8926C7.7244 29.2234 8.57226 28.9552 9.33379 28.912C8.35028 28.6869 7.36676 28.5975 6.4295 28.286C6.38325 27.4812 6.51891 26.6764 6.65148 25.8716C7.05229 24.3082 6.87655 22.6985 7.09853 21.092C7.3236 20.6418 7.90322 20.5523 8.39344 20.6418C8.97615 20.7343 9.55577 20.5523 10.1385 20.3735C10.1385 20.1515 10.1816 19.8801 10.1385 19.6581C9.78084 18.0947 9.87025 16.485 10.1385 14.9679C10.4961 13.0006 11.3008 11.0795 12.7745 9.69494C13.7581 8.75444 15.1886 8.30731 16.5267 8.35357C16.9737 8.35357 17.242 8.80069 17.5996 9.06896C17.7784 8.89011 17.9573 8.71126 18.0929 8.53242C17.8679 7.77076 17.5102 6.96594 17.5565 6.16112C17.6459 4.37262 18.2255 2.54096 19.5666 1.33527M33.5085 13.9842C33.5979 14.0737 33.5979 14.0737 33.5085 13.9842V13.9842ZM34.1344 14.0737C34.1775 14.3851 34.2669 14.6996 34.0881 14.9679C33.8661 15.0573 33.5948 15.0573 33.3728 15.1899C33.9987 15.1899 34.6246 15.2362 35.2535 15.1899C35.7438 15.0573 35.5618 14.4314 35.5618 14.0737C35.2535 13.716 34.5814 13.938 34.1344 14.0737ZM32.5712 15.9516C33.0183 16.4419 33.2403 17.2004 33.6411 17.6938C34.2238 16.9322 34.6708 16.1273 35.3399 15.4582C34.5383 15.412 33.7305 15.5045 32.9289 15.412C32.7932 15.5908 32.7038 15.7727 32.5712 15.9516Z"
                                    fill="currentColor"
                                />
                            </svg>
                        }
                        title="CS 2"
                        description={cs2Description}
                        link="testlink1"
                        topLink="testlink2"
                    />
                }
            />

            <Route path="/:game/:id" element={<DetailedTournamentPage />} />

            <Route path="/events" element={<EventsPage />} />

            <Route
                path="/bukovel"
                element={<CurrentEventPage object={BukovelMinor2020} />}
            />

            <Route
                path="/mad-moon"
                element={<CurrentEventPage object={MadMoon} />}
            />

            <Route path="/steam-connect" element={<SteamConnectPage />} />

            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
    );
};

export default Router;
