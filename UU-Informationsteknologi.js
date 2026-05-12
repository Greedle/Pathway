// UU - Informationsteknologi.js
// Studieplan giltig från och med höstterminen 2026
// Source: https://www.uu.se/utbildning/studieplan?query=10068

// ─── Termin 6, Period 3 — obligatorisk (en av två) ───────────────────────────
const ALT_IT_T6P3_ML = [
    { kod: "1DL034", namn: "Introduktion till maskininlärning",   hp: 5, avancerad: false },
    { kod: "1MA017", namn: "Flervariabelanalys, allmän kurs",     hp: 5, avancerad: false },
];

// ─── Termin 7, Period 1 — profil + valbara ────────────────────────────────────
const ALT_IT_P13 = [
    // Gemensam för alla profiler
    { kod: "1DL008",  namn: "IT, hållbarhet och socialt ansvar",                   hp:  5, avancerad: true  },
    // Dataanalys
    { kod: "1DL002",  namn: "Data, etik och rätt",                                  hp:  5, avancerad: true  },
    { kod: "1MS041",  namn: "Introduktion till dataanalys (del 1)",                  hp:  5, avancerad: true,  synkad_med: "1MS041B" },
    // Datorsystem / MMS / Mjukvaruutveckling
    { kod: "1DL251",  namn: "Metoder och projektledning för mjukvaruutveckling",    hp:  5, avancerad: true  },
    // Valbara
    { kod: "1DL340",  namn: "Artificiell intelligens",                              hp:  5, avancerad: true  },
    { kod: "1DT061",  namn: "Datavetenskapens didaktik (del 1)",                    hp:  5, avancerad: true,  synkad_med: "1DT061B" },
    { kod: "1DT012",  namn: "IT i samhället (del 1)",                               hp:  5, avancerad: true,  synkad_med: "1DT012B" },
    { kod: "1DL360",  namn: "Informationsutvinning I",                              hp:  5, avancerad: true  },
    { kod: "1DL530",  namn: "Introduktion till parallellprogrammering",             hp:  5, avancerad: true  },
];

// ─── Termin 7, Period 2 — profil + valbara ────────────────────────────────────
const ALT_IT_P14 = [
    // Dataanalys
    { kod: "1RT700",  namn: "Statistisk maskininlärning",                           hp:  5, avancerad: true  },
    { kod: "1MS041B", namn: "Introduktion till dataanalys (del 2)",                  hp:  5, avancerad: true  },
    // Datorsystem
    { kod: "1DT072",  namn: "Säkra datorsystem I",                                  hp:  5, avancerad: true  },
    { kod: "1DT118",  namn: "Cybersäkerhetsanalys",                                 hp:  5, avancerad: true  },
    // Inbyggda system
    { kod: "1DT004",  namn: "Realtidssystem",                                       hp: 10, avancerad: true  },
    // MMS
    { kod: "1MD032",  naam: "Intelligenta interaktiva system",                      hp:  5, avancerad: true  },
    { kod: "1MD032",  namn: "Intelligenta interaktiva system",                      hp:  5, avancerad: true  },
    { kod: "1DL242",  namn: "Avancerad mjukvarudesign",                             hp:  5, avancerad: true  },
    // Mjukvaruutveckling
    { kod: "1DL231",  namn: "Algoritmer och datastrukturer II",                     hp:  5, avancerad: false },
    { kod: "1DL610",  namn: "Mjukvarutestning",                                     hp:  5, avancerad: true  },
    // Valbara
    { kod: "1DT061B", namn: "Datavetenskapens didaktik (del 2)",                    hp:  5, avancerad: true  },
    { kod: "1TD389",  namn: "Vetenskaplig visualisering",                           hp:  5, avancerad: true  },
    { kod: "1DL451",  namn: "Modellering för kombinatorisk optimering",             hp:  5, avancerad: true  },
    { kod: "1DL321",  namn: "Kompilatorteknik I",                                   hp:  5, avancerad: false },
    { kod: "1MA170",  namn: "Grafteori",                                            hp:  5, avancerad: false },
    { kod: "1TE723",  namn: "Programmering av enkapseldatorer",                     hp:  5, avancerad: true  },
    { kod: "1TD184",  namn: "Optimeringsmetoder",                                   hp:  5, avancerad: true  },
    { kod: "1TD396",  namn: "Datoriserad bildanalys I",                             hp:  5, avancerad: true  },
    { kod: "1DL400",  namn: "Databasteknik II",                                     hp:  5, avancerad: true  },
    { kod: "1DL590",  namn: "Parallella algoritmer och datastrukturer",             hp:  5, avancerad: true  },
    { kod: "1DT012B", namn: "IT i samhället (del 2)",                               hp: 10, avancerad: true  },
];

// ─── Termin 8, Period 3 — profil + valbara ────────────────────────────────────
const ALT_IT_P15 = [
    // Dataanalys
    { kod: "1TD169",  namn: "Data engineering I",                                   hp:  5, avancerad: true  },
    // Datorsystem
    { kod: "1DT117",  namn: "Datakommunikation II",                                 hp:  5, avancerad: true  },
    { kod: "1DT024",  namn: "Avancerad datorarkitektur (del 1)",                    hp:  5, avancerad: true,  synkad_med: "1DT024B" },
    // Inbyggda system
    { kod: "1DT194",  namn: "Trådlös kommunikation och nätverksbaserade inbyggda system", hp: 5, avancerad: true },
    { kod: "1DT106",  namn: "Programmering av inbyggda system",                     hp:  5, avancerad: true  },
    // MMS
    { kod: "1MD200",  namn: "Krav inom agil utveckling",                            hp:  5, avancerad: true  },
    { kod: "1MD001",  namn: "Avancerad interaktionsdesign",                         hp:  5, avancerad: true  },
    { kod: "1MD046",  namn: "Användargränssnitt: programmering och utvärdering (del 1)", hp: 5, avancerad: true, synkad_med: "1MD046B" },
    // Mjukvaruutveckling
    { kod: "1DL481",  namn: "Algoritmer och datastrukturer III",                    hp:  5, avancerad: true  },
    // Valbara
    { kod: "1TD062",  namn: "Högprestandaprogrammering",                            hp: 10, avancerad: true  },
    { kod: "1DT075",  namn: "Kryptologi",                                           hp:  5, avancerad: true  },
    { kod: "1FA326",  namn: "Digital elektronikkonstruktion med VHDL",              hp: 10, avancerad: true  },
    { kod: "1DL073",  namn: "Naturliga beräkningsmetoder för maskininlärning (del 1)", hp: 5, avancerad: true, synkad_med: "1DL073B" },
    { kod: "1MD004",  namn: "IT, etik och organisation",                            hp:  5, avancerad: true  },
    { kod: "1DT116",  namn: "Lågnivå-parallellprogrammering",                      hp:  5, avancerad: true  },
    { kod: "1TD388",  namn: "Datorgrafik",                                          hp: 10, avancerad: true  },
    { kod: "1MS048",  namn: "Dataanalysens grundvalar (del 1)",                     hp:  5, avancerad: true,  synkad_med: "1MS048B" },
];

// ─── Termin 8, Period 4 — profil + valbara ────────────────────────────────────
const ALT_IT_P16 = [
    // Dataanalys
    { kod: "1TD076",  namn: "Data engineering II",                                  hp: 10, avancerad: true  },
    // Datorsystem
    { kod: "1DT024B", namn: "Avancerad datorarkitektur (del 2)",                    hp:  5, avancerad: true  },
    { kod: "1MD044",  namn: "Människa-robotinteraktion med forskningsprojekt",      hp: 10, avancerad: true  },
    // Inbyggda system
    { kod: "1DT108",  namn: "Programmering av inbyggda system, projekt",            hp:  5, avancerad: true  },
    { kod: "1DT195",  namn: "Trådlös kommunikation och inbyggda system, projekt",   hp:  5, avancerad: true  },
    // MMS
    { kod: "1DL630",  namn: "Komplexa IT-system i stora organisationer",            hp:  5, avancerad: true  },
    { kod: "1MD046B", namn: "Användargränssnitt: programmering och utvärdering (del 2)", hp: 5, avancerad: true },
    // Valbara
    { kod: "1DL073B", namn: "Naturliga beräkningsmetoder för maskininlärning (del 2)", hp: 5, avancerad: true },
    { kod: "1TD070",  namn: "Parallell och distribuerad programmering",             hp:  5, avancerad: true  },
    { kod: "1RT004",  namn: "Säkerhet i reglersystem",                              hp:  5, avancerad: true  },
    { kod: "1DT114",  namn: "Datasäkerhet och integritet",                          hp:  5, avancerad: true  },
    { kod: "1MD043",  namn: "Människa-robotinteraktion",                            hp:  5, avancerad: true  },
    { kod: "1MS048B", namn: "Dataanalysens grundvalar (del 2)",                     hp:  5, avancerad: true  },
];

// ─── Termin 9, Period 1 — profil + valbara ────────────────────────────────────
const ALT_IT_P17 = [
    // Dataanalys
    { kod: "1DL360B", namn: "Informationsutvinning I",                              hp:  5, avancerad: true  },
    { kod: "1DL507",  namn: "Projekt i dataanalys (del 1)",                         hp:  5, avancerad: true,  synkad_med: "1DL507B" },
    // Inbyggda system
    { kod: "1RT495",  namn: "Reglerteknik II",                                      hp:  5, avancerad: true  },
    { kod: "1TE722",  namn: "Öppen fördjupningskurs i inbyggda system",             hp:  5, avancerad: true  },
    // MMS
    { kod: "1DT012C", namn: "IT i samhället (del 1, T9)",                           hp:  5, avancerad: true  },
    // Mjukvaruutveckling
    { kod: "1DL601",  namn: "Underhållsprogrammering",                              hp:  5, avancerad: true  },
    // Valbara
    { kod: "1DT059",  namn: "Modellbaserad utveckling av inbyggd programvara (del 1)", hp: 5, avancerad: true, synkad_med: "1DT059B" },
    { kod: "1TE651",  namn: "Signalbehandling (del 1)",                             hp:  5, avancerad: true,  synkad_med: "1TE651B" },
    { kod: "1MD030",  namn: "Medicinsk informatik",                                 hp:  5, avancerad: true  },
    { kod: "1RT730",  namn: "Stora språkmodeller och sociala konsekvenser av AI",   hp:  5, avancerad: true  },
];

// ─── Termin 9, Period 2 — profil + valbara ────────────────────────────────────
const ALT_IT_P18 = [
    // Dataanalys
    { kod: "1DL507B", namn: "Projekt i dataanalys (del 2)",                         hp: 10, avancerad: true  },
    // Datorsystem
    { kod: "1DT104",  namn: "Projekt i datorsystem",                                hp: 15, avancerad: true  },
    // Inbyggda system
    { kod: "1TE721",  namn: "Projekt i inbyggda system",                            hp: 15, avancerad: true  },
    // MMS
    { kod: "1DT012D", namn: "IT i samhället (del 2, T9)",                           hp: 10, avancerad: true  },
    { kod: "1MD033",  namn: "Icke-exkluderande design och utvärdering",             hp: 15, avancerad: true  },
    // Mjukvaruutveckling
    { kod: "1DL650",  namn: "Projekt i mjukvaruutveckling",                         hp: 15, avancerad: true  },
    // Valbara
    { kod: "1TD354",  namn: "Beräkningsvetenskap för partiella differentialekvationer", hp: 5, avancerad: true },
    { kod: "1TE651B", namn: "Signalbehandling (del 2)",                             hp:  5, avancerad: true  },
    { kod: "1DT059B", namn: "Modellbaserad utveckling av inbyggd programvara (del 2)", hp: 5, avancerad: true },
    { kod: "1TD307",  namn: "Projekt i tillämpad beräkningsvetenskap",              hp: 15, avancerad: true  },
];

// ─── Programpost ──────────────────────────────────────────────────────────────

const informationsteknologiProgram = {
    id: "3300",
    namn: "Civilingenjörsprogrammet i informationsteknologi",
    examenspoang: 300,
    studieplan_url: "https://www.uu.se/utbildning/studieplan?query=10068",
    utbildningsplan_url: "https://www.uu.se/utbildning/utbildningsplan?query=35c9cb52-e58a-11f0-af1e-4773ce254d84",

    examenskrav: [
        { typ: "min-hp",             varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",             beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",   varde: 90,  beskrivning: "Avancerade kurser (A-nivå)" },
    ],

    kurser: [

        // ÅR 1 — Termin 1
        { kod: "1DT051", namn: "Introduktion till informationsteknologi",            hp_per_period: { 1: 10 },       obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA348", namn: "Grundläggande algebra",                             hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1DL201", namn: "Programkonstruktion och datastrukturer",            hp_per_period: { 2: 10, 3: 10 }, obligatorisk: true, avancerad: false, perioder: [2, 3] },
        { kod: "1MA013", namn: "Envariabelanalys",                                  hp_per_period: { 2: 5, 3: 5 },  obligatorisk: true,  avancerad: false, perioder: [2, 3] },

        // ÅR 1 — Termin 2
        { kod: "1DT093", namn: "Datorarkitektur",                                   hp_per_period: { 4: 10 },       obligatorisk: true,  avancerad: false, perioder: [4] },
        { kod: "1MS321", namn: "Sannolikhet och statistik DV",                      hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },

        // ÅR 2 — Termin 3
        { kod: "1DL221", namn: "Imperativ och objektorienterad programmeringsmetodik", hp_per_period: { 5: 10, 6: 10 }, obligatorisk: true, avancerad: false, perioder: [5, 6] },
        { kod: "1MA350", namn: "Linjär algebra I",                                  hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1MA024", namn: "Linjär algebra II",                                 hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },

        // ÅR 2 — Termin 4
        { kod: "1DT003", namn: "Datorsystem med projektarbete",                     hp_per_period: { 7: 10, 8: 10 }, obligatorisk: true, avancerad: false, perioder: [7, 8] },
        { kod: "1MD034", namn: "Systemdesign med ett användarperspektiv",           hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1MA017", namn: "Flervariabelanalys, allmän kurs",                   hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },

        // ÅR 3 — Termin 5
        { kod: "1TE717", namn: "Digitalteknik och elektronik",                      hp_per_period: { 9: 10 },       obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1TD403", namn: "Numeriska metoder och simulering",                  hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1TE746", namn: "Signaler och transformer",                          hp_per_period: { 10: 10 },      obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1DL305", namn: "Databasteknik I DV",                                hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },

        // ÅR 3 — Termin 6
        { kod: "1RT485", namn: "Introduktion till datorbaserade reglersystem",      hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: false, perioder: [11] },
        { kod: "1TE743", namn: "Industriell ekonomi",                               hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: false, perioder: [11] },
        valbar("VAL-IT-T6-ML", 11, 5, ALT_IT_T6P3_ML),
        { kod: "1DT350", namn: "Självständigt arbete i informationsteknologi",      hp_per_period: { 12: 15 },      obligatorisk: true,  avancerad: false, perioder: [12] },

        // ÅR 4 — Termin 7 (profil + valbara)
        valbar("VAL-IT-P13-1", 13, 5, ALT_IT_P13),
        valbar("VAL-IT-P13-2", 13, 5, ALT_IT_P13),
        valbar("VAL-IT-P13-3", 13, 5, ALT_IT_P13),
        valbar("VAL-IT-P14-1", 14, 5, ALT_IT_P14),
        valbar("VAL-IT-P14-2", 14, 5, ALT_IT_P14),
        valbar("VAL-IT-P14-3", 14, 5, ALT_IT_P14),

        // ÅR 4 — Termin 8 (profil + valbara)
        valbar("VAL-IT-P15-1", 15, 5, ALT_IT_P15),
        valbar("VAL-IT-P15-2", 15, 5, ALT_IT_P15),
        valbar("VAL-IT-P15-3", 15, 5, ALT_IT_P15),
        valbar("VAL-IT-P16-1", 16, 5, ALT_IT_P16),
        valbar("VAL-IT-P16-2", 16, 5, ALT_IT_P16),
        valbar("VAL-IT-P16-3", 16, 5, ALT_IT_P16),

        // ÅR 5 — Termin 9 (profil + valbara)
        valbar("VAL-IT-P17-1", 17, 5, ALT_IT_P17),
        valbar("VAL-IT-P17-2", 17, 5, ALT_IT_P17),
        valbar("VAL-IT-P17-3", 17, 5, ALT_IT_P17),
        valbar("VAL-IT-P18-1", 18, 5, ALT_IT_P18),
        valbar("VAL-IT-P18-2", 18, 5, ALT_IT_P18),
        valbar("VAL-IT-P18-3", 18, 5, ALT_IT_P18),

        // ÅR 5 — Termin 10
        { kod: "1DT960", namn: "Examensarbete i informationsteknologi",             hp_per_period: { 19: 30 },      obligatorisk: true,  avancerad: true,  perioder: [19] },
    ]
};