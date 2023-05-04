<?php 
session_start();

	include("connect_page.php");
	include("fun_page.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		
		$user_name = $_POST['user_name'];
		$password = $_POST['password'];

		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			
			$user_id = numbers(20);
			$query = "insert into users (user_id,user_name,password) values ('$user_id','$user_name','$password')";

			mysqli_query($con, $query);

			header("Location: firstpage.php");
			die;
		}else
		{
			echo "Please enter some valid information!";
		}
	}
?>


<!DOCTYPE html>
<html>
<head>
	<title>Signup</title>
</head>
<body>

	<style type="text/css">

/* Reset styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Page layout */
body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

header {
  background-color: #3b5998;
  color: white;
  padding: 20px;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
}

footer {
  background-color: #f2f2f2;
  padding: 20px;
}

/* Login form styles */
.login-form {
  background-color: white;
  border: 1px solid #dddfe2;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
  max-width: 400px;
  width: 100%;
}

.login-form h2 {
  font-size: 28px;
  font-weight: normal;
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  border: 1px solid #dddfe2;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
}

.login-form #button[type="submit"] {
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.login-form #button[type="submit"]:hover {
  background-color: #166fe5;
}

.login-form #button1[type="login"] {
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.login-form #button1[type="login"]:hover {
  background-color: #166fe5;
}


     
	</style>

<main>
		<section class="login-form">
			<h2>Sign up </h2>
			<form method = "post">
				<label for="user_name">Username:</label>
				<input type="text" id="username" name="user_name" required>
				<label for="password">Password:</label>
				<input type="password" id="password" name="password" required>
				<input id="button" type="submit" value="Sign up"><br><br>
				

				
				<a href="firstpage.php">Click to Login</a><br><br>
			</form>
		</section>
	</main>
	
	<footer>
		<p>&copy; 2023 Facebook Clone</p>
	</footer>

			

			
		</form>
	</div>
</body>
</html>