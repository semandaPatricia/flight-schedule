const express = require('express')
const app = express()
const cors =require('cors')
const axios = require("axios").default
require('dotenv').config()
app.use(cors())

const PORT =4000


app.get('/flights', (req, res) => {
    
  const options = {
    method: 'GET',
    url: 'https://toronto-pearson-airport.p.rapidapi.com/arrivals/carousel/9',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
    }
  };
        

     axios.request(options).then(function (response) {
         console.log(response.data)
         res.json(response.data.slice(0,6))
     }).catch(function (error) {
         console.error(error)
     })
 })
 
 
 


app.listen(process.env.PORT, () => {
     console.log( `App listening on ${PORT} `)
})