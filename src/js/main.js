import * as Three from 'three';
import * as curves from 'three/examples/jsm/curves/CurveExtras';



import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

const cam = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 200);



const scn = new Three.Scene();


const rend = new Three.WebGLRenderer( {
  canvas: document.querySelector('#b'),
  antialias: true
  // alpha : true
} );

document.body.appendChild(rend.domElement);

function res() {
cam.aspect = (window.innerWidth / window.innerHeight);
cam.updateProjectionMatrix();
rend.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', res, false);

rend.setSize(window.innerWidth, window.innerHeight);
rend.setPixelRatio(window.devicePixelRatio);


const ctrl = new OrbitControls(cam, rend.domElement);
const pointerlock = new PointerLockControls(cam, rend.domElement);

window.addEventListener('click', () => {
  
  
  pointerlock.lock();

} );

window.addEventListener('dblclick', () => {
  
  pointerlock.unlock();

});


cam.position.z = 30;
// cam.position.x = -3;

const tgeo = new Three.TorusGeometry(10, 3, 16, 100);
const tmat = new Three.MeshStandardMaterial( { color : 0x00c8ff, wireframes : true } );
const torus = new Three.Mesh(tgeo, tmat);
// scn.add(torus);

const amb = new Three.AmbientLight(0xffffff);
scn.add(amb);



//text processing
const loader = new FontLoader();

loader.load('../../node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json', (droidfont) => {
  const txtgeo = new TextGeometry('Wake up to reality', {
    height : 2,
    size : 5,
    font : droidfont,
  });

  const txtmat = new Three.MeshNormalMaterial( { color : 0xffbb00 } );
  const txtmesh = new Three.Mesh(txtgeo, txtmat);
  // txtmesh.position.x = 10;
  // txtmesh.position.y = 12;
  txtmesh.position.set(-20,0,90);
  scn.add(txtmesh);

  // txtmesh.rotation.x = 0;
  // txtmesh.rotation.y = 0;
}) 



const moo = new Three.TextureLoader().load('../../dist/imgs/texture/moon.jpg');
const geo = new Three.SphereGeometry(20, 100, 90);
const mat = new Three.MeshStandardMaterial( { map: moo, normalMap: moo} );

const moon = new Three.Mesh(geo, mat);

moon.position.z = 30;
moon.position.setX(-10);

scn.add(moon);


//rectarea light

const rectlit = new Three.RectAreaLight(0x008cff, 100, 20, 20);

rectlit.position.set(0, 0, 150)
rectlit.lookAt(0, 0, 0);
// rectlit.rotation.x = 10;

scn.add(rectlit);

const lit = new Three.PointLight(0xffbb00, 2, 50, 1, 2);
lit.position.set(5, 5, 5)
scn.add(lit)



//  scn.add(new RectAreaLightHelper(rectlit) );

const curve = new Three.CatmullRomCurve3( [
  new Three.Vector3(-10, 0, 10),
  new Three.Vector3(-5, 5, 5),new Three.Vector3(0, 0, 0), new Three.Vector3(5, -5, 5), new Three.Vector3(10, 0, 10) 
] );

const pt = curve.getPoints( 50 );

const g = new Three.BufferGeometry().setFromPoints( pt );
const mt = new Three.LineBasicMaterial( { color : 0xff0000 } );

const c = new Three.Line(g, mt);

// scn.add(c);


const cinq = new curves.CinquefoilKnot();
const cg = new Three.TubeGeometry(curve, 100, 20, 8, true );
const cmt = new Three.MeshBasicMaterial( { color : 0xbb00ff, wireframes : true } );

const cin = new Three.Line(cg, cmt);

scn.add(cin);  


//lit


function camera() {
  const m = document.body.getBoundingClientRect().top;
  
  moon.rotation.x += 0.002;

  
  cam.position.z = m * -0.1;
  cam.position.x = m * -0.002;
  cam.position.y = m * -0.002;
}

document.body.onscroll = camera;
camera();

function anime() {
  requestAnimationFrame(anime);

  torus.rotation.x += 0.4;
  torus.rotation.y += 0.03;
  torus.rotation.z += 0.2


  // moon.rotation.x += 0.002;
  // moon.rotation.y += 0.002;

  pointerlock.speedFactor = 6
  ctrl.update();
  rend.render(scn, cam);
}


anime();