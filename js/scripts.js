function isAlphabet(str) {
  return /^[a-zA-Z()]/.test(str);
}

function convertInput(string) {
  var words = string.split(" ");
  var newString = "";
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var newWord = convertPig(word);
    newString = newString.concat(newWord + " ");
  }
  return newString;
};


function convertPig(string) {
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (isWord(word)) {
      var newWord = translateWord(word);
      return newWord;
    } else {
      return "Please enter a word"
    }
  }
};

function translateWord(word) {
  if(startsWithVowel(word)) {
      return word + "Way";
    } else if (startsWithTwoLetterCombo(word)) {
        var comboCapitalize = word.charAt(0).toUpperCase() + word.slice(1);
        var comboStart = comboCapitalize.slice(0, 2);
        var rest = comboCapitalize.slice(2);
        return rest + comboStart + "ay";
    } else {
        var firstLetter = word.slice(0, 1).toUpperCase();
        var rest = word.slice(1);
        return rest + firstLetter + "ay";
    }
};

function startsWithVowel(word) {
  var vowelMinus = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (var index = 0; index < vowelMinus.length; index++) {
    if(word.startsWith(vowelMinus[index])) {
      return true;
    }
  }
  return false;
};

function startsWithTwoLetterCombo(word) {
  var combos = ["qu", "ch", "sh", "th", "gh", "sh", "st", "tr", "ph", "Qu", "Ch", "Sh", "Th", "Gh", "Sh", "St", "Tr", "Ph"];
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
    var outputString = convertInput(inputString);

    isAlphabet(inputString) ? inputString : alert("Please use letters");

    $(".pig-sentence").text(outputString);
    $("#result").show();

  });
});
