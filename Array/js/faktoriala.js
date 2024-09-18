/* Lerro bat baino
gehiago
erabiltzen*/


// Lerro bateko komentarioa
var liburuak = [
    { titulua: "Garoa", autorea: "Txomin Agirre", irakurrita: true },
    { titulua: "Eneko Aritza", autorea: "Jose Miguel de Barandiaran", irakurrita: false },
    { titulua: "Zu", autorea: "Joxean Sagastizabal", irakurrita: true },
    { titulua: "Hautsi Da Anphora", autorea: "Josanton Artze", irakurrita: false }
];

function irakurriLiburuak(liburuak) {
    for (var i = 0; i < liburuak.length; i++) {
        var liburua = liburuak[i];
        if (liburua.irakurrita) {
            console.log("Liburu hau irakurrita daukazu: " + liburua.titulua + " - " + liburua.autorea);
        } else {
            console.log("Liburu hau irakurri behar duzu: " + liburua.titulua + " - " + liburua.autorea);
        }
    }
}
irakurriLiburuak(liburuak);