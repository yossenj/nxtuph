<?php 
	$selectCiudad = $_POST['selectCiudad'];
	$selectTipo = $_POST['selectTipo'];
	$rangoPrecio = $_POST['rangoPrecio'];
	$todos = file_get_contents('../data-1.json');
	$todos = json_decode($todos, true);
	$res=[];
	foreach ($todos as $key => $value) {
		$precio = str_replace(',', '', explode('$',$value['Precio'])[1]);
		$minprecio = explode(';', $rangoPrecio)[0];
		$maxprecio = explode(';', $rangoPrecio)[1];
		if($precio>=$minprecio&&$precio<=$maxprecio){
			$data=null;
			if($selectCiudad==1&&$selectTipo==1)
			{
				$res[]=$value;
			}else{
				if($selectCiudad==1)
				{
					if($value['Tipo']==$selectTipo)
					{
						$data=$value;
					}
				}
				if($selectTipo==1)
				{
					if($value['Ciudad']==$selectCiudad)
					{
						$data=$value;
					}
				}
				if($value['Ciudad']==$selectCiudad&&$value['Tipo']==$selectTipo)
				{
					$data=$value;
				}
				if($data){
					$res[]=$data;
				}
			}
		}
	}
	echo json_encode($res);
?>