import * as Three from 'three';


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';



export const cam = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 200);
export const scn = new Three.Scene();


export const rend = new Three.WebGLRenderer( {
  canvas: document.querySelector('#b'),
  antialias: true,
  alpha : true
} );

import './module/res';
res();


const ctrl = new OrbitControls(cam, rend.domElement);
ctrl.keys = {

  LEFT : 'ArrowLeft',
  UP : 'ArrowUp',
  RIGHT : 'ArrowRight',
  BOTTOM : 'ArrowDown'

}


cam.position.z = 30;
// cam.position.x = -3;

const tgeo = new Three.TorusGeometry(10, 3, 16, 100);
const tmat = new Three.MeshStandardMaterial( { color : 0x00c8ff, wireframes : true } );
const torus = new Three.Mesh(tgeo, tmat);
// scn.add(torus);

const amb = new Three.AmbientLight(0xffffff);
scn.add(amb);



//text processing
import './module/text';
 

import { cin } from './module/curve';
// scn.add(cin);   

import { moon } from './module/moon';
moon.position.z = 30;
moon.position.setX(-10);

// scn.add(moon);


import { res } from './module/res';

function triangle() {

  const geo = new Three.RingGeometry(1, 1.9, 1, 3, 0, 6.238);
  const mat = new Three.MeshBasicMaterial( { color : 0x00adff, side : Three.DoubleSide } );
  
  const tri = new Three.Mesh(geo, mat);


  const [x, y, z]  = Array(3).fill().map( () => Three.MathUtils.randFloatSpread(150) );

  tri.position.set(x, y, z);
  scn.add(tri)
}

Array(100).fill().forEach(triangle)

// const temp = new triangle();
// const tri = temp.tri;






//rectarea light

const rectlit = new Three.RectAreaLight(0x008cff, 100, 20, 20);

rectlit.position.set(0, 0, 150)
rectlit.lookAt(0, 0, 0);
// rectlit.rotation.x = 10;

scn.add(rectlit);

const lit = new Three.PointLight(0xffbb00, 2, 50, 1, 2);
lit.position.set(5, 5, 5)
scn.add(lit)


//lit


function camera() {
  const m = document.body.getBoundingClientRect().top;
  
//   moon.rotation.x += 0.002;

  // tri.position.x += m * 0.04
  
//   cam.position.z = m * -0.1;
//   cam.position.x = m * -0.002;
//   cam.position.y = m * -0.002;
}

document.body.onscroll = camera;
camera();

function anime() {
  requestAnimationFrame(anime);

  torus.rotation.x += 0.4;
  torus.rotation.y += 0.03;
  torus.rotation.z += 0.2



  // pointerlock.speedFactor = 6
  ctrl.update();
  rend.render(scn, cam);

  //bg
  rend.setClearColor( 0xffbb00, 2 );

}


anime();