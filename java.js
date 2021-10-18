// HigherOrderAndCallBack.md
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

// Extra challenge
const items = [
  {
    item: "switch",
    purchasePrice: 399,
  },
  {
    item: "nike",
    purchasePrice: 150,
  },
];

const addPurchases = (arr) => {
  let ext1 = arr.reduce((acc, index, item) => {
    return item;
  });
  return ext1;
};
//===========================================================\\

// objects
// challenge one

const checkValues = (obj, value) => {
  if (Object.values(obj).includes(value)) {
    return console.log(true);
  } else {
    console.log(false);
  }
};

//challenge 2
const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
 console.log(Object.keys(obj));
};
// challenge 3
{
  
}

//HR has asked you to change the data to make it easier to print so that it looks like this: 

[
 // 'Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933'
]


//const updateNumbers = (obj) => {
  let usrs =[]
  usrs.push('GraceHopper:'+'222-303-5938'&&'AdaLovelace:'+'222-349-9842'&&'Alan Turing:+222-853-5933')
  
// Challenge 4

const PassedOrFailed = function (studentGrades) {
  let sg = studentGrades
  if ( sg >= 50){
    console.log('The student have passed');
    
  }
else {console.log('The student have failed');}
};

const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 }
};

const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 }
};
// challenge 5
const totalCharacters = (arr) => {
  let arr99 = arr.reduce((item,acc,index)=>{
    return acc+item+index;}
    )
  console.log(arr99.length  -1);
}
