const container = document.getElementById( 'intro-image' );
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(55, container.offsetWidth / container.offsetHeight, 0.1, 10000);
var renderer = new THREE.WebGLRenderer( { alpha: true } );
var mouse = new THREE.Vector2();
var loader = new THREE.GLTFLoader();

camera.position.set( 27,0,0);
camera.lookAt(new THREE.Vector3(0,0,0));

renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild( renderer.domElement );

window.addEventListener('resize', function()
{
    var width = container.offsetWidth;
    var height = container.offsetHeight;
    renderer.setSize(width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});

//earth
loader.load('models/earth.gltf', earth_load);
var earth;
function earth_load(gltf) {
    earth = gltf.scene;
    earth.name = "earth";
    earth.scale.set(10,10,10);
    scene.add(earth);

}

//lighting
var ambient = new THREE.AmbientLight(0xFFFFFF, .7);
scene.add(ambient);

var light = new THREE.DirectionalLight(0xFFFFFF,3);
light.position.set(50,20,-50);
light.target.position.set(0,0,0);

scene.add(light);


var render = function()
{
    earth.rotation.x+=.01;
    earth.rotation.y+=.01;
    renderer.render(scene,camera);
};
var GameLoop = function()
{
    requestAnimationFrame(GameLoop);
    render();
};

GameLoop();
