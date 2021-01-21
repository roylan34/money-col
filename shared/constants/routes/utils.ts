import { API_URL } from './urls';

type PathsObject = { [key: string]: string };

export const mapPathsToApiUrl = (paths: PathsObject): PathsObject => {
  return Object.entries(paths).reduce((allPaths, currentPath) => {
    const key = currentPath[0];
    const path = currentPath[1];

    return { ...allPaths, [key]: `${API_URL}${path}` };
  }, {});
};
