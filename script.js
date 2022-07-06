//declarations
let camera, scene, renderer, controls, planetTexture, planetMaterial, planetGeometry, planet, ring;

var planets = [];
var rings =[];

var temperatures = [" 5778 K", "167 C", " 464 C", "15 C", " -65 C", " -110 C", " -140 C", " -195 C", " -200 C", " -225 C"];
var distances = [" 152 100 000 km", " 183 130 000 km", " 214 480 000 km", " 152 100 000 km", " 190 800 000 km", " 709 960 000 km", " 1 356 300 000 km", " 3 027 400 000" , " 4 422 700 000 km", " 2 021 100 000 km"];
var radius = [" 6 371 km", "24 397 km", " 60 518 km", " 6 371 km", " 33 895 km", " 69 911 km", " 58 232 km", " 25 362 km", " 24 622 km", " 1 188.3 km" ];
var core = [" Hydrogen and Helium", " Iron", " Iron and Nickel", " Iron and Nickel alloys", " Iron, Nickel and Sulphur", " Dense Hydrogen and Helium", " Iron and Nickel", " Water, Methane and Ammonia ice", " Iron, Nickel and Silicates" , " Nitrogen" ];

//on load init
init();
animate();

function loadSun(){
    
    document.getElementById("temp").innerText = "Core Temperature: " + temperatures[0];
    document.getElementById("dist").innerText = "Distance from Earth: " + distances[0];
    document.getElementById("radius").innerText = "Radius: " + radius[0];
    document.getElementById("core").innerText = "Core: " + core[0];

    newTexture = new THREE.TextureLoader().load("./resources/sun.jpg");
    planetMaterial.map = newTexture;
    document.getElementById("planetL").innerHTML = "Sun";
    scene.remove(ring);
}

function loadMercury(){

    document.getElementById("temp").innerText = "Average Temperature: " + temperatures[1];
    document.getElementById("dist").innerText = "Distance from Earth: " + distances[1];
    document.getElementById("radius").innerText = "Radius: " + radius[1];
    document.getElementById("core").innerText = "Core: " + core[1];

    newTexture = new THREE.TextureLoader().load("./resources/2k_mercury.jpg");
    planetMaterial.map = newTexture;
    currPlanet = "mercury";
    document.getElementById("planetL").innerHTML = "Mercury";
    scene.remove(ring);
}

function loadVenus(){
    
    document.getElementById("temp").innerText = "Average Temperature: " + temperatures[2];
    document.getElementById("dist").innerText = "Distance from Earth: " + distances[2];
    document.getElementById("radius").innerText = "Radius: " + radius[2];
    document.getElementById("core").innerText = "Core: " + core[2];

    newTexture = new THREE.TextureLoader().load("./resources/2k_venus_surface.jpg");
    planetMaterial.map = newTexture;
    document.getElementById("planetL").innerHTML = "Venus";
    scene.remove(ring);
}

function loadEarth(){
    
    document.getElementById("temp").innerText = "Average Temperature: " + temperatures[3];
    document.getElementById("dist").innerText = "Distance from Sun: " + distances[3];
    document.getElementById("radius").innerText = "Radius: " + radius[3];
    document.getElementById("core").innerText = "Core: " + core[3];

    newTexture = new THREE.TextureLoader().load("./resources/2k_earth_daymap.jpg");
    planetMaterial.map = newTexture;
    document.getElementById("planetL").innerHTML = "Earth";
    scene.remove(ring);
}

function loadMars(){
    
    document.getElementById("temp").innerText = "Average Temperature: " + temperatures[4];
    document.getElementById("dist").innerText = "Distance from Earth: " + distances[4];
    document.getElementById("radius").innerText = "Radius: " + radius[4];
    document.getElementById("core").innerText = "Core: " + core[4];

    newTexture = new THREE.TextureLoader().load("./resources/2k_mars.jpg");
    planetMaterial.map = newTexture;
    document.getElementById("planetL").innerHTML = "Mars";
    scene.remove(ring);
}

function loadJupiter(){
    
    document.getElementById("temp").innerText = "Average Temperature: " + temperatures[5];
    document.getElementById("dist").innerText = "Distance from Earth: " + distances[5];
    document.getElementById("radius").innerText = "Radius: " + radius[5];
    document.getElementById("core").innerText = "Core: " + core[5];

    newTexture = new THREE.TextureLoader().load("./resources/2k_jupiter.jpg");
    planetMaterial.map = newTexture;
    document.getElementById("planetL").innerHTML = "Jupiter";
    scene.remove(ring);
}

function loadSaturn(){
    
    document.getElementById("temp").innerText = "Average Temperature: " + temperatures[6];
    document.getElementById("dist").innerText = "Distance from Earth: " + distances[6];
    document.getElementById("radius").innerText = "Radius: " + radius[6];
    document.getElementById("core").innerText = "Core: " + core[6];
    
    scene.remove(ring);
    newTexture = new THREE.TextureLoader().load("./resources/2k_saturn.jpg");
    planetMaterial.map = newTexture;
    var ringGeo = new THREE.RingGeometry(3,6,600);
    var ringTex = new THREE.TextureLoader().load("./resources/saturn ring.png");
    var ringMat = new THREE.MeshBasicMaterial({map: ringTex, side:THREE.DoubleSide});
    ring = new THREE.Mesh(ringGeo,ringMat);
    ring.position.x = 0;
    ring.position.y = 0.5;
    ring.position.z = 0;
    ring.rotateX(Math.PI/2.2);
    ring.rotateY(Math.PI/-25);
    scene.add(ring);
    rings.push(ring);
    document.getElementById("planetL").innerHTML = "Saturn";
}

function loadUranus(){
    
    document.getElementById("temp").innerText = "Average Temperature: " + temperatures[7];
    document.getElementById("dist").innerText = "Distance from Earth: " + distances[7];
    document.getElementById("radius").innerText = "Radius: " + radius[7];
    document.getElementById("core").innerText = "Core: " + core[7];

    scene.remove(ring);
    newTexture = new THREE.TextureLoader().load("./resources/2k_uranus.jpg");
    planetMaterial.map = newTexture;
    var ringGeo = new THREE.RingGeometry(4,5.5,600);
    var ringTex = new THREE.TextureLoader().load("./resources/uranus ring.png");
    var ringMat = new THREE.MeshBasicMaterial({map: ringTex, side:THREE.DoubleSide});
    ring = new THREE.Mesh(ringGeo,ringMat);
    ring.position.x = 0;
    ring.position.y = 0.5;
    ring.position.z = 0;
    ring.rotateX(Math.PI/-3);
    ring.rotateY(Math.PI/15);
    scene.add(ring);
    rings.push(ring);
    document.getElementById("planetL").innerHTML = "Uranus";
}

function loadNeptune(){
    
    document.getElementById("temp").innerText = "Average Temperature: " + temperatures[8];
    document.getElementById("dist").innerText = "Distance from Earth: " + distances[8];
    document.getElementById("radius").innerText = "Radius: " + radius[8];
    document.getElementById("core").innerText = "Core: " + core[8];

    newTexture = new THREE.TextureLoader().load("./resources/2k_neptune.jpg");
    planetMaterial.map = newTexture;
    document.getElementById("planetL").innerHTML = "Neptune";
    scene.remove(ring);
}

function loadPluto(){
    
    document.getElementById("temp").innerText = "Average Temperature: " + temperatures[9];
    document.getElementById("dist").innerText = "Distance from Earth: " + distances[9];
    document.getElementById("radius").innerText = "Radius: " + radius[9];
    document.getElementById("core").innerText = "Core: " + core[9];

    newTexture = new THREE.TextureLoader().load("./resources/2k_pluto.jpg");
    planetMaterial.map = newTexture;
    document.getElementById("planetL").innerHTML = "Pluto";
    scene.remove(ring);
}

//init
function init() {

    //camera
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 2000 );
    camera.position.set( 15, 0, 0);
    scene = new THREE.Scene();
    
    //planet
    planetTexture = new THREE.TextureLoader().load("./resources/sun.jpg");
    planetGeometry = new THREE.SphereGeometry(3, 100, 500 );
    planetMaterial = new THREE.MeshBasicMaterial({ map:planetTexture } );
    planet = new THREE.Mesh( planetGeometry, planetMaterial );
    planet.position.x = 0;
    planet.position.y = 0.5;
    planet.position.z = 0;
    scene.add( planet );
    planets.push( planet );
    
    //renderer
    renderer = new THREE.WebGLRenderer( { antialias: true , alpha:true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    //controls
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    //controls.minPolarAngle = Math.PI/2;
    //controls.maxPolarAngle = Math.PI/2;
    controls.enableZoom = true;
    controls.enablePan = false;
}

//animate
function animate() {

    requestAnimationFrame( animate );
    
    for ( let p of planets ) {
    p.rotation.y += 0.002;
    }

    for(let r of rings){
        r.rotation.z += 0.002;
    }
    
    controls.update();
    
    renderer.render( scene, camera );

}

//renderer responsiveness
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});




 
