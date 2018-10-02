var sentence = "What is happening";
var vowelAll = ["a", "e", "i", "o", "u", "y"];
var vowelMinus = ["a", "e", "i", "o", "u"];

var nonWord = function(word) {
  if (!sentence.includes(vowelAll)) {
  return false;
  }
};

var vowelStart = function(vow) {
  if (sentence.startsWith(vowelMinus)) {
    alert("starts with 'i'");
  }

}
