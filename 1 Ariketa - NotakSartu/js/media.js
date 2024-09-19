function mezua() {
    return "Kaixo Mundua !!!";
}
/* Lerro bat baino
gehiago
erabiltzen*/


// Lerro bateko komentarioa
function media() {
    var lehengozenbakia = prompt('Sartu lehenengo nota')
    var bigarrenzenbakia = prompt('Sartu bigarren nota')
    var hirugarrenzenbakia = prompt('Sartu hirugarren nota')

    var lehengozenbakiaNum = parseFloat(lehengozenbakia);
    var bigarrenzenbakiaNum = parseFloat(bigarrenzenbakia);
    var hirugarrenzenbakiaNum = parseFloat(hirugarrenzenbakia);
    var media = (lehengozenbakiaNum + bigarrenzenbakiaNum + hirugarrenzenbakiaNum) / 3;
    if (media<5){
        alert('Media: ' + media +' EZ DUZU GAINDITU');
    }else{
        alert('Media: ' + media +' GAINDITU DUZU');
    }
   
}