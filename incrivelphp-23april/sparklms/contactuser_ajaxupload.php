<?php

//echo "Contact user from server side";
 $contactusername = $_POST['contactuser_name'];

$contactuseremail = strtolower($_POST['contactuser_email']);

	 $usercontact_phoneno = $_POST['phone_no'];
 $contactuser_message = $_POST['message'];
 
 
 /*echo $contactusername;echo "<br>";
 echo $contactuseremail;echo "<br>";
 echo $usercontact_phoneno;echo "<br>";
 echo $contactuser_message;echo "<br>";*/
 
 $created_date = date("Y-m-d");
 
 
 include_once "config.php";
 
 $query = "INSERT INTO lms_contactuser( contactuser_name , contactuser_email, phone_no, Contactuser_message, created_date) VALUES ('$contactusername', '$contactuseremail', '$usercontact_phoneno', '$contactuser_message', '$created_date')";
	
		 
 //echo $query;
 
						$result = mysqli_query($conn,$query);
                                      
			if(isset($result)){
				
				//echo "Blog uploaded successfully !...";
				echo "success";
	
	//echo "<p id='successmessage' style='color:green;'>Blog uploaded successfully !...</p>";
	//printf("Last inserted record has id %d\n", mysqli_insert_id($conn));
	
	

	
	//echo "<img width='300px' src='uploads/".$image_name."' class='preview'>";	
  			
				
			}else{
				
				//echo "<p id='successmessage' style='color:green;'>Error on query!..</p>";
			echo "Error on query!..";
				
			}
			
			
	
 
			
?>