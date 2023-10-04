function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    var a = Number(fano.value)
    if (a == 0 || a > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - a
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adolescente-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adolescente-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign  = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade}`
        res.appendChild(img)
    }
}