const trafficLightE1 = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');
const trafficLightE = document.querySelector('#container');



function makeGreen() {
    trafficLightE1.style.background = ('green');   
    trafficLightE1.removeEventListener('click', makeGreen);
    trafficLightE2.addEventListener('click', makeYellow);
    

}

trafficLightE1.addEventListener('click', makeGreen);



function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE3.addEventListener('click', makeRed);
    
}

trafficLightE2.addEventListener('click', makeYellow);



function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE1.addEventListener('click', makeGreen);

   
}


trafficLightE3.addEventListener('click', makeRed);







