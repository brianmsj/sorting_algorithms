function bubbleSort(array) {
    let swaps = 0;
    for (let i=0; i<array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};
 function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i=leftIndex; i<left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i=rightIndex; i<right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

const array1 = [2,5,3,4,8,7,6]

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

console.log(swap([2,1],2,1))

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i=start; i<end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function quickSort(array, start=0, end=array.length) {
    start = start;
    end = end;
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

// console.log(quickSort(array1,0,array1.length))




//Write an algorithm to shuffle an array into a random order in-place
//(i.e. without creating a new array).
const shuffleArray = [1,2,3,5,6,7,8]
function shuffle(array) {
  for (var i = 0; i < array.length; i++) {
      let randomIndex = Math.floor(Math.random()*(array.length -1))
      tmp = array[i]
      array[i] = array[randomIndex]
      array[randomIndex] = tmp
  }
  return array;
}
console.log(shuffle(shuffleArray));


//Imagine that I gave you twenty books to sort in alphabetical order.
//How would you go about it? Can you express this as an algorithm?

//
const bookArray = ["Billy3 Budd","Atlas Shrugged","Boogie Nights","Anathen","Billy2 Budd"]
function sortBooks(array) {
    return mergeSort(array)
}
console.log(sortBooks(bookArray));

function sortBooks2(array) {
   return bubbleSort(array)

console.log(bubbleSort(bookArray));

function sortBooks3(array) {

  for (var i = 0; i < array.length; i++) {
    let book = array[i]
    for (var j = 0; j < array.length; j++) {
      let book2 =
    }
  }
}
