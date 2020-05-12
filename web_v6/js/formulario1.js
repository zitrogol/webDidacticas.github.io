sessionStorage.clear();//Limpiamos los posibles datos guardados

function revision(elem){
	//window.alert(" empezamos revision");
	
	if(!validarDatos(elem,2)){
		window.alert(" fallamos revision");	
		console.log("fallamos revision");
		return false;
	}

	//window.alert(" seguimos revision");

	var respuestas = [];

	var p11 = document.getElementsByName('for')[0];//document.autoevaluacion.for;
	if(p11.checked){
		respuestas.push("Los bucles se ejecutan siempre un numero determinado de veces, si son correctos");
	}else{
		respuestas.push("-");
	}

	var p12 = document.getElementsByName('durante')[0];//document.autoevaluacion.durante;
	if(p12.checked){
		respuestas.push("-");
	}else{
		respuestas.push("Es verdadera");
	}

	var p13 = document.getElementsByName('para')[0];//document.autoevaluacion.para;
	if(p13.checked){
		respuestas.push("-");
	}else{
		respuestas.push("Es verdadera");
	}

	var p14 = document.getElementsByName('desde')[0];//document.autoevaluacion.desde;
	if(p14.checked){
		respuestas.push("-");
	}else{
		respuestas.push("Es verdadera");
	}


	//Area de texto
	var p2 = document.getElementsByName('codigo')[0];
	//window.alert("p2 text:"+p2.value);
	var cadenaLimpia = p2.value;
	//window.alert("p2 cadena Limpia:"+cadenaLimpia.replace(/\s/g, ""));
	cadenaLimpia = cadenaLimpia.replace(/\s/g, "");
	//cadenaLimpia = cadenaLimpia.valueOf();
	//console.log("CADENA: "+cadenaLimpia);
	if(cadenaLimpia=="while(x<101)" || cadenaLimpia=="for(;x<101;)" || cadenaLimpia=="for(x=0;x<=100;)" || cadenaLimpia=="for(;x<=100;)"|| 
				cadenaLimpia=="for(x=0;x<101;)" ||cadenaLimpia=="while(x<101){" || cadenaLimpia=="for(;x<101;){" || cadenaLimpia=="for(;x<=100;){"|| 
				cadenaLimpia=="for(x=0;x<=100;){" || cadenaLimpia=="for(x=0;x<101;){"){
		respuestas.push("-");
	}else{
		respuestas.push("for(x=0;x<=100;) o for(x=0;x<101;) o for(;x<101;) o while(x<101)");
	}
	//console.log("CADENA: "+respuestas);
	//lista seleccion multiple
	var p3 = document.getElementsByName('pregun3')[0];

	if(p3.length==4){
		if(p3[0].selected){
			respuestas.push("El bucle while puede que tampoco se ejecute");
		}else{
			respuestas.push("-");
		}
		if(p3[1].selected){
			respuestas.push("El bucle while se ejecuta un numero determinado de veces, si es correcto");
		}else{
			respuestas.push("-");
		}
		if(p3[2].selected){
			respuestas.push("El FOR si puede convertirse en un while, aunque no es lo mejor");
		}else{
			respuestas.push("-");
		}
		if(p3[3].selected){
			respuestas.push("El FOR tambien permite su inicializacion");
		}else{
			respuestas.push("-");
		}

	}else{
		window.alert("¡¡¡ ESTO NO DEBERIA ESTAR SALIENDO !!!");
	}

	//console.log("CADENA: "+respuestas);
	//radiobutons
	var p41 = document.getElementsByName('for')[1];//document.autoevaluacion.for;
	if(p41.checked){
		respuestas.push("-");
	}else{
		respuestas.push("Es verdadera");
	}
	//window.alert("p41 text:"+p41.checked);
	var p42 = document.getElementsByName('while')[0];//document.autoevaluacion.durante;
	if(p42.checked){
		respuestas.push("-");
	}else{
		respuestas.push("Es verdadera");
	}
	//window.alert("p42 text:"+p42.checked);
	var p43 = document.getElementsByName('dowhile')[0];//document.autoevaluacion.para;
	if(p43.checked){
		respuestas.push("Se evalua al final");
	}else{
		respuestas.push("-");
	}
	//window.alert("p43 text:"+p43.checked);

	//console.log("CADENA: "+respuestas);
	sessionStorage.setItem('respuestas', JSON.stringify(respuestas));

	if (!confirm("Estás seguro de que quieres enviar?")) {
		return false;
	}
	//window.alert("******************************** FIN ***********************************");
	//return false;

}

function mostrarPregunta(elem) {
	console.log("mostrarPregunta");
	//window.alert("mostrarPregunta");
	   //alert(elem.id);
	if(elem.id=="botonEmpezarTest"){
		var pregunta = document.getElementById('pregunta1');
		pregunta.style.display="block";
		elem.style.display="none";
	}else if(elem.id=="botonP1"){
		var pregunta = document.getElementById('pregunta2');
		pregunta.style.display="block";
		elem.style.display="none";
	}else if(elem.id=="botonP2"){
		var pregunta = document.getElementById('pregunta3');
		pregunta.style.display="block";
		elem.style.display="none";
	}else if(elem.id=="botonP3"){
		var pregunta = document.getElementById('pregunta4');
		pregunta.style.display="block";
		elem.style.display="none";
	}
}

function validarDatos(elem,desde){
	//window.alert("validarDatos");

	var nombre=document.autoevaluacion.nombre;
	var apellidos=document.autoevaluacion.apellidos;
	var curso=document.autoevaluacion.curso;
	var email=document.autoevaluacion.email;
	var fecha=document.autoevaluacion.fecha;
	var tel=document.autoevaluacion.telefono;

	/*if(desde==2)
		console.log("validamos nombre");*/

	//Validamos el nombre
	var texto = "Por favor, introduce un nombre correcto"
	if (nombre.value.trim()=="") {					
		nombre.setCustomValidity(texto);
		nombre.focus();
		window.alert(texto);
		return false;
	}

	/*if(desde==2)
		console.log("validamos apellidos");*/
	//Validamos apellidos
	texto = "Por favor, introduce apellidos"
	if (apellidos.value.trim()=="") {
		apellidos.setCustomValidity(texto);
		apellidos.focus();
		window.alert(texto);
		return false;
	}
	
	/*if(desde==2)
		console.log("validamos curso");*/

	//Validamos apellidos
	texto = "Por favor, selecciona un curso"
	if (curso.value=="") {
		curso.setCustomValidity(texto);
		curso.focus();
		window.alert(texto);
		return false;
	}
	
	/*if(desde==2)
		console.log("validamos email");*/

	texto = "Por favor, introduce un email correcto"
	valorEmail=email.value.trim()
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var patron = new RegExp("^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}");
	if (!re.test(valorEmail)){
		email.setCustomValidity(texto);
		email.focus();
		window.alert(texto);
		return false;
	}
	
	/*if(desde==2)
		console.log("validamos fecha");*/

	var fechaReg = /^(\d{4})[./-](\d{1,2})[./-](\d{1,2})$/;
	texto = "Por favor, introduce una fecha de nacimiento correcta";
	if (!fechaReg.test(fecha.value)) {
		//document.getElementById("demo").innerHTML = inpObj.validationMessage;
		fecha.setCustomValidity(texto);
		fecha.focus();
		window.alert(texto);
		return false;
	}else{
		var a = parseInt(fecha.value.substring(0,4));
		if(a<1910 || a>2010){
			texto = "Año no valido. Por favor, introduce una fecha de nacimiento correcta";
			fecha.setCustomValidity(texto);
			fecha.focus();
			window.alert(texto);
			return false;
		}
	}
	
	/*if(desde==2)
		console.log("validamos telefono");*/

	texto = "Por favor, introduce un telefono correcto"
	var telReg = /^[6789]{1}[0-9]{8}/
	if (!telReg.test(tel.value)){
		//document.getElementById("demo").innerHTML = inpObj.validationMessage;
		tel.setCustomValidity(texto);
		tel.focus();
		window.alert(texto);
		return false;
	}

	//window.alert("*** VALIDADO ***");
	if(desde==1){
		mostrarPregunta(elem);
	}else{//para depurar
		console.log("terminamos validacion");		
	}
	
	return true;
	
}