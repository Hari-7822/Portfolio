import * as Three from 'three';

import { scn, cam, rend } from '../main';

function triangle() {

    const geo = new Three.RingGeometry(1, 1.9, 1, 3, 0, 6.238);
    const mat = new Three.MeshBasicMaterial( { color : 0x00adff, side : Three.DoubleSide } );
    
    const tri = new Three.Mesh(geo, mat);
  
    const [x, y, z]  = Array(3).fill().map( () => Three.MathUtils.randFloatSpread(150) );
  
    tri.position.set(x, y, z);
    
    tri.rotation.x += 0.03;
  
    scn.add(tri);
  

    function anime() {
        requestAnimationFrame(anime);
        
        // moon.rotation.x += 0.004;
        // moon.rotation.y += 0.003;
        // moon.rotation.z += 0.002
        
        tri.rotation.x += 0.003;
        
        // ctrl.update();
        rend.render(scn, cam);
      
        rend.setClearColor( 0x560083, 2 );
      
      }
      
      
      anime();

    
  }
  
  triangle();
  Array(100).fill().forEach(triangle)

