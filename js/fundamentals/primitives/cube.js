import { BoxGeometry, Mesh, MeshPhongMaterial } from "three";

const width = 1;
const height = 1;
const depth = 1;

const geometry = new BoxGeometry(width, height, depth);
const material = new MeshPhongMaterial({ color: 0x0000ff });

export const cube = new Mesh(geometry, material);
