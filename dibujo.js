var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
//console.log(lienzo);  Esto sirve para verificar que se puede dibujar en 2d

var ancho = d.width;
/* Se pueden usar para comprobar en este caso la variable con el ancho (width) que enlazamos de html a js
alert(ancho);
console.log(ancho);
*/

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();                 //Así es como JS le llama a iniciar un trazo
  lienzo.strokeStyle = color;         //Este atributo/propiedad es para definir el color de la línea
  lienzo.moveTo(xinicial, yinicial);  //Método para mover el lapiz a donde va a arrancar la línea
  lienzo.lineTo(xfinal, yfinal);      //Es la función de trazar una línea
  lienzo.stroke();                    //Esta función dibuja la línea
  lienzo.closePath();                 /*Función para cerrar el trazo ("levantar el lapiz"),
                                        si no se invoca la línea sigue por ese camino*/
}

function dibujoPorClick()
{
  /*.value es el atributo que se usa para poder obtener el valor de una caja de texto
  y parseInt es la funcion para convertir string a tipo int*/
  //alert("No me toques ahi, coqueta jeje " + texto.value);   Se deja para comprobar la concatenacion
  //console.log(texto);   Se deja como demostracion para ver de donde sale 'texto' desde html
  var lineas = parseInt(texto.value);
  var l = 0;
  var colorcito = "#0791E6";
  var xi, xf, yi, yf;
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    xf = espacio * l;
    yi = espacio * (l + 1);
    dibujarLinea(colorcito, 0, xf, yi, 300);
    console.log("Linea " + l);         //Con esta función se depura y se ve si se generan las líneas
  }

  for(l = 0; l < lineas; l++)
  {
    xf = 300 - (espacio * l);
    yi = 300 - (espacio * (l + 1));
    dibujarLinea(colorcito, 300, xf, yi, 0);
    console.log("Linea " + l);         //Con esta función se depura y se ve si se generan las líneas
  }

  for(l = 0; l < lineas; l++)
  {
    xi = espacio * l;
    yf = 300 - (espacio * (l + 1));
    dibujarLinea(colorcito, xi, 300, 300, yf);
    console.log("Linea " + l);         //Con esta función se depura y se ve si se generan las líneas
  }

  for(l = 0; l < lineas; l++)
  {
    xi = 300 - (espacio * l);
    yf = espacio * (l + 1);
    dibujarLinea(colorcito, xi, 0, 0, yf);
    console.log("Linea " + l);         //Con esta función se depura y se ve si se generan las líneas
  }

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
  dibujarLinea(colorcito, 299, 1, 1, 1);
  dibujarLinea(colorcito, 299, 299, 299, 1);
}
