// 💻 Work: 25 mins
// ☕️ Short break: 5 mins
// 🌯 Long break: 15 mins

let timerDisplay = document.getElementById("time-display")
const workBtn = document.getElementById("work-btn")
const shortBreakBtn = document.getElementById("short-break-btn")
const longBreakBtn = document.getElementById("long-break-btn")

let numOfMins = 0
let typeOfCountdown = ""

workBtn.addEventListener("click", () => { startTimer(25)} )
shortBreakBtn.addEventListener("click", () => { startTimer(5)} )
longBreakBtn.addEventListener("click", () => { startTimer(15)} )

function startTimer(time) {
    let allowedTime = time * 60

    showTime(allowedTime)
    setInterval(function () {
        allowedTime--
        showTime(allowedTime)
    }, 1000)
}

function showTime(allowedTime) {
    timerDisplay.innerText = `${Math.floor(allowedTime / 60)} : ${allowedTime % 60}`

}

// function workShift() {

//     let minute = 24
//     let sec = 59

//     setInterval(function () {
//         timerDisplay.innerHTML = minute + " : " + sec
//         sec--
//         if ( sec == 0) {
//             minute--
//             sec = 59
//             if ( minute == 0) {
//                 minute = 25
//             }
//         }
//     } ,1000)
// }

// function shortBreak() {
    
//     let minute = 4
//     let sec = 59 
    
//     setInterval(function () {
//         timerDisplay.innerHTML = minute + " : " + sec
//         sec--
//         if (sec == 0) {
//             minute--
//             sec = 59
//             if (minute == 0) {
//                 minute = 5
//             }
//         }
//     },1000)
// }

// function longBreak() {

//     let minute = 14
//     let sec = 59

//     setInterval(function () {
//         timerDisplay.innerHTML = minute + " : " + sec
//         sec--
//         if (sec == 0) {
//             minute--
//             sec = 59
//             if ( minute == 0) {
//                 minute = 14
//             }
//         }

//     },1000)
// }