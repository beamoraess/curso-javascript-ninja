/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [10, 20, 30, 40, 50]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function newFunction(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
newFunction(qualquer)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arr, number){
    return arr[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valores = ['string', 20, true, null, undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
newFunction(valores);


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function books(bookName){
    var allBooks = {
        'Branca de neve': {
            quantidadePaginas: 20,
            autor: 'Fulano',
            editora: 'Aquela'
        },
        'Cinderela Princesa': {
            quantidadePaginas: 30,
            autor: 'Fulaninho',
            editora: 'Adivinha'
        },
        'Aladin': {
            quantidadePaginas: 50,
            autor: 'Fulanão',
            editora: 'Genio'
        }
    }

    return !bookName ? allBooks : allBooks[ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
 books()  // retorna todos os livros
 books('Branca de Neve') // retorna livro especifico

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = "Branca de neve";
console.log('O livro ' + bookName + " tem " + books( bookName ).quantidadePaginas + " páginas!" )

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor " + bookName + " é " + books( bookName ).autor + ".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + bookName + " foi publicado pela editora " + books( bookName ).editora + ".")
