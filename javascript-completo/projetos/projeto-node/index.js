const express = require('express')
const path = require('path')

const app = express()

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))

var tarefas = ['Arrumar o quarto', 'Comprar no supermecado']

app.get('/', (req,res) => {
    res.render('index', {tarefasList:tarefas})
})

app.listen(5000, ()=>{
    console.log('rodando');
})