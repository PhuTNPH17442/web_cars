const express = require('express')
const methodOverride = require('method-override')
const app = express()
const handlebar = require('express-handlebars')
const path  = require('path')
 
app.use(express.json());

app.use(express.urlencoded({
    extended:true
}))

app.use(methodOverride('_method'))

app.engine('hbs',handlebar.engine({
    extname:'.hbs'
}))
app.set('view engine','hbs')

app.use(express.static(path.join(__dirname,'public')));
app.get('/', async(req,res,nex)=>{
    res.send("hello")
})



const PORT = process.env.PORT||4000
app.listen(PORT,()=> console.log(`Sever running in `+PORT))