var p = document.getElementsByTagName('p')

// alert(p[0].innerHTML)

// p[0].innerHTML = 'Manipulado via js'

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado vai JS - ' + i
}

for(var i = 0; i <= 10; i++){
    p[0].innerHTML = p[0].innerHTML + i
}