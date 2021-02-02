export function Entry(words) {
  this.words=words;
}

Entry.prototype.wordCount = function(str) {
  return str.split(" ").length; 
};

Entry.prototype.vowelCount = function(str) {
  const vowels = ["a","e","i","o","u"];
  let lowerCase = str.toLowerCase();
  const wordArray = lowerCase.split("");
  let count = 0;
  for (let i=0; i<wordArray.length; i++) {
    if (vowels.includes(wordArray[i])) {
      count++;
    }
  }
  return count;
};

Entry.prototype.consonantCount = function(str) {
  const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  let lowerCase = str.toLowerCase();
  const wordArray = lowerCase.split("");
  let count = 0;
  for (let i=0; i<wordArray.length; i++) {
    if (consonants.includes(wordArray[i])) {
      count++;
    }
  }
  return count;
};

Entry.prototype.getTeaser = function(str) {
  
  const entry = str.split("");
  const entryWords = str.split("");
  let punctuation = [".", "?", "!"];
  for (let i=0; i<entry.length; i++) {
    if (punctuation.includes(entry[i])){
      return entry.join();
    }
    else {
      return entryWords;
    }
  }
};
  //   if (this.wordCount(str) <= 8) {
  //     console.log(this.wordCount(str));
  //   }

      


  //   }
  // }
  //str.split(" ").length = 8;
