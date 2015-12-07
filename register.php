<?php
$servername = "localhost";
$username = "chiclzss";
$password = "E-WVV7zcw5mbw";
$dbname = "chiclzss_chickensandwichweekly";

$myEmail = $_POST["myemail"];
$myUsername = $_POST["myusername"];
$myPassword = $_POST["mypassword"];

$conn = new mysqli($servername , $username , $password , $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO members (email , firstname , lastname)
VALUES (" . $myEmail . " , " . $myUsername . " , " . $myPassword . ")";

if ($conn->query($sql) === TRUE) {
    echo "New record created successsfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>