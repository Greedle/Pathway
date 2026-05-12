// UU - TekniskFysik.js
// Studieplan giltig från och med höstterminen 2026
// Source: https://www.uu.se/utbildning/studieplan?query=10073

// ─── Termin 6, Period 3 — valbara (en av två) ────────────────────────────────
const ALT_TF_T6P3 = [
    { kod: "1KB204", namn: "Elektrokemi",      hp: 5, avancerad: false },
    { kod: "1KB207", namn: "Polymera material", hp: 5, avancerad: false },
];

// ─── Termin 7, Period 2 — kursblock (väljs ihop i grupper om 15hp) ───────────
const ALT_TF_P14 = [
    // Basblock i mikro- och nanoteknik
    { kod: "1TE016",  namn: "Tunnfilmsteknik I",                                   hp:  5, avancerad: true  },
    { kod: "1TE015",  namn: "Mikro- och nanoteknik I",                             hp:  5, avancerad: true  },
    { kod: "1TM548",  namn: "Nanomaterial för energi- och miljötillämpningar",     hp:  5, avancerad: true  },
    // Basblock i materialtillverkning och modellering
    { kod: "1KB281",  namn: "Materialtillverkning I",                              hp:  5, avancerad: true  },
    { kod: "1TM112",  namn: "Datorbaserad materialmekanik I",                      hp:  5, avancerad: true  },
    { kod: "1TD396",  namn: "Datoriserad bildanalys I",                            hp:  5, avancerad: true  },
];

// ─── Termin 8, Period 3 ───────────────────────────────────────────────────────
const ALT_TF_P15 = [
    // Basblock i tillverkning och tillämpning
    { kod: "1TM009",  namn: "Additiv tillverkning",                                hp:  5, avancerad: true  },
    { kod: "1TE022",  namn: "Tribomaterial",                                       hp:  5, avancerad: true  },
    { kod: "1TG310",  namn: "Fasta tillståndets fysik II",                         hp:  5, avancerad: true  },
    // Fördjupningsblock i mikro- och nanoteknik
    { kod: "1TE018",  namn: "Mikro- och nanoteknik II",                            hp:  5, avancerad: true  },
    { kod: "1TE741",  namn: "Tunnfilmsteknik II",                                  hp:  5, avancerad: true  },
    // Fördjupningsblock i mikro- och nanoteknik med inriktning biomaterial
    { kod: "1KB263",  namn: "Biomaterial I",                                       hp:  5, avancerad: true  },
    { kod: "1TM034",  namn: "Bio-MEMS och organs-on-chip",                         hp:  5, avancerad: true  },
];

// ─── Termin 8, Period 4 ───────────────────────────────────────────────────────
const ALT_TF_P16 = [
    // Basblock i material för energitillämpningar
    { kod: "1TM003",  namn: "Optiska material",                                    hp:  5, avancerad: true  },
    { kod: "1TM002",  namn: "Magnetiska material",                                 hp:  5, avancerad: true  },
    { kod: "1TE024",  namn: "Material i energisystem I",                           hp:  5, avancerad: true  },
    // Basblock i materialmodellering
    { kod: "1KB566",  namn: "Elektroniska och atomistiska simuleringsmetoder för material", hp: 5, avancerad: true },
    { kod: "1TE649",  namn: "CAD med FEM",                                         hp:  5, avancerad: false },
    // Fördjupningsblock i mikro- och nanoteknik med inriktning biomaterial
    { kod: "1KB264",  namn: "Biomaterial II",                                      hp:  5, avancerad: true  },
    { kod: "1TE698",  namn: "Nanoteknik för industriella tillämpningar inom life science", hp: 5, avancerad: true },
    { kod: "1KB311",  namn: "Mjuka ytor och kolloidala system",                    hp:  5, avancerad: true  },
];

// ─── Termin 9, Period 1 ───────────────────────────────────────────────────────
const ALT_TF_P17 = [
    // Basblock i materialanalys
    { kod: "1TE074",  namn: "Avancerad materialanalys",                            hp:  5, avancerad: true  },
    { kod: "1FA457",  namn: "Livscykelanalyser för energi och material",           hp:  5, avancerad: true  },
    { kod: "1KB570",  namn: "Försöksplanering, datahantering och statistisk analys för materialvetare", hp: 5, avancerad: true },
    // Fördjupningsblock i material för energitillämpningar
    { kod: "1TE071",  namn: "Material i energisystem II",                          hp:  5, avancerad: true  },
    { kod: "1KB349",  namn: "Avancerad solcells- och batteriteknik",               hp:  5, avancerad: true  },
];

// ─── Termin 9, Period 2 — projektkurs (ett block krävs härifrån) ──────────────
const ALT_TF_P18 = [
    // Fördjupningsblock projektkurser (10hp)
    { kod: "1TE072",  namn: "Projektkurs i mikro/nanoteknik",                      hp: 10, avancerad: true  },
    { kod: "1TM135",  namn: "Projektkurs i material för medicinska tillämpningar", hp: 10, avancerad: true  },
    { kod: "1TM004",  namn: "Projektkurs i fasta tillståndets fysik",              hp: 10, avancerad: true  },
    { kod: "1TM007",  namn: "Projektkurs i tribomaterial",                         hp: 10, avancerad: true  },
    // Valbara (5hp)
    { kod: "1TE016B", namn: "Tunnfilmsteknik I",                                   hp:  5, avancerad: true  },
    { kod: "1TE015B", namn: "Mikro- och nanoteknik I",                             hp:  5, avancerad: true  },
    { kod: "1TM548B", namn: "Nanomaterial för energi- och miljötillämpningar",     hp:  5, avancerad: true  },
    { kod: "1KB281B", namn: "Materialtillverkning I",                              hp:  5, avancerad: true  },
    { kod: "1TM112B", namn: "Datorbaserad materialmekanik I",                      hp:  5, avancerad: true  },
    { kod: "1TD396B", namn: "Datoriserad bildanalys I",                            hp:  5, avancerad: true  },
    { kod: "1TM128",  namn: "Additiv tillverkning i medicinska tillämpningar",     hp:  5, avancerad: true  },
    { kod: "1KB288",  namn: "Materialanalys vid stora forskningsinfrastrukturer",  hp:  5, avancerad: true  },
];

// ─── Programpost ──────────────────────────────────────────────────────────────

const tekniskFysikMedMaterialvetenskapProgram = {
    id: "3400",
    namn: "Civilingenjörsprogrammet i teknisk fysik med materialvetenskap",
    examenspoang: 300,
    studieplan_url: "https://www.uu.se/utbildning/studieplan?query=10073",
    utbildningsplan_url: "https://www.uu.se/utbildning/utbildningsplan?query=fb248f96-e58a-11f0-af1e-4773ce254d84",

    examenskrav: [
        { typ: "min-hp",             varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",             beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",   varde: 90,  beskrivning: "Avancerade kurser (A-nivå)" },
    ],

    kurser: [

        // ÅR 1 — Termin 1
        { kod: "1TE610", namn: "Introduktion till materialvetenskap",              hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA090", namn: "Algebra och geometri",                             hp_per_period: { 1: 5 },        obligatorisk: true,  avancerad: false, perioder: [1] },
        { kod: "1MA013", namn: "Envariabelanalys",                                 hp_per_period: { 1: 5, 2: 5 },  obligatorisk: true,  avancerad: false, perioder: [1, 2] },
        { kod: "1FA105", namn: "Mekanik baskurs",                                  hp_per_period: { 2: 5, 3: 5 },  obligatorisk: true,  avancerad: false, perioder: [2, 3] },
        { kod: "1TD433", namn: "Programmeringsteknik I",                           hp_per_period: { 2: 5 },        obligatorisk: true,  avancerad: false, perioder: [2] },

        // ÅR 1 — Termin 2
        { kod: "1MA017", namn: "Flervariabelanalys, allmän kurs",                  hp_per_period: { 3: 5 },        obligatorisk: true,  avancerad: false, perioder: [3] },
        { kod: "1FA513", namn: "Mätteknik",                                        hp_per_period: { 3: 5 },        obligatorisk: true,  avancerad: false, perioder: [3] },
        { kod: "1KB201", namn: "Grundläggande materialkemi",                       hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },
        { kod: "1FA514", namn: "Elektromagnetism I",                               hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },
        { kod: "1FA102", namn: "Mekanik II",                                       hp_per_period: { 4: 5 },        obligatorisk: true,  avancerad: false, perioder: [4] },

        // ÅR 2 — Termin 3
        { kod: "1MA024", namn: "Linjär algebra II",                                hp_per_period: { 5: 5 },        obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1TE635", namn: "Hållfasthetslära",                                 hp_per_period: { 5: 10 },       obligatorisk: true,  avancerad: false, perioder: [5] },
        { kod: "1TD342", namn: "Introduktion till beräkningsvetenskap",            hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1TM141", namn: "Materialutveckling",                               hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },
        { kod: "1MA034", namn: "Transformmetoder",                                 hp_per_period: { 6: 5 },        obligatorisk: true,  avancerad: false, perioder: [6] },

        // ÅR 2 — Termin 4
        { kod: "1KB282", namn: "Hållbar utveckling ur ett materialperspektiv",     hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1FA121", namn: "Fysikens matematiska metoder",                     hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1FA522", namn: "Vågor och optik",                                  hp_per_period: { 7: 5 },        obligatorisk: true,  avancerad: false, perioder: [7] },
        { kod: "1KB300", namn: "Kemisk termodynamik",                              hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1MS005", namn: "Sannolikhet och statistik",                        hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },
        { kod: "1KB501", namn: "Kvantmekanik och kemisk bindning I",               hp_per_period: { 8: 5 },        obligatorisk: true,  avancerad: false, perioder: [8] },

        // ÅR 3 — Termin 5
        { kod: "1KB211", namn: "Fasta tillståndets kemi",                          hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1KB502", namn: "Kvantmekanik och kemisk bindning II",              hp_per_period: { 9: 5 },        obligatorisk: true,  avancerad: false, perioder: [9] },
        { kod: "1KB210", namn: "Materialkemi",                                     hp_per_period: { 9: 5, 10: 5 }, obligatorisk: true,  avancerad: false, perioder: [9, 10] },
        { kod: "1TG300", namn: "Fasta tillståndets fysik I",                       hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },
        { kod: "1TM142", namn: "Nanomaterialens fysik och kemi",                   hp_per_period: { 10: 5 },       obligatorisk: true,  avancerad: false, perioder: [10] },

        // ÅR 3 — Termin 6
        { kod: "1TM143", namn: "Tekniska material",                                hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: false, perioder: [11] },
        { kod: "1TM144", namn: "Ytavbildning",                                     hp_per_period: { 11: 5 },       obligatorisk: true,  avancerad: false, perioder: [11] },
        valbar("VAL-TF-T6P3", 11, 5, ALT_TF_T6P3),
        { kod: "1TM000", namn: "Självständigt arbete i teknisk fysik med materialvetenskap", hp_per_period: { 12: 15 }, obligatorisk: true, avancerad: false, perioder: [12] },

        // ÅR 4 — Termin 7
        { kod: "1TM146", namn: "Yt- och materialanalys",                           hp_per_period: { 13: 5 },       obligatorisk: true,  avancerad: true,  perioder: [13] },
        { kod: "1TM006", namn: "Ytteknik och materialval för funktion och design", hp_per_period: { 13: 5 },       obligatorisk: true,  avancerad: true,  perioder: [13] },
        { kod: "1KB260", namn: "Ytors fysik och kemi",                             hp_per_period: { 13: 5 },       obligatorisk: true,  avancerad: true,  perioder: [13] },
        valbar("VAL-TF-P14-1", 14, 5, ALT_TF_P14),
        valbar("VAL-TF-P14-2", 14, 5, ALT_TF_P14),
        valbar("VAL-TF-P14-3", 14, 5, ALT_TF_P14),

        // ÅR 4 — Termin 8
        valbar("VAL-TF-P15-1", 15, 5, ALT_TF_P15),
        valbar("VAL-TF-P15-2", 15, 5, ALT_TF_P15),
        valbar("VAL-TF-P15-3", 15, 5, ALT_TF_P15),
        valbar("VAL-TF-P16-1", 16, 5, ALT_TF_P16),
        valbar("VAL-TF-P16-2", 16, 5, ALT_TF_P16),
        valbar("VAL-TF-P16-3", 16, 5, ALT_TF_P16),

        // ÅR 5 — Termin 9
        valbar("VAL-TF-P17-1", 17, 5,  ALT_TF_P17),
        valbar("VAL-TF-P17-2", 17, 5,  ALT_TF_P17),
        valbar("VAL-TF-P17-3", 17, 5,  ALT_TF_P17),
        valbar("VAL-TF-P18-1", 18, 5,  ALT_TF_P18),
        valbar("VAL-TF-P18-2", 18, 5,  ALT_TF_P18),
        valbar("VAL-TF-P18-3", 18, 5,  ALT_TF_P18),

        // ÅR 5 — Termin 10
        { kod: "1TE860", namn: "Examensarbete i teknisk fysik med materialvetenskap", hp_per_period: { 19: 30 },   obligatorisk: true,  avancerad: true,  perioder: [19] },
    ]
};