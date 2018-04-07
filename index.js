const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name){
  var newkitten = kittens.push(name)
  return newkitten
}
function destructivelyPrependKitten(name){
  var newkitten = kittens.unshift(name)
  return newkitten
}
function destructivelyRemoveLastKitten(){
  var newkitten = kittens.pop()
  return newkitten
}