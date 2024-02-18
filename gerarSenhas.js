function gerarSenhas() {
    var tamanho = parseInt(document.getElementById("tamanho").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var usarCaracteresEspeciais = document.getElementById("caracteresEspeciais").checked;
    var usarNumeros = document.getElementById("numeros").checked;
    var usarMaiusculas = document.getElementById("maiusculas").checked;
    
    var caracteres = "";
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
    document.getElementById("senhaForm").reset();
    document.getElementById("senhasGeradas").value = "";
}