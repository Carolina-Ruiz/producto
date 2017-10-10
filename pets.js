var jugar = function()
{
	return {
		jugar_a_la_pelota: function(){},
		jugar_en_el_agua: function() {},
		jugar_a_seguir_al_amo: function() {}
	}
}

var pet = function (patas)
{
	return Object.assign({
		caminar: function() {
			mover(patas)
		},
		comer: function()
		{}
	});
}

var perrito = function()
{
	const patas = 4;
	var o = Object.assign({}, pet(patas), 
		{
			ladrar: function() {}
		}, jugar())

	o.jugar_a_la_pelota();

	return o;
}

var pez = function()
{
	return Object.assign({}, pet(0))
}