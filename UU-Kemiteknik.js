// ─────────────────────────────────────────────────────────────────────────────
// Civilingenjörsprogrammet i kemiteknik (TKT2Y)
// Studieplan giltig från höstterminen 2024, version 2
// Source: https://www.uu.se/utbildning/studieplan?query=3384
//
// Alla inriktningskurser (Material + Läkemedel) är samlade per period.
// Studenten väljer själv de kurser som passar sin inriktning.
// ─────────────────────────────────────────────────────────────────────────────

const ALT_KEM_P9 = [
    { kod: "1KB211",  namn: "Fasta tillståndets kemi",                          hp:  5, avancerad: false },
    { kod: "1KB502",  namn: "Kvantmekanik och kemisk bindning II",               hp:  5, avancerad: false },
    { kod: "1KB210",  namn: "Materialkemi (del 1)",                              hp:  5, avancerad: false, synkad_med: "1KB210B" },
    { kod: "3FF218",  namn: "Fysiologi och molekylär cellbiologi (del 1)",       hp:  5, avancerad: false, synkad_med: "3FF218B" },
    { kod: "1KB444",  namn: "Preparativ organisk kemi",                          hp: 10, avancerad: false },
];

const ALT_KEM_P10 = [
    { kod: "1KB210B", namn: "Materialkemi (del 2)",                              hp:  5, avancerad: false },
    { kod: "1KB705",  namn: "Kemisk apparatteknik",                              hp: 10, avancerad: false },
    { kod: "3FF218B", namn: "Fysiologi och molekylär cellbiologi (del 2)",       hp:  5, avancerad: false },
    { kod: "1KB428",  namn: "Biokemisk teknik",                                  hp: 10, avancerad: false },
];

const ALT_KEM_P11 = [
    { kod: "1TM143",  namn: "Tekniska material",                                 hp:  5,   avancerad: false },
    { kod: "1TM144",  namn: "Ytavbildning",                                      hp:  5,   avancerad: false },
    { kod: "1KB204",  namn: "Elektrokemi",                                       hp:  5,   avancerad: false },
    { kod: "3FF219",  namn: "Farmakologi för civilingenjörsstudenter",           hp:  7.5, avancerad: false },
    { kod: "3FK150",  namn: "Läkemedelskemi",                                   hp:  7.5, avancerad: false },
];

const ALT_KEM_P13 = [
    { kod: "1TM146",  namn: "Yt- och materialanalys",                            hp:  5,   avancerad: true  },
    { kod: "1KB260",  namn: "Ytors fysik och kemi",                              hp:  5,   avancerad: true  },
    { kod: "1TM006",  namn: "Ytteknik och materialval för funktion och design",  hp:  5,   avancerad: true  },
    { kod: "3FG202",  namn: "Galenisk farmaci",                                 hp:  7.5, avancerad: false },
    { kod: "1KB465",  namn: "Organisk-kemisk spektroskopi",                     hp:  7.5, avancerad: true  },
];

const ALT_KEM_P14 = [
    { kod: "1KB281",  namn: "Materialtillverkning I",                            hp:  5,   avancerad: true  },
    { kod: "1TG300",  namn: "Fasta tillståndets fysik I",                        hp:  5,   avancerad: false },
    { kod: "1TE015",  namn: "Mikro- och nanoteknik I",                           hp:  5,   avancerad: true  },
    { kod: "1TE016",  namn: "Tunnfilmsteknik I",                                 hp:  5,   avancerad: true  },
    { kod: "3FG203",  namn: "Läkemedelsformulering",                            hp:  7.5, avancerad: true  },
    { kod: "3FF216",  namn: "Farmakokinetik",                                   hp:  7.5, avancerad: false },
];

const ALT_KEM_P15 = [
    { kod: "1KB286",  namn: "Materialsyntes",                                    hp:  5,   avancerad: true  },
    { kod: "1TE018",  namn: "Mikro- och nanoteknik II",                          hp:  5,   avancerad: true  },
    { kod: "1TE741",  namn: "Tunnfilmsteknik II",                                hp:  5,   avancerad: true  },
    { kod: "1KB263",  namn: "Biomaterial I",                                     hp:  5,   avancerad: true  },
    { kod: "1TE022",  namn: "Tribomaterial",                                     hp:  5,   avancerad: true  },
    { kod: "1TM132",  namn: "MEMS för tillämpningar inom life science",          hp:  5,   avancerad: true  },
    { kod: "1KB729",  namn: "Syntes av batterimaterial",                         hp:  5,   avancerad: true  },
    { kod: "1KB717",  namn: "Tillämpad elektrokemi",                             hp: 10,   avancerad: true  },
    { kod: "1TM009",  namn: "Additiv tillverkning",                              hp:  5,   avancerad: true  },
    { kod: "1TM105",  namn: "Additiv tillverkning i polymera material",          hp:  5,   avancerad: true  },
    { kod: "1KB470",  namn: "NMR-spektroskopi II",                               hp:  5,   avancerad: true  },
    { kod: "3FF209",  namn: "Tillämpad farmaceutisk strukturbioinformatik",      hp:  5,   avancerad: true  },
    { kod: "1KB431",  namn: "Beräkningskemi för biologiska makromolekyler",      hp: 10,   avancerad: true  },
    { kod: "3FB028",  namn: "Biologiska läkemedel I",                            hp:  7.5, avancerad: true  },
    { kod: "1KB429",  namn: "Utveckling av biologiska läkemedel",                hp:  7.5, avancerad: true  },
    { kod: "3FG288",  namn: "Molekylär biofarmaci",                              hp:  7.5, avancerad: true  },
    { kod: "3FN209",  namn: "Biologiskt aktiva naturprodukter i läkemedelsutveckling", hp: 7.5, avancerad: true },
    { kod: "3FF275",  namn: "Farmaceutisk bioinformatik",                        hp:  7.5, avancerad: true  },
    { kod: "3FK229",  namn: "Läkemedelsutveckling",                              hp:  7.5, avancerad: true  },
    { kod: "3FK219",  namn: "Läkemedelskemi med datorbaserad läkemedelsdesign",  hp:  7.5, avancerad: true  },
    { kod: "3FB207",  namn: "Modeller för biologiska system",                    hp:  7.5, avancerad: true  },
    { kod: "3FF276",  namn: "Farmaceutisk bioinformatik med sekvensanalys",      hp:  7.5, avancerad: true  },
    { kod: "3FF036",  namn: "Artificiell intelligens inom läkemedelsutveckling", hp:  7.5, avancerad: true  },
    { kod: "3FF037",  namn: "Laboratorieautomation i biovetenskap",              hp:  7.5, avancerad: true  },
    { kod: "1KB483",  namn: "Kemisk molekylär design",                           hp: 10,   avancerad: true  },
];

const ALT_KEM_P16 = [
    { kod: "1TM002",  namn: "Magnetiska material",                               hp:  5,   avancerad: true  },
    { kod: "1TM003",  namn: "Optiska material",                                  hp:  5,   avancerad: true  },
    { kod: "1KB264",  namn: "Biomaterial II",                                    hp:  5,   avancerad: true  },
    { kod: "1TE024",  namn: "Material i energisystem I",                         hp:  5,   avancerad: true  },
    { kod: "1KB311",  namn: "Mjuka ytor och kolloidala system",                  hp:  5,   avancerad: true  },
    { kod: "1KB265",  namn: "Avancerad materialsyntes",                          hp:  5,   avancerad: true  },
    { kod: "1KB566",  namn: "Elektroniska och atomistiska simuleringsmetoder",   hp:  5,   avancerad: true  },
    { kod: "1KB271",  namn: "Avancerad elektrokemi",                             hp: 10,   avancerad: true  },
    { kod: "1KB738",  namn: "Återuppladdningsbara batterier",                    hp: 10,   avancerad: true  },
    { kod: "1TM106",  namn: "Additiv tillverkning i metalliska och keramiska material", hp: 10, avancerad: true },
    { kod: "3FK214",  namn: "Analytisk kemi i läkemedelsutveckling",             hp: 15,   avancerad: true  },
];

const ALT_KEM_P17 = [
    { kod: "1KB268",  namn: "Material för hållbar utveckling (del 1)",           hp:  5,   avancerad: true, synkad_med: "1KB268B" },
    { kod: "1KB570",  namn: "Försöksplanering, datahantering och statistisk analys", hp: 5, avancerad: true },
    { kod: "1TM109",  namn: "Nanoporösa material med tillämpningar",             hp:  5,   avancerad: true  },
    { kod: "1KB269",  namn: "Kemisk energilagring",                              hp:  5,   avancerad: true  },
    { kod: "1TE071",  namn: "Material i energisystem II",                        hp:  5,   avancerad: true  },
    { kod: "1TE074",  namn: "Avancerad materialanalys",                          hp:  5,   avancerad: true  },
    { kod: "1KB747",  namn: "Avancerade batterimaterial",                        hp:  5,   avancerad: true  },
    { kod: "1TM125",  namn: "Efterbearbetning och ytbehandling",                 hp:  5,   avancerad: true  },
    { kod: "1KB480",  namn: "Organisk syntes",                                   hp: 15,   avancerad: true  },
];

const ALT_KEM_P18 = [
    { kod: "1KB268B", namn: "Material för hållbar utveckling (del 2)",           hp:  5,   avancerad: true  },
    { kod: "1KB288",  namn: "Materialanalys vid stora forskningsinfrastrukturer", hp:  5,   avancerad: true  },
    { kod: "1KB741",  namn: "Framtidsperspektiv inom cellkemi",                  hp:  5,   avancerad: true  },
    { kod: "1TM104",  namn: "Metallpulvertillverkning",                          hp:  5,   avancerad: true  },
    { kod: "1TE072",  namn: "Projektkurs i mikro/nanoteknik",                    hp: 10,   avancerad: true  },
    { kod: "1KB360",  namn: "Molekylära material",                               hp: 10,   avancerad: true  },
    { kod: "1TM007",  namn: "Projektkurs i tribomaterial",                       hp: 10,   avancerad: true  },
    { kod: "1TM135",  namn: "Projektkurs i material för medicinska tillämpningar", hp: 10, avancerad: true  },
    { kod: "3FX221",  namn: "Toxikologi för civilingenjörsstudenter",            hp:  7.5, avancerad: true  },
    { kod: "3FG240",  namn: "Läkemedel - kvalitetssäkring och regulatoriska krav", hp: 7.5, avancerad: true },
    { kod: "3FK228",  namn: "Tillämpad läkemedelsanalys",                        hp:  7.5, avancerad: true  },
    { kod: "3FF206",  namn: "Läkemedelsmissbruk och beroendelära",               hp:  7.5, avancerad: true  },
    { kod: "3FG289",  namn: "Preklinisk och klinisk dataanalys",                 hp:  7.5, avancerad: true  },
    { kod: "3FG013",  namn: "Introduktion till nanomedicin",                     hp:  7.5, avancerad: true  },
    { kod: "1KB759",  namn: "Processteknisk modellering",                        hp:  7.5, avancerad: true  },
    { kod: "1KB430",  namn: "Projekt i utveckling av biologiska läkemedel",      hp:  7.5, avancerad: true  },
];

// ─── Programpost ──────────────────────────────────────────────────────────────

const kemiteknikProgram = {
    id: "2900",
    namn: "Civilingenjörsprogrammet i kemiteknik",
    examenspoang: 300,

    examenskrav: [
        { typ: "min-hp",             varde: 300, beskrivning: "Totalt antal HP" },
        { typ: "alla-obligatoriska",             beskrivning: "Alla obligatoriska kurser" },
        { typ: "min-hp-avancerad",   varde: 90,  beskrivning: "Avancerade kurser (A-nivå)" },
    ],

    kurser: [

        // ÅR 1 — Termin 1
        { kod: "1KB016", namn: "Allmän kemi",                    hp_per_period: { 1: 10 },       obligatorisk: true, avancerad: false, perioder: [1] },
        { kod: "1MA010", namn: "Baskurs i matematik",            hp_per_period: { 1: 5 },        obligatorisk: true, avancerad: false, perioder: [1] },
        { kod: "1KB410", namn: "Organisk kemi I",                hp_per_period: { 2: 10 },       obligatorisk: true, avancerad: false, perioder: [2] },
        { kod: "1MA025", namn: "Linjär algebra och geometri I",  hp_per_period: { 2: 5 },        obligatorisk: true, avancerad: false, perioder: [2] },

        // ÅR 1 — Termin 2
        { kod: "1MA013", namn: "Envariabelanalys",               hp_per_period: { 3: 5, 4: 5 },  obligatorisk: true, avancerad: false, perioder: [3, 4] },
        { kod: "1TD433", namn: "Programmeringsteknik I",         hp_per_period: { 3: 5 },        obligatorisk: true, avancerad: false, perioder: [3] },
        { kod: "1KB408", namn: "Biokemi I",                      hp_per_period: { 3: 5 },        obligatorisk: true, avancerad: false, perioder: [3] },
        { kod: "1KB208", namn: "Oorganisk kemi I",               hp_per_period: { 4: 10 },       obligatorisk: true, avancerad: false, perioder: [4] },

        // ÅR 2 — Termin 3
        { kod: "1MA016", namn: "Flervariabelanalys",             hp_per_period: { 5: 5, 6: 5 },  obligatorisk: true, avancerad: false, perioder: [5, 6] },
        { kod: "1KB103", namn: "Analytisk kemi med mätvärdesbehandling och kemometri", hp_per_period: { 5: 5, 6: 5 }, obligatorisk: true, avancerad: false, perioder: [5, 6] },
        { kod: "1MS005", namn: "Sannolikhet och statistik",      hp_per_period: { 5: 5 },        obligatorisk: true, avancerad: false, perioder: [5] },
        { kod: "1TD342", namn: "Introduktion till beräkningsvetenskap", hp_per_period: { 6: 5 }, obligatorisk: true, avancerad: false, perioder: [6] },

        // ÅR 2 — Termin 4
        { kod: "1KB308", namn: "Fysikalisk kemi",                hp_per_period: { 7: 10 },       obligatorisk: true, avancerad: false, perioder: [7] },
        { kod: "1FA104", namn: "Mekanik",                        hp_per_period: { 7: 5 },        obligatorisk: true, avancerad: false, perioder: [7] },
        { kod: "1KB501", namn: "Kvantmekanik och kemisk bindning I", hp_per_period: { 8: 5 },    obligatorisk: true, avancerad: false, perioder: [8] },
        { kod: "1KB300", namn: "Kemisk termodynamik",            hp_per_period: { 8: 5 },        obligatorisk: true, avancerad: false, perioder: [8] },
        { kod: "1KB203", namn: "Polymerkemi",                    hp_per_period: { 8: 5 },        obligatorisk: true, avancerad: false, perioder: [8] },

        // ÅR 3 — Termin 5 (inriktningsval)
        valbar("VAL-KEM-P9-1",  9,  5, ALT_KEM_P9),
        valbar("VAL-KEM-P9-2",  9,  5, ALT_KEM_P9),
        valbar("VAL-KEM-P9-3",  9,  5, ALT_KEM_P9),
        valbar("VAL-KEM-P10-1", 10, 5, ALT_KEM_P10),
        valbar("VAL-KEM-P10-2", 10, 5, ALT_KEM_P10),
        valbar("VAL-KEM-P10-3", 10, 5, ALT_KEM_P10),

        // ÅR 3 — Termin 6
        valbar("VAL-KEM-P11-1", 11, 5, ALT_KEM_P11),
        valbar("VAL-KEM-P11-2", 11, 5, ALT_KEM_P11),
        valbar("VAL-KEM-P11-3", 11, 5, ALT_KEM_P11),
        { kod: "1TM001", namn: "Självständigt arbete i kemiteknik", hp_per_period: { 12: 15 }, obligatorisk: true, avancerad: false, perioder: [12] },

        // ÅR 4 — Termin 7
        valbar("VAL-KEM-P13-1", 13, 5, ALT_KEM_P13),
        valbar("VAL-KEM-P13-2", 13, 5, ALT_KEM_P13),
        valbar("VAL-KEM-P13-3", 13, 5, ALT_KEM_P13),
        valbar("VAL-KEM-P14-1", 14, 5, ALT_KEM_P14),
        valbar("VAL-KEM-P14-2", 14, 5, ALT_KEM_P14),
        valbar("VAL-KEM-P14-3", 14, 5, ALT_KEM_P14),

        // ÅR 4 — Termin 8
        valbar("VAL-KEM-P15-1", 15, 5, ALT_KEM_P15),
        valbar("VAL-KEM-P15-2", 15, 5, ALT_KEM_P15),
        valbar("VAL-KEM-P15-3", 15, 5, ALT_KEM_P15),
        valbar("VAL-KEM-P16-1", 16, 5, ALT_KEM_P16),
        valbar("VAL-KEM-P16-2", 16, 5, ALT_KEM_P16),
        valbar("VAL-KEM-P16-3", 16, 5, ALT_KEM_P16),

        // ÅR 5 — Termin 9
        valbar("VAL-KEM-P17-1", 17, 5, ALT_KEM_P17),
        valbar("VAL-KEM-P17-2", 17, 5, ALT_KEM_P17),
        valbar("VAL-KEM-P17-3", 17, 5, ALT_KEM_P17),
        valbar("VAL-KEM-P18-1", 18, 5, ALT_KEM_P18),
        valbar("VAL-KEM-P18-2", 18, 5, ALT_KEM_P18),
        valbar("VAL-KEM-P18-3", 18, 5, ALT_KEM_P18),

        // ÅR 5 — Termin 10
        { kod: "1KB290", namn: "Examensarbete i kemiteknik", hp_per_period: { 19: 30 }, obligatorisk: true, avancerad: true, perioder: [19] },
    ]
};