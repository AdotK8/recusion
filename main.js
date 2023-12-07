array = [];

function fibs(n) {
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      array.push(i);
    } else if (i == 1) {
      array.push(i);
    } else {
      let num = array[i - 2] + array[i - 1];
      array.push(num);
    }
  }
  console.log(array);
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

console.log(fibsRec(3));
