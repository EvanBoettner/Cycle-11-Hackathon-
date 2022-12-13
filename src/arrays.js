function arrays(arr) {
    return `${arr[0]}` + ' ' + arr.pop();
}



function compareArrays(arr1, arr2) {
    if(arr1.length > arr2.length){
        return arr1
    } else {
        return arr2
    }
}

function stringToArray(strArr){
   return strArr;
}



export { arrays, compareArrays, stringToArray };
