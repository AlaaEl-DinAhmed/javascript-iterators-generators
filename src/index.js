function iterator(arr) {
  let index = 0;
  let done = false;
  const iterator = {
    next() {
      const value = arr[index];
      index++;
      return value ? { value, done } : { value, done: true };
    }
  };
  return iterator;
}

const array3 = [1, 2, 3];
const iteratorWithNext = iterator(array3);
console.log(iteratorWithNext.next());
console.log(iteratorWithNext.next());
console.log(iteratorWithNext.next());
console.log(iteratorWithNext.next());
