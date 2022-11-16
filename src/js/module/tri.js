import { RingGeometry, MeshBasicMaterial, MathUtils, DoubleSide, Mesh } from "three";
import { scn } from '../main';

export default function triangle() {

    const geo = new RingGeometry(12.18, 12.528, 1, 3, 0, 6.238);
    const mat = new MeshBasicMaterial( { color : 0x00adff, side : DoubleSide } );
    
    const tri = new Mesh(geo, mat);


    const [x, y, z]  = Array(3).fill().map( () => MathUtils.randFloatSpread(150) );

    tri.position.set(x, y, z);
    scn.add(tri)
}

