/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Brasileirão"
console.log(championship)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ["Corinthians", "São Paulo", "Fluminense", "Vasco", "Palmeiras"]

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(i){

    while(i < 6){
    return "O time que está em " + i + " lugar é o " + teams[i - 1]  + ".";
    }

    return "Não temos informação sobre o time que está nessa posição."
}
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1) // Corinthians
showTeamPosition(3) // Fluminense
showTeamPosition(4) // Vasco
showTeamPosition(6) // "Não temos informação sobre o time que está nessa posição."

teams.push("Santos");

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter = 20;
while(counter <= 30){
    console.log(counter) 
    counter++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
    var hexa;
    switch(cor){
        case "vermelho":
            hexa = "#ff000";
            break;
        case "azul":
            hexa = "#0000ff";
            break;
        case "amarelo":
            hexa = "#ffff00";
            break;
        case "verde":
            hexa = "#008000"
            break;
        case "preto":
            hexa = "#00000"
            break;
        default:
            return "Não temos o equivalente hexadecimal para " + cor;
    }

    return "O hexadecimal para a cor " + cor +  " é " + hexa + ".";
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex("vermelho")
 //'O hexadecimal para a cor vermelho é #ff000'
 convertToHex("azul")
// 'O hexadecimal para a cor azul é #0000ff'
convertToHex("l")
// 'Não temos o equivalente hexadecimal para l'
convertToHex("verde")
// 'O hexadecimal para a cor verde é #008000'
convertToHex("amarelo")
// 'O hexadecimal para a cor amarelo é #ffff00'
 convertToHex("preto")
// 'O hexadecimal para a cor preto é #00000'
 convertToHex("roxo")
// 'Não temos o equivalente hexadecimal para roxo'
 convertToHex("rosa")
// 'Não temos o equivalente hexadecimal para rosa'
 
