const characters = (filters: { name?: string }) => ['characters', filters] as const;
const details = ['characterDetails'] as const;

export const characterQueryKey = {
  characters,
  details,
};
