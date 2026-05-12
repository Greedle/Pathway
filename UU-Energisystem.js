// UU - Civilingenjörsprogrammet i energisystem.js
// Studieplan: https://www.uu.se/utbildning/studieplan?query=3605

const ALT_AR4_P13 = [
    { kod: "1FA410",     namn: "Kärnkraft - Teknik Och System",                         hp: 10, avancerad: true  },
    { kod: "1TE029",     namn: "Vattenkraft - Teknik Och System",                       hp: 10, avancerad: true  },
    { kod: "1TE035",     namn: "Energieffektivisering I Byggnader - Teknik Och System",  hp: 10, avancerad: true  },
    { kod: "1TE028",     namn: "Solenergi - Teknik Och System",                         hp: 10, avancerad: true  },
    { kod: "1TE700",     namn: "Elkraftsystemanalys",                                   hp: 10, avancerad: true  },
    { kod: "1TE654",     namn: "Hållfasthetslära",                                      hp:  5, avancerad: false },
    { kod: "1TE765",     namn: "Kraftelektronik I",                                     hp:  5, avancerad: false },
    { kod: "MX0162",     namn: "Miljökonsekvensbeskrivning",                            hp:  5, avancerad: false },
    { kod: "1KB274",     namn: "Batterier Och Lagring",                                 hp:  5, avancerad: false },
    { kod: "TN0350 SLU", namn: "Hållbar Utveckling I Energibranschen",                  hp:  5, avancerad: false },
    { kod: "1RT890",     namn: "Empirisk Modellering",                                  hp: 10, avancerad: true  },
    { kod: "TN0347 SLU", namn: "Energisystemsplanering",                                hp: 10, avancerad: true  },
];

const ALT_AR4_P14 = [
    { kod: "1FA410",     namn: "Kärnkraft - Teknik Och System",                         hp: 10, avancerad: true  },
    { kod: "1TE029",     namn: "Vattenkraft - Teknik Och System",                       hp: 10, avancerad: true  },
    { kod: "1TE035",     namn: "Energieffektivisering I Byggnader - Teknik Och System",  hp: 10, avancerad: true  },
    { kod: "1TE028",     namn: "Solenergi - Teknik Och System",                         hp: 10, avancerad: true  },
    { kod: "1TE700",     namn: "Elkraftsystemanalys",                                   hp: 10, avancerad: true  },
    { kod: "TN0351",     namn: "Energimarknadsanalys",                                  hp:  5, avancerad: false },
    { kod: "TE0018 SLU", namn: "Geografiska Informationssystem För Ingenjörer",         hp:  5, avancerad: false },
    { kod: "TN0347 SLU", namn: "Energisystemsplanering",                                hp: 10, avancerad: true  },
    { kod: "1FA594",     namn: "Säkerhetsanalyser Inom Energisektorn",                  hp:  5, avancerad: true  },
    { kod: "1TE724",     namn: "Avancerad Solcellsdesign",                              hp:  5, avancerad: true  },
];

const ALT_AR4_P15 = [
    { kod: "1TS309", namn: "Fjärrvärme - Teknik Och System",                            hp: 10, avancerad: true  },
    { kod: "TN0352", namn: "Bioenergi - Teknik Och System",                             hp: 10, avancerad: true  },
    { kod: "1TE038", namn: "Vindkraft - Teknik Och System",                             hp: 10, avancerad: true  },
    { kod: "1TE043", namn: "Vågkraft - Teknik Och System",                              hp: 10, avancerad: true  },
    { kod: "1GV334", namn: "Energisäkerhet I Lokala Och Globala Energisystem",          hp:  5, avancerad: true  },
    { kod: "1FA412", namn: "Framtida Nukleära Energisystem - Analyser Och Simuleringar", hp: 5, avancerad: true  },
    { kod: "1TS356", namn: "Urbana Och Decentraliserade Energisystem",                  hp:  5, avancerad: true  },
];

const ALT_AR4_P16 = [
    { kod: "1TS309", namn: "Fjärrvärme - Teknik Och System",                            hp: 10, avancerad: true  },
    { kod: "TN0352", namn: "Bioenergi - Teknik Och System",                             hp: 10, avancerad: true  },
    { kod: "1TE038", namn: "Vindkraft - Teknik Och System",                             hp: 10, avancerad: true  },
    { kod: "1TE043", namn: "Vågkraft - Teknik Och System",                              hp: 10, avancerad: true  },
    { kod: "TN0365", namn: "Logistik",                                                  hp:  5, avancerad: false },
    { kod: "1RT495", namn: "Reglerteknik II",                                           hp:  5, avancerad: false },
    { kod: "1FA591", namn: "Mätteknik För Energisystem",                                hp:  5, avancerad: false },
];

const ALT_AR5_P17 = [
    { kod: "1FA410",     namn: "Kärnkraft - Teknik Och System",                         hp: 10, avancerad: true  },
    { kod: "1TE029",     namn: "Vattenkraft - Teknik Och System",                       hp: 10, avancerad: true  },
    { kod: "1TE035",     namn: "Energieffektivisering I Byggnader - Teknik Och System",  hp: 10, avancerad: true  },
    { kod: "1TE028",     namn: "Solenergi - Teknik Och System",                         hp: 10, avancerad: true  },
    { kod: "1TE700",     namn: "Elkraftsystemanalys",                                   hp: 10, avancerad: true  },
    { kod: "1TE654",     namn: "Hållfasthetslära",                                      hp:  5, avancerad: false },
    { kod: "1TE765",     namn: "Kraftelektronik I",                                     hp:  5, avancerad: false },
    { kod: "MX0162",     namn: "Miljökonsekvensbeskrivning",                            hp:  5, avancerad: false },
    { kod: "1KB274",     namn: "Batterier Och Lagring",                                 hp:  5, avancerad: false },
    { kod: "TN0350 SLU", namn: "Hållbar Utveckling I Energibranschen",                  hp:  5, avancerad: false },
    { kod: "1RT890",     namn: "Empirisk Modellering",                                  hp: 10, avancerad: true  },
    { kod: "TN0347 SLU", namn: "Energisystemsplanering",                                hp: 10, avancerad: true  },
];

const ALT_AR5_P18 = [
    { kod: "1FA410",     namn: "Kärnkraft - Teknik Och System",                         hp: 10, avancerad: true  },
    { kod: "1TE029",     namn: "Vattenkraft - Teknik Och System",                       hp: 10, avancerad: true  },
    { kod: "1TE035",     namn: "Energieffektivisering I Byggnader - Teknik Och System",  hp: 10, avancerad: true  },
    { kod: "1TE028",     namn: "Solenergi - Teknik Och System",                         hp: 10, avancerad: true  },
    { kod: "1TE700",     namn: "Elkraftsystemanalys",                                   hp: 10, avancerad: true  },
    { kod: "TN0351",     namn: "Energimarknadsanalys",                                  hp:  5, avancerad: false },
    { kod: "TE0018 SLU", namn: "Geografiska Informationssystem För Ingenjörer",         hp:  5, avancerad: false },
    { kod: "TN0347 SLU", namn: "Energisystemsplanering",                                hp: 10, avancerad: true  },
    { kod: "1FA594",     namn: "Säkerhetsanalyser Inom Energisektorn",                  hp:  5, avancerad: true  },
    { kod: "1TE724",     namn: "Avancerad Solcellsdesign",                              hp:  5, avancerad: true  },
];

const energisystemProgram = {
    id: "2600",
    namn: "Civilingenjörsprogrammet i energisystem",
    examenspoang: 300,
    studieplan_url: "https://www.uu.se/utbildning/studieplan?query=10067",
    utbildningsplan_url: "https://www.uu.se/utbildning/utbildningsplan?query=8e0ca779-e57a-11f0-af1e-4773ce254d84",

    examenskrav: [
        { typ: "min-hp",            varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",            beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",  varde: 90,  beskrivning: "Avancerade Kurser (A-Nivå)" },
    ],

    kurser: [

        // ÅR 1
        { kod: "TN0367 SLU", namn: "Introduktion Till Energisystem",                        hp_per_period: { 1: 5, 2: 5 }, obligatorisk: true,  avancerad: false, perioder: [1, 2] },
        { kod: "1MA013",     namn: "Envariabelanalys",                                      hp_per_period: { 1: 5, 2: 5 }, obligatorisk: true,  avancerad: false, perioder: [1, 2] },
        { kod: "1MA090",     namn: "Algebra Och Geometri",                                  hp_per_period: { 1: 5 },       obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1FA105",     namn: "Mekanisk Baskurs",                                      hp_per_period: { 2: 5, 3: 5 }, obligatorisk: true,  avancerad: false, perioder: [2, 3], krav: [{ kod: "1MA090", typ: "genomgangen" }] },
        { kod: "1MA016",     namn: "Flervariabelanalys",                                    hp_per_period: { 3: 5, 4: 5 }, obligatorisk: true,  avancerad: false, perioder: [3, 4], krav: [{ kod: "1MA090", typ: "genomgangen" }, { kod: "1MA013", typ: "genomgangen" }] },
        { kod: "KE0049 SLU", namn: "Allmän Kemi Och Kemiska Energikällor",                  hp_per_period: { 3: 5, 4: 5 }, obligatorisk: true,  avancerad: false, perioder: [3, 4] },
        { kod: "1TD433",     namn: "Programmeringsteknik I",                                hp_per_period: { 4: 5 },       obligatorisk: true,  avancerad: false, perioder: [4] },

        // ÅR 2
        { kod: "BI1360 SLU", namn: "Energisystemens Biogeokemiska Förutsättningar",         hp_per_period: { 5: 5, 6: 5 }, obligatorisk: true,  avancerad: false, perioder: [5, 6] },
        { kod: "1FA102",     namn: "Mekanik II",                                            hp_per_period: { 5: 5 },       obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "MS0073 SLU", namn: "Grundläggande Matematisk Statistik",                    hp_per_period: { 5: 5 },       obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1FA514",     namn: "Elektromagnetism I",                                    hp_per_period: { 6: 5 },       obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1FA527",     namn: "Teknisk Termodynamik",                                  hp_per_period: { 6: 5 },       obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "KE0079 SLU", namn: "Organisk Kemi Med Energitillämpningar",                 hp_per_period: { 7: 5 },       obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1TD342",     namn: "Introduktion Till Beräkningsvetenskap",                 hp_per_period: { 7: 5 },       obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1FA529",     namn: "Strömningsmekanik För Energirelaterade Tillämpningar",  hp_per_period: { 7: 5, 8: 5 }, obligatorisk: true,  avancerad: false, perioder: [7, 8] },
        { kod: "1EL004",     namn: "Elkretsanalys",                                         hp_per_period: { 8: 5 },       obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "TN0362 SLU", namn: "Systemanalys Med Energitillämpningar",                  hp_per_period: { 8: 5 },       obligatorisk: true,  avancerad: false, perioder: [8] },

        // ÅR 3
        { kod: "1MA024",     namn: "Linjär Algebra II",                                     hp_per_period: { 9: 5 },       obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "KE0069 SLU", namn: "Energisystemens Miljöpåverkan",                         hp_per_period: { 9: 5 },       obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "TN0285 SLU", namn: "Energi- Och Livscykelanalys",                           hp_per_period: { 9: 5 },       obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1MA034",     namn: "Transformmetoder",                                      hp_per_period: { 10: 5 },      obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "TN0319 SLU", namn: "Termokemisk Omvandling",                                hp_per_period: { 10: 5 },      obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1TD352",     namn: "Beräkningsvetenskap För Dataanalys",                    hp_per_period: { 10: 5 },      obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1TE655",     namn: "Elkraftteknik",                                         hp_per_period: { 11: 5 },      obligatorisk: true,  avancerad: true,  perioder: [11] },
        { kod: "1RT490",     namn: "Reglerteknik I",                                        hp_per_period: { 11: 5 },      obligatorisk: true,  avancerad: true,  perioder: [11] },

        valbar("VAL-ENERGI-1", 11, 5, [
            { kod: "1TE792", namn: "Urbana Och Decentraliserade Energisystem", hp: 5, avancerad: true  },
            { kod: "1TE078", namn: "Modern Fysik",                             hp: 5, avancerad: false },
        ]),

        { kod: "1FA311", namn: "Självständigt Arbete I Energisystem", hp_per_period: { 12: 15 }, obligatorisk: true, avancerad: true, perioder: [12] },

        // ÅR 4 — Termin 7
        { kod: "FÖ0477 SLU", namn: "Industriell Ekonomi Och Hållbar Innovation", hp_per_period: { 13: 5 }, obligatorisk: true, avancerad: true, perioder: [13] },

        valbar("VAL-ENERGI-2",  13, 5, ALT_AR4_P13),
        valbar("VAL-ENERGI-3",  13, 5, ALT_AR4_P13),
        valbar("VAL-ENERGI-4",  14, 5, ALT_AR4_P14),
        valbar("VAL-ENERGI-5",  14, 5, ALT_AR4_P14),
        valbar("VAL-ENERGI-6",  14, 5, ALT_AR4_P14),

        // ÅR 4 — Termin 8
        valbar("VAL-ENERGI-7",  15, 5, ALT_AR4_P15),
        valbar("VAL-ENERGI-8",  15, 5, ALT_AR4_P15),
        valbar("VAL-ENERGI-9",  15, 5, ALT_AR4_P15),
        valbar("VAL-ENERGI-10", 16, 5, ALT_AR4_P16),
        valbar("VAL-ENERGI-11", 16, 5, ALT_AR4_P16),
        valbar("VAL-ENERGI-12", 16, 5, ALT_AR4_P16),

        // ÅR 5 — Termin 9
        valbar("VAL-ENERGI-13", 17, 5, ALT_AR5_P17),
        valbar("VAL-ENERGI-14", 17, 5, ALT_AR5_P17),
        valbar("VAL-ENERGI-15", 17, 5, ALT_AR5_P17),
        valbar("VAL-ENERGI-16", 18, 5, ALT_AR5_P18),
        valbar("VAL-ENERGI-17", 18, 5, ALT_AR5_P18),
        valbar("VAL-ENERGI-18", 18, 5, ALT_AR5_P18),

        // ÅR 5 — Termin 10
        { kod: "1FA392", namn: "Examensarbete I Energisystem", hp_per_period: { 19: 15, 20: 15 }, obligatorisk: true, avancerad: true, perioder: [19, 20] },
    ]
};