import requestValidation from '../middlewares/request-validation'
import * as moviedbService from '../services/moviedb'
import {movieDBQueryType} from "@momos/constants";
import {query, param} from 'express-validator'

const getListRules = () => {
  return [
    query('page')
      .exists({checkNull: true}).withMessage('FIELD_REQUIRED')
      .isInt({min: 1}).withMessage('MUST_BE_NUMBER_AND_GREATER_THAN_0'),
    query('type')
      .exists({checkNull: true}).withMessage('FIELD_REQUIRED')
      .isIn([movieDBQueryType.LATEST, movieDBQueryType.POPULAR]).withMessage('MUST_BE_POPULAR_OR_LATEST'),
  ]
}

const getDetailRules = () => {
  return [
    param('id')
      .exists({checkNull: true}).withMessage('FIELD_REQUIRED')
      .isInt({min: 1}).withMessage('MUST_BE_NUMBER_AND_GREATER_THAN_0'),
  ]
}


export default function (app) {
  app.get('/movies',
    getListRules(),
    requestValidation,
    async (req, res, next) => {
      try {
        const data = await moviedbService.getList(req.query.type, req.query.page)
        res.json(data)
      } catch (e) {
        next(e)
      }
  });


  app.get('/movies/:id',
    getDetailRules(),
    requestValidation,
    async (req, res, next) => {
      try {
        const data = await moviedbService.getDetail(req.params.id)
        res.json(data)
      } catch (e) {
        next(e)
      }
    });
}

