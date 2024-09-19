/* Lerro bat baino
gehiago
erabiltzen*/


// Lerro bateko komentarioa

function faktoriala(n) {
    if (n < 0) return undefined; // Retorna undefined para operaciones inválidas
    var faktoriala = 1;
    for (var i = 1; i <= n; i++) {
        faktoriala *= i;
    }
    return faktoriala;
}

function sartuzenbakia() {
    var zenbakia;
    do {
        var input = prompt("Sartu zenbaki bat 0 edo handiagoa:");
        zenbakia = parseInt(input);

        if (isNaN(zenbakia) || zenbakia < 0) {
            alert("Mesedez, sartu zenbaki baliozko bat!");
        }
    } while (isNaN(zenbakia) || zenbakia < 0);

    var emaitza = faktoriala(zenbakia);
    alert("Zenbakiaren " + zenbakia + " faktoriala " + emaitza + " da.");
}
