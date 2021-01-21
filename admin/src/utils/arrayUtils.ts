/* eslint-disable @typescript-eslint/no-explicit-any */
export const splitArrayIntoGroups = (
  array: Array<any>,
  size: number,
): Array<Array<any>> => {
  let newArray = [];

  for (let i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }

  return newArray;
};

export const removeElementAtIndex = (
  array: Array<any>,
  index: number,
): Array<any> => {
  let newArr = [...array];
  newArr.splice(index, 1);

  return newArr;
};
/* eslint-enable @typescript-eslint/no-explicit-any */
