function fibs(n, arr = []) {
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      arr.push(i);
    } else if (i == 1) {
      arr.push(i);
    } else {
      let num = arr[i - 2] + arr[i - 1];
      arr.push(num);
    }
  }
  console.log(arr);
}

function fibsRec(n, arr = [0, 1]) {
  if (n <= arr.length) {
    return arr.slice(0, n);
  } else {
    const newNum = arr.at(-1) + arr.at(-2);
    arr.push(newNum);
    return fibsRec(n, arr);
  }
}

const array = [7, 2, 5, 4, 1, 6, 0, 3];

function mergeSort(arr) {
  // Base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  // Recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const mergedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }

  while (right.length > 0) {
    mergedArray.push(right[0]);
    right.shift();
  }
  while (left.length > 0) {
    mergedArray.push(left[0]);
    left.shift();
  }
  return [...mergedArray];
}

console.log(mergeSort(array));
