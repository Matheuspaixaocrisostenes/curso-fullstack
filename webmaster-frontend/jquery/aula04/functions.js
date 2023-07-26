$(function(){
    // $('a').click(function(e){
    //     e.preventDefault()
    // })

    // // $(window).scroll(function(){
    // //     console.log('Scroll ativo');
    // // })

    // $(window).resize(function(){
    //     console.log('Minha tela está sendo redimensionada');
    // })

    $('.box').click(function(e){
        e.stopPropagation()
    })

    $('body').click(function(){
        $('.box').css('opacity', '0.1')
    })
})