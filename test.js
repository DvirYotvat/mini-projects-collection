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

let calculator_expression = "";

$(".calculator").ready(function () {
  $(document).on("keypress", function (e) {
    let key = String.fromCharCode(e.which);
    if (!jQuery.isNumeric(key)) {
      if (key != "+" && key != "-" && key != "*" && key != "/" && key != "=") {
        return;
      }
    }
    if (key == "=") {
      if ($("#answer_calculator .br").length > 0) return;
      $("#answer_calculator").append(`<br class = "br">`);
      $("#answer_calculator").append(eval(calculator_expression));
      return;
    } else {
      calculator_expression += key;
    }
    $("#answer_calculator").html(calculator_expression);
  });
  $(".calculator_btns").click(function () {
    if ($(this).val() == "=") {
      if ($("#answer_calculator .br").length > 0) return;
      $("#answer_calculator").append(`<br class = "br">`);
      $("#answer_calculator").append(eval(calculator_expression));
      return;
    } else if ($(this).val() == "clear") {
      calculator_expression = "";
      $("#answer_calculator").html(calculator_expression);
    } else {
      calculator_expression += $(this).val();
    }
    $("#answer_calculator").html(calculator_expression);
  });
});

////////////////////////////// Rock_Paper_Scissors_game ////////////////////////////////////////

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

////////////////////////////// quiz game  ////////////////////////////////////////

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
  $('input[name="check_button"]:checked').css("background-color", "yellow");
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

$(".quiz_game").ready(function () {
  $("#new_gmae").click(function () {
    life = 3;
    quiz_options_index = 1;
    show_quiz();
  });
});

////////////////////////////// Get json file with http ////////////////////////////////////////

$(".json_ex1").ready(function () {
  $("#json_btn").click(function () {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(xhttp.responseText);
        let table = '<table id = "json_table">';

        table += `<th> <h2> Animal </h2> </th>`;
        table += `<th> <h2> family </h2> </th>`;
        table += `<th> <h2> food </h2></th>`;
        table += `<th> <h2> age </h2> </th>`;

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
  });
});

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

////////////////////////////// memory game ////////////////////////////////////////

$(document).ready(function () {
  $("#cmdNewGame").click(function () {
    makeNewGame();
  });
  makeNewGame();
});

function makeNewGame() {
  let imgArr = [];
  let numCheck;
  let temp;
  let cellCounter = 0;
  let rightCounter = 0;
  let clickcount = 0;
  let fliped = ["", ""];
  let matchcount = 0;
  let flip_size = 0;

  $("#matchesCounter").text(matchcount);
  $("#movesCounter").text(clickcount);

  for (let i = 1; i <= 30; i++) imgArr[i] = i;

  let str = `<table id = 'tbCards'> <tr>`;

  while (1) {
    numCheck = getRandNumber(31);
    cellCounter = 0;

    if (imgArr[numCheck] != null) {
      if (numCheck > 15) {
        imgArr[numCheck] = null;
        numCheck = numCheck - 15;
      } else imgArr[numCheck] = null;

      rightCounter++;
      temp = `<img src="img/backCard.png" id=img/${numCheck.toString()} class="card">`;
      str += `<td> ${temp} </td>`;
    }
    if (rightCounter == 5) {
      rightCounter = 0;
      str += `</tr> <tr>`;
    }

    for (let i = 1; i < imgArr.length + 1; i++) {
      if (imgArr[i] == null) cellCounter++;
    }

    if (cellCounter >= imgArr.length) {
      break;
    }
  }

  str += `</tr>`;

  $(".board").html(str);
  $(".card").click((e) => {
    let temp2 = $(e.target);
    if (temp2.hasClass("flip")) return;
    clickcount += 1;

    if (flip_size == 2) {
      $(".flip").attr("src", "img/backCard.png");
      $(".flip").toggleClass("flip");
      flip_size = 0;
    }

    if (clickcount % 2 == 1) {
      flip_size++;
      temp2.toggleClass("flip");
      fliped[0] = temp2.attr("id");
      temp2.attr("src", `${temp2.attr("id")}.png`);
      return;
    }

    if (clickcount % 2 == 0) {
      flip_size++;
      temp2.toggleClass("flip");
      fliped[1] = temp2.attr("id");
      temp2.attr("src", `${temp2.attr("id")}.png`);
      $("#movesCounter").text(clickcount / 2);
    }

    if (fliped[0] == fliped[1]) {
      $(".flip").unbind();
      $(".flip").toggleClass("flip");
      matchcount += 1;
      $("#matchesCounter").text(matchcount);
    }
    if (matchcount == 15)
      alert(`you won!!!! it's only took you ${clickcount / 2} moves`);
  });
}

function getRandNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

////////////////////////////// click counter with local storage ////////////////////////////////////////

$(".click_counter_local_storage").ready(function () {
  // counter the clicks
  $("#click_me_counter").click(function () {
    // check if we can use local storage
    if (typeof Storage !== "undefinde") {
      if (localStorage.num_of_clicks) {
        // add click to the storage
        localStorage.num_of_clicks = parseInt(localStorage.num_of_clicks) + 1;
        // case storage empty
      } else localStorage.num_of_clicks = 1;

      $("#click_count").html(
        `you clicked the button ${localStorage.num_of_clicks} times`
      );
      // case we cant use local storage
    } else alert("Soory, your browser dose not support web storage");
  });
  // remove the clicks
  $("#click_me_reset").click(function () {
    // check if we can use local storage
    if (typeof Storage !== "undefinde") {
      if (localStorage.num_of_clicks) {
        localStorage.removeItem("num_of_clicks");
      }
      $("#click_count").html("click counter has reset");
      // case we cant use local storage
    } else alert("Soory, your browser dose not support web storage");
  });
});

////////////////////////////// login and logout with local storage ////////////////////////////////////////

$(".log_in").ready(function () {
  // check if user already login
  // case user login show div of "sucsses_login" and hide div of login
  if (localStorage.getItem("userName")) {
    $(".sucsses_login").show();
    $("#login_form").hide();

    // delet local storage after 5 min (log out after 5 min)
    let expire_date = new Date();
    expire_date = expire_date.getMinutes();
    if (expire_date + 5 > 60) expire_date = expire_date - 60;
    if (expire_date >= localStorage.getItem("expire")) {
      localStorage.removeItem("expire");
      localStorage.removeItem("userName");
    }
    // case user not login hide div of "sucsses_login"
  } else {
    $(".sucsses_login").hide();
  }

  // case user click logout, show div of login and hide div of "sucsses_login" and delete the user from the local storage
  $("#log_out_submit").click(function () {
    $(".sucsses_login").hide();
    $("#login_form").show();
    localStorage.removeItem("userName");
  });

  // case user try to login
  // get file json of users and passwords and check if the user exsist
  $("#login_submit").click(function () {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(xhttp.responseText);
        // get user and password from the html
        let user = $("#user_name").val();
        let password = $("#user_password").val();
        let flag = false;
        let date = new Date();

        // check if what the user enter is on the json file of exsist users
        for (i = 0; i < data.length; i++) {
          if (data[i].user_name == user && data[i].password == password) {
            flag = true;
          }
        }
        // if user exsist show div of "sucsses_login" and hide div of login and add the user to local storage
        if (flag == true) {
          $(".sucsses_login").show();
          $("#login_form").hide();
          // save the user in the local storage
          localStorage.setItem("userName", user);
          // set 5 min until log out
          let expire = date.getMinutes() + 5;
          if (expire > 60) expire = expire - 60;
          localStorage.expire = expire;
        }
        // case the user dos not exsist alert error
        else alert("login error");
      }
    };

    // http call to get the json file
    xhttp.open("GET", "login.json", true);
    xhttp.send();
  });
});

////////////////////////////// Animal classes and extend (Object oriented)////////////////////////////////////////

$(".animals_classes").ready(function () {
  class Animal {
    constructor(theName) {
      this.name = theName;
    }
    move(typeOfWalk, distanceInMeters) {
      this.walk = `${this.name} ${typeOfWalk} ${distanceInMeters}m.`;
    }
  }

  class Snake extends Animal {
    constructor(name) {
      super(name);
    }
    move(typeOfWalk, distanceInMeters = 5) {
      super.move(typeOfWalk, distanceInMeters);
    }
  }

  class Horse extends Animal {
    constructor(name) {
      super(name);
    }
    move(typeOfWalk, distanceInMeters = 45) {
      super.move(typeOfWalk, distanceInMeters);
    }
  }

  $("#submit_new_animal").click(function () {
    let animal = $('input[name="animal_type"]:checked').val();
    let animal_name = $("#animal_name").val();
    let animal_dis = $("#animal_destance").val();
    let my_animal;

    if (animal == "horse") {
      my_animal = new Horse(animal_name);
      if (animal_dis != "") my_animal.move("Galloping...", animal_dis);
      else my_animal.move("Galloping...");
      $("#show_animal_img").html(
        `<img src="img/horse.png" style="height:30%;">`
      );
    } else if (animal == "snake") {
      my_animal = new Snake(animal_name);
      if (animal_dis != "") my_animal.move("Slithering...", animal_dis);
      else my_animal.move("Slithering...");
      $("#show_animal_img").html(
        `<img src="img/snake.png" style="height:30%;">`
      );
    }
    $("#show_animal").html(my_animal.walk);
  });
});

////////////////////////////// Async analog clock ////////////////////////////////////////

$(".show_time").ready(function () {
  window.setInterval(function () {
    let time = new Date();
    let time_hour = time.getHours();
    let time_min = time.getMinutes();
    let time_sec = time.getSeconds();

    let hour_deg = 30 * time_hour + time_min / 2;
    let min_deg = 6 * time_min;
    let sec_deg = 6 * time_sec;
    "transform", "rotate(" + 30 + "deg)";
    $("#clock_second").css(`transform`, `rotate(${sec_deg}deg)`);
    $("#clock_minute").css(`transform`, `rotate(${min_deg}deg)`);
    $("#clock_hour").css(`transform`, `rotate(${hour_deg}deg)`);
  }, 1000);
});
