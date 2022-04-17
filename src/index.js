function iterator(arr) {
  let index = 0;
  const iterator = {
    next() {
      const value = arr[index];
      index++;
      console.log(value);
    }
  };
  return iterator;
}

const array3 = [1, 2, 3];
const iteratorWithNext = iterator(array3);
iteratorWithNext.next();
iteratorWithNext.next();
iteratorWithNext.next();
