const arr = [];
const recursion = (obj, depth = 0) => {
  if (!obj) return;
  const { left, right } = obj;
  if (!arr[depth]) arr[depth] = [];
  arr[depth] = [...arr[depth], obj.value];
  recursion(left, depth + 1);
  recursion(right, depth + 1);
  return arr;
};
