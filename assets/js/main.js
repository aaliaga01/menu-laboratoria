
 var menu= document.getElementById("btn");
 menu.classList.remove("hide");
 menu.classList.add("mano");

 menu.addEventListener("click",function(){
 	var menuOculto= Array.from(document.getElementsByClassName("mostrar"));
 	menuOculto.classList.toggle("hide");	
 });






