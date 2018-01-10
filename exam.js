const array = [8, 8, 1, 0, -5, -2, 9, 12, 1, 77, 5];

function findMin(array, start) {
  let minIndex = start;
  for (let i = start; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}

function selectionSort(array) {
  array = array.slice();
  for (let i = 0; i < array.length; i++) {
    let minIndex = findMin(array, i);
    if (array[minIndex] < array[i]) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }
  return array;
}

function insertionSort(array) {
  array = array.slice();

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let currentVal = array[i];

    while (j >= 0 && array[j] > currentVal) {
      array[j + 1] = array[j];
      j--
    }

    array[j + 1] = currentVal;
  }
  return array;
}

function bubbleSort(array) {
  array = array.slice();

  while(true) {
    let swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

function quickSort(array, start, before) {
  const length = before - start;
  if (length <= 1 ) return;

  const pivotIndex = Math.floor(
      start + Math.random() * length
  );
  const pivotValue = array[pivotIndex];
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

  let pivotRank = start;

  for (let i = start + 1; i < before; i++) {
    if (array[i] < pivotValue) {
      pivotRank++;
      [array[i], array[pivotRank]] = [array[pivotRank], array[i]];
    }
  }

  [array[start], array[pivotRank]] = [array[pivotRank], array[start]];

  quickSort(array, 0, pivotIndex);
  quickSort(array, pivotIndex + 1 , before);
}

function sort(array) {
  array = array.slice();
  quickSort(array, 0, array.length);
  return array;
}

console.log(selectionSort(array));
console.log(insertionSort(array));
console.log(bubbleSort(array));
console.log(sort(array));