$(document).ready(function() {
  $("#firstForm").submit(function(event) {
    $(".form-showing").hide();
    $("#returnSentence").show();
    var sentence = $("input#sentence").val();

    var arrayOfSentence = sentence.split(" ");

    var longWords = arrayOfSentence.map(function(word) {
      console.log("the word ''" + word + "' is "+word.length + " characters long.");
      if (word.length >= 3) {
        return word;
      };
    });

    longWords = longWords.reverse().join(" ");

    $("#sentenceTwo").text(longWords);
    event.preventDefault();

  });
});
