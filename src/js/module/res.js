import { cam, rend } from '../main'



export function res() {

    document.body.appendChild(rend.domElement);
    cam.aspect = (window.innerWidth / window.innerHeight);
    cam.updateProjectionMatrix();
    rend.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', res, false);

rend.setSize(window.innerWidth, window.innerHeight);
rend.setPixelRatio(window.devicePixelRatio);
