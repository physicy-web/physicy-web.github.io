question = 0;

function firstquestion() {
    document.getElementById('popup-first').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    question += 1;
}

function secondquestion() {
    document.getElementById('popup-second').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    question += 2;
}

function thirdquestion() {
    document.getElementById('popup-third').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    question += 3;
}


// Fungsi untuk menyembunyikan popup
function hidePopup() {
    document.getElementById('popup-first').style.display = 'none';
    document.getElementById('popup-second').style.display = 'none';
    document.getElementById('popup-third').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById("correctanswer").style.display = 'none';
    document.getElementById("correctdiscuss").style.display = 'none';
    document.getElementById("user-answer-1").value = "";
    document.getElementById("correctanswer-1").style.display = 'none';
    document.getElementById("correctdiscuss-1").style.display = 'none';
    document.getElementById("user-answer-2").value = "";
    document.getElementById("correctanswer-2").style.display = 'none';
    document.getElementById("correctdiscuss-2").style.display = 'none';
    document.getElementById("user-answer-3").value = "";
    question -= question
}

function firstsubmit(){
    answer = document.getElementById("user-answer-1").value;
    showcorrect = document.getElementById("correctanswer");
    showdiscussion = document.getElementById("correctdiscuss")
    if (answer == "50"){
        showcorrect.style.display = "block";
        showdiscussion.style.display = "block";
    } else {
        
    }
}

function secondsubmit(){
    answer = document.getElementById("user-answer-2").value;
    showcorrect = document.getElementById("correctanswer-1");
    showdiscussion = document.getElementById("correctdiscuss-1")
    if (answer == "4.44"){
        showcorrect.style.display = "block";
        showdiscussion.style.display = "block";
    } else if (answer == "4.444"){
        showcorrect.style.display = "block";
        showdiscussion.style.display = "block"; 
    } else if (answer == "4.4444"){
        showcorrect.style.display = "block";
        showdiscussion.style.display = "block"; 
    }
}

function thirdsubmit(){
    answer = document.getElementById("user-answer-3").value;
    showcorrect = document.getElementById("correctanswer-2");
    showdiscussion = document.getElementById("correctdiscuss-2")
    if (answer == "-5000"){
        showcorrect.style.display = "block";
        showdiscussion.style.display = "block";
    } else if (answer == "-5,000"){
        showcorrect.style.display = "block";
        showdiscussion.style.display = "block"; 
    }
}

var input1 = document.getElementById("user-answer-1");
var input2 = document.getElementById("user-answer-2");
var input3 = document.getElementById("user-answer-3");
input1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        firstsubmit()
      // Cancel the default action, if needed
      event.preventDefault();
    }
});
input2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        secondsubmit()
      // Cancel the default action, if needed
      event.preventDefault();
    }
});
input3.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        thirdsubmit()
      // Cancel the default action, if needed
      event.preventDefault();
    }
});
