import { type Request, type Response } from 'express';
import { type CharacterSqlRepo } from '../repositories/characters.sql.repo';
import { CharacterController } from './characters.controller';

describe('Given a instance of the class CharacterController', () => {
  const repo = {
    create: jest.fn(),
    readById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  } as unknown as CharacterSqlRepo;

  const req = {} as unknown as Request;
  const res = {
    json: jest.fn(),
    status: jest.fn(),
  } as unknown as Response;
  const next = jest.fn();

  const controller = new CharacterController(repo);
  test('Then it should be instance of the class', () => {
    expect(controller).toBeInstanceOf(CharacterController);
  });
});
