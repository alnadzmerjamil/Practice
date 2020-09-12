function adding(){
    var a = document.getElementById("a1").value;
    var b = document.getElementById("b1").value;
    var c = parseInt(a) + parseInt(b);
   document.getElementById("plus").innerHTML = ("C is: " + c );
   
}


function multiply(){
    
  var a = document.getElementById("a2").value;
  var b = document.getElementById("b2").value;
  var c = parseInt(a) * parseInt(b);
 document.getElementById("times").innerHTML = ("C is: " + c );
 
   
  }

  function square(){
    
    var a = document.getElementById("a3").value;
   
    var c = Math.sqrt(parseInt(a)); 
   document.getElementById("square").innerHTML = ("The square root is: " + c );
   
     
    }
function remainder(){
    
    var a = document.getElementById("a4").value;
    var b = document.getElementById("b4").value;
    var c = parseInt(a) % parseInt(b);
   document.getElementById("remainder").innerHTML = ("The remainder is: " + c );
   
     
    }
  
  function english(){
    var a = document.getElementById("english1").value;
    var b = document.getElementById("math1").value;
    var c = document.getElementById("phy").value;
    var d = document.getElementById("bio").value;

    var arr = [a, b, c,d];
    
    var maxx = arr.sort(function(a, b) {return b - a});
    
   if (a == ""){
     result = "Enter your grade in english"
   } else if (maxx[0] == a && maxx[0] == b && maxx[0] == c && maxx[0] == d){
    result = "Consistent";
   } else if (maxx[0] == a && maxx[0] == b && maxx[0] == c){
     result = "English Math Physics";
   
   } else if (maxx[0] == a && maxx[0] == b && maxx[0] == d){
     result = "English Math Biology";
   } else if (maxx[0] == a && maxx[0] == c && maxx[0] == d){
     result = "Eng Physics Bio";
    } else if (maxx[0] == b && maxx[0] == c && maxx[0] == d){
      result = "Math Physics Bio";
       

   } else if (maxx[0] == a && maxx[0] == b){
     var result = "English Math"
   } else if (maxx[0] == a && maxx[0] == c) {
     result = "English Physics";
   } else if (maxx[0] == a && maxx[0] == d) {
     result = "Math Biology";

   } else if (maxx[0] == b && maxx[0] == c) {
     result = "Math Physics";
   } else if (maxx[0] == b && maxx[0] == d) {
     result = "Math Biology";
    } else if (maxx[0] == c && maxx[0] == d) {
      result = "Physics Biology";

   }else if (maxx[0] == a){
      var result = "Best in English!";
  

    } else if (maxx[0] == b){
      result = "Best in Mathematics";
    } else if (maxx[0] == c){
      result = "Best in Physics";
    } else if (maxx[0] == d){
      result = "Best in Biology";
    
    } else if (maxx[0] == c && maxx[0] == d) {
      result = "Phy Bio";

    
    } else {
       result = "burarol";
     
    }
     
     
     
     
     

    
    document.getElementById("result").innerHTML = result;
    console.log(result);
  }
  