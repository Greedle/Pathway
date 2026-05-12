// helpers.js
// Hjälpfunktioner som måste laddas innan programfilerna.

function valbar(kod, period, hp, alternativ, obligatorisk = false) {
    return {
        kod,
        namn: "Valbar teknisk kurs",
        hp_per_period: { [period]: hp },
        obligatorisk,
        avancerad: false,
        alternativ,
        perioder: [period],
    };
}