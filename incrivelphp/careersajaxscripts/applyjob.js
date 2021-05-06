$(document).ready(function(){


//Upload user contacts script
$('#applynowjob_form').submit(function(){

//alert("Hai Sujatha");

	var first_name = $("#first_name").val();
	//alert(first_name);
	var last_name = $("#last_name").val();
	//alert(last_name);
	
	var contact_email = $("#contact_email").val();
	//alert(contact_email);
	
	var phoneno = $("#phoneno").val();
	//alert(phoneno);
	
	var userlocation = $("#location").val();
	//alert(userlocation);
	
	var Linkedin_profile = $("#Linkedin_profile").val();
	//alert(Linkedin_profile);
	
	var website = $("#website").val();
	//alert(website);
	
	var myfile = $("#myfile").val();
	//alert(myfile);
	
	var message = $("#message").val();
	//alert(message);
	
	
	if(first_name.trim() == '' ){
      // alert('Please select front image of ID.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please enter First Name.</p>');
        $('#first_name').focus();
		//$(window).scrollTop(0); 
        return false;
    }else if(last_name.trim() == '' ){
      // alert('Please select front image of ID.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please enter Last Name.</p>');
        $('#last_name').focus();
		//$(window).scrollTop(0); 
        return false;
    }else if(contact_email.trim() == '' ){
      // alert('Please select front image of ID.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please enter E-Mail.</p>');
        $('#contact_email').focus();
		//$(window).scrollTop(0); 
        return false;
    }else if(phoneno.trim() == '' ){
      // alert('Please select front image of ID.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please enter phone.</p>');
        $('#phoneno').focus();
		//$(window).scrollTop(0); 
        return false;
    }else if(userlocation.trim() == '' ){
      // alert('Please select front image of ID.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please enter location.</p>');
        $('#location').focus();
		//$(window).scrollTop(0); 
        return false;
    }else if(Linkedin_profile.trim() == '' ){
      // alert('Please select front image of ID.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please enter Linkedin Profile.</p>');
        $('#Linkedin_profile').focus();
		//$(window).scrollTop(0); 
        return false;
    }else if(website.trim() == '' ){
      // alert('Please select front image of ID.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please enter Website.</p>');
        $('#website').focus();
		//$(window).scrollTop(0); 
        return false;
    }else if(message.trim() == '' ){
      // alert('Please select front image of ID.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please enter message.</p>');
        $('#message').focus();
		//$(window).scrollTop(0); 
        return false;
    }else if(myfile.trim() == '' ){
      // alert('Please select front image of ID.');
		$('#errormessage').html('<p style="color:red;font-size:16px;">Please select file.</p>');
        $('#myfile').focus();
		//$(window).scrollTop(0); 
        return false;
    }else{
		
		
		//alert("success");
		
		// Call ajax for pass data to other place

$.ajax({

type: 'POST',

url: 'userprofile_upload.php',

data: 	new FormData( this ),
		processData: false,
		contentType: false,


})

.done(function(data){ // if getting done then call.

//alert(data);
if(data == 'success'){
// show the response
$('#errormessage').hide();
alert("Your profile was uploaded successfully!..");
//$("#successmessage").html('<p style="color:green;font-size:16px;">Your profile was uploaded successfully!..</p>');
//$(window).scrollTop(0);


$("#first_name").val('');
$("#last_name").val('');
$("#contact_email").val('');
$("#phoneno").val('');
$("#location").val('');
$("#Linkedin_profile").val('');
$("#website").val('');
$("#myfile").val('');
$("#message").val('');


}else{

alert(data);
	
//$("#errormessage").html(data);	
	
}
//location.reload();

//$(window).scrollTop(0);


})	

.fail(function() { // if fail then getting message

// just in case posting your form failed

alert( "Posting failed." );

});
	}
	




return false;

});
});