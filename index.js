// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}


function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var howLong = kittens.length
  console.log(howLong)
  return kittens.splice(3, 0, name)
}
