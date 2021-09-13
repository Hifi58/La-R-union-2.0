//Variables de sections

let main = document.getElementById('main');
let whalesection = document.getElementById('whale-section');

//Variables de boutons
let whale = document.getElementById('whale');

whale.addEventListener('click', function(){
     main.style.display="none";
     whalesection.style.display="block";
})