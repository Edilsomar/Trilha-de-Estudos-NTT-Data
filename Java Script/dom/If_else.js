

function calcular(){
    var velocidade = Number(document.getElementById("velocidad").value)
    var resultado = document.getElementById("resultado")
    var kmamais = velocidade - 60

    resultado.innerHTML = `<p style="font-size:22px;">Sua velocidade atual é de ${velocidade}</p>`
    if (velocidade > 60){
        var valordamulta = (velocidade - 60) * 3.49
        resultado.innerHTML +=`<p style="color: red; font-size:22px;">Você ultrapassou  ${kmamais}Km/h da velocidade permitida e foi <strong>MULTADO</strong> no valor de ${valordamulta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`
    }
    resultado.innerHTML += `<p style="font-size:22px;">Use sempre o sinto de segurança</p>`
}

