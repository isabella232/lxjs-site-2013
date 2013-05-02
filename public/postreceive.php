<?php

/**
 * Github WebHook processor
 * POST to: postreceive.php?key=Ew7odwenhk31d70pgZ7E7y4BOI3VFIp3
 *
 * @author Luis Abreu
 * @version 0.1
 * @copyright Quodis, 24 February, 2011
 * @package default
 **/

/**
 * path to projects in server
 **/
define('PROJECTS_PATH', '/srv/www/2013.lxjs.org');
/**
 * server key for authentication
 **/
define('SERVER_KEY', 'Ew7odwenhk31d70pgZ7E7y4BOI3VFIp3');

// parse the json payload
$payload = json_decode($_POST['payload']);

if (!$payload) exit();

// check for payload and server key

if ( $payload->ref === 'refs/heads/master' && $_REQUEST['key'] == SERVER_KEY ) {
		// parse the payload for the project name
		$project_name = strtolower($payload->{'repository'}->{'name'});
		/* define the cd directory based on config
		cd into the project dir, git reset and pull changes */
		$cmd = 'cd ' . PROJECTS_PATH . '/ && git reset --hard HEAD && git pull';
		$output = shell_exec($cmd);
		error_log($output); 
}

?>