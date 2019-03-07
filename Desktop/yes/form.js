var action = document.getElementById('button');

action.addEventListener("click", function(){
   var etat = document.getElementById('footer').style.display;
   if(etat=="block"){
   document.getElementById('footer').style.display="none";
   }
   else{
   document.getElementById('footer').style.display="block";
   }  
}, false);