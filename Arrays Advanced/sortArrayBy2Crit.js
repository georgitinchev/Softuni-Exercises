function sort(arr) {
  arr.sort(twoCriteria);
  arr.forEach((el) => console.log(el));

  function twoCriteria(cur, next) {
    if (cur.length === next.length) {
      return cur.localeCompare(next);
    }
    return cur.length - next.length;
  }
}
