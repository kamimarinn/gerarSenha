function gerarSenhas() {
    var tamanho = parseInt(document.getElementById("tamanho").value);
    if (tamanho > 10) {
        tamanho = 10;
    }
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var usarCaracteresEspeciais = document.getElementById("usarCaracteresEspeciais").checked;
    var usarNumeros = document.getElementById("usarNumeros").checked;
    var usarMaiusculas = document.getElementById("usarMaiusculas").checked;
    var caracteres = "abcdefghijklmnopqrstuvwxyz";
    if (usarCaracteresEspeciais) caracteres += "!@#$%&*()+=-*./";
    if (usarNumeros) caracteres += "0123456789";
    if (usarMaiusculas) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var senhas = [];
    for (var i = 0; i < quantidade; i++) {
        var senha = "";
        for (var j = 0; j < tamanho; j++) {
            var indice = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.charAt(indice);
        }
        senhas.push(senha);
    }
    document.getElementById("senhasGeradas").value = senhas.join("\n");
}
 
function limparInputs() {
    document.getElementById("tamanho").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("usarCaracteresEspeciais").checked = false;
    document.getElementById("usarNumeros").checked = false;
    document.getElementById("usarMaiusculas").checked = false;
    document.getElementById("senhasGeradas").value = "";
}