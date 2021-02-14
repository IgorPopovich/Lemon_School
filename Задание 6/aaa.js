var x= [];

 function changeText2(){
var firstname = document.getElementById('firstname').value;
document.getElementById('boldStuff2').innerHTML = firstname;
x.push(firstname);
document.getElementById('demo').innerHTML = x;
 }
 </script>

 <p>Your first name is: <b id='boldStuff2'></b> </p> 
 <p> Other people's names: </p>

 <ol>
     <li id = "demo"> </li> 
 </ol>

 <input type='button' onclick='changeText2()'   value='Submit'/> 