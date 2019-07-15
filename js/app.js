$(document).ready(function(){

    $( "#sendmessage" ).click(function( event ) {
        event.preventDefault();         
        let name = $("#nameofuser").val()
        let email =$("#emailadd").val
        let message = $("#message").val()
        let usermessage ={name,email,message}
        if (name && message){
            $.ajax({
                method: "POST",
                url: "http://localhost:3000",
                // dataType: "json",
                data:usermessage,
                success: function(response) {
                    //empty the formfields after submit
                    $("#nameofuser").val('');
                    $("#emailadd").val('');
                    $("#message").val('');


                }
                /*
                error: function(error){
                    alert(error);
                }*/
              })
              $.ajax({
                method: "GET",
                url: "http://localhost:3000",
                // dataType: "json",
                data:usermessage,
            })
        }

    })

  
});
