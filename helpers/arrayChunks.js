export const ChunkArray = (array, size) => {
  let sample_array = array;
  return [].concat.apply(
    [],
    sample_array.map(function (elem, i) {
      return i % size ? [] : [sample_array.slice(i, i + size)];
    })
  );
};

export const padLeadingZeros = (num, size) => {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};
