
$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var timedOut = 0;
    var timerId;
    var started = false;
    var game = {
      trivia: {
        questions: ["1) What was the captains name.",
          "2) What was the name of the Pilot of serenity.",
          "3) Who was in charge of security on the Serenity.",
          "4) Who was the Hired Gun on the ship.",
          "5) Who was in charge of religious understandings.",
          "6) Failed government experiment turned lethal killer?",
          "7) Older brother who loved said failed government experiment.",
          "8) Ships mechanic.",],
        answers: [
          ["Malcolm Reynolds ", "Jean-Luc Picard ", "Han Solo ", "Edward Smith "],
          ["Hoban Washburne ", "Wesley Crusher ", "Chewbacca ", "Henry Tingle Wilde "],
          ["Zoe Washburne", "Lieutenant Warf", "Darth Vader", "William McMaster Murdoch "],
          ["Jayne Cobb ", "Data ", "Boba Fett ", "Herbert Pitman "],
          ["Derrial Book ", "Guinan ", "Yoda ", "James Paul Moody "],
          ["River Tam ", "Q ", "Anakin Skywalker ", "Harold Lowe "],
          ["Simon Tam ", "William T. Riker ", "C3PO ", "Herbert Pitman "],
          ["Kaylee Frye ", "Geordi La Forge ", "RJD2 ", "Charles Lightoller "],
        ]
      }
    }
    var timeLeft = 120;
    var nextQuestion = 0;
    var guess = "";
    

        //Timer
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
      } else {
        timeLeft--;
        $("#timer").html("<h1>Time: " + timeLeft + "</h1>");
      }
    }
    function checker(guessed) {
  
      if (guessed === game.trivia.answers[0]) {
        alert("correct!");
      } else if (guessed !== game.trivia.answers[nextQuestion[0]]) {
        alert("incorrect");
      } else {
        alert("Timed Out");
      }
      nextQuestion++;
    }
  
    //Clicking the START button displays the first question and answer choices
    $("#start-button").on("click", function () {
      if (started === false) {
        timerId = setInterval(countdown, 1000);
  
        $("#timer").html("<h1>Time: " + timeLeft + "</h1>");
        $("#start-button").html("<h1>" + game.trivia.questions[nextQuestion] + "</h1><hr>");
  
        for (var i = 0; i < 4; i++) {
          $("#choices").append("<h3 class='answer'>" + game.trivia.answers[nextQuestion][i] + "</h3>");
        }
      }
      started = true;
    })
  
    $("#choices").on("click", function () {
      guess = $(".answer").text();
      checker(guess);
    })
  
  
    //Shuffles Array of Questions and Answers
    function shuffle(array) {
      var i = 0
        , j = 0
        , temp = null
  
      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array[j];
    }
  })