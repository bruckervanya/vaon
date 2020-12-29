<?php

$data = $_POST;

$mysqli = new mysqli("rds-mysql-db.cibr9rhzokzw.us-east-1.rds.amazonaws.com","admin","xygri5-vapZok-jinhyv","bruckerpartners");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

if (empty($data["username"]) || empty($data["password"])) {
  die("Username or password missing")
}

?>
