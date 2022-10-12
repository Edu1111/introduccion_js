/* Desafío: javaScript

Nombre de Desafío: introduccion_js

Instrucciones

Crea una lista con los siguientes elementos: */

/*- Tu nombre (string)*/
var nombre="Eduardo";
/*- Tu apellido (string)*/
var apellido="Alvarez"
/*- Tu edad (number)*/
var edad=21;
/*- ¿Eres desarrollador de aplicaciones web? (boolean)*/
var desarrollador=true;
/*- Tu fecha de nacimiento (Date)*/
var nacimiento="14-03-2001"
/*- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/
var libro ={
  titulo:"je m'apelle kylian",
  autor:"Kylian Mbappé",
  fecha:"11-11-2021",
  url:"https://www.amazon.com/-/es/Faro/dp/2957862409",
};
/*- Tu pasatiempos favoritos (Array)*/
var pasatiempos = ["Ver futbol","jugar WZ","Estar con mi novia"];
/*- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */
miActividadFavorita = function(){
  console.log("Ver peliculas con mi novia");
};