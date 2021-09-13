//Variables de sections




let foodsection = document.getElementById('food-section');

//Switch Main
function switchMain1(){
    whalesection.style.display = (main.style.display == 'none' ? '' : 'none');
    main.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchMain2(){
    landscapesection.style.display = (main.style.display == 'none' ? '' : 'none');
    main.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchMain3(){
    seasection.style.display = (main.style.display == 'none' ? '' : 'none');
    main.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

//Switch Whale
let main = document.getElementById('main');
let whalesection = document.getElementById('whale-section');

function switchWhale(){
    main.style.display = (main.style.display == 'none' ? '' : 'none');
    whalesection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchWhaleLandscape(){
    whalesection.style.display = (main.style.display == 'none' ? '' : 'none');
    landscapesection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchWhaleSea(){
    whalesection.style.display = (main.style.display == 'none' ? '' : 'none');
    seasection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}




//Switch Landscape
let landscapesection = document.getElementById('landscape-section');

function switchLandscape(){
    main.style.display = (main.style.display == 'none' ? '' : 'none');
    landscapesection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchLandscapeWhale(){
    landscapesection.style.display = (main.style.display == 'none' ? '' : 'none');
    whalesection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchLandscapeSea(){
    landscapesection.style.display = (main.style.display == 'none' ? '' : 'none');
    seasection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

//Switch sea
let seasection = document.getElementById('sea-section');

function switchSea(){
    main.style.display = (main.style.display == 'none' ? '' : 'none');
    seasection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchSeaWhale(){
    seasection.style.display = (main.style.display == 'none' ? '' : 'none');
    whalesection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchSeaLandscape(){
    seasection.style.display = (main.style.display == 'none' ? '' : 'none');
    landscapesection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

//Switch bird
let birdsection = document.getElementById('birds-section');

function switchBird(){
    main.style.display = (main.style.display == 'none' ? '' : 'none');
    birdsection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchBirdWhale(){
    birdsection.style.display = (main.style.display == 'none' ? '' : 'none');
    whalesection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}

function switchBirdLandscape(){
    birdsection.style.display = (main.style.display == 'none' ? '' : 'none');
    landscapesection.style.display = (whalesection.style.display == 'block' ? '' : 'block');
}