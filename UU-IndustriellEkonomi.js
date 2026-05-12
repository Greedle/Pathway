// UU - IndustriellEkonomi.js
// Studieplan giltig från och med höstterminen 2026
// Source: https://www.uu.se/utbildning/studieplan?query=aec2f35d-04f4-4a33-9a54-44d67d940e26

// ─── Termin 7, Period 1 ───────────────────────────────────────────────────────
const ALT_IE_P13 = [
    // Affärsutveckling och innovation
    { kod: "1TE763",  namn: "Innovation - traditioner, teorier, trender (del 1)", hp: 5, avancerad: true,  synkad_med: "1TE763B" },
    { kod: "1TS363",  namn: "Organisering av teknikintensivt arbete",             hp: 5, avancerad: true  },
    // Industriell analys och digitalisering
    { kod: "1DL360",  namn: "Informationsutvinning I",                            hp: 5, avancerad: true  },
];

// ─── Termin 7, Period 2 ───────────────────────────────────────────────────────
const ALT_IE_P14 = [
    // Affärsutveckling och innovation
    { kod: "1TE763B", namn: "Innovation - traditioner, teorier, trender (del 2)", hp: 5, avancerad: true  },
    { kod: "1TS328",  namn: "Industriell projektledning II",                      hp: 5, avancerad: true  },
    // Industriell analys och digitalisering
    { kod: "1DL400",  namn: "Databasteknik II",                                   hp: 5, avancerad: true  },
    { kod: "1TS321",  namn: "Artificiell intelligens för industriell analys",     hp: 5, avancerad: true  },
    { kod: "1DT118",  namn: "Cybersäkerhetsanalys",                               hp: 5, avancerad: true  },
];

// ─── Termin 8, Period 3 ───────────────────────────────────────────────────────
const ALT_IE_P15 = [
    // Affärsutveckling och innovation
    { kod: "1TS311",  namn: "Design av hälsoinnovationer",                        hp: 5, avancerad: true  },
    // Industriell analys och digitalisering
    { kod: "1RT700",  namn: "Statistisk maskininlärning",                         hp: 5, avancerad: true  },
    { kod: "1TD169",  namn: "Data engineering I",                                 hp: 5, avancerad: true  },
];

// ─── Termin 8, Period 4 ───────────────────────────────────────────────────────
const ALT_IE_P16 = [
    // Affärsutveckling och innovation
    { kod: "1TE742",  namn: "Ledning för hållbarhet i globala industriföretag",   hp: 5, avancerad: true  },
    { kod: "1TE735",  namn: "Industrialisering",                                  hp: 5, avancerad: true  },
    { kod: "1TE051",  namn: "Projekt - fördjupning i produktutveckling/marknadsanalys", hp: 5, avancerad: true },
    // Industriell analys och digitalisering
    { kod: "1TS360",  namn: "Modellering och optimering av produktionssystem",    hp: 5, avancerad: true  },
];

// ─── Termin 9, Period 1 ───────────────────────────────────────────────────────
const ALT_IE_P17 = [
    // Valbar (båda profiler)
    { kod: "1TS353",  namn: "Etik i teknik och organisering",                     hp: 5, avancerad: true  },
    // Affärsutveckling och innovation
    { kod: "1TS344",  namn: "Kreativitet och hållbar design i teknikbaserat entreprenörskap", hp: 5, avancerad: true },
    // Industriell analys och digitalisering
    { kod: "1RT705",  namn: "Avancerad probabilistisk maskininlärning",           hp: 5, avancerad: true  },
];

// ─── Termin 9, Period 2 ───────────────────────────────────────────────────────
const ALT_IE_P18 = [
    // Affärsutveckling och innovation
    { kod: "2JS560",  namn: "Immaterialrätt och affärsjuridik",                   hp: 5, avancerad: true  },
    // Industriell analys och digitalisering
    { kod: "1TS316",  namn: "Avancerad simulering och preskriptiv analys",        hp: 5, avancerad: true  },
];

// ─── Programpost ──────────────────────────────────────────────────────────────

const industriellEkonomiProgram = {
    id: "3200",
    namn: "Civilingenjörsprogrammet i industriell ekonomi",
    examenspoang: 300,
    studieplan_url: "https://www.uu.se/utbildning/studieplan?query=aec2f35d-04f4-4a33-9a54-44d67d940e26",
    utbildningsplan_url: "https://www.uu.se/utbildning/utbildningsplan?query=f56480d2-e589-11f0-af1e-4773ce254d84",

    examenskrav: [
        { typ: "min-hp",             varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",             beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",   varde: 90,  beskrivning: "Avancerade kurser (A-nivå)" },
    ],

    kurser: [

        // ÅR 1 — Termin 1
        { kod: "1MA010",  namn: "Baskurs i matematik",                                    hp_per_period: { 1: 5 },            obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1TS301",  namn: "Industriell ekonomi I: företagets funktioner",           hp_per_period: { 1: 5, 2: 5, 3: 5 }, obligatorisk: true,  avancerad: false, perioder: [1, 2, 3] },
        { kod: "1TS302",  namn: "Introduktion till industrial analytics",                 hp_per_period: { 1: 5 },            obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA350",  namn: "Linjär algebra I",                                       hp_per_period: { 2: 5 },            obligatorisk: true,  avancerad: false, perioder: [2] },
        { kod: "1TS303",  namn: "Industriella produktionsfilosofier",                     hp_per_period: { 2: 5 },            obligatorisk: true,  avancerad: false, perioder: [2] },

        // ÅR 1 — Termin 2
        { kod: "1MA013",  namn: "Envariabelanalys",                                       hp_per_period: { 3: 5, 4: 5 },      obligatorisk: true,  avancerad: false, perioder: [3, 4] },
        { kod: "1DL042",  namn: "Programmering",                                          hp_per_period: { 3: 5, 4: 5 },      obligatorisk: true,  avancerad: false, perioder: [3, 4] },
        { kod: "1FA104",  namn: "Mekanik",                                                hp_per_period: { 4: 5 },            obligatorisk: true,  avancerad: false, perioder: [4] },

        // ÅR 2 — Termin 3
        { kod: "1MA024",  namn: "Linjär algebra II",                                      hp_per_period: { 5: 5 },            obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1TS318",  namn: "Industriell ekonomi II: organisering, produktion och marknad", hp_per_period: { 5: 5, 6: 5 }, obligatorisk: true, avancerad: false, perioder: [5, 6] },
        { kod: "1TD342",  namn: "Introduktion till beräkningsvetenskap",                  hp_per_period: { 5: 5 },            obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1MA034",  namn: "Transformmetoder",                                       hp_per_period: { 6: 5 },            obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1EL007",  namn: "Virtuell utveckling av automatiserade produktionssystem", hp_per_period: { 6: 5 },           obligatorisk: true,  avancerad: false, perioder: [6] },

        // ÅR 2 — Termin 4
        { kod: "1MA017",  namn: "Flervariabelanalys, allmän kurs",                        hp_per_period: { 7: 5 },            obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1TE717",  namn: "Digitalteknik och elektronik",                           hp_per_period: { 7: 10 },           obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1RT490",  namn: "Reglerteknik I",                                         hp_per_period: { 8: 5 },            obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1MS005",  namn: "Sannolikhet och statistik",                              hp_per_period: { 8: 5 },            obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1TS320",  namn: "Industriell ekonomi III: projekt i affärs- och teknikutveckling", hp_per_period: { 8: 5 }, obligatorisk: true,  avancerad: false, perioder: [8] },

        // ÅR 3 — Termin 5
        { kod: "1TS330",  namn: "Industriell ekonomi IV: företaget och omvärlden",        hp_per_period: { 9: 5, 10: 5, 11: 5 }, obligatorisk: true, avancerad: false, perioder: [9, 10, 11] },
        { kod: "1DL210",  namn: "Algoritmer och datastrukturer I",                        hp_per_period: { 9: 5 },            obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1DL301",  namn: "Databasteknik I",                                        hp_per_period: { 9: 5 },            obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1TD184",  namn: "Optimeringsmetoder",                                     hp_per_period: { 10: 5 },           obligatorisk: true,  avancerad: true,  perioder: [10] },
        { kod: "1TS368",  namn: "Entreprenörskap, teknik och samhälle",                   hp_per_period: { 10: 5 },           obligatorisk: true,  avancerad: false, perioder: [10] },

        // ÅR 3 — Termin 6
        { kod: "1TS325",  namn: "Statistisk slutledning för tekniska tillämpningar",      hp_per_period: { 11: 5 },           obligatorisk: true,  avancerad: true,  perioder: [11] },
        { kod: "1TD352",  namn: "Beräkningsvetenskap för dataanalys",                     hp_per_period: { 11: 5 },           obligatorisk: true,  avancerad: false, perioder: [11] },
        { kod: "1TS332",  namn: "Självständigt arbete i industriell ekonomi",             hp_per_period: { 12: 15 },          obligatorisk: true,  avancerad: false, perioder: [12] },

        // ÅR 4 — Termin 7
        { kod: "1TS340",  namn: "Strategisk ledning av teknikintensiva företag",          hp_per_period: { 13: 5 },           obligatorisk: true,  avancerad: true,  perioder: [13] },
        { kod: "1TS341",  namn: "Ledarskap i en global värld",                            hp_per_period: { 14: 5 },           obligatorisk: true,  avancerad: true,  perioder: [14] },
        valbar("VAL-IE-P13-1", 13, 5, ALT_IE_P13),
        valbar("VAL-IE-P13-2", 13, 5, ALT_IE_P13),
        valbar("VAL-IE-P14-1", 14, 5, ALT_IE_P14),
        valbar("VAL-IE-P14-2", 14, 5, ALT_IE_P14),

        // ÅR 4 — Termin 8
        { kod: "1TS342",  namn: "Teknologisk förändring och industriell (om)organisering", hp_per_period: { 15: 5 },          obligatorisk: true,  avancerad: true,  perioder: [15] },
        valbar("VAL-IE-P15-1", 15, 5, ALT_IE_P15),
        valbar("VAL-IE-P15-2", 15, 5, ALT_IE_P15),
        valbar("VAL-IE-P16-1", 16, 5, ALT_IE_P16),
        valbar("VAL-IE-P16-2", 16, 5, ALT_IE_P16),
        valbar("VAL-IE-P16-3", 16, 5, ALT_IE_P16),

        // ÅR 5 — Termin 9
        { kod: "1TS364",  namn: "Teknik, affärsutveckling och ledning",                   hp_per_period: { 17: 5, 18: 5 },    obligatorisk: true,  avancerad: true,  perioder: [17, 18] },
        { kod: "1TS352",  namn: "Vetenskapliga metoder för industriell ekonomi",          hp_per_period: { 17: 5, 18: 5 },    obligatorisk: true,  avancerad: true,  perioder: [17, 18] },
        valbar("VAL-IE-P17-1", 17, 5, ALT_IE_P17),
        valbar("VAL-IE-P18-1", 18, 5, ALT_IE_P18),

        // ÅR 5 — Termin 10
        { kod: "1TS354",  namn: "Examensarbete i industriell ekonomi",                    hp_per_period: { 19: 30 },          obligatorisk: true,  avancerad: true,  perioder: [19] },
    ]
};