// UU - MiljöOchVattenteknik.js
// Studieplan giltig från och med höstterminen 2026
// Source: https://www.uu.se/utbildning/studieplan?query=10070
//
// År 4–5 är uppdelade i terminsblock om 15 hp vardera.
// För examen krävs godkänt i minst två terminsblock.
// Alla block är samlade per period i dropdowns — studenten väljer sitt block.

// ─── Termin 7, Period 1 ───────────────────────────────────────────────────────
const ALT_MVT_P13 = [
    // Terminsblock: Uthålliga VA-system
    { kod: "1TV447",  namn: "Dricksvattenberedning och ledningsnät",               hp:  5, avancerad: true  },
    { kod: "1RT002",  namn: "Processreglering",                                    hp:  5, avancerad: true  },
    { kod: "1TV451",  namn: "Kommunal och industriell avloppsvattenrening",        hp:  5, avancerad: true  },
    // Terminsblock: Markmiljö
    { kod: "1TV445",  namn: "Ingenjörsgeologi och geoteknik",                      hp:  5, avancerad: true  },
    { kod: "TE0020",  namn: "Förorenad mark - riskbedömning och åtgärder (del 1)", hp: 10, avancerad: true,  synkad_med: "TE0020B" },
];

// ─── Termin 7, Period 2 ───────────────────────────────────────────────────────
const ALT_MVT_P14 = [
    // Terminsblock: Uthålliga VA-system
    { kod: "TN0363",  namn: "Enskilda avlopp och resursåtervinning",               hp:  5, avancerad: true  },
    { kod: "TN0372",  namn: "Val av VA-system",                                    hp: 10, avancerad: true  },
    // Terminsblock: Markmiljö
    { kod: "TE0004",  namn: "Avfallshantering",                                    hp:  5, avancerad: true  },
    { kod: "TE0020B", namn: "Förorenad mark - riskbedömning och åtgärder (del 2)", hp: 10, avancerad: true  },
];

// ─── Termin 8, Period 3 ───────────────────────────────────────────────────────
const ALT_MVT_P15 = [
    // Terminsblock: Vattenresurser
    { kod: "MV0190",  namn: "Vattenresursteknik",                                  hp:  5, avancerad: true  },
    { kod: "1TV442",  namn: "Grundvatten",                                         hp:  5, avancerad: true  },
    { kod: "1TV443",  namn: "Avrinning",                                           hp:  5, avancerad: true  },
    // Terminsblock: Luftvård och klimat
    { kod: "1TV028",  namn: "Luftmiljö och tillämpad meteorologi",                 hp: 15, avancerad: true  },
];

// ─── Termin 8, Period 4 ───────────────────────────────────────────────────────
const ALT_MVT_P16 = [
    // Terminsblock: Vattenresurser
    { kod: "1TV444",  namn: "GIS för vattenresurser",                              hp:  5, avancerad: true  },
    { kod: "MV0189",  namn: "Projekt vattenresurser",                              hp: 10, avancerad: true  },
    // Terminsblock: Luftvård och klimat
    { kod: "1TV036",  namn: "Fördjupning i meteorologi och klimat",                hp:  5, avancerad: true  },
    { kod: "1TV022",  namn: "Projekt luftvård och klimat",                         hp: 10, avancerad: true  },
];

// ─── Termin 9, Period 1 ───────────────────────────────────────────────────────
const ALT_MVT_P17 = [
    // Terminsblock: Miljömanagement
    { kod: "FÖ0498",  namn: "Ekonomistyrning för ingenjörer",                      hp:  5, avancerad: false },
    { kod: "TN0313",  namn: "Livscykelanalys för miljö- och vattenteknik",         hp:  5, avancerad: true  },
    { kod: "MX0162",  namn: "Miljökonsekvensbeskrivning",                          hp:  5, avancerad: true  },
    // Terminsblock: Ekosystemmodellering
    { kod: "1MB940",  namn: "Akvatiska ekosystem och ekosystemtjänster",           hp:  5, avancerad: true  },
    { kod: "1RT890",  namn: "Empirisk modellering",                                hp: 10, avancerad: true  },
];

// ─── Termin 9, Period 2 ───────────────────────────────────────────────────────
const ALT_MVT_P18 = [
    // Terminsblock: Miljömanagement
    { kod: "1TV032",  namn: "Miljömanagement - projekt",                           hp: 10, avancerad: true  },
    { kod: "1TV029",  namn: "Miljömanagement - teori",                             hp:  5, avancerad: true  },
    // Terminsblock: Ekosystemmodellering
    { kod: "1TV446",  namn: "Modellering av akvatiska ekosystem",                  hp: 15, avancerad: true  },
];

// ─── Programpost ──────────────────────────────────────────────────────────────

const miljoOchVattenteknkProgram = {
    id: "3600",
    namn: "Civilingenjörsprogrammet i miljö- och vattenteknik",
    examenspoang: 300,
    studieplan_url: "https://www.uu.se/utbildning/studieplan?query=10070",
    utbildningsplan_url: "https://www.uu.se/utbildning/utbildningsplan?query=e247ac7c-e58e-11f0-af1e-4773ce254d84",

    examenskrav: [
        { typ: "min-hp",             varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",             beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",   varde: 90,  beskrivning: "Avancerade kurser (A-nivå)" },
    ],

    kurser: [

        // ÅR 1 — Termin 1
        { kod: "1TV000",  namn: "Introduktion till miljö- och vattenteknik",       hp_per_period: { 1: 10 },       obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA090",  namn: "Algebra och geometri",                            hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1FA105",  namn: "Mekanik baskurs",                                 hp_per_period: { 2: 5, 3: 5 },  obligatorisk: true,  avancerad: false, perioder: [2, 3] },
        { kod: "1KB018",  namn: "Grundläggande kemi",                              hp_per_period: { 2: 10 },       obligatorisk: true,  avancerad: false, perioder: [2] },

        // ÅR 1 — Termin 2
        { kod: "1MA013",  namn: "Envariabelanalys",                                hp_per_period: { 3: 5, 4: 5 },  obligatorisk: true,  avancerad: false, perioder: [3, 4] },
        { kod: "BI1112",  namn: "Biologi (SLU)",                                   hp_per_period: { 3: 5 },        obligatorisk: true,  avancerad: false, perioder: [3] },
        { kod: "1MS005",  namn: "Sannolikhet och statistik",                       hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },
        { kod: "1TD433",  namn: "Programmeringsteknik I",                          hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },

        // ÅR 2 — Termin 3
        { kod: "1MA017",  namn: "Flervariabelanalys, allmän kurs",                 hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "BI1465",  namn: "Ekologi för miljö och vatten (SLU)",              hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1FA102",  namn: "Mekanik II",                                      hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1TV021",  namn: "Akvatisk miljöanalys",                            hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1KB301",  namn: "Fysikalisk kemi",                                 hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1MA024",  namn: "Linjär algebra II",                               hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },

        // ÅR 2 — Termin 4
        { kod: "2JS905",  namn: "Miljörätt",                                       hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1FA514",  namn: "Elektromagnetism I",                              hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1TD342",  namn: "Introduktion till beräkningsvetenskap",           hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1TV024",  namn: "Fluidmekanik",                                    hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1KB300",  namn: "Kemisk termodynamik",                             hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1KB100",  namn: "Analytisk miljökemi",                             hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },

        // ÅR 3 — Termin 5
        { kod: "1TV015",  namn: "Meteorologi, hydrologi och miljömätteknik",       hp_per_period: { 9: 15 },       obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1MA034",  namn: "Transformmetoder",                                hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1RT242",  namn: "Tillämpad systemanalys",                          hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "MV0192",  namn: "Markvetenskap för miljö och vatten (SLU, del 1)", hp_per_period: { 10: 5, 11: 5 }, obligatorisk: true, avancerad: false, perioder: [10, 11] },

        // ÅR 3 — Termin 6
        { kod: "1RT490",  namn: "Reglerteknik I",                                  hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: false, perioder: [11] },
        { kod: "1TV017",  namn: "Självständigt arbete i miljö och vattenteknik",   hp_per_period: { 12: 15 },      obligatorisk: true,  avancerad: false, perioder: [12] },

        // ÅR 4 — Termin 7 (terminsblock)
        valbar("VAL-MVT-P13-1", 13, 5, ALT_MVT_P13),
        valbar("VAL-MVT-P13-2", 13, 5, ALT_MVT_P13),
        valbar("VAL-MVT-P13-3", 13, 5, ALT_MVT_P13),
        valbar("VAL-MVT-P14-1", 14, 5, ALT_MVT_P14),
        valbar("VAL-MVT-P14-2", 14, 5, ALT_MVT_P14),
        valbar("VAL-MVT-P14-3", 14, 5, ALT_MVT_P14),

        // ÅR 4 — Termin 8 (terminsblock)
        valbar("VAL-MVT-P15-1", 15, 5, ALT_MVT_P15),
        valbar("VAL-MVT-P15-2", 15, 5, ALT_MVT_P15),
        valbar("VAL-MVT-P15-3", 15, 5, ALT_MVT_P15),
        valbar("VAL-MVT-P16-1", 16, 5, ALT_MVT_P16),
        valbar("VAL-MVT-P16-2", 16, 5, ALT_MVT_P16),
        valbar("VAL-MVT-P16-3", 16, 5, ALT_MVT_P16),

        // ÅR 5 — Termin 9 (terminsblock)
        valbar("VAL-MVT-P17-1", 17, 5, ALT_MVT_P17),
        valbar("VAL-MVT-P17-2", 17, 5, ALT_MVT_P17),
        valbar("VAL-MVT-P17-3", 17, 5, ALT_MVT_P17),
        valbar("VAL-MVT-P18-1", 18, 5, ALT_MVT_P18),
        valbar("VAL-MVT-P18-2", 18, 5, ALT_MVT_P18),
        valbar("VAL-MVT-P18-3", 18, 5, ALT_MVT_P18),

        // ÅR 5 — Termin 10
        { kod: "1TV962",  namn: "Examensarbete i miljö- och vattenteknik",         hp_per_period: { 19: 30 },      obligatorisk: true,  avancerad: true,  perioder: [19] },
    ]
};