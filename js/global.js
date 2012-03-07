///////////////////////////////////////////////////////////
// Javascript file used for some events of the index.php //
///////////////////////////////////////////////////////////

$(function() {
    
    /**
     * Declare the variable nickname
     */
    var nickname = $("#nickname");

    /**
     * The Modal Connection opens when the page is loaded
     * @return {void}
     */
    $('#ModalConnection').modal({
      backdrop: "static",
      keyboard: false
    })

    /**
     * Validation of the user's connection
     * @return {void}
     */
    $("#loginSub").on("click", function(){
        /**
         * if the nickname is not entered : error
         */
        if(nickname.val() == ""){
            nickname.parent('div').addClass("error");
            nickname.siblings('span').removeClass('hide');
        /**
         * else write the nickname in the right of the navbar
         * and the Modal Connection closes when the user click on the "close button"
         */
        } else {
            $('#username').text(nickname.val());
            $('#ModalConnection').modal('hide'); 
            initialize();
        }
    });

    /**
     * The Modal About opens when the user click on the "about button" in the navbar
     * @return {void}
     */
    $("#about").on("click", function(){
      $('#ModalAbout').modal({
        backdrop: "static",
        keyboard: false
      })
    });

    /**
     * The Modal About closes when the user click on the "close button"
     * @return {void}
     */
    $("#close").on("click", function(){
        $('#ModalAbout').modal('hide'); 
    });
});

