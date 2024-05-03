export type Character = {
  id: string;
  name: string;
  imgUrl: string;
  description: string;
  faction: string;
  race: 'men' | 'elf' | 'elve' | 'dwarf' | 'urukhai' | 'orc' | 'hobbit';
  userId: string;
};
export type CharacterCreateDto = {
  name: string;
  imgUrl: string;
  description: string;
  faction: string;
  race: 'men' | 'elf' | 'elve' | 'dwarf' | 'urukhai' | 'orc' | 'hobbit';
  userId: string;
};
export type CharacterUpdateDto = Partial<CharacterCreateDto>;
