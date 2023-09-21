import express, { Request, Response } from 'express'
import querystring from 'querystring'

import cors from 'cors'
import axios from 'axios';
import dotenv from 'dotenv'
import { redisClient } from './services/redisConfig';

dotenv.config()

const app = express()

app.use(express.json());
app.use(cors())

const apiKey = process.env.API_KEY || 'b43bdd83'
const urlBase = `http://www.omdbapi.com/`

app.get('/movies', async (request: Request, response: Response) => {
  const { title, resultType, year } = request.query

  try {
    const parameters: { s?: string, type?: string, y?: string, apiKey: string } = {
      apiKey
    }

    if (title) parameters.s = title as string
    if (resultType) parameters.type = resultType as string
    if (year) parameters.y = year as string

    const urlParams = querystring.stringify(parameters)
    
    const url = `${urlBase}?${urlParams}`

    const result = await axios.get(url);

    return response.json(result.data)
  } catch (err: any) {
    return response.status(500).json({ message: 'Error fetching movies', error: err.message })
  }
})

app.get('/movies/:id', async (request: Request, response: Response) => {
  const { id } = request.params

  try {
    if (!id) {
      return response.status(400).json({ message: 'id is missing!' })
    }

    const movieFromRedis = await redisClient.get(`movie-${id}`)

    if (movieFromRedis) {
      return response.json(JSON.parse(movieFromRedis))
    }

    const parameters: { i: string, apiKey: string } = {
      i: id,
      apiKey
    }

    const urlParams = querystring.stringify(parameters)

    const url = `${urlBase}?${urlParams}`

    const result = await axios.get(url)
    const movieDataJSON = JSON.stringify(result.data)

    await redisClient.set(`movie-${id}`, movieDataJSON)

    return response.json(result.data)
  } catch (err: any) {
    return response.status(500).json({ message: 'Error fetching this movie', error: err.message })
  }
})

app.listen(4000, () => console.log('Server is running on port 4000'))