$(document).ready(function(){

    $( "#sendmessage" ).click(function( event ) {
        event.preventDefault();         
        let name = $("#nameofuser").val()
        let emailad =$("#emailadd").val()
        let message = $("#message").val()
        let usermessage ={name,emailad,message};
        /*console.log(usermessage)     
        console.log(emailad)  
        console.log(name)   */
        if (name && message && emailad){
            $.ajax({
                method: "POST",
                url: "http://localhost:3003/users",
                dataType: "json",
                data: usermessage,
                success: function(response) {
                    //empty the formfields after submit
                    $("#nameofuser").val('');
                    $("#emailadd").val('');
                    $("#message").val('');
                    alert("message sent");
                },
                error: function(error){
                    alert("try again");
                }
              })
        }


    })

  
});
