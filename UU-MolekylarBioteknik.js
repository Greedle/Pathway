// UU - Civilingenjörsprogrammet i molekylär bioteknik.js
// Studieplan giltig från och med höstterminen 2026, version 2
// Source: https://www.uu.se/utbildning/studieplan?query=4bfbfcf7-c6eb-40c5-9124-6730b6ede86c

// ─── Termin 6 — ML-kurs (en av två obligatoriska) ────────────────────────────
const ALT_MOB_T6P3_ML = [
    { kod: "1RT700", namn: "Statistisk maskininlärning",     hp: 5, avancerad: true  },
    { kod: "1DL034", namn: "Introduktion till maskininlärning", hp: 5, avancerad: false },
];

// ─── Termin 7, Period 1 ───────────────────────────────────────────────────────
const ALT_MOB_P13 = [
    { kod: "1MB466", namn: "Molekylärbiologiska system (del 1)",        hp:  5, avancerad: true,  synkad_med: "1MB466B" },
    { kod: "1MB447", namn: "Experimentella metoder i strukturbiologi",  hp: 10, avancerad: true  },
    { kod: "1DL360", namn: "Informationsutvinning I",                   hp:  5, avancerad: true  },
    { kod: "1RT490", namn: "Reglerteknik I",                            hp:  5, avancerad: false },
    { kod: "1DL210", namn: "Algoritmer och datastrukturer I",           hp:  5, avancerad: false },
    { kod: "1KB162", namn: "Proteomik och metabolomik",                 hp:  5, avancerad: true  },
];

// ─── Termin 7, Period 2 ───────────────────────────────────────────────────────
const ALT_MOB_P14 = [
    { kod: "1MB466B", namn: "Molekylärbiologiska system (del 2)",       hp:  5, avancerad: true  },
    { kod: "1RT490",  namn: "Reglerteknik I",                           hp:  5, avancerad: false },
    { kod: "1KB756",  namn: "Processteknisk modellering",               hp:  5, avancerad: true  },
    { kod: "1DL400",  namn: "Databasteknik II",                         hp:  5, avancerad: true  },
    { kod: "1TD396",  namn: "Datoriserad bildanalys I",                 hp:  5, avancerad: true  },
    { kod: "1DL231",  namn: "Algoritmer och datastrukturer II",         hp:  5, avancerad: false },
];

// ─── Termin 8, Period 3 ───────────────────────────────────────────────────────
const ALT_MOB_P15 = [
    { kod: "1MB449", namn: "Fysikalisk molekylärbiologi",               hp:  5,   avancerad: true },
    { kod: "1MB433", namn: "Syntetisk biologi",                         hp: 10,   avancerad: true },
    { kod: "1MB444", namn: "Biofotonik",                                hp: 10,   avancerad: true },
    { kod: "1MB461", namn: "Molekylär evolution",                       hp:  5,   avancerad: true },
    { kod: "1TS325", namn: "Statistisk slutledning för tekniska tillämpningar", hp: 5, avancerad: true },
    { kod: "1MB416", namn: "Kunskapsbaserade system inom bioinformatik", hp: 5,   avancerad: true },
    { kod: "3FB028", namn: "Biologiska läkemedel I",                    hp:  7.5, avancerad: true },
    { kod: "1KB429", namn: "Utveckling av biologiska läkemedel",        hp:  7.5, avancerad: true },
];

// ─── Termin 8, Period 4 ───────────────────────────────────────────────────────
const ALT_MOB_P16 = [
    { kod: "1KB770", namn: "Proteinbioteknologi och immunteknik",       hp: 15,   avancerad: true },
    { kod: "1MB464", namn: "Molekylär och statistisk mekanik",          hp: 10,   avancerad: true },
    { kod: "3FB034", namn: "Big data i biovetenskap",                   hp:  5,   avancerad: true },
    { kod: "1MB462", namn: "Genomanalys",                               hp: 10,   avancerad: true },
    { kod: "1TE769", namn: "Innovationsledning och entreprenörskap",    hp: 10,   avancerad: true },
];

// ─── Termin 9, Period 1 ───────────────────────────────────────────────────────
const ALT_MOB_P17 = [
    { kod: "1KB447", namn: "Nanobioteknik och biosensorer",             hp: 15,   avancerad: true },
    { kod: "1MB517", namn: "Populationsgenomisk analys",                hp: 10,   avancerad: true },
    { kod: "1MB515", namn: "Fylogenianalys",                            hp:  5,   avancerad: true },
    { kod: "1DL011", namn: "Informationshanteringssystem",              hp: 10,   avancerad: true },
];

// ─── Termin 9, Period 2 — obligatorisk slutkurs (en av tre) ──────────────────
const ALT_MOB_SLUTKURS = [
    { kod: "1KB769", namn: "Molekylär bioteknik för produktion",        hp: 15,   avancerad: true },
    { kod: "1MB519", namn: "Tillämpad bioinformatik",                   hp: 15,   avancerad: true },
    { kod: "1MB518", namn: "Tillämpad molekylär biofysik",              hp: 15,   avancerad: true },
];

// ─── Programpost ──────────────────────────────────────────────────────────────

const molekylarBioteknkProgram = {
    id: "3000",
    namn: "Civilingenjörsprogrammet i molekylär bioteknik",
    examenspoang: 300,
    studieplan_url: "https://www.uu.se/utbildning/studieplan?query=4bfbfcf7-c6eb-40c5-9124-6730b6ede86c",
    utbildningsplan_url: "https://www.uu.se/utbildning/utbildningsplan?query=5fb2741e-e58f-11f0-af1e-4773ce254d84",


    examenskrav: [
        { typ: "min-hp",             varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",             beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",   varde: 90,  beskrivning: "Avancerade kurser (A-nivå)" },
    ],

    kurser: [

        // ÅR 1 — Termin 1
        { kod: "1MB112", namn: "Introduktion till molekylär bioteknik", hp_per_period: { 1: 10 },       obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA090", namn: "Algebra och geometri",                  hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1KB018", namn: "Grundläggande kemi",                    hp_per_period: { 2: 10 },       obligatorisk: true,  avancerad: false, perioder: [2] },
        { kod: "1MA013", namn: "Envariabelanalys",                      hp_per_period: { 2: 5, 3: 5 },  obligatorisk: true,  avancerad: false, perioder: [2, 3] },

        // ÅR 1 — Termin 2
        { kod: "1KB473", namn: "Grundläggande bioorganisk kemi",        hp_per_period: { 3: 10 },       obligatorisk: true,  avancerad: false, perioder: [3] },
        { kod: "1MB102", namn: "Cellbiologi",                           hp_per_period: { 4: 15 },       obligatorisk: true,  avancerad: false, perioder: [4] },

        // ÅR 2 — Termin 3
        { kod: "1KB426", namn: "Bioteknisk metodik",                    hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1MA016", namn: "Flervariabelanalys",                    hp_per_period: { 5: 5, 6: 5 },  obligatorisk: true,  avancerad: false, perioder: [5, 6] },
        { kod: "1TD433", namn: "Programmeringsteknik I",                hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1TE743", namn: "Industriell ekonomi",                   hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1TD342", namn: "Introduktion till beräkningsvetenskap", hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },

        // ÅR 2 — Termin 4
        { kod: "1FA104", namn: "Mekanik",                               hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1MB203", namn: "Biologisk mångfald - mönster och processer", hp_per_period: { 7: 5 },   obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1MA024", namn: "Linjär algebra II",                     hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1MB204", namn: "Bioinformatisk strukturbiologi",        hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1MS005", namn: "Sannolikhet och statistik",             hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1KB300", namn: "Kemisk termodynamik",                   hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },

        // ÅR 3 — Termin 5
        { kod: "1TD352", namn: "Beräkningsvetenskap för dataanalys",    hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1TD722", namn: "Programmeringsteknik II",               hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1MB311", namn: "Mikrobiologi",                          hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1FA533", namn: "Tillämpad fysik för molekylär bioteknik", hp_per_period: { 10: 5 },     obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1MA034", namn: "Transformmetoder",                      hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1DL301", namn: "Databasteknik I",                       hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },

        // ÅR 3 — Termin 6
        { kod: "1MB335", namn: "Genomik och bioinformatik",             hp_per_period: { 11: 10 },      obligatorisk: true,  avancerad: false, perioder: [11] },
        // Mandatory choice: one of two ML courses
        valbar("VAL-MOB-T6-ML", 11, 5, ALT_MOB_T6P3_ML),
        { kod: "1MB332", namn: "Självständigt arbete i molekylär bioteknik", hp_per_period: { 12: 15 }, obligatorisk: true,  avancerad: false, perioder: [12] },

        // ÅR 4 — Termin 7 (valbara)
        valbar("VAL-MOB-P13-1", 13, 5, ALT_MOB_P13),
        valbar("VAL-MOB-P13-2", 13, 5, ALT_MOB_P13),
        valbar("VAL-MOB-P13-3", 13, 5, ALT_MOB_P13),
        valbar("VAL-MOB-P14-1", 14, 5, ALT_MOB_P14),
        valbar("VAL-MOB-P14-2", 14, 5, ALT_MOB_P14),
        valbar("VAL-MOB-P14-3", 14, 5, ALT_MOB_P14),

        // ÅR 4 — Termin 8 (valbara)
        valbar("VAL-MOB-P15-1", 15, 5, ALT_MOB_P15),
        valbar("VAL-MOB-P15-2", 15, 5, ALT_MOB_P15),
        valbar("VAL-MOB-P15-3", 15, 5, ALT_MOB_P15),
        valbar("VAL-MOB-P16-1", 16, 5, ALT_MOB_P16),
        valbar("VAL-MOB-P16-2", 16, 5, ALT_MOB_P16),
        valbar("VAL-MOB-P16-3", 16, 5, ALT_MOB_P16),

        // ÅR 5 — Termin 9, Period 1 (valbara)
        valbar("VAL-MOB-P17-1", 17, 5,  ALT_MOB_P17),
        valbar("VAL-MOB-P17-2", 17, 5,  ALT_MOB_P17),
        valbar("VAL-MOB-P17-3", 17, 5,  ALT_MOB_P17),

        // ÅR 5 — Termin 9, Period 2 (obligatorisk slutkurs — en av tre)
        valbar("VAL-MOB-SLUTKURS", 18, 15, ALT_MOB_SLUTKURS),

        // ÅR 5 — Termin 10
        { kod: "1MB930", namn: "Examensarbete i molekylär bioteknik",   hp_per_period: { 19: 30 },      obligatorisk: true,  avancerad: true,  perioder: [19] },
    ]
};