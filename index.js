// Write your solution here!
const cats = ['Milo', 'Otis']

function destructivelyAppendCat(cat) {
  cats.push(cat);
}

destructivelyAppendCat('Garfield');

function destructivelyPrependCat(cat) {
  cats.unshift(cat);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat (name) {
  return [...cats, name];
}

function prependCat (name) {
  return [name, ...cats];
}

function removeFirstCat () {
  return cats.slice(1);
}

function removeLastCat () {
  return cats.slice(0, cats.length - 1);
}