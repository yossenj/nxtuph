var utils = new tools('');
utils.init()
function mostrartodos()
{
	utils.ajaxr("data-1.json", "GET", function(data){
		printInList(data)
	})
}
function filtros()
{
	var params = {}
	params.selectCiudad=$('#selectCiudad option:selected').val()
	params.selectTipo=$('#selectTipo option:selected').val()
	params.rangoPrecio=$('#rangoPrecio').val()
	utils.ajaxr("php/buscador.php", "POST", function(data){
		printInList(data)
	},params)
}
function printInList(data)
{
	$('.itemInList').remove()
	$.each(data, function(index,value){
		var dir = value.Direccion,
		city= value.Ciudad,
		phone=value.Telefono,
		code=value.Codigo_Postal,
		tipo=value.Tipo,
		price=value.Precio,
		id=value.Id,
		parent = $('.tituloContenido')
		$(template(['img/home.jpg',dir,city,phone,code,tipo,price])).insertAfter(parent)
	})
}
function template(text)
{
	return '<div class="col s12 m12 itemInList">'+
	    '<div class="card itemMostrado">'+
        	'<img src="'+text[0]+'" width="150">'+
	      '<div class="card-stacked">'+
	        '<div class="card-content">'+
	          	'<p class="card-text"><b>Dirección: </b>'+text[1]+'</p>'+
		        '<p class="card-text"><b>Ciudad: </b>'+text[2]+'</p>'+
		        '<p class="card-text"><b>Teléfono: </b>'+text[3]+'</p>'+
		        '<p class="card-text"><b>Código postal: </b>'+text[4]+'</p>'+
		        '<p class="card-text"><b>Tipo: </b>'+text[5]+'</p>'+
		        '<p class="card-text"><b>Precio: </b> <span class="precioTexto">'+text[6]+'</span></p>'+
	        '</div>'+
	        '<div class="card-action">'+
	          '<a href="#">Ver más</a>'+
	        '</div>'+
	      '</div>'+
	    '</div>'+
  	'</div>';
}