$(document).ready(function () {

  var formulario = $('#formulario');
  var nombre = $('#nombre');
  var email = $('#email');
  var mensaje = $('#mensaje');
  var whatsapp = $('#whatsapp');
   var linkimg = $('#linkimg');

  function valNombre(e) {

    if (nombre.val() == '' || nombre.val() == null) {
      e.preventDefault();
      $('#nombre + .error').css('display', 'block');
      console.log("Null");
    } else {
      $('#nombre + .error').css('display', 'none');
      console.log("Completo");
    }

  }

  function valEmail(e) {

    if (email.val() == '' || email.val() == null) {
      e.preventDefault();
      $('#email + .error').css('display', 'block');
      console.log("Null");
    } else {
      $('#email + .error').css('display', 'none');
      console.log("Completo");
    }

  }

  function valMensaje(e) {

    if (mensaje.val() == '' || mensaje.val() == null) {
      e.preventDefault();
      $('#mensaje + .error').css('display', 'block');
      console.log("Null");
    } else {
      $('#mensaje + .error').css('display', 'none');
      console.log("Completo");
    }

  }

  function valWhatsapp(e) {

    if (whatsapp.val() == '' || whatsapp.val() == null) {
      e.preventDefault();
      $('#whatsapp + .error').css('display', 'block');
      console.log("Null");
    } else {
      $('#whatsapp + .error').css('display', 'none');
      console.log("Completo");
    }

  }

  function valLinkimg(e) {

    if (linkimg.val() == '' || linkimg.val() == null) {
      e.preventDefault();
      $('#linkimg + .error').css('display', 'block');
      console.log("Null");
    } else {
      $('#linkimg + .error').css('display', 'none');
      console.log("Completo");
    }

  }

  function validacion(e) {
    console.log("Validando Nombre");
    valNombre(e);

    console.log("Validando Email");
    valEmail(e);

    console.log("Validando mensaje");
    valMensaje(e);
    
    console.log("Validando Nro de whatsapp");
    valWhatsapp(e);
    
    console.log("Validando link de imagen");
    valLinkimg(e);
  }

  formulario.on('submit', validacion);

})