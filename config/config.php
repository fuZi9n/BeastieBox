<?php
	// Database credentials
	define('DB_SERVER', '38.242.128.50');
	define('DB_USERNAME', 'bruger');
	define('DB_PASSWORD', 'Kode1234!');
	define('DB_NAME', 'login_system');

	// Attempt to connect to MySQL database
	$mysql_db = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

	if (!$mysql_db) {
		die("Error: Unable to connect " . $mysql_db->connect_error);
	}