// TODO: refactor and commenting

/**
 * Returns the ascii code of the characted with index i in the string
 * @param {*} str string
 * @param {*} i index
 */
function charAt(str, i) {
  return i < str.length ? str.charCodeAt(i) : -1;
}

/**
 * Swaps the values of the indexes
 * @param {*} arr array of strings
 * @param {*} i first index
 * @param {*} j second index
 */
function swap(arr, i, j) {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function quicksort(arr, lo, hi, d) {
  if (lo >= hi) {
    return;
  }

  let lowPointer = lo;
  let highPointer = hi;
  let p = charAt(arr[lo], d);
  let i = lo + 1;

  while (i <= highPointer) {
    let current = charAt(arr[i], d);
    if (current < p) {
      swap(arr, i, lowPointer);
      lowPointer += 1;
      i += 1;
    } else if (current > p) {
      swap(arr, i, highPointer);
      highPointer -= 1;
    } else {
      i += 1;
    }
  }

  quicksort(arr, lo, lowPointer - 1, d);
  if (p >= 0) {
    quicksort(arr, lowPointer, highPointer, d + 1);
  }
  quicksort(arr, highPointer + 1, hi, d);
}

function sort(arr) {
  quicksort(arr, 0, arr.length - 1, 0);
  return arr;
}

module.exports = sort;
