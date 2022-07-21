import * as THREE from "three";

export function main() {
  // Renderer
  const canvas = document.getElementById("canvas");
  const renderer = new THREE.WebGLRenderer({ canvas });

  // Camera
  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  // Scene
  const scene = new THREE.Scene();

  // Mesh START
  // Geometry
  
  
}
