<?php

//echo "Uplad user profile upload from server side";
	$firstname = $_POST['first_name'];
	$lastname = $_POST['last_name'];
	$contact_email = $_POST['contact_email'];
	
	$phonenumber = $_POST['phoneno'];
	$userlocation = $_POST['location'];
	$Linkedin_profile = $_POST['Linkedin_profile'];
	
	$website = $_POST['website'];
	//$myfile = $_POST['myfile'];
	$user_message = $_POST['message'];
	
	
	
	/*echo $firstname;echo "<br>";
	echo $lastname;echo "<br>";
	echo $contact_email;echo "<br>";
	
	
	echo $phonenumber;echo "<br>";
	echo $userlocation;echo "<br>";
	echo $Linkedin_profile;echo "<br>";
	
	echo $website;echo "<br>";
	echo $user_message;echo "<br>";*/
	
		
	
	//include_once 'config.php';
	
	$folder = "resume/";
$temp = explode(".", $_FILES["myfile"]["name"]);
//$newfilename = round(microtime(true)).'.'. end($temp);
$newfilename = mt_rand().$_FILES['myfile']['name'];

$db_path ="$folder".$newfilename  ;
//remove the .
$listtype = array(
'.doc'=>'application/msword',
'.docx'=>'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//'.rtf'=>'application/rtf',
'.pdf'=>'application/pdf'); 



if ( is_uploaded_file( $_FILES['myfile']['tmp_name'] ) )
{
if($key = array_search($_FILES['myfile']['type'],$listtype))
{
if (move_uploaded_file($_FILES['myfile']  ['tmp_name'],"$folder".$newfilename))
{
	
	
//echo "success";
$added_date = date("ymd");
		
include_once('config.php');
		
			
		$query = "INSERT INTO applyjob_user(first_name, last_name, useremail, phone, location, linkedin_profile, website, resume_path, message, created_date) VALUES ('$firstname', '$lastname', '$contact_email', '$phonenumber', '$userlocation', '$Linkedin_profile', '$website', '$db_path', '$user_message', '$added_date')";
	
		 //$query = "UPDATE kyc SET id_front_image='$targetPath_img' WHERE kyc_id ='".$userkyc_id."' ";
  
  //echo $query;
 
						$result = mysqli_query($conn,$query);
                                      
			if(isset($result)){
				
				echo "success";
	
	//echo "<p id='successmessage' style='color:green;'>ID front Image updated successfully!...</p>";
	//printf("Last inserted record has id %d\n", mysqli_insert_id($conn));
	
	

	
	//echo "<img width='300px' src='uploads/".$image_name."' class='preview'>";	
  			
				
			}else{
				
				echo "<p id='errormessage' style='color:green;'>Error on query!..</p>";

				
			}





}
}
else    
{
//echo "File Type Should Be .Docx or .Pdf or .Rtf Or .Doc";
echo "<p id='errormessage' style='color:red;'>File Type Should Be .Docx or .Pdf or .Rtf Or .Doc</p>";

	}	
}
























?>