import { WebGL1Renderer } from "three";

export const canvas = document.getElementById("canvas");
export const renderer = new WebGL1Renderer({ canvas });