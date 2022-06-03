
function add(a, b) {
  return a + b
}

console.log("add", add(2, 3))


function sum(...params) {
  let sum = 0
  params.forEach(param => {
    sum += param
  });
  return sum
}

console.log("sum: ", sum(1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 1, 3, 12))

function stringInclude(stringOne, stringTwo) {
  // includes()
  // 1. case sensitive
  //  return stringOne.include(stringTwo)
  // 2 . case not sensitive
  return stringOne.toLowerCase().includes(stringTwo.toLowerCase())
}

console.log("string include : ", stringInclude("Hello this is my interview, nice to meet you", "interview"))

