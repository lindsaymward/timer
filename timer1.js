function convertToNumberArray(args) {
  if (args.length === 0) {
    return null;
  }
  const time = [];
  for (let num of args) {
    let number = Number(num);
    if (number > 0 && number !== NaN) {
      time.push(number);
    }
  }
  return time;
};

const alarm = () => {
  const args = process.argv.slice(2);
  const times = convertToNumberArray(args);
  if (times === null) {
    return console.log('Please enter a time');
  }
  for (const num of times) {
    if (num == NaN) {
      break;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num * 1000);
    }
  }
};

alarm();