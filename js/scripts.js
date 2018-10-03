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
  if (isWord(word)) {
    var newWord = translateWord(word);
    return newWord;
  } else {
    return "Please enter a word"
  }
};

function translateWord(word) {
  if(startsWithVowel(word)) {
      return word + "way";
    } else if (startsWithTwoLetterCombo(word)) {
        var comboStart = word.slice(0, 2);
        var rest = word.slice(2);
        return rest + comboStart + "ay";
    } else {
        var firstLetter = word.slice(0, 1);
        var rest = word.slice(1);
        return rest + firstLetter + "ay";
    }
};

function startsWithVowel(word) {
  var vowelMinus = ["a", "e", "i", "o", "u"];
  for (var index = 0; index < vowelMinus.length; index++) {
    if(word.startsWith(vowelMinus[index])) {
      return true;
    }
  }
  return false;
};

function startsWithTwoLetterCombo(word) {
  var combos = ["qu", "ch", "sh", "th", "gh", "sh", "st"];
  for (var index = 0; index < combos.length; index++) {
    if(word.startsWith(combos[index])) {
      return true;
    }
  }
  return false;
};

function isWord(word) {
  return true;
};

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
