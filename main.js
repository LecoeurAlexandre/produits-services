import { Ihm } from "./classes/ihm.js";


const form = document.querySelector("#form");
const resultProducts = document.querySelector("#result-products");
const resultServices = document.querySelector("#result-services");

const ihm = new Ihm(form,resultProducts, resultServices);

ihm.demarrer();