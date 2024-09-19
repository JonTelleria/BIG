/* Lerro bat baino
gehiago
erabiltzen*/

// Lerro bateko komentarioa

function checkPasswords() {
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    

    if (password1 === password2) {
        alert('Ongi Etorri');
        return true; // Devuelve true para permitir el envio del formulario 
    } else {
        alert('Pasahitz Okerra sahiatu berriz');
        return false; // Devuelve false para evitar que el formulario se envíe
    }
}

