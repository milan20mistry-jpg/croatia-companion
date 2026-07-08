const locations = [

    {
        name: "Zadar",
        category: "History",
        region: "Dalmatia",
        description:
        "Historic coastal city famous for the Sea Organ and Roman ruins.",
        coordinates:
        [44.1194, 15.2314],
        rating: 4.7,
        travelTime:"1 hour 45 minutes",
transport:"🚗 Car",
        tags:
        [
            "Sea Organ",
            "Roman History",
            "Sunsets"
        ]
    },


    {
        name: "Dubrovnik Old Town",
        category: "History",
        region: "Dalmatia",
        description:
        "A medieval walled city overlooking the Adriatic Sea.",
        coordinates:
        [42.6507,18.0944],
        rating:4.9,
        travelTime:"3 hours 30 minutes",
transport:"🚗 Car",
        tags:
        [
            "UNESCO",
            "Architecture",
            "Views"
        ]
    },


    {
        name:"Plitvice Lakes",
        category:"Nature",
        region:"Central Croatia",
        description:
        "National park famous for waterfalls and turquoise lakes.",
        coordinates:
        [44.8654,15.5820],
        rating:5,
        travelTime:"3 hours",
transport:"🚗 Car",
        tags:
        [
            "Waterfalls",
            "Hiking",
            "Nature"
        ]
    },
{
    name: "Split",
    category: "History",
    region: "Dalmatia",
    description:
    "Ancient coastal city built around Diocletian's Palace.",
    coordinates:
    [43.5081, 16.4402],
    rating: 4.8,
    distanceFromBase:35,
    tags:
    [
        "Roman Empire",
        "Old Town",
        "Food"
    ]
},
{
    name: "Zlatni Rat Beach",
    category: "Beaches",
    region: "Brač Island",
    description:
    "One of Croatia's most famous beaches, known for its unique golden horn shape and crystal-clear water.",
    coordinates:
    [43.2617, 16.6547],
    rating: 4.8,
    travelTime:"Around 2 hours",
transport:"🚗 Car + ⛴️ Ferry",
    tags:
    [
        "Swimming",
        "Photography",
        "Island"
    ]
},


{
    name: "Stiniva Cove",
    category: "Beaches",
    region: "Vis Island",
    description:
    "A hidden beach surrounded by dramatic cliffs and turquoise Adriatic water.",
    coordinates:
    [43.0206, 16.1139],
    rating: 4.9,
travelTime:"Around 2 hours",
transport:"🚗 Car + ⛴️ Ferry",
    tags:
    [
        "Hidden Gem",
        "Cliffs",
        "Swimming"
    ]
},


{
    name: "Punta Rata Beach",
    category: "Beaches",
    region: "Makarska Riviera",
    description:
    "Beautiful pebble beach famous for its clear water and iconic Brela rock.",
    coordinates:
    [43.3688, 16.9338],
    rating: 4.7,
    travelTime:"1 hour 15 minutes",
transport:"🚗 Car",
    tags:
    [
        "Family",
        "Views",
        "Adriatic"
    ]
},


{
    name: "Sakarun Beach",
    category: "Beaches",
    region: "Dugi Otok",
    description:
    "A peaceful sandy beach with shallow turquoise waters.",
    coordinates:
    [44.1397, 14.8606],
    rating: 4.6,
    travelTime:"Around 3 hours",
transport:"🚗 Car + ⛴️ Ferry",
    tags:
    [
        "Sand",
        "Relaxing",
        "Island"
    ]
},
{
    name: "Hvar Town",
    category: "Islands",
    region: "Hvar Island",
    description:
    "A famous island destination known for its historic harbour, nightlife, and beautiful beaches.",
    coordinates:
    [43.1729, 16.4411],
    rating: 4.8,
    distanceFromBase:80,
 travelTime:"Around 2 hours",
transport:"🚗 Car + ⛴️ Ferry",  
tags:
    [
        "Island",
        "Old Town",
        "Nightlife"
    ]
},


{
    name: "Korčula Old Town",
    category: "Islands",
    region: "Korčula Island",
    description:
    "A medieval coastal town with stone streets, Venetian architecture, and stunning sea views.",
    coordinates:
    [42.9609, 17.1353],
    rating: 4.7,
    travelTime:"Around 3 hours",
transport:"🚗 Car + ⛴️ Ferry",
    tags:
    [
        "History",
        "Architecture",
        "Island"
    ]
},


{
    name: "Mljet National Park",
    category: "Islands",
    region: "Mljet Island",
    description:
    "A peaceful island park famous for forests, saltwater lakes, and untouched nature.",
    coordinates:
    [42.7847, 17.5371],
    rating: 4.9,
    travelTime:"Around 3 hours",
transport:"🚗 Car + ⛴️ Ferry",
    tags:
    [
        "Nature",
        "Hiking",
        "National Park"
    ]
},


{
    name: "Vis Island",
    category: "Islands",
    region: "Vis Island",
    description:
    "A remote Croatian island famous for clear water, traditional villages, and hidden beaches.",
    coordinates:
    [43.0600, 16.1830],
    rating: 4.8,
    distanceFromBase:90,
    tags:
    [
        "Hidden Gem",
        "Swimming",
        "Island"
    ]
},


{
    name: "Brač Island",
    category: "Islands",
    region: "Brač Island",
    description:
    "Home to Zlatni Rat beach and famous for stone villages and mountain landscapes.",
    coordinates:
    [43.3748, 16.6290],
    rating: 4.7,
    travelTime:"Around 1 hour 30 minutes",
transport:"🚗 Car + ⛴️ Ferry",
    tags:
    [
        "Beach",
        "Island",
        "Views"
    ]
},
{
    name: "Krka National Park",
    category: "Nature",
    region: "Šibenik-Knin County",
    description:
    "A spectacular national park famous for waterfalls, rivers, and wooden walkways through nature.",
    coordinates:
    [43.8045, 15.9620],
    rating: 4.9,
    travelTime:"1 hour 15 minutes",
transport:"🚗 Car",
    tags:
    [
        "Waterfalls",
        "Hiking",
        "National Park"
    ]
},


{
    name: "Biokovo Skywalk",
    category: "Nature",
    region: "Makarska Riviera",
    description:
    "A glass viewing platform high above the Adriatic with incredible mountain and sea views.",
    coordinates:
    [43.3436, 17.0528],
    rating: 4.8,
    travelTime:"1 hour 45 minutes",
transport:"🚗 Car",
    tags:
    [
        "Views",
        "Mountains",
        "Adventure"
    ]
},


{
    name: "Paklenica National Park",
    category: "Nature",
    region: "Northern Dalmatia",
    description:
    "A dramatic mountain park known for hiking, climbing, and deep limestone canyons.",
    coordinates:
    [44.2870, 15.4380],
    rating: 4.8,
    travelTime:"2 hours 30 minutes",
transport:"🚗 Car",
    tags:
    [
        "Hiking",
        "Climbing",
        "Mountains"
    ]
},


{
    name: "Cetina Canyon",
    category: "Nature",
    region: "Omiš",
    description:
    "A beautiful canyon offering rafting, hiking, and adventure activities.",
    coordinates:
    [43.4450, 16.6910],
    rating: 4.7,
    travelTime:"1 hour",
transport:"🚗 Car",
    tags:
    [
        "Rafting",
        "Adventure",
        "River"
    ]
},


{
    name: "Velebit Mountains",
    category: "Nature",
    region: "Lika",
    description:
    "Croatia's largest mountain range with wild landscapes and spectacular hiking trails.",
    coordinates:
    [44.7000, 15.0000],
    rating: 4.8,
    distanceFromBase:150,
    tags:
    [
        "Hiking",
        "Mountains",
        "Wildlife"
    ]
},

{
    name:"Trogir Old Town",
    category:"History",
    region:"Dalmatia",
    description:
    "A UNESCO-listed medieval town with stone streets, historic buildings, and a beautiful waterfront.",
    coordinates:
    [43.5164,16.2502],
    rating:4.8,
    travelTime:"10 minutes",
transport:"🚗 Car",
    tags:
    [
        "UNESCO",
        "Architecture",
        "Old Town"
    ]
},

{
    name:"Okrug Beach",
    category:"Beaches",
    region:"Čiovo Island",
    description:
    "A popular beach near your accommodation with clear water, restaurants, and sunset views.",
    coordinates:
    [43.4985,16.2612],
    rating:4.5,
    travelTime:"5 minutes",
transport:"🚗 Car / 🚶 Walk",
    tags:
    [
        "Beach",
        "Swimming",
        "Sunset"
    ]
},

{
    name:"Marjan Hill",
    category:"Nature",
    region:"Split",
    description:
    "A green hill above Split offering walking trails, viewpoints, and amazing city views.",
    coordinates:
    [43.5087,16.4190],
    rating:4.7,
    travelTime:"35 minutes",
transport:"🚗 Car",distanceFromBase:35,
    tags:
    [
        "Views",
        "Walking",
        "Sunset"
    ]
},

{
    name:"Klis Fortress",
    category:"History",
    region:"Split Hinterland",
    description:
    "A dramatic medieval fortress overlooking Split and the surrounding mountains.",
    coordinates:
    [43.5600,16.5236],
    rating:4.6,
    travelTime:"45 minutes",
transport:"🚗 Car",
    tags:
    [
        "History",
        "Views",
        "Game of Thrones"
    ]
},

{
    name:"Blue Lagoon",
    category:"Beaches",
    region:"Drvenik Veli",
    description:
    "A beautiful turquoise lagoon perfect for swimming, snorkelling, and boat trips.",
    coordinates:
    [43.4480,16.1120],
    rating:4.8,
    travelTime:"20 minutes + boat",
transport:"🚗 Car + ⛵ Boat",
    tags:
    [
        "Swimming",
        "Boat Trip",
        "Hidden Gem"
    ]
},


// ==========================
// RESTAURANTS
// ==========================


{
    name:"Konoba Fetivi",

    category:"Food",

    type:"Restaurant",

    region:"Split",

    description:
    "Traditional Dalmatian restaurant specialising in seafood, fresh fish and Croatian dishes.",

    coordinates:
    [43.5065,16.4340],

    rating:4.6,

    nearbySightseeing:
"Split Old Town",

restaurantTravelTime:
"10 minutes walk",

    cuisine:[
        "Dalmatian",
        "Seafood",
        "Croatian"
    ],

    price:"€€€",

    recommendedFor:[
        "Dinner",
        "Traditional food",
        "Seafood"
    ],

    tags:[
        "Restaurant",
        "Local favourite"
    ]
},


{
    name:"Bokeria Kitchen & Wine Bar",

    category:"Food",

    type:"Restaurant",

    region:"Split",

    description:
    "Modern Mediterranean restaurant with Croatian ingredients and wine selection.",

    coordinates:
    [43.5089,16.4380],

    rating:4.6,

    nearbySightseeing:
"Diocletian's Palace",

restaurantTravelTime:
"3 minutes walk",

    cuisine:[
        "Mediterranean",
        "Croatian",
        "Wine"
    ],

    price:"€€€",

    recommendedFor:[
        "Dinner",
        "Wine",
        "Evening meal"
    ],

    tags:[
        "Restaurant",
        "Modern"
    ]
},


{
    name:"Dvor",

    category:"Food",

    type:"Restaurant",

    region:"Split",

    description:
    "Sea-view restaurant offering Mediterranean dishes and seafood.",

    coordinates:
    [43.5028,16.4430],

    rating:4.6,

    nearbySightseeing:
"Firule Beach / Split Waterfront",

restaurantTravelTime:
"5 minutes walk",

    cuisine:[
        "Mediterranean",
        "Seafood"
    ],

    price:"€€€",

    recommendedFor:[
        "Dinner",
        "Sunset",
        "Special occasion"
    ],

    tags:[
        "Restaurant",
        "Sea view"
    ]
},


{
    name:"Zrno Soli",

    category:"Food",

    type:"Restaurant",

    region:"Split",

    description:
    "High-end seafood restaurant located in Split marina.",

    coordinates:
    [43.5000,16.4290],

    rating:4.5,

   nearbySightseeing:
"Split Marina",

restaurantTravelTime:
"2 minutes walk",

    cuisine:[
        "Fine Dining",
        "Seafood",
        "Mediterranean"
    ],

    price:"€€€€",

    recommendedFor:[
        "Dinner",
        "Luxury meal"
    ],

    tags:[
        "Restaurant",
        "Fine dining"
    ]
},


{
    name:"Villa Spiza",

    category:"Food",

    type:"Restaurant",

    region:"Split",

    description:
    "Small traditional restaurant serving local Croatian dishes.",

    coordinates:
    [43.5080,16.4390],

    rating:4.7,

    nearbySightseeing:
"Diocletian's Palace",

restaurantTravelTime:
"5 minutes walk",

    cuisine:[
        "Croatian",
        "Dalmatian"
    ],

    price:"€€",

    recommendedFor:[
        "Dinner",
        "Local food"
    ],

    tags:[
        "Restaurant",
        "Traditional"
    ]
},


{
    name:"Restaurant Adriatic",

    category:"Food",

    type:"Restaurant",

    region:"Split",

    description:
    "Mediterranean restaurant with sea views and seafood dishes.",

    coordinates:
    [43.5050,16.4250],

    rating:4.7,

    nearbySightseeing:
"Sustipan Park",

restaurantTravelTime:
"3 minutes walk",

    cuisine:[
        "Mediterranean",
        "Seafood"
    ],

    price:"€€€",

    recommendedFor:[
        "Dinner",
        "Sunset"
    ],

    tags:[
        "Restaurant",
        "Views"
    ]
},


{
    name:"Šug Restaurant",

    category:"Food",

    type:"Restaurant",

    region:"Split",

    description:
    "Modern Croatian restaurant with creative Dalmatian dishes.",

    coordinates:
    [43.5100,16.4370],

    rating:4.7,

    nearbySightseeing:
"Split Old Town",

restaurantTravelTime:
"5 minutes walk",

    cuisine:[
        "Croatian",
        "Mediterranean"
    ],

    price:"€€€",

    recommendedFor:[
        "Dinner",
        "Modern cuisine"
    ],

    tags:[
        "Restaurant"
    ]
},


{
    name:"Konoba Trs",

    category:"Food",

    type:"Restaurant",

    region:"Trogir",

    description:
    "Traditional Dalmatian restaurant in Trogir Old Town.",

    coordinates:
    [43.5165,16.2510],

    rating:4.7,

    nearbySightseeing:
"Trogir Old Town",

restaurantTravelTime:
"5 minutes walk",

    cuisine:[
        "Dalmatian",
        "Seafood",
        "Croatian"
    ],

    price:"€€",

    recommendedFor:[
        "Dinner",
        "After sightseeing"
    ],

    tags:[
        "Restaurant",
        "Trogir"
    ]
},

{
    name:"Perlica",

    category:"Food",

    type:"Restaurant",

    region:"Klis",

    description:
    "Traditional Croatian restaurant serving grilled meats and local dishes near Klis Fortress.",

    coordinates:
    [43.5608,16.5210],

    rating:4.5,

     nearbySightseeing:
    "Klis Fortress",

    restaurantTravelTime:
    "5 minutes drive",

    cuisine:[
        "Croatian",
        "Grill",
        "Traditional"
    ],

    price:"€€",

    recommendedFor:[
        "Dinner",
        "After sightseeing"
    ],

    tags:[
        "Restaurant",
        "Klis"
    ]
},


{
    name:"Cantinetta",

    category:"Food",

    type:"Restaurant",

    region:"Skradin",

    description:
    "Dalmatian restaurant near Krka National Park specialising in seafood and local wines.",

    coordinates:
    [43.8180,15.6340],

    rating:4.6,

     nearbySightseeing:
    "Krka National Park",

    restaurantTravelTime:
    "10 minutes drive",

    cuisine:[
        "Dalmatian",
        "Seafood",
        "Mediterranean"
    ],

    price:"€€",

    recommendedFor:[
        "Dinner",
        "After Krka"
    ],

    tags:[
        "Restaurant",
        "Krka"
    ]
},


{
    name:"Proto",

    category:"Food",

    type:"Restaurant",

    region:"Dubrovnik",

    description:
    "Historic Dubrovnik restaurant famous for seafood and traditional Croatian cuisine.",

    coordinates:
    [42.6410,18.1090],

    rating:4.5,

     nearbySightseeing:
    "Dubrovnik Old Town",

    restaurantTravelTime:
    "2 minutes walk",

    cuisine:[
        "Seafood",
        "Croatian",
        "Mediterranean"
    ],

    price:"€€€",

    recommendedFor:[
        "Dinner",
        "Special occasion"
    ],

    tags:[
        "Restaurant",
        "Dubrovnik"
    ]
},


{
    name:"Pet Bunara",

    category:"Food",

    type:"Restaurant",

    region:"Zadar",

    description:
    "Modern Croatian restaurant using local ingredients and Dalmatian flavours.",

    coordinates:
    [44.1140,15.2260],

    rating:4.7,

  nearbySightseeing:
    "Zadar Old Town",

    restaurantTravelTime:
    "5 minutes walk",

    cuisine:[
        "Croatian",
        "Mediterranean",
        "Seafood"
    ],

    price:"€€",

    recommendedFor:[
        "Dinner",
        "Local food"
    ],

    tags:[
        "Restaurant",
        "Zadar"
    ]
},


{
    name:"Dalmatino",

    category:"Food",

    type:"Restaurant",

    region:"Hvar",

    description:
    "Popular Hvar restaurant serving Croatian grilled dishes and seafood.",

    coordinates:
    [43.1720,16.4420],

    rating:4.7,

       nearbySightseeing:
    "Hvar Town",

    restaurantTravelTime:
    "5 minutes walk",

    cuisine:[
        "Croatian",
        "Seafood",
        "Grill"
    ],

    price:"€€",

    recommendedFor:[
        "Dinner",
        "Island evening"
    ],

    tags:[
        "Restaurant",
        "Hvar"
    ]
},


{
    name:"Taverna Riva",

    category:"Food",

    type:"Restaurant",

    region:"Bol, Brač",

    description:
    "Mediterranean restaurant near Zlatni Rat serving seafood and Croatian dishes.",

    coordinates:
    [43.2620,16.6550],

    rating:4.1,

     nearbySightseeing:
    "Zlatni Rat Beach",

    restaurantTravelTime:
    "10 minutes walk",

    cuisine:[
        "Mediterranean",
        "Seafood",
        "Croatian"
    ],

    price:"€€",

    recommendedFor:[
        "Dinner",
        "After beach"
    ],

    tags:[
        "Restaurant",
        "Brač"
    ]
},


{
    name:"Pojoda",

    category:"Food",

    type:"Restaurant",

    region:"Vis",

    description:
    "Traditional island restaurant specialising in seafood and local Vis cuisine.",

    coordinates:
    [43.0600,16.1830],

    rating:4.6,

     nearbySightseeing:
    "Vis Town / Stiniva Cove",

    restaurantTravelTime:
    "10 minutes drive",

    cuisine:[
        "Island Cuisine",
        "Seafood",
        "Croatian"
    ],

    price:"€€",

    recommendedFor:[
        "Dinner",
        "Traditional food"
    ],

    tags:[
        "Restaurant",
        "Vis"
    ]
},

{
    name:"Split Ferry Port",

    category:"Ferry",

    type:"Transport",

    region:"Split",

    description:
    "Main Ferry terminal connecting Split with Croatian islands including Brač, Hvar and Vis.",

    coordinates:
    [43.5045,16.4400],

    FerryRoutes:[
        "Brač",
        "Hvar",
        "Vis",
        "Korčula"
    ],

    travelInfo:[
        "Brač: ~50 minutes",
        "Hvar: ~70 minutes",
        "Vis: ~2 hours 20 minutes",
        "Korčula: ~3 hours"
    ],

    carFerry:
    "Available for Brač and some island routes",

    recommendedFor:[
        "Island trips",
        "Day trips"
    ],

    tags:[
        "Ferry",
        "Transport"
    ]
},

{
    name:"Supetar Ferry Port",

    category:"Ferry",

    type:"Transport",

    region:"Brač",

    description:
    "Main car Ferry port on Brač island connecting to Split.",

    coordinates:
    [43.3840,16.5500],

    FerryRoutes:[
        "Split"
    ],

    travelInfo:[
        "Split: ~50 minutes"
    ],

    carFerry:
    "Yes",

    recommendedFor:[
        "Brač exploration"
    ],

    tags:[
        "Ferry",
        "Brač"
    ]
},
{
    name:"Stari Grad Ferry Port",

    category:"Ferry",

    type:"Transport",

    region:"Hvar",

    description:
    "Main car Ferry port on Hvar island.",

    coordinates:
    [43.1840,16.5940],

    FerryRoutes:[
        "Split"
    ],

    travelInfo:[
        "Split: ~70 minutes"
    ],

    carFerry:
    "Yes",

    recommendedFor:[
        "Hvar trips"
    ],

    tags:[
        "Ferry",
        "Hvar"
    ]
},
{
    name:"Vis Ferry Port",

    category:"Ferry",

    type:"Transport",

    region:"Vis",

    description:
    "Main Ferry port connecting Vis island with Split.",

    coordinates:
    [43.0600,16.1820],

    FerryRoutes:[
        "Split"
    ],

    travelInfo:[
        "Split: ~2 hours 20 minutes"
    ],

    carFerry:
    "Yes",

    recommendedFor:[
        "Island exploration"
    ],

    tags:[
        "Ferry",
        "Vis"
    ]
},
{
    name:"Korčula Ferry Port",

    category:"Ferry",

    type:"Transport",

    region:"Korčula",

    description:
    "Ferry connections to Korčula island.",

    coordinates:
    [42.9600,17.1360],

    FerryRoutes:[
        "Split",
        "Hvar"
    ],

    travelInfo:[
        "Split: several hours depending on route"
    ],

    carFerry:
    "Limited routes",

    recommendedFor:[
        "Island trips"
    ],

    tags:[
        "Ferry",
        "Korčula"
    ]
}
];