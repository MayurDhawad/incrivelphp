$(document).ready(function(){


//Upload user contacts script
$('#contactsubmit').click(function(){

//alert("contact user submit ");

 var username = $("#username").val();
	// alert(username);

 var company = $("#company").val();
	// alert(company);
 
var email = $("#email").val();
	// alert(email);
	 
	 // var website = $("#website").val();
//	 alert(website);
 
var phone = $("#phone").val();
	// alert(phone);

	  var message = $("#message").val();
	 //alert(message);
	 
	 
	if(username.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;font-weight:bold;text-align:center;">Please enter user name.</p>');
        $('#username').focus();
        return false;
    }else if(email.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;font-weight:bold;text-align:center;">Please enter user E-Mail.</p>');
        $('#email').focus();
        return false;
    }else if(company.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;font-weight:bold;text-align:center;">Please enter organization.</p>');
        $('#company').focus();
        return false;
   }else if(phone.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;font-weight:bold;text-align:center;">Please enter Phone Number.</p>');
        $('#phone').focus();
        return false;
    }else if(message.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;font-weight:bold;text-align:center;">Please enter Your Query.</p>');
        $('#message').focus();
        return false;
    }else{
		
		//alert("Success");
		
		$.ajax({

	type: 'POST',

	url: 'contastuserupload.php',

	data: {username : username, company : company , email: email,  phone : phone, message : message } ,
	cashe : false

})

.done(function(data){ // if getting done then call.

// show the response
//alert(data);
//$("#successmessage").html(data);
if(data == "success"){
// show the response
$('#errormessage').hide();
//alert("User contact details uploaded successfully!..");
$("#successmessage").html('<p style="color:green;font-size:16px;font-weight:bold;text-align:center;"> User contact details uploaded successfully!..</p>');


$("#username").val('');
$("#company").val('');
$("#email").val('');
//$("#website").val('');
$("#phone").val('');
$("#message").val('');

}else{

$("#errormessage").html(data);	
	
}


})
.fail(function() { // if fail then getting message

// just in case posting your form failed
alert( "Posting failed." );

});

// to prevent refreshing the whole page page



return false;

		
		
	} 
	




});
});