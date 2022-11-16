import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import { MeshNormalMaterial, Mesh, Scene } from 'three';

const loader = new FontLoader();

loader.load('../../node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json', (droidfont) => {
  const txtgeo = new TextGeometry('Wake up to reality', {
    height : 2,
    size : 5,
    font : droidfont,
  });

  const scn = new Scene();
  const txtmat = new MeshNormalMaterial( { color : 0xffbb00 } );
  const txtmesh = new Mesh(txtgeo, txtmat);
  // txtmesh.position.x = 10;
  // txtmesh.position.y = 12;
  txtmesh.position.set(-20,0,90);
  scn.add(txtmesh);

})