<?php

//echo "contact user upload from server side";

$user_name = $_POST['username'];
$company_name = $_POST['company'];
$useremail = $_POST['email'];
//$website = $_POST['website'];
$phoneno = $_POST['phone'];
$message = $_POST['message'];


/*echo $user_name;echo "<br>";
echo $company_name;echo "<br>";
echo $useremail;echo "<br>";
echo $website;echo "<br>";
echo $phoneno;echo "<br>";
echo $message;echo "<br>";*/

$added_date = date("Y-m-d");
//echo $added_date;echo "<br>";


include_once('config.php');
		
			
	$query = "INSERT INTO user_contacts(contactuser_name, organization, user_email, mobileno, conatct_message, added_date) VALUES ('$user_name', '$company_name','$useremail', '$phoneno', '$message', '$added_date')";
	
		 
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