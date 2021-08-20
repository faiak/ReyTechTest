export const getInitials = name => {
  let initials = Array.prototype.map
    .call(name.split(' '), function (x) {
      return x.substring(0, 1).toUpperCase();
    })
    .join('');
  return initials.substring(0, 2);
};

export function splitUp2(arr, n) {
  const result = [];
  const arrLength = arr.length;
  const diff = arrLength / n;
  for (let x = 0; x < diff; x++) {
    result.push(arr.slice(x * n, n * (x + 1)));
  }

  return result;
}
