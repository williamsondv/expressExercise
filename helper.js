function findMode(arr) {
  const frequencyMap = {};

  arr.forEach((element) => {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  });

  let modes = [];
  let maxFrequency = 0;

  for (const element in frequencyMap) {
    const frequency = frequencyMap[element];
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      modes = [parseInt(element)];
    } else if (frequency === maxFrequency) {
      modes.push(parseInt(element));
    }
  }
  return modes[0];
}

function findMean(arr) {
  if (arr.length === 0) return 0;
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    maxNum = maxNum + arr[i];
  }

  mean = maxNum / arr.length;

  return mean;
}

function findMedian(arr) {
  arr.sort((a, b) => a - b);

  let middleIndex = Math.floor(arr.length / 2);
  let median;

  if (arr.length % 2 === 0) {
    median = (arr[middleIndex] + arr[middleIndex - 1]) / 2;
  } else {
    median = arr[middleIndex];
  }
  return median;
}

function convertStringsToNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    if (Number.isNaN(valToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }
  return result;
}

module.exports = {
  findMean,
  findMedian,
  findMode,
  convertStringsToNumsArray,
};
