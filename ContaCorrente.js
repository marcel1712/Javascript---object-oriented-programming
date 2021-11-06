import { Cliente } from "./Cliente.js";

export class ContaCorrente{

    static numeroDeContas = 0;

    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get _saldo(){
        return this._saldo;
    }

    constructor(cliente,agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }
  
    sacar(valor){
      if(valor > this._saldo){
        console.log('Seu saldo não é suficiente');
        return
      }
      this._saldo -= valor;
    }
  
    depositar(valor){
      if(valor <= 0){
        console.log('Não é possivel depositar valores negativos ou zero')
        return
      }
      this._saldo += valor;
    }

    transferir(valor, conta){
        this.sacar(valor);
        conta.depositar(valor);
    }
  }