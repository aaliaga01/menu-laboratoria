
document.getElementById("btn").addEventListener("click",function(){
	var status = document.getElementById("desplegable").style.display;
 		if (status == "block"){
 			document.getElementById("desplegable").style.display = "none";
 		} else {
 		document.getElementById("desplegable").style.display = "block";
 		}
 });
