var producto="Ide webstorm";
cantidad=1;
precio=159;
var licencia;


so ="windows" // variable de ámbito golobal
document.writeln("Bienvenido a Javascript<br>")
estado="Todos los sistemas están trabajando";document.write(estado)
var v=2;
var r=4; /*si son iguales escribe cualquiera de las dos*/
if (v===r) /*instrucción condicional*/
    document.write(v)
else /**/
    alert("Números distintos\n La suma de los numeros es: " + (v+r)) /* el caracter \n significa que no forma parte de la cadena de texto "linea de escape" \nt linea de tabulador el simbolo +  une cadenas*/
mensaje()
function mensaje (){var sistemaOperativo="linux" //variable de ámbito local
    alert(sistemaOperativo)
    alert(so)}