let gameseq = [];
let usersq = [];
let level = 0;
let started = false;

let h2 = document.querySelector("h2");
let btns = ["red", "blue", "green", "yellow"];

document.addEventListener("click", function() {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelup();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout (function() {
        btn.classList.remove("flash");
    }, 200)
}

function levelup() {
    usersq = [];
    level++;
    h2.innerText = "Level " + level;
    let randIdx = Math.floor(Math.random() * 4);
    let randclr = btns[randIdx];
    let randbtn = document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    btnFlash(randbtn);
}

function check(idx) {
    if (usersq[idx] === gameseq[idx]) {
        if (usersq.length == gameseq.length) {
            usersq = [];
            setTimeout(levelup, 1000);
        }
    } else {    
        h2.innerHTML = `Game Over, your score was<b>${level}</b> <br>Click to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userclr = btn.getAttribute("id");
    usersq.push(userclr);
    btnFlash(btn);
    check(usersq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    level = 0;
    gameseq = [];
    usersq = [];
    started = false;
}



