import { CatmullRomCurve3, Vector3, BufferGeometry, LineBasicMaterial, TubeGeometry, MeshBasicMaterial, Line } from 'three';
import * as curves from 'three/examples/jsm/curves/CurveExtras';



    const curve = new CatmullRomCurve3( [
        new Vector3(-10, 0, 10),
        new Vector3(-5, 5, 5),new Vector3(0, 0, 0), new Vector3(5, -5, 5), new Vector3(10, 0, 10) 
    ] );
    
    const pt = curve.getPoints( 50 );
    
    const g = new BufferGeometry().setFromPoints( pt );
    const mt = new LineBasicMaterial( { color : 0xff0000 } );
    
    export const c = new Line(g, mt);
    
    // scn.add(c);
    
    
    const cinq = new curves.CinquefoilKnot();
    const cg = new TubeGeometry(curve, 100, 20, 8, true );
    const cmt = new MeshBasicMaterial( { color : 0xbb00ff, wireframes : true } );
    
    export const cin = new Line(cg, cmt);