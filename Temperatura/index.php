<?php
   
           session_start();
	   if( !isset( $_SESSION['username'] ) ){
	      header("Location: /Views/Login.php");
	   }session_write_close();

?>
<!DOCTYPE html>
<html lang="es" >

	<head>
	        <meta charset="utf-8" /> 
	        <!-- Latest compiled and minified CSS -->
                <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

                <!-- Optional theme -->
                <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

		<link href="http://getbootstrap.com/examples/dashboard/dashboard.css" rel="stylesheet">

		<link rel="stylesheet" type="text/css" href="styles/Attributes/jchartfx.attributes.smoothness.css" />
		<link rel="stylesheet" type="text/css" href="styles/Palettes/jchartfx.palette.smoothness.css" />
		<link rel="stylesheet" type="text/css" href="styles/common.css" />
		<title>Control de monitoreo</title>

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

		<script type="text/javascript" src="js/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.jqplot.min.js"></script>
		<script type="text/javascript" src="plugins/jqplot.dateAxisRenderer.min.js"></script>
		<script type="text/javascript" src="plugins/jqplot.logAxisRenderer.min.js"></script>
		<script type="text/javascript" src="plugins/jqplot.canvasTextRenderer.min.js"></script>
		<script type="text/javascript" src="plugins/jqplot.canvasAxisLabelRenderer.min.js"></script>
		<script type="text/javascript" src="plugins/jqplot.canvasAxisTickRenderer.min.js"></script>
		<script type="text/javascript" src="plugins/jqplot.categoryAxisRenderer.min.js"></script>
		<script type="text/javascript" src="plugins/jqplot.barRenderer.min.js"></script>
		<link class="include" rel="stylesheet" type="text/css" href="styles/jquery.jqplot.min.css" />
		
		<script type="text/javascript" src="js/scriptchart.js"></script>
		<script src="js/buttonHandler.js" ></script>		
	</head>
	
	<body style>
		<!-------- Menu Bar ------>
		<div id="navBar" class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      			<div class="container-fluid">
        			<div class="navbar-header">
          				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            					<span class="sr-only">Toggle navigation</span>
            					<span class="icon-bar"></span>
            					<span class="icon-bar"></span>
            					<span class="icon-bar"></span>
          				</button>
          				<a class="navbar-brand" href="#">Sistema Archivo Histórico</a>
        			</div>
        			<div class="navbar-collapse collapse">
          				<ul class="nav navbar-nav navbar-right">
            					<li><a href="<?php session_start(); session_destroy(); ?>">Cerrar Sesión</a></li>
          				</ul>
        			</div>
      			</div>
    		</div>

                <br/><br/>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-3 col-md-2 sidebar">
          				<ul class="nav nav-sidebar">
            					<li id="bEstadoGeneral" class="active"><a href="#">Estado General</a></li>
            					<li id="bEstadoHistorico"><a href="#">Estado Histórico</a></li>
            					<li id="bProgramarRegimen"><a href="#">Programar Régimen</a></li>
            					<li id="bPreferencias"><a href="#">Preferencias</a></li>
          				</ul>
        			</div>
				<!----------Ventana Estado General------------>
				<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" id="estadoGeneral">
					<h1 class="page-header">Valores de Monitoreo</h1>

					<div class="column1">

						<div id="lbTemperadura" class="alert alert-success">
                                                        <strong> Temperatura Actual: <p id="lTemp" style="color:#6c77b5"></p></strong>
                                                </div>

					</div>

					<div class="column2">

						<div id="lbHumedad" class="alert alert-success">
                                                        <strong> Humedad Actual: <p id="lHum" style="color:#6c77b5"></p></strong>
                                                </div>

					</div>

					<div class="column3">

						<div id="lbLuz" class="alert alert-success">
							<strong> Luz Actual: <p id="lLuz" style="color:#6c77b5"></p></strong>
						</div>

					</div>
					<small><div class="cuadritoNorm"></div> &nbsp;Valor normal. </small><br/>
					<small><div class="cuadritoMax"></div> &nbsp;Valor alto. </small><br/>
					<small><div class="cuadritoMin"></div> &nbsp;Valor bajo. </small>
					<hr />
					<h2>Controles</h2><hr/>
					<h3 style="color:#29bdbd">Ventiladores de Respaldo</h3>
					<h4 sytle="color:rgb(3, 70, 119);">Estado: <label id="estadoVentiladores"></label></h4>
					
					<input id="bActivar" value="SET" type="button" class="btn btn-lg btn-success"/>
				</div>
			</div>
			<!----------Ventana Estado Historico---------->
                        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" id="estadoHistorico">

				<h1 class="page-header">Estado Histórico</h1>

				<div id="chartTemp"style= "height:260px;" align="center"></div>
				<div id="chartHum" style= "height:260px;" align="center"></div>
				<div id="chartLux" style= "height:260px;" align="center"></div>
				
                        </div>

                        <!----------Ventana de Programar Regimen------>
                        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" id="programarRegimen">
                        	<h1 class="page-header">Programar Régimen</h1>
				<div class="row" id="row0" >
					<div class="col-xs-6 col-sm-3"><h3>Temperatura</h3></div>
					<div class="col-xs-6 col-sm-3"><h4 class="maximo">Máximo</h4><input type="text" class="form-control" id="max0"/></div>
					<div class="col-xs-6 col-sm-3"><h4 class="minimo">Mínimo</h4><input type="text" class="form-control" id="min0"/></div>
					<div class="col-xs-6 col-sm-3"><br/>
						<button type="button" class="btn btn-lg btn-info" id="edit0">Editar</button>
						<button type="button" class="btn btn-lg btn-primary" id="save0">Guardar</button>
					</div>
				</div>
				<div class="row" id="row1" >
                                        <div class="col-xs-6 col-sm-3"><h3>Humedad</h3></div>
                                        <div class="col-xs-6 col-sm-3"><h4 class="maximo">Máximo</h4><input type="text" class="form-control" id="max1"/></div>
                                        <div class="col-xs-6 col-sm-3"><h4 class="minimo">Mínimo</h4><input type="text" class="form-control" id="min1"/></div>
                                        <div class="col-xs-6 col-sm-3"><br/>
                                                <button type="button" class="btn btn-lg btn-info" id="edit1">Editar</button>
                                                <button type="button" class="btn btn-lg btn-primary" id="save1">Guardar</button>
                                        </div>
                                </div>
				<div class="row" id="row2" >
                                        <div class="col-xs-6 col-sm-3"><h3>Luminosidad</h3></div>
                                        <div class="col-xs-6 col-sm-3"><h4 class="maximo">Máximo</h4><input type="text" class="form-control" id="max2"/></div>
                                        <div class="col-xs-6 col-sm-3"><h4 class="minimo">Mínimo</h4><input type="text" class="form-control" id="min2"/></div>
                                        <div class="col-xs-6 col-sm-3"><br/>
                                                <button type="button" class="btn btn-lg btn-info" id="edit2">Editar</button>
                                                <button type="button" class="btn btn-lg btn-primary" id="save2">Guardar</button>
                                        </div>
                                </div>

                      	</div>
			<!----------Ventana Preferencias---------->
                        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" id="preferencias">

				<h1 class="page-header">Preferencias</h1>
				<h3 class="page-header">Correo Para Alertas </h3> 
				<div class="row" id="row2" >
                                        <div class="col-xs-6 col-sm-3"><input type="text" class="form-control" placeholder="Correo Electronico" id="txtCorreo"/></div>
                                        <div class="col-xs-6 col-sm-3">
                                                <button type="button" class="btn btn-lg btn-info" id="editCorreo">Editar</button>
                                                <button type="button" class="btn btn-lg btn-primary" id="saveCorreo">Guardar</button>
                                        </div>
                                </div>

				<br /><br />
				<h3 class="page-header">Cambiar Contraseña </h3> 
				<div class="row" id="row2" >
                                        <div class="col-xs-6 col-sm-3"><input type="text" class="form-control" placeholder="Nueva Contraseña" id="txtContraseña"/></div>
                                        <div class="col-xs-6 col-sm-3">
                                                <button type="button" class="btn btn-lg btn-info" id="editCont">Editar</button>
                                                <button type="button" class="btn btn-lg btn-primary" id="saveCont">Guardar</button>
                                        </div>
                                </div><small> *La nueva contraseña se manadará al correo establecido en la parte de arriba.</small>


                        </div>


		</div>
		
		<!-- Latest compiled and minified JavaScript -->
                <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
		<script src="http://getbootstrap.com/assets/js/docs.min.js"></script>
	</body>
</html>
