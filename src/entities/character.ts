export type Character = {
  id: string;
  name: string;
  imgUrl: string;
  description: string;
  faction: string;
  race: 'Men' | 'Elf' | 'Elve' | 'Dwarf' | 'Uruk-hai' | 'Orc' | 'Hobbit';
  userId: string;
};
export type CharacterCreateDto = {
  name: string;
  imgUrl: string;
  description: string;
  faction: string;
  race: 'Men' | 'Elf' | 'Elve' | 'Dwarf' | 'Uruk-hai' | 'Orc' | 'Hobbit';
  userId: string;
};
export type CharacterUpdateDto = Partial<CharacterCreateDto>;
