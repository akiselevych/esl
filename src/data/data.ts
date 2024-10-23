import mirage from '../sources/mirage.png'
import anubis from '../sources/anubis.png'
import nuke from '../sources/nuke.png'
import vertigo from '../sources/vertigo.png'

export const tournaments = [
    {
        id: 1,
        game: "cs2",
        game_name: "CS 2",
        cover_image:
            "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        name: "Showmatch Fadegods vs Solid",
        date: "Upcoming",
        mode: "5v5 competitive",
        access: false,
        participants: "9/10",
        prizes: "Steam cards",
        bracket_type: "Single elimination",
        match_for_3rd_place: false,
        time_voting: "15",
        bracket_logic: "Follow by",
        map_pool: [
            {
                name: "de_mirage",
                image: mirage,
            },
            {
                name: "de_anubis",
                image: anubis,
            },
            {
                name: "de_ancient",
                image: vertigo,
            },
            {
                name: "de_vertigo",
                image: "https://steamuserimages-a.akamaihd.net/ugc/539645482720018519/9BC8E9D876916173C915233460D559231FF4E4E3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            },
            {
                name: "de_dust2",
                image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/15/mdlhtjaz85gjhahyakce/csgo-dust-2-map",
            },
        ],
        prime: true,
        stand_in: "0",
        desciption: {
            prizes: [
                "1 place - 1000 $ Steam card",
                "2 place - 500 $ Steam card",
                "2 place - 250 $ Steam card",
            ],
        },
        participants_users: [
            {
                image: "https://i.imgur.com/3QXVh9r.png",
                name: "KulGM",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "GameBRQ",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "LaserDot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "Trix1Shot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "BulletStorm",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "CyberVortex",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "ApexAssassins",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "IronBlitz",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "StealthReign",
            }
        ],
    },
    {
        id: 2,
        game: "cs2",
        game_name: "CS 2",
        cover_image:
            "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        name: "ESL CS2 Tournament",
        date: "Upcoming",
        mode: "2v2 Single elimination",
        access: true,
        participants: "30/60",
        prizes: "Steam cards",
        bracket_type: "Single elimination",
        match_for_3rd_place: true,
        time_voting: "15",
        bracket_logic: "Follow by",
        map_pool: [
            {
                name: "de_mirage",
                image: mirage,
            },
            {
                name: "de_anubis",
                image: anubis,
            },
            {
                name: "de_ancient",
                image: vertigo,
            },
            {
                name: "de_vertigo",
                image: "https://steamuserimages-a.akamaihd.net/ugc/539645482720018519/9BC8E9D876916173C915233460D559231FF4E4E3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            },
            {
                name: "de_dust2",
                image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/15/mdlhtjaz85gjhahyakce/csgo-dust-2-map",
            },
        ],
        prime: true,
        stand_in: "0",
        desciption: {
            prizes: [
                "1 place - 560 $ Steam card",
                "2 place - 360 $ Steam card",
            ],
        },
        participants_users: [
            {
                image: "https://i.imgur.com/3QXVh9r.png",
                name: "KulGM",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "GameBRQ",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "LaserDot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "Trix1Shot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "BulletStorm",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "CyberVortex",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "ApexAssassins",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "IronBlitz",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "StealthReign",
            }
        ],
    },
    {
        id: 3,
        game: "cs2",
        game_name: "CS 2",
        cover_image:
            "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        name: "ESL CS2 duels Tournament",
        date: "Upcoming",
        mode: "1v1 Single elimination",
        access: true,
        participants: "24/30",
        prizes: "Steam cards",
        bracket_type: "Single elimination",
        match_for_3rd_place: true,
        time_voting: "15",
        bracket_logic: "Follow by",
        map_pool: [
            {
                name: "de_mirage",
                image: mirage,
            },
            {
                name: "de_anubis",
                image: anubis,
            },
            {
                name: "de_ancient",
                image: vertigo,
            },
            {
                name: "de_vertigo",
                image: "https://steamuserimages-a.akamaihd.net/ugc/539645482720018519/9BC8E9D876916173C915233460D559231FF4E4E3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            },
            {
                name: "de_dust2",
                image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/15/mdlhtjaz85gjhahyakce/csgo-dust-2-map",
            },
        ],
        prime: true,
        stand_in: "0",
        desciption: {
            prizes: [
                "1 place - 560 $ Steam card",
                "2 place - 360 $ Steam card",
            ],
        },
        participants_users: [
            {
                image: "https://i.imgur.com/3QXVh9r.png",
                name: "KulGM",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "GameBRQ",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "LaserDot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "Trix1Shot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "BulletStorm",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "CyberVortex",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "ApexAssassins",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "IronBlitz",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "StealthReign",
            }
        ],
    },
    {
        id: 4,
        game: "cs2",
        game_name: "CS 2",
        cover_image:
            "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        name: "ESL CS2 Tournament",
        date: "Upcoming",
        mode: "2v2 Single elimination",
        access: true,
        participants: "66/80",
        prizes: "Steam cards",
        bracket_type: "Single elimination",
        match_for_3rd_place: true,
        time_voting: "15",
        bracket_logic: "Follow by",
        map_pool: [
            {
                name: "de_mirage",
                image: mirage,
            },
            {
                name: "de_anubis",
                image: anubis,
            },
            {
                name: "de_ancient",
                image: vertigo,
            },
            {
                name: "de_vertigo",
                image: "https://steamuserimages-a.akamaihd.net/ugc/539645482720018519/9BC8E9D876916173C915233460D559231FF4E4E3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            },
            {
                name: "de_dust2",
                image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/15/mdlhtjaz85gjhahyakce/csgo-dust-2-map",
            },
        ],
        prime: true,
        stand_in: "0",
        desciption: {
            prizes: [
                "1 place - 560 $ Steam card",
                "2 place - 360 $ Steam card",
            ],
        },
        participants_users: [
            {
                image: "https://i.imgur.com/3QXVh9r.png",
                name: "KulGM",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "GameBRQ",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "LaserDot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "Trix1Shot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "BulletStorm",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "CyberVortex",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "ApexAssassins",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "IronBlitz",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "StealthReign",
            }
        ],
    },
    {
        id: 5,
        game: "cs2",
        game_name: "CS 2",
        cover_image:
            "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        name: "ESL CS2 duels Tournament",
        date: "Upcoming",
        mode: "1v1 Single elimination",
        access: true,
        participants: "37/60",
        prizes: "Steam cards",
        bracket_type: "Single elimination",
        match_for_3rd_place: true,
        time_voting: "15",
        bracket_logic: "Follow by",
        map_pool: [
            {
                name: "de_mirage",
                image: mirage,
            },
            {
                name: "de_anubis",
                image: anubis,
            },
            {
                name: "de_ancient",
                image: vertigo,
            },
            {
                name: "de_vertigo",
                image: "https://steamuserimages-a.akamaihd.net/ugc/539645482720018519/9BC8E9D876916173C915233460D559231FF4E4E3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            },
            {
                name: "de_dust2",
                image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/15/mdlhtjaz85gjhahyakce/csgo-dust-2-map",
            },
        ],
        prime: true,
        stand_in: "0",
        desciption: {
            prizes: [
                "1 place - 560 $ Steam card",
                "2 place - 360 $ Steam card",
            ],
        },
        participants_users: [
            {
                image: "https://i.imgur.com/3QXVh9r.png",
                name: "KulGM",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "GameBRQ",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "LaserDot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "Trix1Shot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "BulletStorm",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "CyberVortex",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "ApexAssassins",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "IronBlitz",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "StealthReign",
            }
        ],
    },
    {
        id: 6,
        game: "cs2",
        game_name: "CS 2",
        cover_image:
            "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        name: "ESL CS2 Tournament",
        date: "Upcoming",
        mode: "5v5 competitive",
        access: true,
        participants: "37/60",
        prizes: "Steam cards",
        bracket_type: "Single elimination",
        match_for_3rd_place: true,
        time_voting: "15",
        bracket_logic: "Follow by",
        map_pool: [
            {
                name: "de_mirage",
                image: mirage,
            },
            {
                name: "de_anubis",
                image: anubis,
            },
            {
                name: "de_ancient",
                image: vertigo,
            },
            {
                name: "de_vertigo",
                image: "https://steamuserimages-a.akamaihd.net/ugc/539645482720018519/9BC8E9D876916173C915233460D559231FF4E4E3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            },
            {
                name: "de_dust2",
                image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/15/mdlhtjaz85gjhahyakce/csgo-dust-2-map",
            },
        ],
        prime: true,
        stand_in: "0",
        desciption: {
            prizes: [
                "1 place - 560 $ Steam card",
                "2 place - 360 $ Steam card",
            ],
        },
        participants_users: [
            {
                image: "https://i.imgur.com/3QXVh9r.png",
                name: "KulGM",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "GameBRQ",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "LaserDot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "Trix1Shot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "BulletStorm",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "CyberVortex",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "ApexAssassins",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "IronBlitz",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "StealthReign",
            }
        ],
    },
    {
        id: 7,
        game: "cs2",
        game_name: "CS 2",
        cover_image:
            "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        name: "ESL CS2 Tournament",
        date: "Upcoming",
        mode: "5v5 competitive",
        access: true,
        participants: "119/120",
        prizes: "Steam cards",
        bracket_type: "Single elimination",
        match_for_3rd_place: true,
        time_voting: "15",
        bracket_logic: "Follow by",
        map_pool: [
            {
                name: "de_mirage",
                image: mirage,
            },
            {
                name: "de_anubis",
                image: anubis,
            },
            {
                name: "de_ancient",
                image: vertigo,
            },
            {
                name: "de_vertigo",
                image: "https://steamuserimages-a.akamaihd.net/ugc/539645482720018519/9BC8E9D876916173C915233460D559231FF4E4E3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            },
            {
                name: "de_dust2",
                image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/15/mdlhtjaz85gjhahyakce/csgo-dust-2-map",
            },
        ],
        prime: true,
        stand_in: "0",
        desciption: {
            prizes: [
                "1 place - 560 $ Steam card",
                "2 place - 360 $ Steam card",
            ],
        },
        participants_users: [
            {
                image: "https://i.imgur.com/3QXVh9r.png",
                name: "KulGM",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "GameBRQ",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "LaserDot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "Trix1Shot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "BulletStorm",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "CyberVortex",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "ApexAssassins",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "IronBlitz",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "StealthReign",
            }
        ],
    },
    {
        id: 8,
        game: "cs2",
        game_name: "CS 2",
        cover_image:
            "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        name: "Showmatch Nik52nah vs LazyB",
        date: "Upcoming",
        mode: "5v5 competitive",
        access: true,
        participants: "9/10",
        prizes: "Steam cards",
        bracket_type: "Single elimination",
        match_for_3rd_place: true,
        time_voting: "15",
        bracket_logic: "Follow by",
        map_pool: [
            {
                name: "de_mirage",
                image: mirage,
            },
            {
                name: "de_anubis",
                image: anubis,
            },
            {
                name: "de_ancient",
                image: vertigo,
            },
            {
                name: "de_vertigo",
                image: "https://steamuserimages-a.akamaihd.net/ugc/539645482720018519/9BC8E9D876916173C915233460D559231FF4E4E3/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            },
            {
                name: "de_dust2",
                image: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/15/mdlhtjaz85gjhahyakce/csgo-dust-2-map",
            },
        ],
        prime: true,
        stand_in: "0",
        desciption: {
            prizes: [
                "1 place - 560 $ Steam card",
                "2 place - 360 $ Steam card",
            ],
        },
        participants_users: [
            {
                image: "https://i.imgur.com/3QXVh9r.png",
                name: "KulGM",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "GameBRQ",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "LaserDot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "Trix1Shot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "BulletStorm",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "CyberVortex",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "ApexAssassins",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "IronBlitz",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "StealthReign",
            }
        ],
    },
    {
        id: 1,
        game: "dota-2",
        game_name: "Dota 2",
        cover_image:
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
        name: "ESL Dota 2 Premium Duel SKY",
        date: "Upcoming",
        mode: "2v2 Single elimination",
        access: true,
        participants: "72/128",
        prizes: "Dota2 skins",
        bracket_type: "Single elimination",
        match_for_3rd_place: true,
        time_voting: "15",
        bracket_logic: "Follow by",
        map_pool: [
            {
                name: "All heroes",
                image: "https://clan.cloudflare.steamstatic.com/images/3703047/3728d0dc0f78d43a27b431f8b5607ee31ca0987d.png",
            },
        ],
        prime: true,
        stand_in: "0",
        desciption: {
            prizes: [
                "1 place - 560 $ Steam card",
                "2 place - 360 $ Steam card",
            ],
        },
        participants_users: [
            {
                image: "https://i.imgur.com/3QXVh9r.png",
                name: "KulGM",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "GameBRQ",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "LaserDot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "Trix1Shot",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "BulletStorm",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "CyberVortex",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "ApexAssassins",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "IronBlitz",
            },
            {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcvOnGNWgVN-3M4nPYWy_V688B9wwKB5THQ&s",
                name: "StealthReign",
            }
        ],
    },
];

export const tops = [
    {
        id: 7,
        game: "cs2",
        game_name: "CS 2",
        cover_image:
            "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        name: "ESL CS2 Tournament 5v5 Competitive",
        prizes: "Steam cards",
    },
    {
        id: 1,
        game: "dota-2",
        game_name: "Dota 2",
        cover_image:
            "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
        name: "ESL Dota 2 Premium Duel SKY",
        prizes: "Dota2 skins",
    },
];

export const events = [
    {
        id: 1,
        game: "Dota 2",
        name: "WePlay! Dota 2 Tug of War",
        winner_image:
            "https://img.prosports.kz/news/content//202103/208723_46d6aa788b30c98df24fc32fe8cd9225.jpg",
        winner_name: "Team Nigma",
        date: "21 Feb-Feb 23, 2020",
        tags: ["LAN"],
        location: "Kyiv, Ukraine",
        prize_pool: "300,000$",
    },
    {
        id: 2,
        game: "CS2",
        name: "WePlay! CS 2 Tournament",
        winner_image:
            "https://c8.alamy.com/comp/2BN8NN0/initial-letter-nn-logo-design-vector-template-creative-abstract-nn-letter-logo-design-2BN8NN0.jpg",
        winner_name: "Someone",
        date: "21 Feb-Feb 23, 2020",
        tags: ["LAN", "League"],
        location: "Warshav, Polandia",
        prize_pool: "2,000$",
    },
];
