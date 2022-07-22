import { CircleGeometry, DoubleSide, Mesh, MeshBasicMaterial } from "three";

const radius = 0.5;
const segments = 100;
const geometry = new CircleGeometry(radius, segments, Math.PI * 0.25, Math.PI * 1.5);
const material = new MeshBasicMaterial({ color: 0x00ff00, side: DoubleSide });

export const circle = new Mesh(geometry, material);