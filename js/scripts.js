/*for (allWords) {
  if (isWord)(word)) {
    var newWord = translateWord(word);
    print(newWord);
  } else {
    displayError();
  }
};

function nonWord(word) {
  var vowelAll = ["a", "e", "i", "o", "u", "y"];
  var vowelMinus = ["a", "e", "i", "o", "u"];

  if (word)
};*/

function convertPig(word) {
  return word;
}

$(document).ready(function() {
  $("form#pig-latin-converter").submit(function(event) {
    event.preventDefault();
    var inputString = $("input#pig-latin").val();
    var outputString = convertPig(inputString);

    $(".pig-sentence").text(outputString);
    $("#result").show();

  });
});












/*var sentence = "What is happening";
var vowelAll = ["a", "e", "i", "o", "u", "y"];
var vowelMinus = ["a", "e", "i", "o", "u"];

var nonWord = function(word) {
  if (!sentence.includes(vowelAll)) {
    return false;
  } else {
    return true;
  }
};

var includeVowel = function(anyvowel) {
  if ()

}

var vowelStart = function(vow) {
  if (sentence.startsWith(vowelMinus)) {
    alert("starts with 'i'");
  }

}*/
