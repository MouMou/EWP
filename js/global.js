$(function() {
    
    var nickname = $("#nickname");

    $('#ModalConnection').modal({
      backdrop: "static",
      keyboard: false
    })

    $("#loginSub").on("click", function(){
      if(nickname.val() == ""){
        nickname.parent('div').addClass("error");
        nickname.siblings('span').removeClass('hide');
      } else {
        $('#username').text(nickname.val());
        $('#ModalConnection').modal('hide'); 
        initialize();
      }
    });

    $("#about").on("click", function(){
      $('#ModalAbout').modal({
        backdrop: "static",
        keyboard: false
      })
    });

    $("#close").on("click", function(){
        $('#ModalAbout').modal('hide'); 
    });

});