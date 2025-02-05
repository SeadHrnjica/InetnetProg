var bihIgraci = [];
var estonijaIgraci = [];

function preuzmi(id){
	if(document.getElementById(id)){
		return document.getElementById(id);
	}
	else{
		alert("Nepravilan id");
		return false;
}
}

function validacija_forme(){
	var imeprezime = preuzmi("ime").value;
	var broj = preuzmi("broj").value;
	var tim = preuzmi("tim").value;
	
	var prva = validacija_ime_prezime(imeprezime);
	if(tim=="bos"){
	var druga = validacija_broja_dresa(broj, bihIgraci);
	}
	if(tim=="esto"){
	var druga = validacija_broja_dresa(broj, estonijaIgraci);
	}
	
	if(prva && druga){
		return true;
	}
	else{
		return false;
	}
}


function validacija_ime_prezime(tekst){
	if(tekst.length>0) {
		preuzmi("imeProvjera").innerHTML = "";
		return true;
	}
	else{
		preuzmi("imeProvjera").innerHTML = "Unesite ime i prezime";
		return false;
	}
}

function validacija_broja_dresa(broj, nizIgraca){
	for(i = 0; i<nizIgraca.length; i++){
		if(broj == nizIgraca[i].broj){
			preuzmi("brojProvjera").innerHTML = "Postoji igrac sa istim brojem";
			return false;
		}
	}
			if(broj >99){
			preuzmi("brojProvjera").innerHTML = "Broj ne smije biti veći od dvocifrenog";
			return false;
			}
			
			if(broj == ""){
			preuzmi("brojProvjera").innerHTML = "Ne smije biti prazno";
			return false;
		}
			else{
			preuzmi("brojProvjera").innerHTML = "";
			return true;
		}
}

function noviUnos(){
		var imeprezime = preuzmi("ime").value;
	var broj = preuzmi("broj").value;
	var tim = preuzmi("tim").value;
	if(validacija_forme()){
		var igrac = {ime: imeprezime, broj: broj};
		if (tim == "bos"){
			bihIgraci.push(igrac);
		}
		if (tim == "esto"){
			estonijaIgraci.push(igrac);
		}
	}
	prikaziNizIgraca(bihIgraci, "bosanski");
	prikaziNizIgraca(estonijaIgraci, "estonski");
}

function prikaziNizIgraca(nizIgraca, elem){
	var objekat = preuzmi(elem);
	
	var tabela = '<table border = "1px"><tr> <td><b> R. Br.<b> </td> <td><b> Ime i prezime</b> </td> <td><b> Broj dresa </b></td></tr>';
	for (i = 0; i<nizIgraca.length; i++){
		tabela += '<tr> <td>'+ (i+1) +'</td> <td>'+ nizIgraca[i].ime+ '</td> <td>'+ nizIgraca[i].broj +'</td></tr>';
	}
	tabela+= '</table>';
	objekat.innerHTML= tabela;
	
}

function ponistiUnos(){
	var ime = preuzmi("ime").value;
	var broj = preuzmi("broj").value;
	var tim = preuzmi("tim").value;
	
	if(ime.length==0){
		var objekat = preuzmi("bosanski");
		objekat.innerHTML="";
		var objekat2 = preuzmi("estonski");
		objekat2.innerHTML="";
	}
	else{
		preuzmi("ime").value="";
		preuzmi("broj").value = "";
		preuzmi("tim").value = "bos";
	}
}

function dodijeliKartonZuti(){
	var brojdresa = preuzmi("broj").value;
	var tim = preuzmi("tim").value;
	if(tim=="bos"){
	var objekat = preuzmi("bosanski");
	var tabela = '<table border = "1px"><tr> <td><b> R. Br.<b> </td> <td><b> Ime i prezime</b> </td> <td><b> Broj dresa </b></td></tr>';
	for (i = 0; i<bihIgraci.length; i++){
		if(brojdresa == bihIgraci[i].broj){
			tabela += '<tr style = "backgroundColor:yellow"> <td>'+ (i+1) +'</td> <td>'+ bihIgraci[i].ime+ '</td> <td>'+ bihIgraci[i].broj +'</td></tr>';
		}
		else{
		tabela += '<tr> <td>'+ (i+1) +'</td> <td>'+ bihIgraci[i].ime+ '</td> <td>'+ bihIgraci[i].broj +'</td></tr>';
		}
	}
	tabela+= '</table>';
	objekat.innerHTML= tabela;
	}
	else{
		var objekat = preuzmi("estonski");
			var tabela = '<table border = "1px"><tr> <td><b> R. Br.<b> </td> <td><b> Ime i prezime</b> </td> <td><b> Broj dresa </b></td></tr>';
	for (i = 0; i<estonijaIgraci.length; i++){
		if(brojdresa == estonijaIgraci[i].broj){
			tabela += '<tr style = "backgroundColor:yellow"> <td>'+ (i+1) +'</td> <td>'+ estonijaIgraci[i].ime+ '</td> <td>'+ estonijaIgraci[i].broj +'</td></tr>';
		}
		else{
		tabela += '<tr> <td>'+ (i+1) +'</td> <td>'+ estonijaIgraci[i].ime+ '</td> <td>'+ estonijaIgraci[i].broj +'</td></tr>';
		}
	}
	tabela+= '</table>';
	objekat.innerHTML= tabela;
	}
}

function dodijeliKartonCrveni(){
	var brojdresa = preuzmi("broj").value;
	var tim = preuzmi("tim").value;
	if(tim=="bos"){
	var objekat = preuzmi("bosanski");
	var tabela = '<table border = "1px"><tr> <td><b> R. Br.<b> </td> <td><b> Ime i prezime</b> </td> <td><b> Broj dresa </b></td></tr>';
	for (i = 0; i<bihIgraci.length; i++){
		if(brojdresa == bihIgraci[i].broj){
			tabela += '<tr style = "backgroundColor:red"> <td>'+ (i+1) +'</td> <td>'+ bihIgraci[i].ime+ '</td> <td>'+ bihIgraci[i].broj +'</td></tr>';
		}
		else{
		tabela += '<tr> <td>'+ (i+1) +'</td> <td>'+ bihIgraci[i].ime+ '</td> <td>'+ bihIgraci[i].broj +'</td></tr>';
		}
	}
	tabela+= '</table>';
	objekat.innerHTML= tabela;
	}
	else{
		var objekat = preuzmi("estonski");
			var tabela = '<table border = "1px"><tr> <td><b> R. Br.<b> </td> <td><b> Ime i prezime</b> </td> <td><b> Broj dresa </b></td></tr>';
	for (i = 0; i<estonijaIgraci.length; i++){
		if(brojdresa == estonijaIgraci[i].broj){
			tabela += '<tr style = "backgroundColor:red"> <td>'+ (i+1) +'</td> <td>'+ estonijaIgraci[i].ime+ '</td> <td>'+ estonijaIgraci[i].broj +'</td></tr>';
		}
		else{
		tabela += '<tr> <td>'+ (i+1) +'</td> <td>'+ estonijaIgraci[i].ime+ '</td> <td>'+ estonijaIgraci[i].broj +'</td></tr>';
		}
	}
	tabela+= '</table>';
	objekat.innerHTML= tabela;
	}
	

}
