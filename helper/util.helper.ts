export const swapArray = (arr: any[], from: number, to: number) => {
  const tempArr = [...arr];
  const temp = tempArr[to];
  tempArr[to] = tempArr[from];
  tempArr[from] = temp;
  return tempArr;
};
