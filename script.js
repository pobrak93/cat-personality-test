function calculateResult() {
    let answers = document.querySelectorAll('input[type="radio"]:checked');

    if (answers.length < 7) {
        alert("กรุณาตอบทุกข้อก่อนดูผลลัพธ์!");
        return;
    }

    let score = { a: 0, b: 0, c: 0 };

    answers.forEach((answer) => {
        score[answer.value]++;
    });

    let resultText = "";
    let resultImage = "";

    if (score.a >= 5) {
        resultText = "คุณเป็นแมวขี้อาย 🏡";
        resultImage = "shy-cat.png";
    } else if (score.b >= 5) {
        resultText = "คุณเป็นแมวขี้เล่น 😸";
        resultImage = "playful-cat.png";
    } else {
        resultText = "คุณเป็นแมวสุดเท่ 😼";
        resultImage = "cool-cat.png";
    }

    localStorage.setItem("resultText", resultText);
    localStorage.setItem("resultImage", resultImage);
    window.location.href = "result.html";
}

// โหลดผลลัพธ์จาก LocalStorage
window.onload = function() {
    if (window.location.pathname.includes("result.html")) {
        document.getElementById("result-text").textContent = localStorage.getItem("resultText");
        document.getElementById("result-image").src = localStorage.getItem("resultImage");
    }
};

document.addEventListener("DOMContentLoaded", showQuestion);
