function nSort(arr, low, high) {
  const indexArray = new Array(high - low + 1);


  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i] - low
    if(indexArray[diff]) {
      indexArray[diff] = indexArray[diff] + 1
    }
    else {
      indexArray[diff] = 1
    }

  }

  let output = []
  for (let i = 0; i < indexArray.length; i++) {
      if(indexArray[i]){
        for (let j = 0; j < indexArray[i]; j++) {
          output.push(i + 1)
        }
      }
  }


  return output
}

const data = [10, 1, 1, 4, 6, 7, 7]

console.log(nSort(data, 1, 10));
