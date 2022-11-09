export default function ehUmCpf(campo){
    const cpf = campo.value.replace(/\.|-/g, "")  
    if(validaNumerosRepetidos(cpf) || validaPrimeiroNumero(cpf) || validaSegundoNumero(cpf)){
        campo.setCustomValidity("Esse CPF não existi")
    }
}

function validaNumerosRepetidos(cpf){
    const numerosRespetidos =[
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]

    return numerosRespetidos.includes(cpf)
}

function validaPrimeiroNumero(cpf){
    let soma = 0
    let multiplicador = 10

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multiplicador
        multiplicador--
    }

    soma = (soma * 10) % 11

    if(soma == 10 || soma == 1){
        soma = 0
    }

    return soma != cpf[9]
}

function validaSegundoNumero(cpf) {
    let soma = 0
    let multiplicador = 11

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador
        multiplicador--
    }

    soma = (soma * 10) % 11

    if (soma == 10 || soma == 1) {
        somaq = 0
    }

    return soma != cpf[10]
}