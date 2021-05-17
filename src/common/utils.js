export const separateArray = (array, size) => array.reduce((acc, value)=> {
  if(acc[acc.length-1].length === size){
    acc.push([]);
  }
  acc[acc.length-1].push(value);
  return acc;
}, [[]])
