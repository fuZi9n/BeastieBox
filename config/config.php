<?php
	// Database credentials
	define('DB_SERVER', 'Your_DB_IP');
	define('DB_USERNAME', 'USERNAME');
	define('DB_PASSWORD', 'CODE');
	define('DB_NAME', 'login_system');

	// Attempt to connect to MySQL database
	$mysql_db = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

	if (!$mysql_db) {
		die("Error: Unable to connect " . $mysql_db->connect_error);
	}
