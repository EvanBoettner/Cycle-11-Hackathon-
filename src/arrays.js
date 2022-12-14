function arrays(arr) {
    return `${arr[0]}` + " " + arr.pop();
//   return `${arr[0]} ${arr[arr.length - 1]}`;
}

function compareArrays(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

function stringToArray(strArr) {
//   console.log(strArr);
//   const a = strArr.join(",");
//   return a;
      return strArr;
}

export { arrays, compareArrays, stringToArray };
