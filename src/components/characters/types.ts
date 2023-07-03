type Location = {
  name: string;
  url: string;
};

type Status = 'Alive' | 'Dead' | 'unknown';

type Gender = 'Female' | 'Genderless' | 'Male' | 'unknown';

type Info = {
  count: number;
  pages: number;
  next?: string;
  previous?: string;
};

export type CharacterScheme = {
  created: string | undefined;
  episode: string[] | undefined;
  gender: Gender | undefined;
  id: number | undefined;
  image: string | undefined;
  location: Location | undefined;
  name: string | undefined;
  origin: Location | undefined;
  species: string | undefined;
  status: Status | undefined;
  type: string | undefined;
  url: string | undefined;
};

export type CharacterImage = {
  uri: string;
};

export type Character = {
  created: string | undefined;
  episode: string[];
  gender: Gender;
  id: number;
  location: Location | undefined;
  mainImage: CharacterImage;
  name: string;
  origin: Location | undefined;
  species: string | undefined;
  status: Status;
  type: string | undefined;
  url: string | undefined;
};

export type CharacterListScheme = {
  info: Info;
  results: CharacterScheme[];
};

export type CharacterList = {
  info: Info;
  results: Character[];
};
