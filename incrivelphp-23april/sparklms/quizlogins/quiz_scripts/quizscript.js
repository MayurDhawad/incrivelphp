$(document).ready(function(){
// user contact form upload script
$('#quiz_submit_btn').click(function(){

		//alert("Contact us  user submit script");
		
		var username =  $("#username").val();
		var useremail = $("#useremail").val();
		var stu_pass = $("#stu_pass").val();
		var confirm_pass  = $("#confirm_pass").val();
		
		
		if(username.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter User Name.</p>');
        $('#username').focus();
        return false;
    }else if(useremail.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter User E-Mail.</p>');
        $('#useremail').focus();
        return false;
    }else if(stu_pass.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter Password.</p>');
        $('#stu_pass').focus();
        return false;
    }else if(confirm_pass.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter Confirm Password.</p>');
        $('#confirm_pass').focus();
        return false;
    }else if(stu_pass != confirm_pass ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Password mismatch.</p>');
        $('#stu_pass').focus();
        return false;
    }else{
		
		
		alert("Success");
		
		$.ajax({

	type: 'POST',

	url: 'userreg_upload_ajax.php',
	
	data: 	{username : username, useremail : useremail, stu_pass : stu_pass, confirm_pass : confirm_pass  },
	
	//dataType : "json",
	cashe :false
})
.done(function(data){ // if getting done then call.

// show the response
alert(data);
if(data == "success"){
// show the response
$('#errormessage').hide();
alert("User registered successfully!..");
$("#successmessage").html('<p style="color:green;font-size:18px;font-weight:bold;">Your registration has been completed successfully!...</p>');


$("#username").val('');
$("#contactuser_email").val('');
$("#stu_pass").val('');
$("#confirm_pass").val('');

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


//login user script
$('#quiz_submit_loginbtn').click(function(){

	alert("Login  user submit script");
		
		var user_email = $("#user_email").val();
		var user_pass = $("#user_pass").val();
		
		
		
		if(user_email.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter User E-Mail.</p>');
        $('#user_email').focus();
        return false;
    }else if(user_pass.trim() == '' ){
       //alert('Please enter secret key.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please Enter User Password.</p>');
        $('#user_pass').focus();
        return false;
    }else{
		alert("success");
		
		$.ajax({

	type: 'POST',

	url: 'loginuser_ajax.php',
	
	data: 	{user_email : user_email, user_pass : user_pass },
	
	//dataType : "json",
	cashe :false
})
.done(function(data){ // if getting done then call.

// show the response
alert(data);


/*if(data == "success"){
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
	
}*/




})
.fail(function() { // if fail then getting message

// just in case posting your form failed
alert( "Posting failed." );

});
		
		
		
		
	}
return false;
});



});   //Document.ready close