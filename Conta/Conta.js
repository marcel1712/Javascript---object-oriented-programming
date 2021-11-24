export class Conta{
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta){
            throw new Error('Você não deveria instanciar o objeto conta diretamente')
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
    teste(){
        console.log('teste na classe conta');
    }
}