export const splitArrayIntoGroups = <T>(array: T[], size: number): T[][] => {
  let newArray = [] as T[][];

  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }

  return newArray;
};

export const removeElementAtIndex = <T>(array: T[], index: number): T[] => {
  let newArr = [...array];
  newArr.splice(index, 1);

  return newArr;
};
