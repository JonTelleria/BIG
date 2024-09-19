/* Lerro bat baino
gehiago
erabiltzen*/


// Lerro bateko komentarioa
var liburuak = [
    { titulua: "Txomin eskolara doa", autorea: "Txomin Perurena", irakurrita: true },
    { titulua: "Iñaki el pastor", autorea: "Peru Nolaskoain", irakurrita: false },
    { titulua: "Mirentxo", autorea: "Joxean Mikel", irakurrita: true },
    { titulua: "Galtzerdi Suhizida", autorea: "Nur Sagaztizabal", irakurrita: false }
];

function checkBook() {
    var titulua = document.getElementById("titulua").value;
    var mezua = document.getElementById("mezua");
    var liburua = liburuak.find(liburua => liburua.titulua === titulua);

    if (liburua) {
        if (liburua.irakurrita) {
            mezua.textContent = `Liburu hau irakurrita daukazu: ${liburua.titulua} - ${liburua.autorea}`;
        } else {
            mezua.textContent = `Liburu hau irakurri behar duzu: ${liburua.titulua} - ${liburua.autorea}`;
        }
    } else {
        mezua.textContent = "Liburu hau ez da aurkitu.";
    }
}