import { ConeGeometry, Mesh, MeshBasicMaterial } from "three";

const radius = 0.5;
const height = 1;
const radicalSegments = 50;
const heightSegements = 2;
const openEnded = false;
const thetaStart = Math.PI * 0.25;
const thetaLength = Math.PI * 1.5;
const geometry = new ConeGeometry(
  radius,
  height,
  radicalSegments,
  heightSegements,
  openEnded,
  thetaStart,
  thetaLength
);
const material = new MeshBasicMaterial({ color: 0xff0000 });

export const cone = new Mesh(geometry, material);
