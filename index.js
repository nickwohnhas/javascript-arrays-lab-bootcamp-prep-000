const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]
function destructivelyAppendKitten(name){
  var newkitten = kittens.push(name)
  return newkitten
}
function destructivelyPrependKitten(name){
   return kittens.unshift(name)
}