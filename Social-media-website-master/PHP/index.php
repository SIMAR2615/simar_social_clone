<?php 
session_start();

	include("connect_page.php");
	include("fun_page.php");
    $user_data = check_login($con)
	

?>

<!DOCTYPE html>
<html>
<head>
	<title>Simarjot website</title>
</head>
<body>
	<style>a {
		padding: 2px;
		
		color: white;
		background-color: black;
		text-decoration: none;
	}
	#box{
        
		background-color:antiquewhite;
		margin: auto;
		width: 500px;
		padding: 110px 100px;
        display: -webkit-flex;
        display: -ms-flex;
        flex-direction: column;

        	}
	
	h5{
		padding: 3px;
	}
	</style>

	<div id="box">
	<h1>That's index page</h1>
	

	<br>
	Hello <?php echo $user_data['user_name']; 
	  
	 ?>
    <h5>thank you for visiting this site, here i simarjot kaur prepared this site fir Xenonstack<h5>
	<a href="lastpage.php">Logout</a>	
	<a href="../html/index.html"> MY PORTFOLIO WEBSITE</a>

	</div>
</body>
</html>