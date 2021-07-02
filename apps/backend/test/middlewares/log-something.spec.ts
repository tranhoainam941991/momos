import logSomething from '../../src/middlewares/log-something'
import { NextFunction, Request, Response } from 'express';
describe('Log something', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  jest.spyOn(global.console, 'log')
  const nextFunction: NextFunction = jest.fn();

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {};
  });

  it('Should log something and call next', () => {
    logSomething(mockRequest, mockResponse, nextFunction)
    expect(console.log).toBeCalled();
    expect(nextFunction).toBeCalled();
  });
});
