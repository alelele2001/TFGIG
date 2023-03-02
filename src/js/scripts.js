/*Imports*/
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';


/*Inicialización creación render , camera ,etc*/ 
const axesHelper = new THREE.AxesHelper(300);
let axis = false;
const axisBtn = document.getElementById("axisBtn");
const upView = document.getElementById("upView");
axisBtn.addEventListener("click", function(){
    if(axis){
        axis = false;
        scene.remove(axesHelper);
    }
    else{
        scene.add(axesHelper);
        axis = true;

    }
    
    //console.log("la funcion se llamó");
});

upView.addEventListener("click", function(){
    camera.position.set(0,50,0);
    camera.lookAt(0,0,0);
    
    //console.log("la funcion se llamó");
});
frontView.addEventListener("click", function(){
    camera.position.set(0,0,50);
    camera.lookAt(0,0,0);
    
    //console.log("la funcion se llamó");
});
downView.addEventListener("click", function(){
    camera.position.set(0,-50,0);
    camera.lookAt(0,0,0);
    
    //console.log("la funcion se llamó");
});
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
renderer.setClearColor(0xE0E0E0);
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0,0,50);
//camera.lookAt(,0,0);


/* Orbit controls*/
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// pasando del control update puesto que despues hace rollo con el camera.lookAt y demas


/* Añadimos luz de ambiente , un spotlight y un helper para ayudar con el spotlight */
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);
const spotLight = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight);
spotLight.position.set(-100,100,0);
spotLight.castShadow = true;
spotLight.angle = 0.2;
const sLightHelper = new THREE.SpotLightHelper(spotLight);
//scene.add(sLightHelper);


function animate(){
    renderer.render(scene,camera);
}


renderer.setAnimationLoop(animate);