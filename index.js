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
  // var howLong = kittens.length
  // console.log(howLong)
  // var moreKittens = kittens.splice(2, 0, "name")
  // return moreKittens;
  console.log(kittens)
  var more = [name];
  var moreKittens = kittens.concat(more);
}
