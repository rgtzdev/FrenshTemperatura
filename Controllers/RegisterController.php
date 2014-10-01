<?php
	require $_SERVER['DOCUMENT_ROOT'].'/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Models/Register.php';

	if( $_GET['action'] ==  'setAllRegister'){

		$register = new Register();

		$register->dataid = 1;
		$register->date = date('m').'/'.date('d').'/'.date('Y');
        	$register->time = date( 'h:i A' );
		$register->value = $_GET['temperatura'];

		$register->addRegister( $register );

		/**************************************************************************/

		$register = new Register();

        	$register->dataid = 2;
        	$register->date = date('m').'/'.date('d').'/'.date('Y');
        	$register->time = date( 'h:i A' );
        	$register->value = $_GET['humedad'];

		$register->addRegister( $register );

		/**************************************************************************/

		$register = new Register();

        	$register->dataid = 5;
        	$register->date = date('m').'/'.date('d').'/'.date('Y');
        	$register->time = date( 'h:i A' );
        	$register->value = $_GET['lum'];

        	$register->addRegister( $register );

	}else if( $_GET['action'] == 'getLastTen' ){

	      $register = new Register();

	      $id = $_GET['id'];
	      $registers = $register->getByDataId( $id );

	      $lastTen = array_slice( $registers, ( count( $registers ) - 10 ) );
	      $lastTenReturn = array();

	      foreach( $lastTen as $l ){
	      	        $temp = array( $l->date.' '.$l->time , floatval( $l->value ) );
			array_push( $lastTenReturn, $temp );
	      }

	      echo json_encode( $lastTenReturn );

	}
?>
