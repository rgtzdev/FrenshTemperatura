<?php

 	require_once( $_SERVER['DOCUMENT_ROOT'].'/Warrior/Classes/Model.php' );

	//Class User Model
	class User extends Model {

		//Global Variables
		protected $userid;
		protected $username;
		protected $password;
		protected $permissionid;
	}
?>