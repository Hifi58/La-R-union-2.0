//Variables de sections

let main = document.getElementById('main');
let whalesection = document.getElementById('whale-section');
let landscapesection = document.getElementById('landscape-section');

let foodsection = document.getElementById('food-section');

//Variables de boutons
let whale = document.getElementById('whale');
let landscape = document.getElementById('landscape');


//Listener dot

function switchWhale(){
    main.style.display = (main.style.display == 'none' ? '' : 'none');
    whalesection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchMain1(){
    whalesection.style.display = (main.style.display == 'none' ? '' : 'none');
    main.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}


