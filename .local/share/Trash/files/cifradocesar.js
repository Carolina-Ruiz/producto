var string = prompt(¿Qué frase quieres cifrar?)
string.charCodeAt(0) // a q elemento sacaremos el codigo ASCII
(string - 65 + 33) %26 + 65 // ASCII
return string.fromCharCode() // pasar el cifrado a letra. indica el numero q quiere pasar a letra
funcion
	
var prompt(¿Quieres decifrar letras?)