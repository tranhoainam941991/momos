import axios from 'axios'
import {MovieDetail, MovieSummary} from '@momos/types'
const request = axios.create({
  timeout: 90000,
  baseURL: 'http://localhost:3001/' // In the rush
})

export async function getDetail(id: string): Promise<MovieDetail> {
  const {data} = await request.get(`movies/${id}`)
  return data
}

export async function getMovies(type: string): Promise<MovieSummary[]> {
  const {data} = await request.get(`movies?page=1&type=${type}`)
  return data.results
}