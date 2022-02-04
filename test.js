////////////////////////////// my_details (get details form object) ////////////////////////////////////////

let my_details = {
  FirstName: "Dvir",
  LestName: "Yotvat",
  Age: 27,
  Hobby: "coding",
};

function get_my_details() {
  let str = `My name is: ${my_details.FirstName} ${my_details.LestName} <br/> My age is: ${my_details.Age} <br/> My hobby is: ${my_details.Hobby}`;
  document.getElementById("answer_question_1_a").innerHTML = str;
}
function get_my_details2() {
  let select = document.getElementById("get_details");
  let value = select.options[select.selectedIndex].value;
  let str = "The value is: ";
  if (value == "FirstName") {
    str += `First Name: ${my_details.FirstName}`;
  } else if (value == "LestName") {
    str += `Lest Name: ${my_details.LestName}`;
  } else if (value == "Age") {
    str += `Age: ${my_details.Age}`;
  } else {
    str += `Hobby: ${my_details.Hobby}`;
  }
  document.getElementById("answer_question_1_b").innerHTML = str;
}

////////////////////////////// calculator ////////////////////////////////////////

function calculator_1() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  first = parseFloat(first);
  second = parseFloat(second);
  let res = first + second;
  let str = `Result = ${res}`;
  document.getElementById("answer_calculator").innerHTML = str;
}
function calculator_2() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  let str = `Result = ${first - second}`;
  document.getElementById("answer_calculator").innerHTML = str;
}
function calculator_3() {
  let first = document.getElementById("firstNumber").value;
  let second = document.getElementById("secondNumber").value;
  let str = `Result = ${first * second}`;
  document.getElementById("answer_calculator").innerHTML = str;
}

////////////////////////////// 2 אבן נייר ומספריים ////////////////////////////////////////

user_score = 0;
pc_score = 0;

function random_sing() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random == 1) {
    return "rock";
  } else if (random == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function comper_sings(sing1, sing2) {
  if (sing1 == sing2) {
    return "doual";
  } else if (sing1 == "rock" && sing2 == "paper") {
    return "sing2";
  } else if (sing1 == "rock" && sing2 == "scissors") {
    return "sing1";
  } else if (sing1 == "paper" && sing2 == "rock") {
    return "sing1";
  } else if (sing1 == "paper" && sing2 == "scissors") {
    return "sing2";
  } else if (sing1 == "scissors" && sing2 == "rock") {
    return "sing2";
  } else if (sing1 == "scissors" && sing2 == "paper") {
    return "sing1";
  }
}

function Rock_Paper_Scissors_game() {
  let radio_check = document.getElementsByName("Rock_Paper_Scissors");
  let user_answer;
  for (i = 0; i < radio_check.length; i++) {
    if (radio_check[i].checked) {
      user_answer = radio_check[i].value;
    }
  }
  let pc_sing = random_sing();
  let res = comper_sings(user_answer, pc_sing);
  let str = `USER: <img id = "user_vs_pc" src="/img/${user_answer}.png" style="width:60px;height:60px;"> <h1>vs</h1>  PC: <img id = "user_vs_pc" src="/img/${pc_sing}.png" style="width:60px;height:60px;">`;
  document.getElementById("user_vs_pc_sings").innerHTML = str;
  if (res == "sing1") {
    alert("player wins");
    user_score++;
    document.getElementById("user_score").textContent = user_score;
  } else if (res == "sing2") {
    alert("pc wins");
    pc_score++;
    document.getElementById("pc_score").textContent = pc_score;
  } else {
    alert("doual");
  }
}

function make_new_rock_paper_scissors_game() {
  user_score = 0;
  pc_score = 0;
  document.getElementById("user_score").textContent = user_score;
  document.getElementById("pc_score").textContent = pc_score;
}

////////////////////////////// quiz game 2 ////////////////////////////////////////

quiz_options_index = 1;
life = 3;

const quiz = {
  1: {
    question: "What is the first name of Iron Man?",
    answer: "Tony",
  },
  2: {
    question: "Who is called the god of lightning in Avengers?",
    answer: "Thor",
  },
  3: {
    question: "Who carries a shield of American flag theme in Avengers?",
    answer: "Captain America",
  },
  4: {
    question: "Which avenger is green in color?",
    answer: "Hulk",
  },
  5: {
    question: "Which avenger can change it's size?",
    answer: "AntMan",
  },
  6: {
    question: "Which Avenger is red in color and has mind stone?",
    answer: "Vision",
  },
};

let quiz_options = {
  1: "Tony",
  2: "Thor",
  3: "Captain America",
  4: "Hulk",
  5: "AntMan",
  6: "Vision",
};

function check(str1, str2) {
  if (str1 == str2) return true;
  else return false;
}

function random_answers(num_of_questions) {
  let list_random = [];
  let flag = false;
  while (list_random.length != num_of_questions) {
    let random = Math.floor(Math.random() * num_of_questions) + 1;
    for (let i = 0; i < list_random.length; i++) {
      if (list_random[i] == random) flag = true;
    }
    if (flag == false) {
      list_random.push(random);
    } else {
      flag = false;
    }
  }
  return list_random;
}

function show_quiz() {
  if (life == 0) {
    alert("you lose");
    life = 3;
    quiz_options_index = 1;
    $("#quiz_question").html = "";
    return;
  }
  let random = random_answers(6);
  let str = `<h1> ${quiz[quiz_options_index].question} </h1> </br>`;
  let answer = ``;
  for (let j = 0; j < random.length; j++) {
    answer += ` <b> <input type="radio" name="check_button" value="${
      quiz_options[random[j]]
    }">${quiz_options[random[j]]}
        </b> </br> `;
  }
  str += answer;
  str += `<button  id = "submit" type="button" onclick="get_check_button()">
  submit answer</button> </br>`;
  $("#quiz_question").html(str);
}

function get_check_button() {
  let user_answer = $('input[name="check_button"]:checked').val();
  if (check(user_answer, quiz[quiz_options_index].answer) == false) {
    life--;
    alert("wrong answer!");
  } else {
    alert("good answer");
  }
  if (quiz_options_index >= Object.keys(quiz).length) {
    alert("you won!!!");
    new_gmae();
  }

  quiz_options_index++;
  show_quiz(quiz_options_index);
}

// function new_gmae() {
//   life = 3;
//   quiz_options_index = 1;
//   show_quiz();
// }

$(".quiz_game").ready(function () {
  $("#new_gmae").click(function () {
    life = 3;
    quiz_options_index = 1;
    show_quiz();
  });
});

////////////////////////////// get json file with http ////////////////////////////////////////

function get_json() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(xhttp.responseText);
      var table = '<table style = "border:1px solid blue" >';

      for (i = 0; i < data.length; i++) {
        table += "<tr>";

        table += "<td>" + data[i].Animal + "</td>";
        table += "<td>" + data[i].family + "</td>";
        table += "<td>" + data[i].food + "</td>";
        table += "<td>" + data[i].age + "</td>";

        table += "</tr>";
      }
      table += "</table>";
      $("#json_request").html(table);
    }
  };

  xhttp.open("GET", "data.json", true);
  xhttp.send();
}

////////////////////////////// simon game  ////////////////////////////////////////

let level = 1;
let user_index = 0;
let simon_pc_arr = [];
let simon_user_arr = [];

// reset all the parameters of the simon game
function new_simon_game() {
  simon_pc_arr = [];
  simon_user_arr = [];
  level = 1;
  pc_index = 0;
  user_index = 0;
  // reset the num of the level
  $("#simon_level").text(`level: ${level}`);
  // calling the "main function"
  simon_game();
}

// do a random color
function random_color() {
  let random = Math.floor(Math.random() * 4) + 1;
  if (random == 1) return "yellow";
  else if (random == 2) return "blue";
  else if (random == 3) return "red";
  else return "green";
}

// function that do the efect of the pc pressing
function pc_press(color) {
  $(`#${color}_btn`).css("color", `${color}`);
  $(`#${color}_btn`).css("background-color", "white").fadeToggle(300);
  $(`#${color}_btn`).css("background-color", `${color}`).fadeToggle(300);
  $(`#${color}_btn`).css("color", "white");
  // call the function that do the sound
  play_simon_sound(color);
}

// play sound of button
function play_simon_sound(color) {
  new Audio(`sounds/${color}.mp3`).play();
}

// do a loop on the pc array of the simon game
function myLoop(pc_index) {
  setTimeout(function () {
    // call the function that do the pressing efect with the current color in the pc array
    if (simon_pc_arr[pc_index] == "yellow") pc_press("yellow");
    else if (simon_pc_arr[pc_index] == "blue") pc_press("blue");
    else if (simon_pc_arr[pc_index] == "red") pc_press("red");
    else pc_press("green");
    pc_index++;
    // if the loop is not over calling back to the recursion loop function
    if (pc_index < level) {
      myLoop(pc_index);
    }
    // wait halfe a sec
  }, 500);
}

// the "main" function
function simon_game() {
  // add to the pc array a color
  simon_pc_arr[level - 1] = random_color();
  // call the loop function that loop on the pc array that calling the pressing efect function
  myLoop(0);
}

// get ready until the div of the simon game is ready
$("#Simon_game").ready(function () {
  // on click new game start new simon game
  $("#new_game_simon").click(function () {
    new_simon_game();
  });

  // do a css effect whene mouseover the buttons change backgrund to with and the text to the color of the button
  $(".Simon_btn[data-track=hover]").on("mouseenter", function () {
    let color;
    if (this.id == "yellow_btn") color = "yellow";
    else if (this.id == "blue_btn") color = "blue";
    else if (this.id == "red_btn") color = "red";
    else if (this.id == "green_btn") color = "green";

    $(`#${color}_btn`).mouseover(function () {
      $(`#${color}_btn`).css("box-shadow:", "0 0 0 0px");
    });
    $(`#${color}_btn`).mouseout(function () {
      $(`#${color}_btn`).css("color", "white");
      $(`#${color}_btn`).css("background-color", color);
    });
  });

  // the "user" function. check what the user  prees and add to user array
  $("#yellow_btn, #blue_btn, #red_btn, #green_btn").click(function () {
    let color;
    if (this.id == "yellow_btn") {
      simon_user_arr[user_index] = "yellow";
      color = "yellow";
    } else if (this.id == "blue_btn") {
      simon_user_arr[user_index] = "blue";
      color = "blue";
    } else if (this.id == "red_btn") {
      simon_user_arr[user_index] = "red";
      color = "red";
    } else {
      simon_user_arr[user_index] = "green";
      color = "green";
    }
    // paly sound of button
    play_simon_sound(color);
    // check id the arrays of the pc and the user are the same
    for (let i = 0; i <= user_index; i++) {
      if (simon_user_arr[i] != simon_pc_arr[i]) {
        play_simon_sound("fail");
        return;
      }
    }
    user_index++;
    if (user_index >= level) check_simon();
  });
});

// check the pc array and the user array and if thay are the same
function check_simon() {
  // reset the user array
  user_index = 0;
  // case the arrays are the same level up
  if (JSON.stringify(simon_user_arr) == JSON.stringify(simon_pc_arr)) {
    level++;
    $("#simon_level").text(`level: ${level}`);
    simon_game();
    // case the arrays are not the same alert you lose and call the function new game
  } else {
    play_simon_sound("fail");
    return;
  }
}
