import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cliente1 = new Cliente("Marcel", 38327103881);
const contaMarcel = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Tamura", 11122233309);
const contaTamura = new ContaCorrente(cliente2, 1002);

console.log(contaMarcel);
console.log(contaTamura);

console.log(ContaCorrente.numeroDeContas);