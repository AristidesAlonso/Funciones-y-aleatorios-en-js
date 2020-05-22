var vp = document.getElementById("villaplatzy");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
url: "vaca.png",
cargaOK: false
};

var cantidad = aleatorio(1, 25);

fondo.imagen = new Image();//cargar la ruta dentro del cavas, la defincion del un objerto, la primera palabra empieza con mayuscula, a esto se le llama clase
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load" , cargarFondo);//este addEventListener solo me sirve para traerme la imagen de fondo, si quiero agregar mas imagenes tengo que agregarle por cada imagen una addEventListener

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load" , cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOK)
  {
  papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK)
  {
    console.log(cantidad);
    for (var v=0; v <cantidad; v++)
  {
    var x = aleatorio (0, 5);//Para que los numeros aleatorio no sean tan aleatorios se tiene que concer el tama;o de la imgagen, en este caso es de 80 pixeles. El ancho del fondo mide 500px al dividirlo por 80 px de laimagen ese seria el numero aproximado.
    var y = aleatorio (0, 5);// en este caso estoy generando un numero aleatorio entre 0 y 5 para que las vacas no me salgan desordenadas
    var x = x * 80;
    var y = y * 80;
    papel.drawImage(vaca.imagen, x, y);
  }
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
