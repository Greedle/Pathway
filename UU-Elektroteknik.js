// UU - Civilingenjörsprogrammet i elektroteknik.js
// Studieplan giltig från höstterminen 2026
// Source: https://www.uu.se/utbildning/studieplan?query=10066

const ALT_ELEKTRO_T7P1 = [
    { kod: "1TE029",  namn: "Vattenkraft - teknik och system (del 1)",  hp: 5, avancerad: true,  synkad_med: "1TE029B" },
    { kod: "1TE690",  namn: "Elkraftteknisk mätteknik",                 hp: 5, avancerad: true  },
    { kod: "1TE651",  namn: "Signalbehandling (del 1)",                 hp: 5, avancerad: true,  synkad_med: "1TE651B" },
    { kod: "1RT495",  namn: "Reglerteknik II",                          hp: 5, avancerad: true  },
];

const ALT_ELEKTRO_T7P2 = [
    { kod: "1TE029B", namn: "Vattenkraft - teknik och system (del 2)",  hp: 5, avancerad: true  },
    { kod: "1TE626",  namn: "Elektromagnetism II",                      hp: 5, avancerad: false },
    { kod: "1TE726",  namn: "Analys av eldistributionsnät",             hp: 5, avancerad: true  },
    { kod: "1TE766",  namn: "Kraftelektronik II",                       hp: 5, avancerad: true  },
    { kod: "1EL021",  namn: "Högspänningsteknik",                       hp: 5, avancerad: true  },
    { kod: "1TE651B", namn: "Signalbehandling (del 2)",                 hp: 5, avancerad: true  },
    { kod: "1TE663",  namn: "Programmering av enkapseldatorer (del 1)", hp: 5, avancerad: true,  synkad_med: "1TE663B" },
];

const ALT_ELEKTRO_T8P1 = [
    { kod: "1TE078",  namn: "Modern fysik",                             hp: 5, avancerad: false },
    { kod: "1TE038",  namn: "Vindkraft - teknik och system (del 1)",    hp: 5, avancerad: true,  synkad_med: "1TE038B" },
    { kod: "1TE043",  namn: "Vågkraft - teknik och system (del 1)",     hp: 5, avancerad: true,  synkad_med: "1TE043B" },
    { kod: "1TE737",  namn: "Nätanslutning av variabla källor",         hp: 5, avancerad: true  },
    { kod: "1TE663B", namn: "Programmering av enkapseldatorer (del 2)", hp: 5, avancerad: true  },
    { kod: "1TE747",  namn: "Digital kommunikation (del 1)",            hp: 5, avancerad: true,  synkad_med: "1TE747B" },
];

const ALT_ELEKTRO_T8P2 = [
    { kod: "1TE038B", namn: "Vindkraft - teknik och system (del 2)",    hp: 5, avancerad: true  },
    { kod: "1TE043B", namn: "Vågkraft - teknik och system (del 2)",     hp: 5, avancerad: true  },
    { kod: "1TE692",  namn: "Elektriska framdrivningssystem",           hp: 5, avancerad: true  },
    { kod: "1TD352",  namn: "Beräkningsvetenskap för dataanalys",       hp: 5, avancerad: false },
    { kod: "1EL843",  namn: "HVAC- och HVDC-kabelsystem",               hp: 5, avancerad: true  },
    { kod: "1TD722",  namn: "Programmeringsteknik II",                  hp: 5, avancerad: false },
    { kod: "1TE747B", namn: "Digital kommunikation (del 2)",            hp: 5, avancerad: true  },
];

const ALT_ELEKTRO_T9P1 = [
    { kod: "1KB274",  namn: "Batterier och lagring",                    hp: 5, avancerad: true  },
    { kod: "1TE700",  namn: "Elkraftsystemanalys (del 1)",              hp: 5, avancerad: true,  synkad_med: "1TE700B" },
    { kod: "1TE678",  namn: "Solenergitekniker för elgenerering",       hp: 5, avancerad: true  },
    { kod: "1EL019",  namn: "Transformatorer i transmissionssystem",    hp: 5, avancerad: true  },
    { kod: "1TM005",  namn: "Teknik i extrema miljöer",                 hp: 5, avancerad: true  },
    { kod: "1TE039",  namn: "Halvledarelektronik",                      hp: 5, avancerad: true  },
    { kod: "1RT496",  namn: "Reglerteknik III",                         hp: 5, avancerad: true  },
];

const ALT_ELEKTRO_T9P2 = [
    { kod: "1TE700B", namn: "Elkraftsystemanalys (del 2)",              hp:  5, avancerad: true  },
    { kod: "1TE065",  namn: "Generatordesign",                          hp: 10, avancerad: true  },
    { kod: "1TE675",  namn: "Projekt i elektroteknik",                  hp: 15, avancerad: true  },
    { kod: "1EL017",  namn: "Batterisystemteknik",                      hp:  5, avancerad: true  },
    { kod: "1EL018",  namn: "Kraftelektronik i transmissionssystem",    hp:  5, avancerad: true  },
];

// ─── Programpost ──────────────────────────────────────────────────────────────

const elektroteknkProgram = {
    id: "2800",
    namn: "Civilingenjörsprogrammet i elektroteknik",
    examenspoang: 300,
    studieplan_url: "https://www.uu.se/utbildning/studieplan?query=1905",
    utbildningsplan_url: "https://www.uu.se/utbildning/utbildningsplan?query=36d3664e-e57a-11f0-af1e-4773ce254d84",

    examenskrav: [
        { typ: "min-hp",             varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",             beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",   varde: 90,  beskrivning: "Avancerade kurser (A-nivå)" },
    ],

    kurser: [

        // ÅR 1 — Termin 1
        { kod: "1TE705", namn: "Introduktion till elektroteknik",                     hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1TE704", namn: "Elektroteknikens grunder I: Komponenter och kretsar", hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA090", namn: "Algebra och geometri",                                hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA013", namn: "Envariabelanalys",                                    hp_per_period: { 2: 5, 3: 5 },  obligatorisk: true,  avancerad: false, perioder: [2, 3] },
        { kod: "1TE667", namn: "Elektroteknikens grunder II: Kretsteori",             hp_per_period: { 2: 5 },        obligatorisk: true,  avancerad: false, perioder: [2] },
        { kod: "1TE668", namn: "Projektarbete i elektroteknik",                       hp_per_period: { 2: 5, 3: 10 }, obligatorisk: true,  avancerad: false, perioder: [2, 3] },

        // ÅR 1 — Termin 2
        { kod: "1TE669", namn: "Elektroteknikens grunder III: Fältteori",             hp_per_period: { 4: 10 },       obligatorisk: true,  avancerad: false, perioder: [4] },
        { kod: "1MS005", namn: "Sannolikhet och statistik",                           hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },

        // ÅR 2 — Termin 3
        { kod: "1TE770", namn: "Analog elektronik",                                   hp_per_period: { 5: 10 },       obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1TD433", namn: "Programmeringsteknik I",                              hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1TE771", namn: "Digital elektronik",                                  hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1EL995", namn: "Elektronikprojekt",                                   hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1MA034", namn: "Transformmetoder",                                    hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },

        // ÅR 2 — Termin 4
        { kod: "1TE791", namn: "Elkraftteknik med laborationer",                      hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1MA016", namn: "Flervariabelanalys",                                  hp_per_period: { 7: 5, 8: 5 },  obligatorisk: true,  avancerad: false, perioder: [7, 8] },
        { kod: "1FA104", namn: "Mekanik",                                             hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1TE301", namn: "Mätteknik och sensorer",                              hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1TD342", namn: "Introduktion till beräkningsvetenskap",               hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },

        // ÅR 3 — Termin 5
        { kod: "1TE300", namn: "Kraftelektronik",                                     hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1TE743", namn: "Industriell ekonomi",                                 hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1MA024", namn: "Linjär algebra II",                                   hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1TE689", namn: "Grafisk programmering i LabVIEW",                     hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1RT490", namn: "Reglerteknik I",                                      hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1FA527", namn: "Teknisk termodynamik",                                hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },

        // ÅR 3 — Termin 6
        { kod: "1FA522",  namn: "Vågor och optik",                                    hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: false, perioder: [11] },
        { kod: "1TE670",  namn: "Roterande elektriska maskiner",                      hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: false, perioder: [11] },
        { kod: "1TE301B", namn: "Mätteknik och sensorer",                             hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: false, perioder: [11] },
        { kod: "1TE708",  namn: "Självständigt arbete i elektroteknik",               hp_per_period: { 12: 15 },      obligatorisk: true,  avancerad: false, perioder: [12] },

        // ÅR 4 — Termin 7 (valbara)
        valbar("VAL-ELEKTRO-T7P1-1", 13, 5, ALT_ELEKTRO_T7P1),
        valbar("VAL-ELEKTRO-T7P1-2", 13, 5, ALT_ELEKTRO_T7P1),
        valbar("VAL-ELEKTRO-T7P1-3", 13, 5, ALT_ELEKTRO_T7P1),
        valbar("VAL-ELEKTRO-T7P2-1", 14, 5, ALT_ELEKTRO_T7P2),
        valbar("VAL-ELEKTRO-T7P2-2", 14, 5, ALT_ELEKTRO_T7P2),
        valbar("VAL-ELEKTRO-T7P2-3", 14, 5, ALT_ELEKTRO_T7P2),

        // ÅR 4 — Termin 8 (valbara)
        valbar("VAL-ELEKTRO-T8P1-1", 15, 5, ALT_ELEKTRO_T8P1),
        valbar("VAL-ELEKTRO-T8P1-2", 15, 5, ALT_ELEKTRO_T8P1),
        valbar("VAL-ELEKTRO-T8P1-3", 15, 5, ALT_ELEKTRO_T8P1),
        valbar("VAL-ELEKTRO-T8P2-1", 16, 5, ALT_ELEKTRO_T8P2),
        valbar("VAL-ELEKTRO-T8P2-2", 16, 5, ALT_ELEKTRO_T8P2),
        valbar("VAL-ELEKTRO-T8P2-3", 16, 5, ALT_ELEKTRO_T8P2),

        // ÅR 5 — Termin 9 (valbara)
        valbar("VAL-ELEKTRO-T9P1-1", 17, 5, ALT_ELEKTRO_T9P1),
        valbar("VAL-ELEKTRO-T9P1-2", 17, 5, ALT_ELEKTRO_T9P1),
        valbar("VAL-ELEKTRO-T9P1-3", 17, 5, ALT_ELEKTRO_T9P1),
        valbar("VAL-ELEKTRO-T9P2-1", 18, 5, ALT_ELEKTRO_T9P2),
        valbar("VAL-ELEKTRO-T9P2-2", 18, 5, ALT_ELEKTRO_T9P2),
        valbar("VAL-ELEKTRO-T9P2-3", 18, 5, ALT_ELEKTRO_T9P2),

        // ÅR 5 — Termin 10
        { kod: "1TE706", namn: "Examensarbete i elektroteknik", hp_per_period: { 19: 30 }, obligatorisk: true, avancerad: true, perioder: [19] },
    ]
};