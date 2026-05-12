






//First section
let goyims = document.querySelector('.gem-cost')

//upgrade cost section first world upgrades
let upgradeCostDisplay = document.querySelector('.upgrade-cost1')
let upgradeCostDisplay2 = document.querySelector('.upgrade-cost2')
let upgradeCostDisplay3 = document.querySelector('.upgrade-cost3')
let upgradeCostDisplay4 = document.querySelector('.upgrade-cost4')


//upgrade level section
let upgrade1Level = document.querySelector('.upgrade1-level')
let upgrade2level = document.querySelector('.upgrade2-level')
let upgrade3level = document.querySelector('.upgrade3-level')
let upgrade4level = document.querySelector('.upgrade4-level')



//Prestige values
let prestigeValue = 0
let prestigecount = document.querySelector('.president-level')
let prestigereq = 10
let prestigereqdis = document.querySelector('.prestige-requirement')

let prestigeBonus = document.querySelector('.president-bonus')




//Upgrade costs
let upgradeCost1 = 10
let upgradeCost2 = 20
let upgradeCost3 = 100
let upgradeCost4 = 1000 



//infinity Values
let infinityValue = 0
let infinitycount = document.querySelector('.Donation')
//let infinityreq = 10

let infinityreqdis1 = document.querySelector('.infinity-bonusx')
let infinityreqdis2 = document.querySelector('.infinity-bonusI')
let infinitymulti = 0


// click values

let clickGain = 1

//passive values
let passivegoy = 0 

//Click popup
function incrementGem(event) {
    goyims.innerHTML = parseFloat(goyims.innerHTML) + clickGain
    
    // Create floating popup
    let popup = document.createElement('div')
    popup.innerHTML = '+' + clickGain + ' ✡️'
    popup.classList.add('click-popup')
    
    // Random offset around click area (-30 to +30 pixels)
    let offsetX = (Math.random() - 0.5) * 60
    let offsetY = (Math.random() - 0.5) * 60
    
    // Position at click location + random offset
    popup.style.left = (event.clientX + offsetX) + 'px'
    popup.style.top = (event.clientY + offsetY) + 'px'
    
    // Add to page
    document.body.appendChild(popup)
    
    // Remove after animation finishes (1 second)
    setTimeout(function() {
        popup.remove()
    }, 1000)
}


/*Rounder
function addGoyims(amount) {
    let current = parseFloat(goyims.innerHTML) || 0
    goyims.innerHTML = Math.round(current + amount)
}
*/
//Upgrades function start__________________________________________________

function buyUpgrade1() {
    let currentGems = parseFloat(goyims.innerHTML)
    if (currentGems >= upgradeCost1) {
        goyims.innerHTML = currentGems - upgradeCost1
        clickGain += Math.round((1 * (prestigeValue + 1) * (infinitymulti + 1)))
        upgradeCost1 = Math.ceil(upgradeCost1*1.3)
        upgradeCostDisplay.innerHTML = upgradeCost1
        upgrade1Level.innerHTML = parseInt(upgrade1Level.innerHTML) + 1
    }
}




function buyUpgrade2() {
    let currentgoys = parseFloat(goyims.innerHTML)
    if (currentgoys >= upgradeCost2) {
        goyims.innerHTML = currentgoys - upgradeCost2
        passivegoy += Math.round((2 * (prestigeValue + 1) * (infinitymulti + 1)))
        upgradeCost2 = Math.ceil(upgradeCost2 * 1.3)
        upgradeCostDisplay2.innerHTML = upgradeCost2
        upgrade2level.innerHTML = parseInt(upgrade2level.innerHTML) + 1
    }
}

function buyUpgrade3() {
    let currentGoys = parseFloat(goyims.innerHTML)
    if (currentGoys >= upgradeCost3) {
        goyims.innerHTML = currentGoys - upgradeCost3
        passivegoy += Math.round((10 * (prestigeValue + 1) * (infinitymulti + 1)))
        upgradeCost3 = Math.ceil(upgradeCost3 * 1.3)
        upgradeCostDisplay3.innerHTML = upgradeCost3
        upgrade3level.innerHTML = parseInt(upgrade3level.innerHTML) + 1

    }
}

function buyUpgrade4() {
    let currentGoys = parseFloat(goyims.innerHTML)
    if (currentGoys >= upgradeCost4) {
        goyims.innerHTML = currentGoys - upgradeCost4
        passivegoy += Math.round((100 * (prestigeValue + 1) * (infinitymulti + 1)))
        upgradeCost4 = Math.ceil(upgradeCost4 * 1.3)
        upgradeCostDisplay4.innerHTML = upgradeCost4
        upgrade4level.innerHTML = parseInt(upgrade4level.innerHTML) + 1

    }
}


//Prestige requirement ________________________________________________________
function Prestige() {
    let currentgoys = parseFloat(goyims.innerHTML)
    if (currentgoys >= prestigereq) {
        prestigeValue += ((infinitymulti/10)+1)

        //reset progress
        goyims.innerHTML = 0
        passivegoy = 0
        clickGain = 1 

        //update displays
        prestigereq = Math.ceil(prestigereq * 10)
        prestigecount.innerHTML = parseInt(prestigecount.innerHTML) + prestigeValue
        prestigeBonus.innerHTML = prestigeValue
        prestigereqdis.innerHTML = prestigereq
        
        //reset upgrades
        upgrade1Level.innerHTML = 0
        upgrade2level.innerHTML = 0
        upgrade3level.innerHTML = 0
        upgrade4level.innerHTML = 0

        upgradeCost1 = 10
        upgradeCost2 = 20
        upgradeCost3 = 100
        upgradeCost4 = 1000
        
        upgradeCostDisplay.innerHTML = upgradeCost1
        upgradeCostDisplay2.innerHTML = upgradeCost2
        upgradeCostDisplay3.innerHTML = upgradeCost3
        upgradeCostDisplay4.innerHTML = upgradeCost4


    }
}

function infinity() {
    let currentgoys = parseFloat(goyims.innerHTML)
    if (currentgoys >= 1) {
        infinityValue = currentgoys

        // donate to israel bonus
        infinitymulti += Math.round(infinityValue / 10)
        

        //reset progress
        
        goyims.innerHTML = 0
        passivegoy = 0
        clickGain = 1 
        
        //update displays
        infinitycount.innerHTML = parseInt(infinitycount.innerHTML) + currentgoys

        infinityreqdis1.innerHTML = infinitymulti
        infinityreqdis2.innerHTML = infinitymulti/10
        
        
        
        
        //reset upgrades
        upgrade1Level.innerHTML = 0
        upgrade2level.innerHTML = 0
        upgrade3level.innerHTML = 0
        upgrade4level.innerHTML = 0

        upgradeCost1 = 10
        upgradeCost2 = 20
        upgradeCost3 = 100
        upgradeCost4 = 1000
        
        upgradeCostDisplay.innerHTML = upgradeCost1
        upgradeCostDisplay2.innerHTML = upgradeCost2
        upgradeCostDisplay3.innerHTML = upgradeCost3
        upgradeCostDisplay4.innerHTML = upgradeCost4


    }
}





setInterval(function() {
    goyims.innerHTML = parseFloat(goyims.innerHTML) + passivegoy
}, 1000);



function switchMenu(menuId, clickedButton) {
    // Hide all menu sections
    document.querySelectorAll('.menu-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected menu
    document.getElementById(menuId).classList.add('active');
    
    // Remove active class from all buttons
    document.querySelectorAll('.button button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    clickedButton.classList.add('active');
}




// Save/Load System ________________________________________________________

function saveGame() {
    // Collect all game state into an object
    let gameState = {
        // Core values
        goyims: parseFloat(goyims.innerHTML) || 0,
        clickGain: clickGain,
        passivegoy: passivegoy,
        
        // Prestige
        prestigeValue: prestigeValue,
        prestigereq: prestigereq,
        
        // Infinity
        infinityValue: infinityValue,
        infinitymulti: infinitymulti,
        
        // Upgrade costs
        upgradeCost1: upgradeCost1,
        upgradeCost2: upgradeCost2,
        upgradeCost3: upgradeCost3,
        upgradeCost4: upgradeCost4,
        
        // Upgrade levels (from DOM)
        upgradeLevels: {
            upgrade1: parseInt(upgrade1Level.innerHTML) || 0,
            upgrade2: parseInt(upgrade2level.innerHTML) || 0,
            upgrade3: parseInt(upgrade3level.innerHTML) || 0,
            upgrade4: parseInt(upgrade4level.innerHTML) || 0
        },
        
        // Stats for display
        stats: {
            totalDonated: parseInt(infinitycount.innerHTML) || 0,
            presidentLevel: parseInt(prestigecount.innerHTML) || 0
        },
        
        // Timestamp
        savedAt: new Date().toISOString()
    }
    
    // Convert to JSON string - this is what you store in your SQL database
    let saveData = JSON.stringify(gameState)

    //coding this shit
    let encoded = btoa(JSON.stringify(gameState))
    
    // Show in the textarea for copy/paste
    document.getElementById('save-data').value = encoded
    
    // Return the save data for database storage
    return saveData
}

function loadGame(jsonString) {
    try {
        //decoding the save thing  
        let gameState = JSON.parse(atob(jsonString))
        
        // Restore core values
        goyims.innerHTML = gameState.goyims || 0
        clickGain = gameState.clickGain || 1
        passivegoy = gameState.passivegoy || 0
        
        // Restore prestige
        prestigeValue = gameState.prestigeValue || 0
        prestigereq = gameState.prestigereq || 10
        prestigecount.innerHTML = gameState.stats?.presidentLevel || 0
        prestigeBonus.innerHTML = prestigeValue
        prestigereqdis.innerHTML = prestigereq
        
        // Restore infinity
        infinityValue = gameState.infinityValue || 0
        infinitymulti = gameState.infinitymulti || 0
        infinitycount.innerHTML = gameState.stats?.totalDonated || 0
        infinityreqdis1.innerHTML = infinitymulti
        infinityreqdis2.innerHTML = infinitymulti / 10
        
        // Restore upgrade costs
        upgradeCost1 = gameState.upgradeCost1 || 10
        upgradeCost2 = gameState.upgradeCost2 || 20
        upgradeCost3 = gameState.upgradeCost3 || 100
        upgradeCost4 = gameState.upgradeCost4 || 1000
        
        // Restore upgrade levels
        let levels = gameState.upgradeLevels || {}
        upgrade1Level.innerHTML = levels.upgrade1 || 0
        upgrade2level.innerHTML = levels.upgrade2 || 0
        upgrade3level.innerHTML = levels.upgrade3 || 0
        upgrade4level.innerHTML = levels.upgrade4 || 0
        
        // Update all displays
        upgradeCostDisplay.innerHTML = upgradeCost1
        upgradeCostDisplay2.innerHTML = upgradeCost2
        upgradeCostDisplay3.innerHTML = upgradeCost3
        upgradeCostDisplay4.innerHTML = upgradeCost4
        
        alert('Game loaded successfully!')
        return true
        
    } catch (e) {
        alert('Failed to load save: ' + e.message)
        return false
    }
}

// For database storage - call this to get data to send to your backend
function getSaveForDatabase() {
    let saveData = saveGame()
    // TODO: Send saveData to your SQL database via AJAX/fetch
    console.log('Save data ready for database:', saveData)
    return saveData
}

// For database loading - call this with data from your SQL database
function loadFromDatabase(jsonString) {
    return loadGame(jsonString)
}







//BIg ass bomb iran section------------------------------------------------------------------------------------------------


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