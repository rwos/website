var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var world_size = 5;

var group = new THREE.Object3D();
for (var x = 0; x < world_size; x++) {
    for (var y = 0; y < world_size; y++) {
        for (var z = 0; z < world_size; z++) {
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshLambertMaterial({color: 0x00ffff, opacity: 0.3, transparent: true});
            //material.depthWrite = false;
            //var material = new THREE.PointCloudMaterial({color: 0x00ffff});
            var cube = new THREE.Mesh(geometry, material);
            cube.position.x = x;
            cube.position.y = y;
            cube.position.z = z;
            group.add(cube);
        }
    }
}
scene.add(group);
group.position.x -= world_size / 2;
group.position.z -= world_size / 2;
group.position.y -= world_size / 2;


////////////////////////////////

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0xff00ff});
//material.depthWrite = false;
//var material = new THREE.PointCloudMaterial({color: 0x00ffff});
var snake = new THREE.Mesh(geometry, material);
snake.position.x = world_size / 2;
snake.position.y = world_size / 2;
snake.position.z = world_size / 2;

////////////////////////////////


var pivot = new THREE.Object3D();
pivot.add( group );
pivot.add( snake );
scene.add( pivot );
////////////////////////////////


var light = new THREE.HemisphereLight(0xffffff, 0x010101);
scene.add(light);

camera.position.z = 30;
camera.position.y = 2;
camera.rotation.x = -10 * (Math.PI / 180);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var SPEED = 0.1;
var dir = {
    x: -SPEED,
    y: 0,
    z: 0
};
snake.position.x -= 1;
snake.position.y -= 4;

stats = new Stats();
document.body.appendChild( stats.domElement );

//snake.add(camera); /// XXX XXX XXX
/// camera should be on the inside of a large sphere, and
//  should follow the snake head around

var render = function () {
    stats.begin();
    requestAnimationFrame(render);
    pivot.rotation.x += 0.001;
    pivot.rotation.y += 0.001;
    //camera.position.z += 0.01;
    snake.position.x += dir.x;
    snake.position.y += dir.y;
    snake.position.z += dir.z;
    if (snake.position.x < (-(world_size/2))-1) {
        snake.position.x = (-world_size/2)-1;
        dir.x = 0;
        dir.z = -SPEED;
        //snake.rotation.y -= Math.PI / 2;
    }
    if (snake.position.y < -(world_size/2)) {
        dir.y = 0;
    }
    if (snake.position.z < -(world_size/2)-1) {
        snake.position.z = -(world_size/2)-1;
        dir.z = 0;
        dir.x = +SPEED;
    }
    if (snake.position.x > (world_size/2)) {
        snake.position.x = world_size/2;
        dir.x = 0;
        dir.z = +SPEED;
    }
    if (snake.position.y > (world_size/2)) {
        dir.y = 0;
    }
    if (snake.position.z > (world_size/2)) {
        snake.position.z = world_size/2;
        dir.z = 0;
        dir.x = -SPEED;
    }
    //camera.up = new THREE.Vector3(0,0,1);
    //camera.up = snake.rotation;
    camera.lookAt(snake.position);
    renderer.render(scene, camera);
    stats.end();
};
render();
