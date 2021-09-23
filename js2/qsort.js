function swap(list1, pos1, pos2) {
  let temp = list1[pos1];
  list1[pos1] = list1[pos2];
  list1[pos2] = temp;
}

function partition(list1, start, end) {
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
  console.log(left);
  console.log(right);
  list2[left] = middle_value;

  //将新数组结果复制到老数组里
  for (let j = start; j <= end; j += 1) {
    list1[j] = list2[j];
  }
  return left;
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

let list3 = [];
list3.push(3);
list3.push(100);
list3.push(8, 9, 10);
list3.push(13,12,7);

console.log(list3);
qsort(list3,0,list3.length-1);
console.log(list3);
