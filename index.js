let userInput = document.querySelector("#user-input");
let youtubeSrchBtn = document.querySelector("#youtube-srch-btn");
let googleSrchBtn = document.querySelector("#google-srch-btn");
let searchHistoryUl = document.querySelector("#search-history-ul");
let clearBtn = document.querySelector("#clear-btn");

youtubeSrchBtn.addEventListener("click", function() {
    if (userInput && userInput.value) {
        window.open(`https://www.youtube.com/results?search_query=${userInput.value}`, "_blank");
    } else {
        alert("Please type something...");
    }
})

googleSrchBtn.addEventListener("click", function() {
    if (userInput && userInput.value) {
        window.open(`https://www.google.com/search?q=${userInput.value}`, "_blank");
    } else {
        alert("Please type something...");
    }
})

function addStorageItem() {
    let timeStamp = JSON.stringify(Date.now());

    if (userInput && userInput.value) {
        localStorage.setItem(`${userInput.value}${timeStamp}`, `<li>${userInput.value}</li>`);
        setTimeout(function () { userInput.value = ""; }, 1);
    } else {
        alert("Please type something...");
    }
}

function clearHistory() {
    localStorage.clear();
    searchHistoryUl.innerHTML = "";
}

for (let i = 0; i < localStorage.length; i++) {
    searchHistoryUl.innerHTML += localStorage.getItem(localStorage.key(i));
}