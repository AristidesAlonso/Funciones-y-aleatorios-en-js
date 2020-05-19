var vp = document.getElementById("villaplatzy");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = new Image();//cargar la ruta dentro del cavas, la defincion del un objerto, la primera palabra empieza con mayuscula, a esto se le llama clase
fondo.src = mapa;
fondo.addEventListener("load" , dibujar);//este addEventListener solo me sirve para traerme la imagen de fondo, si quiero agregar mas imagenes tengo que agregarle por cada imagen una addEventListener

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load" , dibujarVacas);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load" , dibujarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load" , dibujarPollos);


function dibujar()
{
  papel.drawImage(fondo, 0, 0);
}

function dibujarVacas()
{
  papel.drawImage(vaca, 10, 10);
}

function dibujarCerdos()
{
  papel.drawImage(cerdo, 10, 300);
}

function dibujarPollos()
{
  papel.drawImage(pollo, 300, 150);
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
