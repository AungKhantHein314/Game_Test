// import * as THREE from 'three';
import { cube } from '../fundamentals/primitives/cube.js';
import { circle } from '../fundamentals/primitives/circle.js';
import { camera } from './camera.js';
import { canvas, renderer } from './renderer.js';
import { scene } from './scene.js';
import { cone } from '../fundamentals/primitives/cone.js';

import { OrbitControls } from 'OrbitControls';

export function main() {
    camera.position.z = 2;

    let meshs = [cone];
    // circle.position.x = 1.3;
    // cube.position.x = -1;
    // cone.position.x = 0.1;
    // cone.position.y = 0.5;
    scene.add(...meshs);
    // scene.add(cube2);

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
          renderer.setSize(width, height, false);
        }
        return needResize;
      }    

      const controls = new OrbitControls(camera, renderer.domElement);

    function render() {
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        // circle.rotation.x += 0.01;
        // circle.position.x += 0.01;
        cone.rotation.x += 0.01;
        cone.rotation.z += 0.01;
        cone.rotation.y += 0.01;

        controls.update()

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
          }

        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    renderer.render(scene, camera);
}
