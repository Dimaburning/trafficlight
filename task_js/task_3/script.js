const trafficLightE1 = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
const trafficLightE = document.querySelector('#container');



function makeGreen() {
    trafficLightE1.style.background = ('green');   
    trafficLightE1.removeEventListener('click', makeGreen);
    trafficLightE1.addEventListener('click', makeYellow);
    

}

trafficLightE1.addEventListener('click', makeGreen);



function makeYellow() {
    trafficLightE1.style.background = ('yellow');
    trafficLightE1.removeEventListener('click', makeYellow);
    trafficLightE1.addEventListener('click', makeRed);
    
}

trafficLightE2.addEventListener('click', makeYellow);



function makeRed() {
    trafficLightE1.style.background = ('red');
    trafficLightE1.removeEventListener('click', makeRed);
    trafficLightE1.addEventListener('click', makeGreen);

   
}


trafficLightE1.addEventListener('click', makeRed);







