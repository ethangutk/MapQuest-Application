<?php
       try {
               $dbconn = new PDO($DBSTRING);
       } catch (PDOException $e) {
        		print "Error connecting to database ";
			print_r($e);
                	die();
       	}

Function GET_SQL($sql,
	$arg1=null,
	$arg2=null,
	$arg3=null,
	$arg4=null,
	$arg5=null,
	$arg6=null,
	$arg7=null,
	$arg8=null,
	$arg9=null,
	$arg10=null,
	$arg11=null,
	$arg12=null,
	$arg13=null,
	$arg14=null,
	$arg15=null,
	$arg16=null,
	$arg17=null,
	$arg18=null,
	$arg19=null,
	$arg20=null) {

	global $dbconn;

	$GET=array();
	if (! is_null($arg1) ) $GET[]=$arg1;
	if (! is_null($arg2) ) $GET[]=$arg2;
	if (! is_null($arg3) ) $GET[]=$arg3;
	if (! is_null($arg4) ) $GET[]=$arg4;
	if (! is_null($arg5) ) $GET[]=$arg5;
	if (! is_null($arg6) ) $GET[]=$arg6;
	if (! is_null($arg7) ) $GET[]=$arg7;
	if (! is_null($arg8) ) $GET[]=$arg8;
	if (! is_null($arg9) ) $GET[]=$arg9;
	if (! is_null($arg10) ) $GET[]=$arg10;
	if (! is_null($arg11) ) $GET[]=$arg11;
	if (! is_null($arg12) ) $GET[]=$arg12;
	if (! is_null($arg13) ) $GET[]=$arg13;
	if (! is_null($arg14) ) $GET[]=$arg14;
	if (! is_null($arg15) ) $GET[]=$arg15;
	if (! is_null($arg16) ) $GET[]=$arg16;
	if (! is_null($arg17) ) $GET[]=$arg17;
	if (! is_null($arg18) ) $GET[]=$arg18;
	if (! is_null($arg19) ) $GET[]=$arg19;
	if (! is_null($arg20) ) $GET[]=$arg20;
	$ROW=array();
	if ($prep=$dbconn->prepare($sql)) {
		if ($prep->execute($GET)) {
			while ($row=$prep->fetch(PDO::FETCH_ASSOC)) {
				$ROW[]=$row;
			}
		}
		else {
			$errcode = $dbconn->errorCode();
			$err = $dbconn->errorInfo();
			throw new Exception("SQL Exec Error $errcode  " . print_r($err,true));
		}
	}
	else {
			$errcode = $dbconn->errorCode();
			$err = $dbconn->errorInfo();
			throw new Exception("SQL prep Error $errcode  " . print_r($err,true));
	}
	//$prep->closeCursor();
	return $ROW;
}

Function EXEC_SQL($sql,
	$arg1=null,
	$arg2=null,
	$arg3=null,
	$arg4=null,
	$arg5=null,
	$arg6=null,
	$arg7=null,
	$arg8=null,
	$arg9=null,
	$arg10=null,
	$arg11=null,
	$arg12=null,
	$arg13=null,
	$arg14=null,
	$arg15=null,
	$arg16=null,
	$arg17=null,
	$arg18=null,
	$arg19=null,
	$arg20=null) {

	global $dbconn;

	$GET=array();
	if (! is_null($arg1) ) $GET[]=$arg1;
	if (! is_null($arg2) ) $GET[]=$arg2;
	if (! is_null($arg3) ) $GET[]=$arg3;
	if (! is_null($arg4) ) $GET[]=$arg4;
	if (! is_null($arg5) ) $GET[]=$arg5;
	if (! is_null($arg6) ) $GET[]=$arg6;
	if (! is_null($arg7) ) $GET[]=$arg7;
	if (! is_null($arg8) ) $GET[]=$arg8;
	if (! is_null($arg9) ) $GET[]=$arg9;
	if (! is_null($arg10) ) $GET[]=$arg10;
	if (! is_null($arg11) ) $GET[]=$arg11;
	if (! is_null($arg12) ) $GET[]=$arg12;
	if (! is_null($arg13) ) $GET[]=$arg13;
	if (! is_null($arg14) ) $GET[]=$arg14;
	if (! is_null($arg15) ) $GET[]=$arg15;
	if (! is_null($arg16) ) $GET[]=$arg16;
	if (! is_null($arg17) ) $GET[]=$arg17;
	if (! is_null($arg18) ) $GET[]=$arg18;
	if (! is_null($arg19) ) $GET[]=$arg19;
	if (! is_null($arg20) ) $GET[]=$arg20;
	$rows=-1;
	if ($prep=$dbconn->prepare($sql)) {
		if ($prep->execute($GET)) {
			$rows=$prep->rowCount();
		}
		else {
			$errcode = $dbconn->errorCode();
			$err = $dbconn->errorInfo();
			throw new Exception("SQL Exec Error $errcode  " . print_r($err,true));
		}
		$prep->closeCursor();
	}
	else {
			$errcode = $dbconn->errorCode();
			$err = $dbconn->errorInfo();
			throw new Exception("SQL prep Error $errcode  " . print_r($err,true));
	}
	return $rows;
}
