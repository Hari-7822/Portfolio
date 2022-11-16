import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

import * as m from '../main';


export const pointerlock = new PointerLockControls(m.cam, m.rend.domElement);

window.addEventListener('click', () => {
  
  
  pointerlock.lock();

} );

window.addEventListener('dblclick', () => {
  
  pointerlock.unlock();

});