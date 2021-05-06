$(document).ready(function(){
// user contact form upload script
$('#contactus_submit').click(function(){

		//alert("Contact us  user submit script");
		
		var contactuser_name =  $("#contactuser_name").val();
		var contactuser_email = $("#contactuser_email").val();
		var phone_no = $("#phone_no").val();
		var message  = $("#message").val();
				
		
		if(contactuser_name.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter Full Name.</p>');
        $('#contactuser_name').focus();
        return false;
    }else if(contactuser_email.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter E-Mail.</p>');
        $('#contactuser_email').focus();
        return false;
    }else if(phone_no.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter Phone No.</p>');
        $('#phone_no').focus();
        return false;
    }else if(message.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter Message.</p>');
        $('#message').focus();
        return false;
    }else{
	
			//alert("success");
			$.ajax({

	type: 'POST',

	url: 'contactuser_ajaxupload.php',
	
	data: 	{contactuser_name : contactuser_name, contactuser_email : contactuser_email, phone_no : phone_no, message : message  },
	
	//dataType : "json",
	cashe :false
})
.done(function(data){ // if getting done then call.

// show the response
//alert(data);
if(data = "success"){
// show the response
$('#errormessage').hide();
//alert("User registered successfully!..");
$("#successmessage").html('<p style="color:green;font-size:18px;font-weight:bold;">Thankyou for your message!<br>Our team will be contact you soon.</p>');


$("#contactuser_name").val('');
$("#contactuser_email").val('');
$("#phone_no").val('');
$("#message").val('');

}else{

$("#errormessage").html(data);	
	
}




})
.fail(function() { // if fail then getting message

// just in case posting your form failed
alert( "Posting failed." );

});

			
		
		
	}
		
		
return false;
});





});   //Document.ready close