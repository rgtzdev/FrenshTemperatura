<?php
	require $_SERVER['DOCUMENT_ROOT'].'/MySQL/connection.php';
	require $_SERVER['DOCUMENT_ROOT'].'/Models/User.php';

	/***
	* LoginController class
	***********************/
	class LoginController{
	      
	      /***
	      * validate_user
	      * Function that validates user in the database
	      *	@params username, password
	      * @return boolean 
	      *******************************/
	      public static function validate_user( $username, $password ){
	      	     
		     if( $username != NULL && $password != NULL  ){
	      	     	 $u = new User();
		     	 $user = $u->getUserByUsername( $username );
		     	 if( !is_null( $user ) ){
		     	     if( $user->password == $password ){
			          
				  return true;
			      
			     }return false;
		     	 }return false;
		     }return false;
	      }//End of validate_user function
	
	}//End of LoginController

	
?>
