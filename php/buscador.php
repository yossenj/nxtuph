<?php 
	$selectCiudad = $_POST['selectCiudad'];
	$selectTipo = $_POST['selectTipo'];
	$rangoPrecio = $_POST['rangoPrecio'];
	$todos = file_get_contents('../data-1.json');
	$todos = json_decode($todos, true);
	foreach ($todos as $key => $value) {
		$data=null;
		$precio = str_replace(',', '', explode('$',$value['Precio'])[1]);
		$minprecio = explode(';', $rangoPrecio)[0];
		$maxprecio = explode(';', $rangoPrecio)[1];
		if($precio>=$minprecio&&$precio<=$maxprecio){
			if($value['Tipo']==$selectTipo)
			{
				$data=$value;
			}
			if($value['Ciudad']==$selectCiudad)
			{
				$data=$value;
			}
			if($data){
				$res[]=$data;
			}
			if($selectCiudad==""&&$selectTipo=="")
			{
				$res[]=$value;
			}
		}
	}
	echo json_encode($res);
?>