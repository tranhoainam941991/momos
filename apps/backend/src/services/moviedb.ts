/**
 * Services contain business logic, also data manipulation
 * For example: in case of getPopular, we can cache data in redis or application itself
 */
import * as moviedbRepo from '../repositories/moviedb'

export async function getList(type, page) {
  const data = await moviedbRepo.getList(type, page)
  // We can perform cache here
  return data
}

export async function getDetail(id) {
  const data = await moviedbRepo.getDetail(id)
  // We can perform cache here
  return data
}