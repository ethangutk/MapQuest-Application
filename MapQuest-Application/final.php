<?php 
/*
   scott campbell
   Kurt Johnson
   display temps
 */
$DBSTRING = "sqlite:/home/ec2-user/cse383/database/cse383.db";  // This must be updated to your real database location 
include "sql.inc";
include "final.class.php";

header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Methods: GET,POST,PUSH,OPTIONS");
header ("content-type: application/json");
header ("Access-Control-Allow-Headers: Content-Type");
require_once "RestServer.php";
// phpinfo();

// Kurt Johnson
// with linux function code by Scott Campbell


$method=$_REQUEST["method"];
// example request: http://path/to/resource/rest/api/vi/sayHello?&name=World

$rest = new RestServer (new final_rest(),$method);
$rest->handle ();
