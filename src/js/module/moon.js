import { TextureLoader, SphereGeometry, MeshStandardMaterial, Mesh } from 'three';


const moo = new TextureLoader().load('../../../dist/imgs/texture/moon.jpg');
const geo = new SphereGeometry(20, 100, 90);
const mat = new MeshStandardMaterial( { map: moo, normalMap: moo} );

export const moon = new Mesh(geo, mat);



