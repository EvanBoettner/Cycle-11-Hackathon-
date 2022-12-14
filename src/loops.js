const forLoop = (param) => {
  let a = [];
  for (let i = 0; i < param.length; i++) {
    a.push(i);
  }
  return a;
};

const indexOfAlphabetsArray = (arry1, arry2) => {
  let a = [];

  for (let i = 0; i < arry1.length; i++) {
    a.push(`${arry1[i]} ${arry2[i]}`);
  }
  return a;
};

export { forLoop, indexOfAlphabetsArray };
