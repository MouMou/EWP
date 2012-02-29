$(function() {
    
    var nickname = $("#nickname");

    $('#myModal').modal({
      backdrop: "static",
      keyboard: false
    })

    $("#loginSub").on("click", function(){
      if(nickname.val() == ""){
        nickname.parent('div').addClass("error");
        nickname.siblings('span').removeClass('hide');
      } else {
        $('#username').text(nickname.val());
        $('#myModal').modal('hide'); 
        initialize();
      }
    });
});

