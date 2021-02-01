function Entry(words) {
  this.words=words;
}

function wordCount(str) {
  return str.split(" ").length;
  }
console.log(wordCount("hello world"));