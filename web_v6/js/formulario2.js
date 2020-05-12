var listaResultados = JSON.parse(sessionStorage.getItem('respuestas'));
console.log("RESULTADOS: "+listaResultados);

function cargarTabla(){
	console.log("RESULTADOS2: "+listaResultados);
	var puntos = 0;
	var tabla = document.getElementById("tablaRes");
	var contador1=1;
	var contador2=1;
	console.log("RESULTADOS2: "+listaResultados.length);
	for(var i=0;i<listaResultados.length;i++){
		console.log("RESULTADOS3: "+listaResultados[i]);
		var fila = tabla.insertRow(-1);
		var cell1 = fila.insertCell(0);
		var cell2 = fila.insertCell(1);
		var cell3 = fila.insertCell(2);
		var cell4 = fila.insertCell(3);
		cell1.innerHTML = "P"+contador2+contador1;
		cell2.innerHTML = listaResultados[i];

		if(listaResultados[i]=="-"){
			fila.className="correcta";
			cell2.innerHTML = "Correcta";
			cell3.innerHTML = 1;
			puntos++;
			if(contador2==2){
				puntos++;
				cell3.innerHTML = 2;
			}
		}else{
			fila.className="incorrecta";
			cell2.innerHTML = "Incorrecta";
			cell3.innerHTML = 0;
			cell4.innerHTML = listaResultados[i];
		}



		
		if(contador1==4 && contador2==1){
			contador1=1;
			contador2=2;
		}else if(contador1==1 && contador2==2){
			contador1=1;
			contador2=3;
		}else if(contador1==4 && contador2==3){
			contador1=1;
			contador2=4;
		}else{
			contador1++;
		}

	}
	var boton = document.getElementById("botonP3");
	boton.style.display="none";

	var nota = document.getElementById("nota");
	nota.style.display="block";

	var puntuacion = document.getElementById("puntuacion");
	nota.innerHTML=puntos+"/13="+truncateDecimals((puntos/13*10),2);
	if(truncateDecimals((puntos/13*10),2)>=5)
		nota.className = "notaCorrecta";
	else nota.className = "notaIncorrecta";
	
}

truncateDecimals = function (number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};