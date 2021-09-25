function partition1(list1, start, end) {
  //取最后一个值为比较基准
  let middle_value = list1[end];

  let list2 = [];
  let left = start;
  let right = end;

  // end是中间数，所以不用作判断，最后写入即可
  for (let i = start; i < end; i += 1) {
    if (list1[i] > middle_value) {
      list2[right] = list1[i];
      right -= 1;
    } else {
      list2[left] = list1[i];
      left += 1;
    }
  }
  list2[left] = middle_value;

  //将新数组结果复制到老数组里
  for (let j = start; j <= end; j += 1) {
    list1[j] = list2[j];
  }
  return left;
}

function swap(list1, pos1, pos2) {
  let tmp = list1[pos1];
  list1[pos1] = list1[pos2];
  list1[pos2] = tmp;
}

function getMiddle(start, end) {
  const len = end - start;
  const pos = start + Math.floor(Math.random() * len);
  return pos;
}

function partition2(list1, start, end) {
  console.log(`before partition ${list1.slice(start, end + 1)}`);
  //取最后一个值为比较基准
  let middle_value = list1[end];

  let left = start;
  let right = end;

  while (left < right) {
    while (list1[left] <= middle_value && left < right) {
      left += 1;
    }
    while (list1[right] > middle_value && right > left) {
      right -= 1;
    }
    if (left === right) {
      break;
    } else {
      swap(list1, left, right);
    }
  }
  //console.log(`left=${left},right=${right}`);
  console.log(`after partition ${list1.slice(start, end + 1)}`);
  return left;
}

function partition3(list1, start, end) {
  console.log(`before partition ${list1.slice(start, end + 1)}`);

  let start2 = start;
  let start3 = start;

  let pos = getMiddle(start,end);
  swap(list1,pos,end);

  let middle_value = list1[end];
  console.log(`middle value=${middle_value}`);

  while (start3 <= end) {
    if (list1[start3] <= middle_value) {
      let length2 = start3 - start2;
      if (length2 > 0) {
        swap(list1, start2, start3);
      }
      start2 += 1;
    }
    start3 += 1;
  }
  console.log(`after partition ${list1.slice(start, end + 1)}`);
  console.log(`start2=${start2}`);
  return start2 - 1;
}

function qsort(list1, start, end) {
  let middle = partition(list1, start, end);

  if (middle - start > 1) {
    qsort(list1, start, middle - 1);
  }
  if (end - middle > 1) {
    qsort(list1, middle + 1, end);
  }
}

function qsort2(list1, start, end, partition) {
  let middle = partition(list1, start, end);
  //console.log(`start=${start},middle=${middle},end=${end}`);

  if (middle - start > 1) {
    qsort2(list1, start, middle-1, partition);
  }
  if (end - middle > 1) {
    qsort2(list1, middle + 1, end, partition);
  }
}

let list3 = [];
list3.push(3);
list3.push(100);
list3.push(8, 9, 10);
list3.push(13, 12, 7);
list3.push(25, 26, 27);

console.log(list3);
qsort2(list3, 0, list3.length - 1, partition3);
console.log(list3);

// list4 = [3,100,8,9,10,13,12,7,25,26];
// partition2(list4, 0, list4.length - 1);
// console.log(list4);

// list5 = [3,  8,  7, 10, 9];
// partition2(list5, 0, list5.length - 1);
// console.log(list5);

// list6 = [3, 7, 8];
// qsort2(list6, 0, list6.length - 1, partition3);
// console.log(list6);

// list7 = [3, 7, 1];
// qsort2(list7, 0, list7.length - 1, partition3);
// console.log(list7);

list8 = [26, 100, 27];
qsort2(list8, 0, list8.length - 1, partition3);
console.log(list8);
