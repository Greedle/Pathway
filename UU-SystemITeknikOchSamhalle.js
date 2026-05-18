// UU - Civilingenjörsprogrammet i system i teknik och samhälle.js
// Studieplan giltig från och med höstterminen 2026
// Source: https://www.uu.se/utbildning/studieplan?query=10071

// ─── Termin 5, Period 1 — profileringskurser ─────────────────────────────────
const ALT_STS_P9 = [
    { kod: "1DL210", namn: "Algoritmer och datastrukturer I",           hp:  5, avancerad: false },
    { kod: "1FA401", namn: "Energisystemfysik (del 1)",                 hp:  5, avancerad: false, synkad_med: "1FA401B" },
];

// ─── Termin 5, Period 2 — profileringskurser ─────────────────────────────────
const ALT_STS_P10 = [
    { kod: "1MD031",  namn: "Gränssnittsprogrammering med ett användarperspektiv", hp: 5, avancerad: false },
    { kod: "1FA401B", namn: "Energisystemfysik (del 2)",                hp:  5, avancerad: false },
    { kod: "1DL301",  namn: "Databasteknik I",                          hp:  5, avancerad: false },
    { kod: "1EL015",  namn: "Elektromagnetism och kretsteori",          hp:  5, avancerad: false },
];

// ─── Termin 6, Period 3 — profileringskurser ─────────────────────────────────
const ALT_STS_P11 = [
    { kod: "1TE655", namn: "Elkraftteknik",                             hp:  5, avancerad: false },
    { kod: "1DT066", namn: "Distribuerade informationssystem",          hp:  5, avancerad: false },
];

// ─── Termin 6, Period 4 — obligatoriskt självständigt arbete (en av två) ──────
const ALT_STS_SJALV = [
    { kod: "1DL931", namn: "Självständigt arbete STS - IT-system",      hp: 15, avancerad: false },
    { kod: "1TE691", namn: "Självständigt arbete STS - energisystem",   hp: 15, avancerad: false },
];

// ─── Termin 7 — Uppsatsförberedande fördjupningskurs (en av fem, 10 hp) ───────
const ALT_STS_UPPSATS_FORB_P1 = [
    { kod: "2EH502",  namn: "Uppsatsförberedande - ekonomisk historia (del 1)", hp: 5, avancerad: true, synkad_med: "2EH502B" },
    { kod: "2FE028",  namn: "Uppsatsförberedande - företagsekonomi (del 1)",   hp: 5, avancerad: true, synkad_med: "2FE028B" },
    { kod: "5LH651",  namn: "Uppsatsförberedande - idéhistoria (del 1)",       hp: 5, avancerad: true, synkad_med: "5LH651B" },
    { kod: "2KU043",  namn: "Uppsatsförberedande - kulturgeografi (del 1)",    hp: 5, avancerad: true, synkad_med: "2KU043B" },
    { kod: "5FT059",  namn: "Uppsatsförberedande - filosofi (del 1)",          hp: 5, avancerad: true, synkad_med: "5FT059B" },
];

const ALT_STS_UPPSATS_FORB_P2 = [
    { kod: "2EH502B", namn: "Uppsatsförberedande - ekonomisk historia (del 2)", hp: 5, avancerad: true },
    { kod: "2FE028B", namn: "Uppsatsförberedande - företagsekonomi (del 2)",   hp: 5, avancerad: true },
    { kod: "5LH651B", namn: "Uppsatsförberedande - idéhistoria (del 2)",       hp: 5, avancerad: true },
    { kod: "2KU043B", namn: "Uppsatsförberedande - kulturgeografi (del 2)",    hp: 5, avancerad: true },
    { kod: "5FT059B", namn: "Uppsatsförberedande - filosofi (del 2)",          hp: 5, avancerad: true },
];

// ─── Termin 7, Period 1 — profileringskurser ─────────────────────────────────
const ALT_STS_P13 = [
    { kod: "1RT495", namn: "Reglerteknik II",                           hp:  5, avancerad: true  },
    { kod: "1TE754", namn: "Elektriska nätet som system (del 1)",       hp:  5, avancerad: true,  synkad_med: "1TE754B" },
    { kod: "1DL360", namn: "Informationsutvinning I",                   hp:  5, avancerad: true  },
];

// ─── Termin 7, Period 2 — profileringskurser ─────────────────────────────────
const ALT_STS_P14 = [
    { kod: "1TE754B", namn: "Elektriska nätet som system (del 2)",      hp:  5, avancerad: true  },
    { kod: "1TE726",  namn: "Analys av eldistributionsnät",             hp:  5, avancerad: true  },
    { kod: "1TD184",  namn: "Optimeringsmetoder",                       hp:  5, avancerad: true  },
    { kod: "1DL400",  namn: "Databasteknik II",                         hp:  5, avancerad: true  },
    { kod: "1DT072",  namn: "Säkra datorsystem I",                      hp:  5, avancerad: true  },
];

// ─── Termin 8 — Uppsats STS (en av fem, 15 hp) ───────────────────────────────
const ALT_STS_UPPSATS_P1 = [
    { kod: "2EH503",  namn: "Uppsats STS - ekonomisk historia (del 1)", hp:  5, avancerad: true, synkad_med: "2EH503B" },
    { kod: "2FE029",  namn: "Uppsats STS - företagsekonomi (del 1)",   hp:  5, avancerad: true, synkad_med: "2FE029B" },
    { kod: "5LH652",  namn: "Uppsats STS - idéhistoria (del 1)",       hp:  5, avancerad: true, synkad_med: "5LH652B" },
    { kod: "2KU039",  namn: "Uppsats STS - kulturgeografi (del 1)",    hp:  5, avancerad: true, synkad_med: "2KU039B" },
    { kod: "5FT058",  namn: "Uppsats STS - filosofi (del 1)",          hp:  5, avancerad: true, synkad_med: "5FT058B" },
];

const ALT_STS_UPPSATS_P2 = [
    { kod: "2EH503B", namn: "Uppsats STS - ekonomisk historia (del 2)", hp: 10, avancerad: true },
    { kod: "2FE029B", namn: "Uppsats STS - företagsekonomi (del 2)",   hp: 10, avancerad: true },
    { kod: "5LH652B", namn: "Uppsats STS - idéhistoria (del 2)",       hp: 10, avancerad: true },
    { kod: "2KU039B", namn: "Uppsats STS - kulturgeografi (del 2)",    hp: 10, avancerad: true },
    { kod: "5FT058B", namn: "Uppsats STS - filosofi (del 2)",          hp: 10, avancerad: true },
];

// ─── Termin 8, Period 3 — valbara ────────────────────────────────────────────
const ALT_STS_P15 = [
    { kod: "1RT700", namn: "Statistisk maskininlärning",                hp:  5, avancerad: true },
    { kod: "1TS350", namn: "Projekt i infrastruktursystem",             hp:  5, avancerad: true },
    { kod: "1GV334", namn: "Energisäkerhet i lokala och globala energisystem", hp: 5, avancerad: true },
];

// ─── Termin 8, Period 4 — valbara ────────────────────────────────────────────
const ALT_STS_P16 = [
    { kod: "1MS044", namn: "Statistisk riskanalys",                     hp:  5, avancerad: true },
    { kod: "1DT114", namn: "Datasäkerhet och integritet",               hp:  5, avancerad: true },
    { kod: "1EL009", namn: "Cybersäkerhet och styrning av elkraftsystem", hp: 5, avancerad: true },
];

// ─── Termin 9, Period 1 — valbara ────────────────────────────────────────────
const ALT_STS_P17 = [
    { kod: "1RT890", namn: "Empirisk modellering",                      hp: 10, avancerad: true },
    { kod: "1DL340", namn: "Artificiell intelligens",                   hp:  5, avancerad: true },
    { kod: "2FE033", namn: "Entreprenörskap",                           hp:  5, avancerad: true },
    { kod: "1TE037", namn: "Energieffektivisering",                     hp:  5, avancerad: true },
    { kod: "1DL251", namn: "Metoder och projektledning för mjukvaruutveckling", hp: 5, avancerad: true },
    { kod: "1EL014", namn: "Maskininlärning för sakernas internet",     hp:  5, avancerad: true },
];

// ─── Programpost ──────────────────────────────────────────────────────────────

const stsProgram = {
    id: "3100",
    namn: "Civilingenjörsprogrammet i system i teknik och samhälle",
    examenspoang: 300,
    studieplan_url: "https://www.uu.se/utbildning/studieplan?query=10071",
    utbildningsplan_url: "https://www.uu.se/utbildning/utbildningsplan?query=87aa007b-e58d-11f0-af1e-4773ce254d84",

    examenskrav: [
        { typ: "min-hp",             varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",             beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",   varde: 90,  beskrivning: "Avancerade kurser (A-nivå)" },
    ],

    kurser: [

        // ÅR 1 — Termin 1
        { kod: "1EL781", namn: "Introduktion till system i teknik och samhälle", hp_per_period: { 1: 10 },       obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA010", namn: "Baskurs i matematik",                            hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA013", namn: "Envariabelanalys",                               hp_per_period: { 2: 5, 3: 5 },  obligatorisk: true,  avancerad: false, perioder: [2, 3] },
        { kod: "1MA350", namn: "Linjär algebra I",                               hp_per_period: { 2: 5 },        obligatorisk: true,  avancerad: false, perioder: [2] },
        { kod: "2FE021", namn: "Företag, nätverk och teknikutveckling",          hp_per_period: { 2: 5, 3: 10 }, obligatorisk: true,  avancerad: false, perioder: [2, 3] },

        // ÅR 1 — Termin 2
        { kod: "1FA104", namn: "Mekanik",                                        hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },
        { kod: "1TE702", namn: "Miljöteknik",                                    hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },
        { kod: "1MA017", namn: "Flervariabelanalys, allmän kurs",                hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },

        // ÅR 2 — Termin 3
        { kod: "1TD342", namn: "Introduktion till beräkningsvetenskap",          hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1DL042", namn: "Programmering",                                  hp_per_period: { 5: 5, 6: 5 },  obligatorisk: true,  avancerad: false, perioder: [5, 6] },
        { kod: "1MS005", namn: "Sannolikhet och statistik",                      hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1MA034", namn: "Transformmetoder",                               hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "2EH501", namn: "Ekonomisk utveckling i tid och rum",             hp_per_period: { 6: 5, 7: 5, 8: 5 }, obligatorisk: true, avancerad: false, perioder: [6, 7, 8] },

        // ÅR 2 — Termin 4
        { kod: "1MS926", namn: "Tillämpad statistik",                            hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1MA024", namn: "Linjär algebra II",                              hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1RT155", namn: "Modellering av dynamiska system",                hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1TD352", namn: "Beräkningsvetenskap för dataanalys",             hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },

        // ÅR 3 — Termin 5
        { kod: "5FT056", namn: "Teknik- och vetenskapsstudier - filosofi",       hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1RT490", namn: "Reglerteknik I",                                 hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        valbar("VAL-STS-P9-1",  9,  5, ALT_STS_P9),
        { kod: "5LH650", namn: "Teknik- och vetenskapsstudier - historia",       hp_per_period: { 10: 5, 11: 5 }, obligatorisk: true, avancerad: false, perioder: [10, 11] },
        valbar("VAL-STS-P10-1", 10, 5, ALT_STS_P10),
        valbar("VAL-STS-P10-2", 10, 5, ALT_STS_P10),

        // ÅR 3 — Termin 6
        { kod: "1RT317", namn: "System- och operationsanalys",                   hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: false, perioder: [11] },
        valbar("VAL-STS-P11-1", 11, 5, ALT_STS_P11),
        valbar("VAL-STS-SJALV",  12, 15, ALT_STS_SJALV),

        // ÅR 4 — Termin 7
        valbar("VAL-STS-UPPSATS-FORB-P1", 13,  5, ALT_STS_UPPSATS_FORB_P1),
        valbar("VAL-STS-P13-1",           13,  5, ALT_STS_P13),
        valbar("VAL-STS-P13-2",           13,  5, ALT_STS_P13),
        valbar("VAL-STS-UPPSATS-FORB-P2", 14,  5, ALT_STS_UPPSATS_FORB_P2),
        valbar("VAL-STS-P14-1",           14,  5, ALT_STS_P14),
        valbar("VAL-STS-P14-2",           14,  5, ALT_STS_P14),

        // ÅR 4 — Termin 8
        valbar("VAL-STS-UPPSATS-P1", 15,  5, ALT_STS_UPPSATS_P1),
        valbar("VAL-STS-P15-1",      15,  5, ALT_STS_P15),
        valbar("VAL-STS-P15-2",      15,  5, ALT_STS_P15),
        valbar("VAL-STS-UPPSATS-P2", 16, 10, ALT_STS_UPPSATS_P2),
        valbar("VAL-STS-P16-1",      16,  5, ALT_STS_P16),

        // ÅR 5 — Termin 9
        { kod: "1FA455", namn: "Komplexa system i teknik och samhälle - teknik", hp_per_period: { 18: 10 },      obligatorisk: true,  avancerad: true,  perioder: [18] },
        { kod: "5LH653", namn: "Komplexa system i teknik och samhälle - humaniora", hp_per_period: { 18: 5 },   obligatorisk: true,  avancerad: true,  perioder: [18] },
        valbar("VAL-STS-P17-1", 17, 5, ALT_STS_P17),
        valbar("VAL-STS-P17-2", 17, 5, ALT_STS_P17),
        valbar("VAL-STS-P17-3", 17, 5, ALT_STS_P17),

        // ÅR 5 — Termin 10
        { kod: "1TE865", namn: "Examensarbete i system i teknik och samhälle",   hp_per_period: { 19: 30 },      obligatorisk: true,  avancerad: true,  perioder: [19] },
    ]
};