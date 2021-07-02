/**
 * Repositories is to manage data, CURD data, and the data source can come from many places: third parties,
 * database, different services
 * If data source is database, the repo will inject the model and model types here
 */

import baseRequest from '../utils/request'
import {movieDBQueryType} from '@momos/constants'
import {MovieSummary, MovieDetail} from '@momos/types'
const request = baseRequest.create({
  baseURL: process.env.MOVIE_DB_BASE_URL,
  timeout: 1000,
  headers: {'Authorization': `Bearer ${process.env.MOVIE_DB_API_KEY}`}
})

// request.interceptors.request.use(request => {
//   // Should hide sensitive info
//   console.log('Starting Request', JSON.stringify(request, null, 2))
//   return request
// })
// // Log all response
// request.interceptors.response.use(response => {
//   // Should hide sensitive info
//   console.log('Response:', response)
//   return response
// })

export type discoverRes = {
  page: number,
  results: MovieSummary[]
}

export async function getList(type: string, page = 1): Promise<discoverRes> {
  const field: string = type === movieDBQueryType.LATEST ? 'primary_release_date' : 'popularity' // This is a lazy
  // code need some improvement here
  const {data} = await request.get(`discover/movie?sort_by=${field}.desc&page=${page}`)
  return data
}

export async function getDetail(id: number): Promise<MovieDetail> {
  const {data} = await request.get(`/movie/${id}`)
  console.log(data)
  return data
}