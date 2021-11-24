import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente ("Thiago", 12345678, "123")
const diretor = new Diretor("Marcel", 10000, 38327103881);
const gerente = new Gerente("Tamura", 5000, 123456789);

diretor.cadastrarSenha("456");
gerente.cadastrarSenha("tamurae")

const DiretorEstaLogado = SistemaAutenticacao.login(diretor, "456");
const GerenteEstaLogado = SistemaAutenticacao.login(gerente, "tamurae");
const ClienteEstaLogado = SistemaAutenticacao.login(cliente, "123")


console.log(DiretorEstaLogado);
console.log(GerenteEstaLogado);
console.log(ClienteEstaLogado);