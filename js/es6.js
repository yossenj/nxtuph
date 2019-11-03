class tools {
	constructor(url){
		this.params = {}
		this.params.almacen = url;
	}
	init()
	{
		var selectcity=$('#selectCiudad'), cities = []
		var selecttipo=$('#selectTipo'), tipos = []
		this.ajaxr('data-1.json', "GET", function(data){
			//var select = $(selectcity), selecttipo=$(selecttipo)
			selectcity.html('<option value="" selected>Elige una ciudad</option>')
			selecttipo.html('<option value="" selected>Elige un tipo</option>')
			$.each(data, function(index,value){
				var city= value.Ciudad
				if(typeof(cities[city])=="undefined")
				{
					cities[city]=1
					selectcity.append('<option value="'+city+'">'+city+'</option>')
				}
				var tipo= value.Tipo
				if(typeof(tipos[tipo])=="undefined")
				{
					tipos[tipo]=1
					selecttipo.append('<option value="'+tipo+'">'+tipo+'</option>')
				}
			})
		})
	}
	ajaxr(url,typeMethod,success,content,error=console.log)
	{
		var me = this
	    if(typeMethod == 'POST' || typeMethod == 'PUT')
	    {
	      var data = content
	    }else{
	      var data = {}
	    }
		$.ajax({
	      type: typeMethod,
	      dataType: "json",
	      url: me.params.almacen+url,
	      data: data,
	      success: function(data) {success(data);},
	      complete: function(data) {console.log("Complete")},
	      error: function(data) {error(data);}
	    })
	}
}