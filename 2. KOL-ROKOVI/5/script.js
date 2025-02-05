var evidencija = [];


function validacijaVrijeme(vrijeme){
	
	     var reg = /^[0-9]+$/;
		 
		 var t = parseInt(vrijeme);
		 
		     if(t > 0 && t < 90 && vrijeme.match(reg)){
				 
				 for(var i=0; i<evidencija.length; i++){
					 
					 if(t <= parseInt(evidencija[i].Vrijeme)){
						 
						 alert("Vrijeme vec uneseno");
						 
						 return false;
						 
					 }
					 
				 }
				 
				 return true;
				 
			 }
			 else{
				 
				 alert("Vrijeme uneseno pogresno");
						 
				 return false;
				 
			 }
			 	
};


function preuzmi(id){
	
	     if(document.getElementById(id)){
			 
			 return document.getElementById(id);
			 
		 }
	
	  return false;
	
};



function validacija(){
	
	
	     var val1 = validacijaVrijeme(preuzmi("vrijeme").value);
	
	     if(val1 == true){ 
		 
		     return true;
		 
		 }
		 else{
			 
			 return false;
			 
		 }
	
};


function dodajGol(){
	
	
	     if(validacija() == true){
			 
			 var tim = preuzmi("tim").value;
			 
			 var vrijeme = preuzmi("vrijeme").value;
			 
			 var objekt = {Tim: tim, Vrijeme: vrijeme};
			 
			 evidencija.push(objekt);
			 
			 alert("Objekat uspjesno kreiran");
			 
			 kreirajTabele();
			 
			 
		 }
	
	
	  return false;
	
	
};


function izracunajRezultat(contId){
	
	     var tim1 = 0;
		 
		 var tim2 = 0;
		 
		 for(var i=0; i<evidencija.length; i++){
			 
			  if(evidencija[i].Tim == "Bosna"){
				  
				  tim1 = tim1 + 1;
				  
			  }
			  else{
				  
				  tim2 = tim2 + 1;
				  
			  }
			 
		 }
	
	     preuzmi("rezultat").innerHTML = tim1+"-"+tim2;
		 
		 var t = setTimeout('izracunajRezultat("rezultat")', 3000);
	
};



function kreirajTabele(){
	
	     var tabela = "<table border = '1'><tr> <td colspan = '3' align = 'center'>Evidencija golova</td> </tr> <tr> <td>RB:</td> <td>Reprezentacija</td> <td>Vrijeme</td> </tr>"
	
	     for(var i=0; i<evidencija.length; i++){
			 
			 tabela = tabela + "<tr> <td>"+(i+1)+"</td> <td>"+evidencija[i].Tim+"</td> <td>"+evidencija[i].Vrijeme+"</td> </tr>";
			  
		 }
		 
		 tabela += "</table>";
		 
		 preuzmi("tabela").innerHTML = tabela;
	
};



function obrisi(){
	
	
	     var t = preuzmi("stavka").value;
		 
		 evidencija.splice(t-1,1);
		 
		 kreirajTabele();
		
};
