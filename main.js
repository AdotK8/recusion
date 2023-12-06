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

console.log(fibs(8));
