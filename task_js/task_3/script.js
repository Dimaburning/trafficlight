const trafficLightE1 = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
const trafficLight = document.querySelector('div');



function makeGreen() {
    trafficLightE1.style.background = ('green');   
    trafficLightE2.style.background = ('black');   
    trafficLightE3.style.background = ('black');   
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
    
}

trafficLightE1.addEventListener('click', makeGreen);



function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE1.style.background = ('black');   
    trafficLightE3.style.background = ('black'); 
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
    
}

trafficLightE2.addEventListener('click', makeYellow);



function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE1.style.background = ('black');   
    trafficLightE2.style.background = ('black'); 
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);

   
}


trafficLightE3.addEventListener('click', makeRed);







