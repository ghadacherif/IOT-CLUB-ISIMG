function uniquementLettres(x)
{
	x=x.toUpperCase()
    var i=0
    while (x.charAt(i)>="A" && x.charAt(i)<="Z" && i<x.length) 
				i++

	return i == x.length
}


function verif1(){

    var resultat= true
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value

    if ( name.length <3 || name.length>20 || !uniquementLettres(name))
			{
			resultat = false
			alert("Le nom doit avoir de 3 à 20 lettres")
			}

    
}