import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



export const cam = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 200);
export const scn = new Three.Scene();


export const rend = new Three.WebGLRenderer( {
  canvas: document.querySelector('#b'),
  antialias: true,
  alpha : true
} );


export function res() {

  document.body.appendChild(rend.domElement);
  cam.aspect = (window.innerWidth / window.innerHeight);
  cam.updateProjectionMatrix();
  rend.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', res, false);

rend.setSize(window.innerWidth, window.innerHeight);
rend.setPixelRatio(window.devicePixelRatio);


res();


const ctrl = new OrbitControls(cam, rend.domElement);
ctrl.keys = {

  LEFT : 'ArrowLeft',
  UP : 'ArrowUp',
  RIGHT : 'ArrowRight',
  BOTTOM : 'ArrowDown'

}


cam.position.z = 30;

const tgeo = new Three.TorusGeometry(10, 3, 16, 100);
const tmat = new Three.MeshStandardMaterial( { color : 0x00c8ff, wireframes : true } );
const torus = new Three.Mesh(tgeo, tmat);

const amb = new Three.AmbientLight(0xffffff);
scn.add(amb);



import './module/text';
 

import { cin } from './module/curve';

import { moon } from './module/moon';
moon.position.z = 30;
moon.position.setX(-10);

scn.add(moon);



function triangle() {

  const geo = new Three.RingGeometry(1, 1.9, 1, 3, 0, 6.238);
  const mat = new Three.MeshBasicMaterial( { color : 0x00adff, side : Three.DoubleSide } );
  
  const tri = new Three.Mesh(geo, mat);

  const [x, y, z]  = Array(3).fill().map( () => Three.MathUtils.randFloatSpread(150) );

  tri.position.set(x, y, z);
  
  tri.rotation.x += 0.03;

  scn.add(tri);


}

triangle();
Array(100).fill().forEach(triangle)


const rectlit = new Three.RectAreaLight(0x008cff, 100, 20, 20);

rectlit.position.set(0, 0, 150)
rectlit.lookAt(0, 0, 0);

scn.add(rectlit);

const lit = new Three.PointLight(0xfff, 2, 50, 1, 2);
lit.position.set(5, 5, 5)


function camera() {
  const m = document.body.getBoundingClientRect().top;
  
  moon.rotation.x += m * 2;


}

document.body.onscroll = camera;
camera();

function anime() {
  requestAnimationFrame(anime);
  
  moon.rotation.x += 0.004;
  moon.rotation.y += 0.003;
  moon.rotation.z += 0.002
  
  
  ctrl.update();
  rend.render(scn, cam);

  // rend.setClearColor( 0x560083, 2 );

}


anime();