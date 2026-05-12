// UU - TekniskFysik.js
// Studieplan giltig från och med höstterminen 2026
// Source: https://www.uu.se/utbildning/studieplan?query=10072
// Fem inriktningar: Beräkningsteknik, Inbyggda system, Tillämpad fysik,
// Hållbar energiteknik, Elektrifiering — alla kurser samlade per period.

// ─── Termin 6, Period 3 — alternativ-obligatorisk (en av två/tre) ─────────────
const ALT_TTF_T6P3 = [
    { kod: "1TM043", namn: "Materialmekanikmodellering",  hp: 5, avancerad: true  },
    { kod: "1EL002", namn: "Strömningslära",              hp: 5, avancerad: false },
    { kod: "1TE655", namn: "Elkraftteknik",               hp: 5, avancerad: false },
];

// ─── Termin 7, Period 1 ───────────────────────────────────────────────────────
const ALT_TTF_P13 = [
    { kod: "1TD722",  namn: "Programmeringsteknik II",                             hp: 5, avancerad: false },
    { kod: "1TD452",  namn: "Numerisk linjär algebra",                             hp: 5, avancerad: true  },
    { kod: "1MA356",  namn: "Funktionalanalys med tillämpningar",                  hp: 5, avancerad: false },
    { kod: "1DL301",  namn: "Databasteknik I",                                     hp: 5, avancerad: false },
    { kod: "1TE651",  namn: "Signalbehandling (del 1)",                            hp: 5, avancerad: true,  synkad_med: "1TE651B" },
    { kod: "1TE039",  namn: "Halvledarelektronik",                                 hp: 5, avancerad: true  },
    { kod: "1RT495",  namn: "Reglerteknik II",                                     hp: 5, avancerad: true  },
    { kod: "1FA352",  namn: "Kvantmekanik (del 1)",                                hp: 5, avancerad: true,  synkad_med: "1FA352B" },
    { kod: "1FA252",  namn: "Elektromagnetisk fältteori",                          hp: 5, avancerad: true  },
    { kod: "1FA253",  namn: "Fluidmekanik",                                        hp: 5, avancerad: true  },
    { kod: "1FA026",  namn: "Nanovetenskap",                                       hp: 5, avancerad: true  },
    { kod: "1FA404",  namn: "Energifysik I",                                       hp: 5, avancerad: false },
    { kod: "1TE028",  namn: "Solenergi - teknik och system (del 1)",               hp: 5, avancerad: true,  synkad_med: "1TE028B" },
    { kod: "1TE765",  namn: "Kraftelektronik I",                                   hp: 5, avancerad: true  },
    { kod: "1TE754",  namn: "Elektriska nätet som system (del 1)",                 hp: 5, avancerad: true,  synkad_med: "1TE754B" },
    { kod: "1KB274",  namn: "Batterier och lagring",                               hp: 5, avancerad: true  },
];

// ─── Termin 7, Period 2 ───────────────────────────────────────────────────────
const ALT_TTF_P14 = [
    { kod: "1TD396",  namn: "Datoriserad bildanalys I",                            hp: 5, avancerad: true  },
    { kod: "1TD184",  namn: "Optimeringsmetoder",                                  hp: 5, avancerad: true  },
    { kod: "1TD389",  namn: "Vetenskaplig visualisering",                          hp: 5, avancerad: true  },
    { kod: "1FA370",  namn: "Tillämpad djupinlärning i fysik och teknik",          hp: 5, avancerad: true  },
    { kod: "1TD056",  namn: "Tillämpade finita elementmetoder",                    hp: 5, avancerad: true  },
    { kod: "1TE651B", namn: "Signalbehandling (del 2)",                            hp: 5, avancerad: true  },
    { kod: "1TM012",  namn: "Tillämpad analog elektronik",                         hp: 5, avancerad: true  },
    { kod: "1TE723",  namn: "Programmering av enkapseldatorer",                    hp: 5, avancerad: true  },
    { kod: "1FA352B", namn: "Kvantmekanik (del 2)",                                hp: 5, avancerad: true  },
    { kod: "1FA140",  namn: "Statistisk mekanik",                                  hp: 5, avancerad: false },
    { kod: "1FA346",  namn: "Kärnfysik",                                           hp: 5, avancerad: true  },
    { kod: "1TE015",  namn: "Mikro- och nanoteknik I",                             hp: 5, avancerad: true  },
    { kod: "1GV214",  namn: "Hållbar energiteknik",                                hp: 5, avancerad: true  },
    { kod: "1TE028B", namn: "Solenergi - teknik och system (del 2)",               hp: 5, avancerad: true  },
    { kod: "1TE724",  namn: "Avancerad solcellsdesign",                            hp: 5, avancerad: true  },
    { kod: "1TE766",  namn: "Kraftelektronik II",                                  hp: 5, avancerad: true  },
    { kod: "1TE754B", namn: "Elektriska nätet som system (del 2)",                 hp: 5, avancerad: true  },
    { kod: "1EL021",  namn: "Högspänningsteknik",                                  hp: 5, avancerad: true  },
];

// ─── Termin 8, Period 3 ───────────────────────────────────────────────────────
const ALT_TTF_P15 = [
    { kod: "1TD169",  namn: "Data engineering I",                                  hp:  5, avancerad: true  },
    { kod: "1MS926",  namn: "Tillämpad statistik",                                 hp:  5, avancerad: false },
    { kod: "1RT720",  namn: "Djupinlärning",                                       hp:  5, avancerad: true  },
    { kod: "1FA573",  namn: "Beräkningsfysik",                                     hp:  5, avancerad: true  },
    { kod: "1TD062",  namn: "Högprestandaprogrammering",                           hp: 10, avancerad: true  },
    { kod: "1FA329",  namn: "Kretskortkonstruktion med ECAD-verktyg",              hp:  5, avancerad: true  },
    { kod: "1FA326",  namn: "Digital elektronikkonstruktion med VHDL",             hp: 10, avancerad: true  },
    { kod: "1TE747",  namn: "Digital kommunikation (del 1)",                       hp:  5, avancerad: true,  synkad_med: "1TE747B" },
    { kod: "1TE748",  namn: "Konstruktion av trådlösa gränssnitt för inbyggda system", hp: 5, avancerad: true },
    { kod: "1FA680",  namn: "Spektroskopi - instrumentering, teori och tillämpningar", hp: 5, avancerad: true },
    { kod: "1FA347",  namn: "Partikelfysik",                                       hp:  5, avancerad: true  },
    { kod: "1FA032",  namn: "Kärnreaktorfysik",                                    hp:  5, avancerad: true  },
    { kod: "1TG310",  namn: "Fasta tillståndets fysik II",                         hp:  5, avancerad: true  },
    { kod: "1FA019",  namn: "Principer för kvantdatorer och kvantprogrammering F", hp:  5, avancerad: true  },
    { kod: "1FA664",  namn: "Fotonik och kvantoptik I",                            hp:  5, avancerad: true  },
    { kod: "1TE038",  namn: "Vindkraft - teknik och system (del 1)",               hp:  5, avancerad: true,  synkad_med: "1TE038B" },
    { kod: "1TS335",  namn: "Fjärrvärmesystem",                                    hp:  5, avancerad: true  },
    { kod: "1TE737",  namn: "Nätanslutning av variabla källor",                    hp:  5, avancerad: true  },
    { kod: "1EL204",  namn: "Design av elektriska motorer",                        hp:  5, avancerad: true  },
];

// ─── Termin 8, Period 4 ───────────────────────────────────────────────────────
const ALT_TTF_P16 = [
    { kod: "1RT745",  namn: "Förstärkningsinlärning",                              hp:  5, avancerad: true  },
    { kod: "1TD179",  namn: "Maskininlärningsteori",                               hp:  5, avancerad: true  },
    { kod: "1MD042",  namn: "Avancerad djupinlärning för bildbehandling",          hp:  5, avancerad: true  },
    { kod: "1FA006",  namn: "Avancerad tillämpad djupinlärning inom fysik och teknik", hp: 5, avancerad: true },
    { kod: "1MA256",  namn: "Modellering av komplexa system",                      hp: 10, avancerad: true  },
    { kod: "1TD070",  namn: "Parallell och distribuerad programmering",            hp:  5, avancerad: true  },
    { kod: "1TE750",  namn: "Elektromekaniskt projekt",                            hp:  5, avancerad: true  },
    { kod: "1TE044",  namn: "Elektromagnetisk kompatibilitet",                     hp:  5, avancerad: true  },
    { kod: "1EL011",  namn: "Sakernas internet",                                   hp:  5, avancerad: false },
    { kod: "1TE747B", namn: "Digital kommunikation (del 2)",                       hp:  5, avancerad: true  },
    { kod: "1FA152",  namn: "Dynamiska system och kaos",                           hp:  5, avancerad: true  },
    { kod: "1FA348",  namn: "Acceleratorer och detektorer",                        hp:  5, avancerad: true  },
    { kod: "1FA667",  namn: "Biomedicinsk avbildningsteknik",                      hp:  5, avancerad: true  },
    { kod: "1TM008",  namn: "Optoelektronik",                                      hp:  5, avancerad: true  },
    { kod: "1FA592",  namn: "Kvantinformation",                                    hp:  5, avancerad: true  },
    { kod: "1FA673",  namn: "Fotonik och kvantoptik II",                           hp:  5, avancerad: true  },
    { kod: "1TE038B", namn: "Vindkraft - teknik och system (del 2)",               hp:  5, avancerad: true  },
    { kod: "1RT004",  namn: "Säkerhet i reglersystem",                             hp:  5, avancerad: true  },
    { kod: "1EL843",  namn: "HVAC- och HVDC-kabelsystem",                          hp:  5, avancerad: true  },
    { kod: "1EL009",  namn: "Cybersäkerhet och styrning av elkraftsystem",         hp:  5, avancerad: true  },
];

// ─── Termin 9, Period 1 ───────────────────────────────────────────────────────
const ALT_TTF_P17 = [
    { kod: "1TS327",  namn: "Industriell projektledning I",                        hp:  5, avancerad: true  },
    { kod: "1DL360",  namn: "Informationsutvinning I",                             hp:  5, avancerad: true  },
    { kod: "1RT705",  namn: "Avancerad probabilistisk maskininlärning",            hp:  5, avancerad: true  },
    { kod: "1TD051",  namn: "PDE-baserad optimering",                              hp:  5, avancerad: true  },
    { kod: "1TD052",  namn: "Tillämpade beräkningsmetoder för strömningsmekanik",  hp:  5, avancerad: true  },
    { kod: "1TM005",  namn: "Teknik i extrema miljöer",                            hp:  5, avancerad: true  },
    { kod: "1TE752",  namn: "Robotmekanik",                                        hp:  5, avancerad: true  },
    { kod: "1TE722",  namn: "Öppen fördjupningskurs i inbyggda system",            hp:  5, avancerad: true  },
    { kod: "1RT885",  namn: "Systemidentifiering",                                 hp:  5, avancerad: true  },
    { kod: "1FA257",  namn: "Klassisk elektrodynamik",                             hp: 10, avancerad: true  },
    { kod: "1FA670",  namn: "Spinbaserad teknologi I",                             hp:  5, avancerad: true  },
    { kod: "1FA665",  namn: "Andra generationens kvantteknologi",                  hp:  5, avancerad: true  },
    { kod: "1KB274B", namn: "Batterier och lagring",                               hp:  5, avancerad: true  },
    { kod: "1FA457",  namn: "Livscykelanalyser för energi och material",           hp:  5, avancerad: true  },
    { kod: "1EL019",  namn: "Transformatorer i transmissionssystem",               hp:  5, avancerad: true  },
    { kod: "1TE039B", namn: "Halvledarelektronik",                                 hp:  5, avancerad: true  },
];

// ─── Termin 9, Period 2 — projektkurs (en per inriktning) ────────────────────
const ALT_TTF_P18 = [
    { kod: "1TD316",  namn: "Projekt i beräkningsteknik",                          hp: 15, avancerad: true  },
    { kod: "1TE721",  namn: "Projekt i inbyggda system",                           hp: 15, avancerad: true  },
    { kod: "1FA495",  namn: "Projekt i tillämpad fysik",                           hp: 15, avancerad: true  },
    { kod: "1GV350",  namn: "Projekt i hållbar energiteknik",                      hp: 15, avancerad: true  },
    { kod: "1EL996",  namn: "Projekt i elektrifiering",                            hp: 15, avancerad: true  },
];

// ─── Programpost ──────────────────────────────────────────────────────────────

const tekniskFysikProgram = {
    id: "3500",
    namn: "Civilingenjörsprogrammet i teknisk fysik",
    examenspoang: 300,
    studieplan_url: "https://www.uu.se/utbildning/studieplan?query=10072",
    utbildningsplan_url: "https://www.uu.se/utbildning/utbildningsplan?query=bf81562d-e589-11f0-af1e-4773ce254d84",

    examenskrav: [
        { typ: "min-hp",             varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",             beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",   varde: 90,  beskrivning: "Avancerade kurser (A-nivå)" },
    ],

    kurser: [

        // ÅR 1 — Termin 1
        { kod: "1TE609", namn: "Introduktion till teknisk fysik",                  hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA090", namn: "Algebra och geometri",                             hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA360", namn: "Analys i en variabel",                             hp_per_period: { 1: 5, 2: 5 },  obligatorisk: true,  avancerad: false, perioder: [1, 2] },
        { kod: "1TD433", namn: "Programmeringsteknik I",                           hp_per_period: { 2: 5 },        obligatorisk: true,  avancerad: false, perioder: [2] },
        { kod: "1FA105", namn: "Mekanik baskurs",                                  hp_per_period: { 2: 5, 3: 5 },  obligatorisk: true,  avancerad: false, perioder: [2, 3] },

        // ÅR 1 — Termin 2
        { kod: "1MA361", namn: "Analys i flera variabler",                         hp_per_period: { 3: 5, 4: 5 },  obligatorisk: true,  avancerad: false, perioder: [3, 4] },
        { kod: "1TE720", namn: "Elektrisk mätteknik",                              hp_per_period: { 3: 5 },        obligatorisk: true,  avancerad: false, perioder: [3] },
        { kod: "1TM044", namn: "Mekanik II F",                                     hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },
        { kod: "1FA514", namn: "Elektromagnetism I",                               hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },

        // ÅR 2 — Termin 3
        { kod: "1MA034", namn: "Transformmetoder",                                 hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1TE624", namn: "Elektronik I",                                     hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1MA024", namn: "Linjär algebra II",                                hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1TE626", namn: "Elektromagnetism II",                              hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1FA527", namn: "Teknisk termodynamik",                             hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1FA103", namn: "Mekanik III",                                      hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },

        // ÅR 2 — Termin 4
        { kod: "1TD343", namn: "Introduktion till beräkningsvetenskap F",          hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1FA121", namn: "Fysikens matematiska metoder",                     hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1MS029", namn: "Matematisk statistik KF",                          hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1TD352", namn: "Beräkningsvetenskap för dataanalys",               hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1TE623", namn: "Energi- och miljöteknik",                          hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1FA522", namn: "Vågor och optik",                                  hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },

        // ÅR 3 — Termin 5
        { kod: "1FA535", namn: "Kvantfysik F",                                     hp_per_period: { 9: 10 },       obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1TE661", namn: "Signaler och system",                              hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1RT490", namn: "Reglerteknik I",                                   hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1TM013", namn: "Fasta tillståndets fysik F",                       hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1TD354", namn: "Beräkningsvetenskap för partiella differentialekvationer", hp_per_period: { 10: 5 }, obligatorisk: true, avancerad: true,  perioder: [10] },

        // ÅR 3 — Termin 6
        { kod: "1RT700", namn: "Statistisk maskininlärning",                       hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: true,  perioder: [11] },
        { kod: "1TM035", namn: "Kontinuummekanik",                                 hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: true,  perioder: [11] },
        valbar("VAL-TTF-T6P3", 11, 5, ALT_TTF_T6P3),
        { kod: "1TE664", namn: "Självständigt arbete i teknisk fysik",             hp_per_period: { 12: 15 },      obligatorisk: true,  avancerad: false, perioder: [12] },

        // ÅR 4 — Termin 7
        valbar("VAL-TTF-P13-1", 13, 5, ALT_TTF_P13),
        valbar("VAL-TTF-P13-2", 13, 5, ALT_TTF_P13),
        valbar("VAL-TTF-P13-3", 13, 5, ALT_TTF_P13),
        valbar("VAL-TTF-P14-1", 14, 5, ALT_TTF_P14),
        valbar("VAL-TTF-P14-2", 14, 5, ALT_TTF_P14),
        valbar("VAL-TTF-P14-3", 14, 5, ALT_TTF_P14),

        // ÅR 4 — Termin 8
        valbar("VAL-TTF-P15-1", 15, 5, ALT_TTF_P15),
        valbar("VAL-TTF-P15-2", 15, 5, ALT_TTF_P15),
        valbar("VAL-TTF-P15-3", 15, 5, ALT_TTF_P15),
        valbar("VAL-TTF-P16-1", 16, 5, ALT_TTF_P16),
        valbar("VAL-TTF-P16-2", 16, 5, ALT_TTF_P16),
        valbar("VAL-TTF-P16-3", 16, 5, ALT_TTF_P16),

        // ÅR 5 — Termin 9
        valbar("VAL-TTF-P17-1", 17, 5,  ALT_TTF_P17),
        valbar("VAL-TTF-P17-2", 17, 5,  ALT_TTF_P17),
        valbar("VAL-TTF-P17-3", 17, 5,  ALT_TTF_P17),
        valbar("VAL-TTF-P18",   18, 15, ALT_TTF_P18),

        // ÅR 5 — Termin 10
        { kod: "1TE864", namn: "Examensarbete i teknisk fysik",                    hp_per_period: { 19: 30 },      obligatorisk: true,  avancerad: true,  perioder: [19] },
    ]
};