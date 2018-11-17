$.ajaxSetup({
'beforeSend' : function(xhr) {
xhr.overrideMimeType('text/html; charset=utf-8');
}
});

function sendTicket() {
	var title = $('#title').val();
	var date = $('#date').val();
	var petitioner = $('#petitioner').val();
	var description = $('#description').val();
	

	/*Aquì deberìa de llamar al método de blockchain y recibir un boolean de vuelta*/

	var result = false;

	if(result) {
		alert("Su tiquet fue enviado satisfactoriamente");
	} else {
		alert("Hubo un problema y su tiquet no pudo ser enviado");
	}
}