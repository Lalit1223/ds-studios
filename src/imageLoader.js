// src/imageLoader.js

// Dynamically load all images from the services folder
export const serviceImages = Object.values(
  import.meta.glob("./assets/services/*.{png,jpg,jpeg,svg}", { eager: true })
).map((module) => module.default);

// Dynamically load all images from the clients folder
export const clientLogos = Object.values(
  import.meta.glob("./assets/clients/*.{png,jpg,jpeg,svg}", { eager: true })
).map((module) => module.default);

// Dynamically load all images from the workfolio folder
export const workfolioImages = Object.values(
  import.meta.glob("./assets/workfolio/*.{png,jpg,jpeg,svg}", { eager: true })
).map((module) => module.default);

// Import logo directly
import logo from "./assets/ds studios.svg";
export { logo };
