import { Character, CharacterScheme } from '../types';

const parseCharacter = (c: CharacterScheme): Character | undefined => {
  const { id, name } = c;
  if (!id || !name) return;
  return {
    id,
    name,
    created: c.created || undefined,
    episode: c.episode || [],
    gender: c.gender || 'unknown',
    location: c.location || undefined,
    mainImage: { uri: c.image || 'https://placehold.co/600x400' },
    origin: c.origin || undefined,
    species: c.species || undefined,
    status: c.status || 'unknown',
    type: c.type || undefined,
    url: c.url || undefined,
  };
};

export const parseCharacters = (c: CharacterScheme[]): Character[] => {
  return c.reduce<Character[]>((acc, cur) => {
    const character = parseCharacter(cur);
    if (!character) return acc;
    return [...acc, character];
  }, []);
};
