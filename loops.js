function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  console.log(array)
  return array
}

function whileLoop(num) {
  while (num > 0) {
    console.log(num)
    num -= 1
    if (num === 0) {
      return "done"
    }
  }
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop
    while (array.length > 0 && maybeTrue())
  }
}
