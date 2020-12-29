<?php

$data = $_POST;

if (empty($data["username"]) || empty($data["password"])) {
  die("Uername or password missing")
}
