<?php
	require $_SERVER['DOCUMENT_ROOT'].'/MySQL/connection.php';
        require $_SERVER['DOCUMENT_ROOT'].'/Models/Regimen.php';

	if( $_GET['action'] == 'getAll' ){

	    $regimen= new Regimen();
       	    echo json_encode( $regimen->getAll() );

	}else if( $_GET['action'] == 'setValueByDescription' ){
	      
	    $regimen= new Regimen();
	      
	    $regimen->setValueByDescription( $_GET['des'] , $_GET['value'] );
	      
	    echo "success";
	      
	}

?>
