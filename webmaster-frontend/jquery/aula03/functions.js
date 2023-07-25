$(function(){
    $('.artigo1').click(function(){
        $('.artigo2').css('background', 'purple')
    })

    $('.artigo1').hover(function(){
        $('.artigo2').css('background', 'red')
    }), function(){
        $('.artigo2').css('background', 'black')
    }

    $('textarea').focus(function(){
        console.log('estou dentro do textarea')
    }).blur(function(){
        console.log('Estou fora do textarea')
    })

    function validarFormulario(){
        $('select').change(function(){
            console.log('Meu select foi alterado');
        })
    }

    validarFormulario()
})