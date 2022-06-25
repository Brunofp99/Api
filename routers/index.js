const express = require('express')
const routes = express.Router()

let db = [
  {'1': 'nome'},
  {'2': 'nome'},
  {'3': 'nome'}
]


routes.get('/', (req, res) =>{
  return res.json(db)
})

routes.post('/', (req, res)=>{
  const body = req.body
})

routes.delete('/:id', (req, res)=>{
  const { id } = req.params
  // const id = req.params.id
})



module.exports = routes