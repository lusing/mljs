function swap(list1, pos1, pos2) {
  let tmp = list1[pos1];
  list1[pos1] = list1[pos2];
  list1[pos2] = tmp;
}

function getMiddle(list1, start, end) {
    const len = end - start;
    const pos = start + Math.floor(Math.random() * len);
    console.log(`pos=${pos}`);
    return list1[pos];
  }

function partition1(list1, start, end) {
  let middle_value = getMiddle(list1, start, end);

  let i = start - 1;
  for (let j = start; j < end; j += 1) {
    if (list1[j] <= middle_value) {
      i += 1;
      swap(list1, i, j);
    }
  }
  swap(list1, i + 1, end);
  return i + 1;
}

function quicksort(list1, start, end, partition) {
  if (start < end) {
    let middle = partition(list1, start, end);
    quicksort(list1, start, middle - 1, partition);
    quicksort(list1, middle + 1, end, partition);
  }
}

let list3 = [];
list3.push(3);
list3.push(100);
list3.push(8, 9, 10);
list3.push(13, 12, 7);
list3.push(25, 26, 27);

console.log(list3);
quicksort(list3, 0, list3.length - 1, partition1);
console.log(list3);
