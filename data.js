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
        bestParking: "Poluotok Parking, City Galleria Garage, Ravnice Parking",

parkingPrice: "Paid",

walkTime: "5–10 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Poluotok+Parking+Zadar",
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
        bestParking: "Ilijina Glavica Garage, Dubrovnik Public Garage",

parkingPrice: "Paid",

walkTime: "10–15 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Ilijina+Glavica+Garage+Dubrovnik",
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
    bestParking: "Joker Shopping Centre Parking, Stari Plac Parking, Split City Parking",

parkingPrice: "€1-3 per hour",

walkTime: "8-12 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Joker+Shopping+Centre+Parking+Split",
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
    bestParking: "Zlatni Rat Beach Parking",

parkingPrice: "Paid (summer season)",

walkTime: "3–5 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Zlatni+Rat+Beach+Parking",
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
bestParking: "Vis Town Parking",

parkingPrice: "Paid",

walkTime: "20–30 minute hike from trailhead or boat access from Vis",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Vis+Town+Parking",
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
    bestParking: "Punta Rata Beach Parking",

parkingPrice: "Paid (summer season)",

walkTime: "2–5 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Punta+Rata+Beach+Parking",
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
    bestParking: "Sakarun Beach Visitor Parking",

parkingPrice: "Paid in summer season",

walkTime: "2–3 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Sakarun+Beach+Parking",
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
 bestParking: "Hvar Town Parking Lot, Vrisna Ferry Port Parking",

parkingPrice: "Paid (seasonal pricing)",

walkTime: "5–10 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Hvar+Town+Parking",
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
    bestParking: "Pomena Parking, Polače Parking",

parkingPrice: "Paid",

walkTime: "2–5 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Pomena+Parking+Mljet",
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
    bestParking: "Supetar Ferry Port Parking, Supetar Town Parking",

parkingPrice: "Paid",

walkTime: "2–5 minutes to ferry terminal",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Supetar+Ferry+Port+Parking",
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
    bestParking: "Skradin Official Parking, Lozovac Entrance Parking",

parkingPrice: "€1–2 per hour",

walkTime: "5–10 minutes (Skradin) / 2 minutes (Lozovac)",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Skradin+Parking+Krka+National+Park",
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
    bestParking: "Biokovo Skywalk Visitor Parking Area",

parkingPrice: "Included with park entry ticket",

walkTime: "2–5 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Biokovo+Skywalk+Parking",
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
    bestParking: "Paklenica National Park Entrance Parking",

parkingPrice: "Paid",

walkTime: "1–5 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Paklenica+National+Park+Parking",
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
    bestParking: "Omiš Public Parking, Priko Parking",

parkingPrice: "€1–2 per hour",

walkTime: "5–10 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Priko+Parking+Omis",
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
    travelTime:"2 hour 30 minutes",
    bestParking: "Velebit House Visitor Centre Parking, Zavižan Parking Area",

parkingPrice: "Free",

walkTime: "2–5 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Northern+Velebit+National+Park+Visitor+Centre",
transport:"🚗 Car",    
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
    bestParking: "T1 Parking Trogir, Fortin Parking, Trogir Waterfront Parking",

parkingPrice: "€1–2 per hour",

walkTime: "2–8 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=T1+Parking+Trogir",
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
    bestParking: "Okrug Beach Parking",

parkingPrice: "€1–2 per hour",

walkTime: "1–3 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Okrug+Beach+Parking",
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
    bestParking: "Bene Beach Parking, Marjan Forest Parking",

parkingPrice: "Free–€2 per hour",

walkTime: "2–10 minutes",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Bene+Beach+Parking+Split",
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
    bestParking: "Official Klis Fortress Car Park",

parkingPrice: "Free",

walkTime: "1 minute",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Klis+Fortress+Parking",
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
    bestParking: "Trogir Waterfront Parking, Marina Okrug Gornji Parking",

parkingPrice: "€1–2 per hour",

walkTime: "2–5 minutes to boat departure",

parkingMaps: "https://www.google.com/maps/search/?api=1&query=Trogir+Waterfront+Parking",
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
},
{
    name: "Plitvice Lakes National Park",

    category: "Nature",

    region: "Lika-Senj County",

    description:
    "Croatia's most famous national park, known for its chain of turquoise lakes, waterfalls, wooden walkways and forest landscapes.",

    coordinates:
    [44.8654, 15.5820],

    rating: 4.8,

    distanceFromBase: 230,

    travelTime: "3 hours",

    transport: "Car",

    tags:
    [
        "National Park",
        "Waterfalls",
        "Nature",
        "UNESCO"
    ],

    activities:
    "Walk the wooden trails, explore the Upper and Lower Lakes, see Veliki Slap waterfall, and take the boat across Kozjak Lake.",


    bestParking:
    "Entrance 1 Parking, Entrance 2 Parking",

    parkingPrice:
    "Paid",

    walkTime:
    "5–10 minutes to entrance",

    parkingMaps:
    "https://www.google.com/maps/search/?api=1&query=Plitvice+Lakes+Entrance+1+Parking"
},
{
    name: "Primošten",

    category: "Coastal Town",

    region: "Šibenik-Knin County",

    description:
    "A beautiful historic coastal town famous for its stone peninsula, traditional Dalmatian streets, beaches and stunning sea views.",

    coordinates:
    [43.5858, 15.9237],

    rating: 4.7,

    distanceFromBase: 65,

    travelTime: "1 hour 15 minutes",

    transport: "Car",

    tags:
    [
        "Old Town",
        "Beach",
        "Views",
        "Coast"
    ],

    activities:
    "Walk through the old stone streets, visit St. George Church viewpoint, relax at Mala Raduča Beach, and explore the waterfront.",


    bestParking:
    "Primošten Main Parking, Mala Raduča Parking",

    parkingPrice:
    "Paid",

    walkTime:
    "5–10 minutes to Old Town",

    parkingMaps:
    "https://www.google.com/maps/search/?api=1&query=Primošten+Main+Parking"
},
{
    name: "Blue Cave (Biševo)",

    category: "Island Attraction",

    region: "Vis Island, Split-Dalmatia County",

    description:
    "A famous sea cave on Biševo Island where sunlight creates a glowing blue effect inside the cave. One of Croatia's most unique natural attractions.",

    coordinates:
    [42.9625, 16.0167],

    rating: 4.7,

    distanceFromBase: 110,

    travelTime: "2–3 hours (car + ferry + boat)",

    transport: "Car + Ferry + Boat",

    tags:
    [
        "Island",
        "Boat Trip",
        "Nature",
        "Sea Cave"
    ],

    activities:
    "Take a boat tour from Komiža, enter the Blue Cave, explore Biševo Island, swim nearby and visit other Vis Island viewpoints.",


    bestParking:
    "Komiža Harbour Parking, Vis Ferry Port Parking",

    parkingPrice:
    "Paid",

    walkTime:
    "5–10 minutes to boat departure",

    parkingMaps:
    "https://www.google.com/maps/search/?api=1&query=Komiža+Harbour+Parking"
},
{
    name: "Mostar Old Bridge",

    category: "Historic City",

    region: "Herzegovina, Bosnia and Herzegovina",

    description:
    "A UNESCO World Heritage city famous for the iconic Ottoman-era Old Bridge, historic streets, markets and views over the Neretva River.",

    coordinates:
    [43.3370, 17.8150],

    rating: 4.8,

    distanceFromBase: 170,

    travelTime: "2 hours 30 minutes",

    transport: "Car",

    tags:
    [
        "UNESCO",
        "Old Town",
        "History",
        "Culture"
    ],

    activities:
    "Walk across the Old Bridge, explore the Ottoman bazaar, visit the bridge viewpoint, see the Neretva River and explore the old town.",


    bestParking:
    "Parking Mostar, Old Bridge Parking Area",

    parkingPrice:
    "Paid",

    walkTime:
    "5–10 minutes to Old Bridge",

    parkingMaps:
    "https://www.google.com/maps/search/?api=1&query=Parking+Mostar+Old+Bridge"
},
{
    name: "Kravica Waterfalls",

    category: "Nature",

    region: "Herzegovina, Bosnia and Herzegovina",

    description:
    "A spectacular series of waterfalls surrounded by green forests and clear pools. A popular swimming and nature destination near the Croatian border.",

    coordinates:
    [43.1567, 17.6083],

    rating: 4.7,

    distanceFromBase: 180,

    travelTime: "2 hours 45 minutes",

    transport: "Car",

    tags:
    [
        "Waterfalls",
        "Nature",
        "Swimming",
        "Day Trip"
    ],

    activities:
    "Walk around the waterfalls, swim in the natural pools, take photos, relax by the river and explore the surrounding area.",


    bestParking:
    "Kravica Waterfalls Official Parking Area",

    parkingPrice:
    "Paid",

    walkTime:
    "5–10 minutes to waterfalls",

    parkingMaps:
    "https://www.google.com/maps/search/?api=1&query=Kravica+Waterfalls+Parking"
},
{
    name: "Počitelj",

    category: "Historic Town",

    region: "Herzegovina, Bosnia and Herzegovina",

    description:
    "A beautifully preserved Ottoman-era stone village built into a hillside beside the Neretva River, known for its historic architecture and panoramic views.",

    coordinates:
    [43.1355, 17.7318],

    rating: 4.6,

    distanceFromBase: 175,

    travelTime: "2 hours 40 minutes",

    transport: "Car",

    tags:
    [
        "History",
        "Ottoman Architecture",
        "Views",
        "Culture"
    ],

    activities:
    "Walk through the old stone streets, climb to the fortress viewpoint, visit the mosque, explore the historic buildings and enjoy views over the Neretva River.",


    bestParking:
    "Počitelj Roadside Parking Area, Počitelj Visitor Parking",

    parkingPrice:
    "Free",

    walkTime:
    "5 minutes to village entrance",

    parkingMaps:
    "https://www.google.com/maps/search/?api=1&query=Počitelj+Parking"
},
{
    name: "Kotor Old Town",

    category: "Historic City",

    region: "Bay of Kotor, Montenegro",

    description:
    "A UNESCO World Heritage medieval town surrounded by dramatic mountains and the Bay of Kotor. Famous for its stone streets, fortifications and Venetian architecture.",

    coordinates:
    [42.4247, 18.7712],

    rating: 4.8,

    distanceFromBase: 280,

    travelTime: "5 hours",

    transport: "Car",

    tags:
    [
        "UNESCO",
        "Old Town",
        "History",
        "Views"
    ],

    activities:
    "Explore the medieval streets, visit St. Tryphon Cathedral, walk the city walls, climb towards San Giovanni Fortress and enjoy views of the bay.",


    bestParking:
    "Kotor Parking Lot, Kamelija Shopping Centre Parking",

    parkingPrice:
    "Paid",

    walkTime:
    "5–10 minutes to Old Town gates",

    parkingMaps:
    "https://www.google.com/maps/search/?api=1&query=Kotor+Old+Town+Parking"
},
{
    name: "Perast",

    category: "Coastal Town",

    region: "Bay of Kotor, Montenegro",

    description:
    "A picturesque historic waterfront village on the Bay of Kotor, famous for its Venetian architecture, stone buildings and views of the surrounding mountains.",

    coordinates:
    [42.4868, 18.6958],

    rating: 4.7,

    distanceFromBase: 270,

    travelTime: "5 hours",

    transport: "Car",

    tags:
    [
        "Coast",
        "History",
        "Views",
        "Architecture"
    ],

    activities:
    "Walk along the waterfront, explore the old stone streets, take boat trips to nearby islands and enjoy views across the Bay of Kotor.",


    bestParking:
    "Perast Main Parking Area (Entrance of Town)",

    parkingPrice:
    "Paid",

    walkTime:
    "5–10 minutes to waterfront",

    parkingMaps:
    "https://www.google.com/maps/search/?api=1&query=Perast+Parking+Montenegro"
},
{
    name: "Our Lady of the Rocks",

    category: "Island Attraction",

    region: "Bay of Kotor, Montenegro",

    description:
    "A small artificial island in the Bay of Kotor featuring a historic church and museum. One of Montenegro's most iconic sights, reached by a short boat trip from Perast.",

    coordinates:
    [42.4861, 18.6961],

    rating: 4.7,

    distanceFromBase: 275,

    travelTime: "5 hours (car + border crossing + boat)",

    transport: "Car + Boat",

    tags:
    [
        "Island",
        "History",
        "Culture",
        "Views"
    ],

    activities:
    "Take a boat from Perast, visit the church and museum, enjoy views across the Bay of Kotor and explore nearby Perast.",


    bestParking:
    "Perast Main Parking Area",

    parkingPrice:
    "Paid",

    walkTime:
    "5–10 minutes to boat departure",

    parkingMaps:
    "https://www.google.com/maps/search/?api=1&query=Perast+Parking+Montenegro"
},
{
    name: "Lička Kuća",

    type: "Restaurant",

    category: "Food",

    region: "Plitvice Lakes, Croatia",

    nearbySightseeing:
    "Plitvice Lakes National Park",

    restaurantTravelTime:
    "5 minutes by car",

    description:
    "Traditional Croatian restaurant specialising in Lika regional cuisine, including grilled meats, local dishes and traditional recipes.",

    coordinates:
    [44.90583, 15.61365],

    rating: 4.2,

    tags:
    [
        "Croatian",
        "Traditional Food",
        "Lika Cuisine",
        "Dinner"
    ],

    restaurantMaps:
    "https://www.google.com/maps/search/?api=1&query=Lička+Kuća+Plitvice+Lakes"
},
{
    name: "Konoba Toni",

    type: "Restaurant",

    category: "Food",

    region: "Primošten, Croatia",

    nearbySightseeing:
    "Primošten",

    restaurantTravelTime:
    "2 minutes walk",

    description:
    "Dalmatian seafood restaurant serving fresh fish, grilled meats and Mediterranean cuisine with beautiful sea views.",

    coordinates:
    [43.5864, 15.9248],

    rating: 4.7,

    tags:
    [
        "Seafood",
        "Dalmatian",
        "Mediterranean",
        "Dinner"
    ],

    restaurantMaps:
    "https://www.google.com/maps/search/?api=1&query=Konoba+Toni+Primošten"
},
{
    name: "Konoba Bako",

    type: "Restaurant",

    category: "Food",

    region: "Komiža, Vis Island, Croatia",

    nearbySightseeing:
    "Blue Cave (Biševo)",

    restaurantTravelTime:
    "5 minutes walk from Komiža Harbour",

    description:
    "Traditional island restaurant specialising in fresh seafood, local fish and authentic Dalmatian cuisine after visiting the Blue Cave.",

    coordinates:
    [43.0443, 16.0914],

    rating: 4.2,

    tags:
    [
        "Seafood",
        "Island",
        "Dalmatian",
        "Dinner"
    ],

    restaurantMaps:
    "https://www.google.com/maps/search/?api=1&query=Konoba+Bako+Komiža"
},
{
    name: "Hindin Han",

    type: "Restaurant",

    category: "Food",

    region: "Mostar, Bosnia and Herzegovina",

    nearbySightseeing:
    "Mostar Old Bridge",

    restaurantTravelTime:
    "3 minutes walk",

    description:
    "Traditional Bosnian riverside restaurant serving Balkan specialities, grilled meats and local cuisine.",

    coordinates:
    [43.3374, 17.8148],

    rating: 4.5,

    tags:
    [
        "Bosnian",
        "Traditional",
        "River Views",
        "Dinner"
    ],

    restaurantMaps:
    "https://www.google.com/maps/search/?api=1&query=Hindin+Han+Mostar"
},
{
    name: "Konoba Taurus",

    type: "Restaurant",

    category: "Food",

    region: "Mostar, Bosnia and Herzegovina",

    nearbySightseeing:
    "Počitelj",

    restaurantTravelTime:
    "35–40 minutes by car",

    description:
    "Traditional Bosnian restaurant serving local dishes, grilled meats, Mediterranean cuisine and seafood in a historic riverside setting near Mostar's Old Town.",

    coordinates:
    [43.3374, 17.8148],

    rating:
    4.6,

    tags:
    [
        "Bosnian",
        "Traditional",
        "Grill",
        "Mediterranean",
        "Dinner"
    ],

    restaurantMaps:
    "https://www.google.com/maps/search/?api=1&query=Konoba+Taurus+Mostar"
},
{
    name: "Conte Restaurant",

    type: "Restaurant",

    category: "Food",

    region: "Perast, Montenegro",

    nearbySightseeing:
    "Perast",

    restaurantTravelTime:
    "2 minutes walk",

    description:
    "Elegant waterfront restaurant serving Montenegrin seafood and Mediterranean cuisine overlooking the Bay of Kotor.",

    coordinates:
    [42.4869, 18.6962],

    rating: 4.6,

    tags:
    [
        "Seafood",
        "Waterfront",
        "Mediterranean",
        "Dinner"
    ],

    restaurantMaps:
    "https://www.google.com/maps/search/?api=1&query=Conte+Restaurant+Perast"
},
{
    name: "Restaurant Armonia",

    type: "Restaurant",

    category: "Food",

    region: "Perast, Montenegro",

    nearbySightseeing:
    "Our Lady of the Rocks",

    restaurantTravelTime:
    "5 minutes walk from boat dock",

    description:
    "Mediterranean restaurant with seafood, local Montenegrin dishes and beautiful waterfront views after visiting Our Lady of the Rocks.",

    coordinates:
    [42.4867, 18.6954],

    rating: 4.5,

    tags:
    [
        "Seafood",
        "Mediterranean",
        "Waterfront",
        "Dinner"
    ],

    restaurantMaps:
    "https://www.google.com/maps/search/?api=1&query=Restaurant+Armonia+Perast"
},
{
    name: "Konoba Scala Santa",

    type: "Restaurant",

    category: "Food",

    region: "Kotor, Montenegro",

    nearbySightseeing:
    "Kotor Old Town",

    restaurantTravelTime:
    "2 minutes walk",

    description:
    "Historic restaurant inside Kotor Old Town serving traditional Montenegrin and Mediterranean cuisine in a charming stone courtyard.",

    coordinates:
    [42.4249, 18.7718],

    rating: 4.7,

    tags:
    [
        "Montenegrin",
        "Historic",
        "Mediterranean",
        "Dinner"
    ],

    restaurantMaps:
    "https://www.google.com/maps/search/?api=1&query=Konoba+Scala+Santa+Kotor"
},
];