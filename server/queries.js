// Connect to Postgres using the node-postgres package

const POOL = require('pg').Pool

const pool = new POOL({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'password',
    port: 5432
})

// Create all the function that will be our request handlers in our express server

// Create a new link in the db ^

// Get all the data from db ^

const createLink = (req, res) => {
    const name = request.body.name
    const URL = request.body.URL

    pool.query('INSERT INTO links (name, URL) VALUES ($1, $2)', [name, URL], (error, results)=>{
        if (error) {
            throw error
        }
        response.status(201).send(`link added with ID: ${results.insertId}`)
    })

}

const getLinks = (req, res) => {
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result)=>{
        if(error){
            throw error;
        }
        res.status(200).json(result.rows)
    })
}
const getLinkById = (request, response) => {
    const id = parseInt(request.params.id) 
    
    pool.query('SELECT * FROM links WHERE id = $1', [id], (error, results)=> {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// update link in the db ^
const updateLink = (request, response) =>{
    const id = parseInt(request.params.id)
    const {name, URL} = request.body

    pool.query('UPDATE links SET name = &1, URL = $2 WHERE id = $3', 
    [name, URL, id], 
    (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Link modified with ID: ${id}`)
    })
}

// delete link in the db ^

const deleteLink = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM links WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Link deleted with ID: ${id}`)
    })
}


module.exports = {
    getLinks,
    createLink,
    updateLink,
    deleteLink,
    getLinkById
}