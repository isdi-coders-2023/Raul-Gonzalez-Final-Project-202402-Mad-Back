import joy from 'joi';
import { type CharacterCreateDto } from './character';

export const characterCreateSchema = joy.object<CharacterCreateDto>({
  name: joy.string().required(),
  imgUrl: joy.string().uri().required(),
  description: joy.string().required(),
  faction: joy.string().required(),
  userId: joy.string().required(),
});
export const characterUpdateSchema = joy.object<Partial<CharacterCreateDto>>({
  name: joy.string(),
  imgUrl: joy.string().uri(),
  description: joy.string(),
  faction: joy.string(),
  userId: joy.string(),
});
