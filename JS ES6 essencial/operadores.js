// OPERADOR BINÁRIO

//operando1 operador operando2
1 + 1

// OPERADOR UNÁRIO
//operando1 operador
//operador operando1
x++
++x


/** OPERADORES ARITMÉTICOS */

// Módulo(%)
// Operador binário. Retorna o inteiro restante da divisão de dois operandos.

12 % 5 //retorna 2.

// Incremento (++) e Decremento (--)
++x  // já recebe o valor incrementado
x++ // recebe o valor atual e incrementa depois

--x
x--

  // Negação (-) e Adição (+)

  - 3
  + "3" // retorna 3 - força para retornar um number
  + true // retorna 1
  + false // retorna 0
  - true // retorna -1

// Operador de exponenciação (**)

2 ** 3 // retorna 8
10 ** -1 // retorna 0.1

// Operador de agrupamento ()
2 * (3 + 2)

/**  OPERADORES DE ATRIBUIÇÃO */

// Atribuição
x = y;

// Atribuição de adição
x = x + y; // ou
x += y;

// Atribuição de subtração
x = x - y; // ou
x -= y;

// Atribuição de multiplicação
x = x * y; // ou
x *= y;

// Atribuição de divisão
x = x / y; // ou
x /= y;

// Atribuição de resto
x = x % y; // ou
x %= y;

/** OPERADORES DE COMPARAÇÃO */

//Igual(==)
//Retorna verdadeiro caso os operandos sejam iguais
"3" == var1
3 == '3'

// Não igual(!=)
// Retorna verdadeiro caso os operandos não sejam iguais
var2 != "3"

// Estritamente igual (===)
// Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Ver também Object.is e igualdade

3 === var1

// Maior que (>)
// Retorna verdadeiro caso o operando da esquerda seja maior que o da direita
var2 > var1
"12" > 2

// Maior ou igual (>=)
// Retorna verdadeiro caso o operando da esquer seja maior ou igual ao da direita

var2 >= var1
var1 >= 3

// Menor que (>)
// Retorna verdadeiro caso o operando da esquerda seja menor que o da direita
var2 < var1
"12" < 2

// Menor ou igual (>=)
// Retorna verdadeiro caso o operando da esquer seja menor ou igual ao da direita

var2 <= var1
var1 <= 3

/** OPERADOR CONDICIONAL */

// Ternário

condicao ? valor1 : valor2

true ? 'foo' : 'bar' // retorna 'foo'
false ? 'foo' : 'bar' // retorna 'bar'

/** OPERADORES LÓGICOS */

// AND (&&)

exp1 && exp2

var a1 = true && true // t && t retorna true
var a2 = true && false // t && f retorna false
var a3 = false && true // f && t retorna false
var a4 = false && (3 == 4) // f && f retorna false
var a5 = 'Gato' && 'Cão' // t && t retorna 'Cão'
var a6 = false && 'Gato' // f && t retorna false
var a7 = 'Gato' && false // t && f retorna false


// OU (||)

exp1 || exp2

var o1 = true || true // t || t retorna true;
var o2 = false || true // f || t retorna true;
var o3 = true || true // t || f retorna true;
var o4 = false || (3 == 4) // f || f retorna false;
var o5 = 'Gato' || 'Cão' // t || t retorna 'Gato';
var o6 = false || 'Gato' // f || t retorna 'Gato';
var o7 = 'Gato' || true // t || f retorna 'Gato';

// NOT (!)

!exp1

var n1 = !true // !t retorna false;
var n2 = !false // !f retorna true;
var n3 = !'Gato' // !t retorna false;

// True
" "
1
['teste']

// False
""
0
//[]

// !! - conversão para booleano