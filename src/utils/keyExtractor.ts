export const assignKeyExtractor = ({ id }: { id: string | number }) => String(id);

export const queryStringExtractor = (urlFragment?: string) => {
  if (!urlFragment) return undefined;

  const pageExtractor = urlFragment.slice(urlFragment.indexOf('?') + 1).split('&');
  return String(pageExtractor[0]?.match(/page=(.*)/)?.[1]);
};
