import { type Request, type Response } from 'express';
import { type CharacterSqlRepo } from '../repositories/characters.sql.repo';
import { CharacterController } from './characters.controller';
import { type Character } from '../entities/character';

describe('Given a instance of the class CharacterController', () => {
  const repo = {
    create: jest.fn().mockReturnValue({} as Character),
  } as unknown as CharacterSqlRepo;

  const req = {
    body: {} as unknown as Character,
    file: {
      destination: '/temp',
      filename: 'test.png',
    },
  } as unknown as Request;
  const res = {
    json: jest.fn().mockReturnThis(),
    status: jest.fn(),
  } as unknown as Response;
  const next = jest.fn();

  const controller = new CharacterController(repo);

  test('Then it should be instance of the class', () => {
    expect(controller).toBeInstanceOf(CharacterController);
  });

  describe('When we use the method create', () => {
    test('Then it should call repo.create', async () => {
      const character = {
        name: 'title',
        userId: 'test',
        race: 'elve',
        faction: 'gondor',
        imgUrl: 'test',
        description: 'mi abuela',
      };
      const validateCharacter = {
        ...character,
      };
      req.body = { ...character, payload: { id: 'test' } };
      (repo.create as jest.Mock).mockResolvedValue(character);
      await controller.create(req, res, next);
      expect(repo.create).toHaveBeenCalledWith(validateCharacter);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(character);
      expect(next).not.toHaveBeenCalled();
    });
  });
});
