var conteudo = document.getElementById('conteudo');
var botao = document.getElementById('mostre_mais');

botao.onclick = function(){

    if(conteudo.className == "open"){
        conteudo.className = "";
        botao.innerHTML = "Mostar Mais";
    }
    else{
        conteudo.className = "open";
        botao.innerHTML = "Mostrar Menos";
    }
};