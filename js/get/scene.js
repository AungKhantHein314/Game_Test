import { Scene, DirectionalLight } from "three";

export const scene = new Scene();

const color = 0xffffff;
const intensity = 1;
const light = new DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);
