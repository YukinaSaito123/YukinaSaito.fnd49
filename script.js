"use strict";
// 上にある "use strict" の行は削除しないでください！

//正解ペア
const quizOptions = [
    // 1問目
    {
        buttonId: "q1-button1",
        resultId: "result-q1-1",
        answer: false
    },
    {
        buttonId: "q1-button2",
        resultId: "result-q1-2",
        answer: true
    },
    {
        buttonId: "q1-button3",
        resultId: "result-q1-3",
        answer: false
    },

    // 2問目
    {
        buttonId: "q2-button1",
        resultId: "result-q2-1",
        answer: false
    },
    {
        buttonId: "q2-button2",
        resultId: "result-q2-2",
        answer: false
    },
    {
        buttonId: "q2-button3",
        resultId: "result-q2-3",
        answer: true
    },

    // 3問目
    {
        buttonId: "q3-button1",
        resultId: "result-q3-1",
        answer: false
    },
    {
        buttonId: "q3-button2",
        resultId: "result-q3-2",
        answer: false
    },
    {
        buttonId: "q3-button3",
        resultId: "result-q3-3",
        answer: true
    }
];

//スコア表示
function countPoint() {
    let currentScore = Number(document.getElementById("score").textContent); //HTMLにすでに入っている0
    currentScore += 1;
    document.getElementById("score").textContent = currentScore;
}

//正解時のボタン点滅
function blinkPoint() {
    const score = document.getElementById("score");
    score.classList.add("blink");

    setTimeout(() => { //1秒たったら止まる
        score.classList.remove("blink");
    }, 1000);
}

//満点(3)だったときの点数表示
function makePointRed() {
    const score = document.getElementById("score");
    const currentScore = Number(document.getElementById("score").textContent); //HTMLにすでに入っている0
    if (currentScore === 3) {
        score.style.color = "red";
    }
}

//イベント処理（正解判定表示）
for (const option of quizOptions) {
    const button = document.getElementById(option.buttonId);

    button.addEventListener("click", function() {
        if (option.answer === true) {
            document.getElementById(option.resultId).textContent = "🙆‍♀️";
            countPoint();
            blinkPoint();
            makePointRed();
        } else {
            document.getElementById(option.resultId).textContent = "🙅‍♂️";
        }
        button.disabled = true; //連打させない
    });
}

//下まで行ったときの挨拶表示
const displayGreeting = document.getElementById("greeting");

window.addEventListener("scroll", function() {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        displayGreeting.classList.add("show");
    }
})


