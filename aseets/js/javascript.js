document.getElementById("botonEnviar").onclick=function mostrarPantalla(){
  var nombre=document.getElementById("nombre").value;
  var apellido=document.getElementById("apellido").value;
  var dni=document.getElementById("dni").value;
  var direccion=document.getElementById("direccion").value;

 document.getElementById("respuesta").innerHTML= "<li> Nombre: " + nombre + "</li><br>" +
                                                "<li> Apellido: " +apellido +"</li><br>" +
                                                "<li> DNI: " + dni + "</li><br>" +
                                                "<li> Direccion: " + direccion + "</li><br>" ;
}
