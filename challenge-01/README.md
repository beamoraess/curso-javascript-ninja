# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(arg){
    if(arg){
        return true;
    } else {
       return false;
    }
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
> isTruthy(undefined)
false
> isTruthy(null)
false
> isTruthy(NaN)
false
> isTruthy(0)
false
> isTruthy(-0)
false
> isTruthy('')
false
> isTruthy("")
false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
> isTruthy("Bia")
true
> isTruthy(true)
true
> isTruthy(23)
true
> isTruthy("comida")
true
> isTruthy("javascript")
true
> isTruthy("2")
true
> isTruthy(33)
true


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: "Fiat",
    modelo: "Uno",
    placa: "FDM-3080",
    ano: 2018,
    cor: "Vermelho",
    quantasPortas: 4,
    assentos: 5,
    quatidadePessoas: 0 
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(novaCor){
    carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function(){
    return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function(numeroPessoas){
    var pessoa = "pessoas"
    var limitePessoas = carro.assentos - carro.quatidadePessoas;
    carro.quatidadePessoas += numeroPessoas;

    return "Já temos " + carro.quatidadePessoas + " " + pessoa +  " no carro."
    

    if(carro.quatidadePessoas >= 5){
        return "O carro está lotado!"
   }

    if(carro.quatidadePessoas <= 5){
        return "Só cabem mais " + limitePessoas + " pessoas";
    }

    if(limitePessoas = 1){
        pessoa = "pessoa"
    } 
    
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.cor // azul

// Mude a cor do carro para vermelho.
carro.mudarCor(verde)

// E agora, qual a cor do carro?
carro.cor //verde

// Mude a cor do carro para verde musgo.
carro.mudarCor(verde musgo)

// E agora, qual a cor do carro?
carro.cor // verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo()

// Adicione 2 pessoas no carro.
carro.addPessoas(2)

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4)

// Faça o carro encher.
carro.addPessoas(5)

// Tire 4 pessoas do carro.
carro.addPessoas(4)

// Adicione 10 pessoas no carro.
carro.addPessoas(10)

// Quantas pessoas temos no carro?
?
```
