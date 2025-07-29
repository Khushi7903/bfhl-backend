function processData(data) {
  let even_numbers = [];
  let odd_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let concatAlpha = '';

  data.forEach(item => {
    if (/^\d+$/.test(item)) {
      const num = parseInt(item);
      sum += num;
      if (num % 2 === 0) {
        even_numbers.push(item);
      } else {
        odd_numbers.push(item);
      }
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      concatAlpha += item;
    } else {
      special_characters.push(item);
    }
  });

  const reversed = concatAlpha.split('').reverse();
  const concat_string = reversed.map((ch, i) =>
    i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
  ).join('');

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  };
}

module.exports = { processData };
