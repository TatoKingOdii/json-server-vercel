// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')

const server = jsonServer.create()

// Uncomment to allow write operations
// const fs = require('fs')
// const path = require('path')
// const filePath = path.join('db.json')
// const data = fs.readFileSync(filePath, "utf-8");
// const db = JSON.parse(data);
// const router = jsonServer.router(db)

// Comment out to allow write operations
const router = jsonServer.router({
    "tv-shows": [
        {'id': '0', 'name': 'Family Guy', 'genre': 'Comedy', 'rating':  'PG-13', 'seasons': 13, 'score': '99'}
    ],
    "drinks": [
        {id: '1', name: 'Water', proof: 0, ingredients: 'Water', instructions: 'Fill glass from tap'}
    ],
    "inventory": [
        {"id":"fc3bfb93-400f-407d-926c-3e4f321659d7","name":"Baked Beans","quantity":100,"category":"Food","receiveDate":"2024-02-08T08:00:00.000Z","hasExpiration":true,"expirationDate":"2025-01-22T08:00:00.000Z"}
    ],
    "users": [
        {user: 'bob', pass: 'ross'}
    ]
  })

const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
