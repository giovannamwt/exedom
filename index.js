var button = document.querySelector('button');
var tabelaNomes = document.querySelector('#tabela-nomes tbody');

button.addEventListener('click', function () {
    var nome = prompt("Seu nome");
    if (nome) { 
        var novaLinha = document.createElement('tr');
        var novaCelula = document.createElement('td');
        novaCelula.textContent = nome;
        novaLinha.appendChild(novaCelula);
        tabelaNomes.appendChild(novaLinha);
    }
});
