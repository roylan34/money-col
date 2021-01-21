export const arrayOfObjectsToObject = (
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  list: Array<{ [key: string]: any }>,
  key: string = 'id',
  formatValue: (value: object) => any = (value): typeof value => value,
): { [key: string]: any } => {
  return list.reduce((acc, current) => {
    return Object.assign(acc, { [current[key]]: formatValue(current) });
  }, {});
};

export const convertBytesToKB = (bytes: number): number => {
  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return parseFloat((bytes / Math.pow(1024, i)).toFixed(2));
};

export const formatNumberWithCommas = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const capitalizeFirstLetter = (sentence: string): string => {
  var words = sentence.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
};
