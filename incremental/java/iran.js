//First section - DOM Elements
let bar = document.getElementById("bar")
let valueDisplay = document.getElementById("value")
let value2Display = document.getElementById("value2")
let bgMusic = document.getElementById("bgMusic")


//Progress bar values
let progress = 0
let speed = 50
let increment = 1


//Bombs
let bombs = 0
let bombGain = 1


//Upgrade costs
let speedUpgradeCost = 100


//Interval reference
let interval = null


//Progress bar function
function updateBar() {
    progress += increment

    if (progress > 100) {
        progress = 100
    }

    if (bar) {
        bar.style.width = progress + "%"
    }

    // When full
    if (progress >= 100) {
        progress = 0
        bombs += bombGain
        
        if (valueDisplay) {
            valueDisplay.textContent = bombs
        }
        if (value2Display) {
            value2Display.textContent = bombs
        }
    }
}


//Send bomb function (placeholder for future feature)
function sendbomb() {
    // TODO: Implement bomb sending mechanic
    console.log("Sending " + bombs + " bombs")
    return bombs

}


//Speed upgrade function (similar to buyUpgrade in goyim.js)
function speedUp() {
    if (speed > 5) {
        speed -= 5
        increment += 2

        // Restart interval with new speed
        if (interval) {
            clearInterval(interval)
        }
        interval = setInterval(updateBar, speed)
    }
}


//Start the progress bar
function startBar() {
    if (!interval) {
        interval = setInterval(updateBar, speed)
    }
}


//Music autoplay on first click
if (bgMusic) {
    document.addEventListener("click", () => {
        bgMusic.play()
    }, { once: true })
}


//Initialize
startBar()