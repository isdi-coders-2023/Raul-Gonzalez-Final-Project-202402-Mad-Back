import express, { type Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createDebug from 'debug';
import { type PrismaClient } from '@prisma/client';

const debug = createDebug('GONJI:app');
export const createApp = () => {
  debug('Creating app');
  return express();
};

export const startApp = (app: Express, prisma: PrismaClient) => {
  debug('Starting app');
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.static('public'));
};
