function teste(){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            const erro = false
            if(erro){
                reject('Erro...')
            }else{
                resolve('A promise foi resolvida com sucesso')
            }
        }, 2000);

      
    })
}

// teste().then(function(res){
//     alert(res)
// }).catch(function(err){
//     alert(err)
// })

async function teste2(){
    await teste().then(function(res){
        alert(res)
    })

    alert('Olá')
}

teste2()