const express = require('express')

const app = express()

const path = require('path')

const db = require('./queries')


//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

const PORT = 9001


//Routes
app.get('/', (req, res) => {

    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

//CRUD 
//CREATE - add data to db
//READ - get dat from db
//UPDATE - update data in db
//DELETE - remove data from db 

app.get('/link', db.getLinks)
app.post('/link', db.createLink)
app.put('/links/:id', db.updateLink)
app.get('/links/:id', db.getLinkById)
app.delete('/links/:id', db.deleteLink)

//Starting Express on our PORT
app.listen(PORT, ()=>{
    console.log(`The app is running on port ${PORT}.`)
})