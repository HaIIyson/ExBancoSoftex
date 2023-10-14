var banco = {

    conta : 123,
    saldo : 3000,
    agencia : 789512,
    tipo : function () {
        var tipo = prompt("Qual o tipo da sua conta 1 = para poupança / 2 = para corrente");
            if ( tipo == 1) {
                alert("CONTA POUPANÇA")
            }else if ( tipo == 2 ) {
                alert("CONTA CORRENTE")
            }else{
                
                while (tipo <= 1 || tipo >= 2) {
                    alert("tipo de conta inexistente")
                    var tipo = prompt("Qual o tipo da sua conta 1 = para poupança / 2 = para corrente")
                    if ( tipo == 1) {
                        alert("CONTA POUPANÇA")
                        break
                    }else if ( tipo == 2 ) {
                        alert("CONTA CORRENTE")
                        break
                    }
                }
            }
            
        }
    }

function buscarSaldo() {
    console.log(`Seu saldo é ${banco.saldo}`);

}
function depositar(depositar) {
    let dep = parseFloat(prompt("Quanto deseja depósitar?"))
    if (isNaN(dep)) {
        return "Valor digitado é invalido"
    } else {
        return `Seu novo saldo é ${banco.saldo += dep}R$`
    }
}
function saque(saque) {
    let saq = parseFloat(prompt("Quanto deseja sacar?"))
    if (isNaN(saq)) {
        return "Valor digitado é invalido"
    }else if (saq > banco.saldo){
        return "saldo insuficiente"
    } else {
        return `Seu novo saldo é ${banco.saldo -= saq}R$`
    }
}
function numConta() {
    return `Número da conta é ${banco.conta}`
}

var rep = "sim"
banco.tipo();
while (rep == "sim") {
    
    let escolha = Number(prompt("Bem vindo/a ao Banco SG, o que deseja fazer? \n 1 = Buscar saldo. \n 2 = Depósito. \n 3 = Saque. \n 4 = Ver número da conta. \n 5 = sair."));
    switch (escolha) {
        case 1:
            alert(`Seu saldo é ${banco.saldo}R$`);
            break;
        case 2:
            alert(depositar());
            break;
        case 3:
            alert(saque());
            break;
        case 4:
            alert(numConta());
            break;
        case 5:
            rep = "não";
    }
    
}