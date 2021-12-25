
let dataEvento = 25/12/2021;
let dataAtual  = 26/12/2021;

//verifica se a data informada pelo uruario é valida, e informa ao usuario apra seguir com o cadastro
if(dataAtual <= dataEvento){
    console.log("Data Valida, seguir com cadastro");
//informa ao usuario que a data é ivalida e não pode cadastrar no evento
}else{
    console.log("Data invalida");
}


// verificação da idade do participante ou palestrante do evento

let idadeParticipante = 18;
let idadeinformada = 17;
if(idadeParticipante <= idadeinformada){
    console.log("Idade Valida, seguir com cadastro");
}else{
    console.log("Menor de idade não é permitido");
}

// Relatório de participantes por evento
let listaDeParticipantes = ["jairo", "Maria", "Elaine", "Andrea", "Cecilia", "Gustavo"];

if(listaDeParticipantes.length <= 100){
    console.log("É possivel refalizar Cadastro");

}else{
    console.log("lisa de participantes completa");
}
