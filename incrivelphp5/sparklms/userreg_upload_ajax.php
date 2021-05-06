<?php

//echo "student registration upload from server side";

$user_name = $_POST['username'];

$user_email = strtolower($_POST['useremail']);

	 $user_password = $_POST['stu_pass'];
 $user_confirm_password = $_POST['confirm_pass'];
 
 $encrypted_email = md5($user_email);
 $userpassword = md5(user_password);
 
 
 /*echo $user_name;echo "<br>";
 echo $user_email;echo "<br>";
 echo $user_password;echo "<br>";
 echo $user_confirm_password;echo "<br>";*/
 
 $created_date = date("Y-m-d");
 
 
 $user_check_query = "SELECT * FROM quiz_registration WHERE email = '$user_email' LIMIT 1";
  $result = mysqli_query($conn, $user_check_query);
$user = mysqli_fetch_assoc($result);
 // print_r($user);
  //exit;
	 //$db_encryptedemail = $user['encrypted_email'];
	 $db_activestatus = $user['active_status'];
	 
	//echo  $db_encryptedemail;echo "<br>";
	//echo $db_activestatus;
	//exit; 
	if (mysqli_num_rows($result) > 0) {
        echo "Account Exists";
		//header("Location: register.php?errmsg=accerr");
		
    } else {

 
 
 $active_status = 1;
 
 include_once "config.php";
 
 $query = "INSERT INTO quiz_registration( student_name , email, encrypted_email, password, active_status, created_date) VALUES ('$user_name', '$user_email', '$encrypted_email', '$userpassword', '$active_status', '$created_date')";
	
		 
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

 
	}

?>