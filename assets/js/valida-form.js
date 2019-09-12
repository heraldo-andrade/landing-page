// Envio de formulário falso
$(document).ready(function(){
  $("#bt-enviar").click(function(event){
    if(!validaNome() | !validaEmail() | !validaTelefone() | !validaMensagem()){
      event.preventDefault();
    }
    else{
      $('#form-contato')[0].reset();
      $("input").removeClass("msg-sucess");
      $("textarea").removeClass("msg-sucess");
      $("#response").show();
      $("#response").html('Mensagem enviada!');
      setTimeout('$("#response").fadeOut("slow")',2000);
      event.preventDefault();
    }
  });
});

function validaNome(){
  var nome = $("#nome").val();

  if (nome.length<=0) {
    msgErro('#nome', '.msg-nome', 'Digite um nome v&aacute;lido.');
    return false;
  }
  else{
    $(".msg-nome").hide();
    $("#nome").addClass("msg-sucess");
    $("#nome").removeClass("msg-error");
    return true;
  }
}

function validaEmail(){
  var email = $("#email").val();

  if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
    msgErro('#email', '.msg-email', 'Digite um e-mail v&aacute;lido.');    
    return false;
  }
  else{
    $(".msg-email").hide();
    $("#email").addClass("msg-sucess");
    $("#email").removeClass("msg-error");
    return true;
  }
}

function validaTelefone(){
  var fone = $("#fone").val();

  if (fone.length<14) {
    msgErro('#fone', '.msg-fone', 'Informe um telefone.'); 
    return false;
  }
  else{
    $(".msg-fone").hide();
    $("#fone").addClass("msg-sucess");
    $("#fone").removeClass("msg-error");
    return true;
  }
}

function validaMensagem(){
  var mensagem = $("#mensagem").val();

  if ( mensagem == '') {
    msgErro('#mensagem', '.msg-mensagem', 'Digite um endere&ccedil;o v&aacute;lido.'); 
    return false;
  }
  else{
    $(".msg-mensagem").hide();
    $("#mensagem").addClass("msg-sucess");
    $("#mensagem").removeClass("msg-error");
    return true;
  }
}

function msgErro(tagID, tagClass, msg){
  $(tagClass).fadeIn(250);
  $(tagClass).html(msg);
  $(tagClass).css("display", "inline-block");
  $(tagID).addClass("msg-error");
  $(tagID).removeClass("msg-sucess");
}