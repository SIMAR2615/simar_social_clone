<?php





$name_user = $_POST["name_user"];
$CONTACT = $_POST["CONTACT"];
$mytext = $_POST['mytext'];
$conn = mysqli_connect("localhost", "root","","login_sample_db")or die("connection failed");
$sqls = "INSERT INTO `contact-data` (name_user,CONTACT, mytext) VALUES ('{$name_user}','{$CONTACT}','{$mytext}' )";
$result = mysqli_query($conn, $sqls) or die("Query Failed!");
echo "Thank You For Contacting Us ";
?>