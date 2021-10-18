// challenge 1
const addOne = (arr) => {
  let arr1 = [];
  arr.forEach((element) => {
    arr1.push(element + 1);
  });
  return arr1;
};
// chllenge 2

const addExclamation = (arr) => {
  let arr2 = [];
  arr.forEach((element) => {
    arr2.push("!" + element);
  });
  return arr2;
};
// challenge 3
const addOneByMap = (arr) => {
  let arr3 = [];
  arr.map((element) => {
    arr3.push(element + 1);
  });
  return arr3;
};
// challenge 4
const addQuestion = (arr) => {
  let res = arr.map((element) => {
    return element + "?";
  });
  return res;
};
// challenge 5
const forLoopTwoToThe = (arr) => {
  let res = arr.map((item, index) => {
    return Math.pow(2, item);
  });

  return res;
};
// challenge 6
const typeNum = (arr) => {
  let arr6 = arr.filter((item, index) => {
    return typeof item === "number";
  });
  return arr6;
};

// challenge 7
const containsAnd = (arr) => {
  let arr7 = arr.filter((item, index) => {
    return item.includes("and");
  });
  return arr7;
};
// challeng 8
const oddValues = (arr) => {
  let arr8 = arr.filter((item, index) => {
    return item % 2;
  });
  return arr8;
};
// chlllenge 9

const addValues = (arr) => {
  let arr9 = arr.reduce((acc, item) => {
    return item + acc;
  });
  return arr9;
};
// challeng 10

const countNumberOfElements = (arr) => {
  let arr10 = arr.reduce((acc, item, index) => {
    return index;
  });
  return arr10;
};
