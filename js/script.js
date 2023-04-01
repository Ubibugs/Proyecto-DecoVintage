/* js para el carrusel */

$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000, /* Cambia la velocidad del carrusel (en milisegundos) */
      pause: "hover" /* Detiene el carrusel al pasar el cursor por encima */
    });
  });

  $('.galeria').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

