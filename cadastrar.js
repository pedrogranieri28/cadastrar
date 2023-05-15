var area = document.getElementById('area');
var nomeCadastro = 'Pedro'

function entrar(){
    var nome = prompt("Digite o seu nome");

    if(nome=="" || nome==null){
        alert("Por favor Preencher todos os Campos!");
        area.innerHTML = "Clique no botão para acessar...";
    }

    else{
        area.innerHTML = "Bem-Vindo, " + nome + "";
    }

    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = "Sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);

}

function sair(){
    alert("Até mais!")
    area.innerHTML = "Você saiu!"
}