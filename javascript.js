let playerVs = 0;
let avatarArray = [];


// header text with button
let wannaPlay = (function () {

    function buttonOnclick () {
        let x = 'wannaPlay.removeContent();chooseMode.createContent();';
        return x;
    }

    function createContent () {
        const container = document.body.querySelector('.container');
        let header = document.createElement('div');
        container.appendChild(header);
        header.classList.add('headerWannaPlay')

        header.textContent = 'Wanna play a game?'

        let playButton = document.createElement('button');
        container.appendChild(playButton);
        playButton.classList.add('wannaPlayButton');
        playButton.setAttribute('onclick', buttonOnclick())
        playButton.textContent = 'Play Game';
    }


    function removeContent() {
        let x = document.body.querySelector('.container');
        let y = document.querySelector('.headerWannaPlay');
        x.removeChild(y);

        let z = document.querySelector('.wannaPlayButton');
        x.removeChild(z);
    }
    return {
        createContent,
        removeContent
    }
})()

wannaPlay.createContent()

// choose player vs player or player vs computer
let chooseMode = (function () {


    function createContent () {
        const container = document.body.querySelector('.container');
        let headerChooseMode = document.createElement('div');
        container.appendChild(headerChooseMode);
        headerChooseMode.classList.add('headerChooseMode');

        headerChooseMode.textContent = 'Choose mode';

        // player vs player button
        let playerVsPlayer = document.createElement('button');
        container.appendChild(playerVsPlayer);
        playerVsPlayer.classList.add('playerVsPlayerBtn');

        playerVsPlayer.addEventListener('click', () => {
            chooseMode.removeContent(); 
            choosePlayer.selectPlayer();
            playerVs = 1;
        })
        //playerVsPlayer.setAttribute('onclick', buttonVsPlayer());
        playerVsPlayer.textContent = 'Player vs player';
        
        // player vs computer button
        let playerVsComputer = document.createElement('button');
        container.appendChild(playerVsComputer);
        playerVsComputer.classList.add('playerVsComputerBtn');
        playerVsComputer.addEventListener('click', () => {
            chooseMode.removeContent(); 
            choosePlayer.selectPlayer();
            playerVs = 3;
        })
        //playerVsComputer.setAttribute('onclick', buttonVsComputer());
        playerVsComputer.textContent = 'Player vs computer';
    }

    function removeContent() {
        let x = document.body.querySelector('.container');
        let y = document.querySelector('.headerChooseMode');
        x.removeChild(y);

        let z = document.querySelector('.playerVsPlayerBtn');
        x.removeChild(z);

        let a = document.querySelector('.playerVsComputerBtn');
        x.removeChild(a);
    }

    return {
        createContent,
        removeContent
    }
})()

//chooseMode.createContent()

// choosePlayer
let choosePlayer = (function () {

    function selectPlayer() {
        
        const playGameContainer = document.body.querySelector('.container');
        const playGameHeader = document.createElement('div');
        playGameContainer.appendChild(playGameHeader);
        playGameHeader.classList.add('playGameHeader');
        playGameHeader.setAttribute('id', 'playGameHeader');
    
        const playGame = document.createElement('div');
        playGameContainer.appendChild(playGame);
        playGame.classList.add('startScreen');
        playGameHeader.textContent = 'Select your avatar!';
        
        //dracula
        let playerDracula = document.createElement('button');
        playGame.appendChild(playerDracula);
        playerDracula.classList.add('dracula');
        playerDracula.setAttribute('id', 'dracula');
        playerDracula.addEventListener('click', () => {
            avatarSelect.dracula();
            let x = 'dracula';
            avatarArray.push(x);
        });
        //scarecrow
        let playerScarecrow = document.createElement('button');
        playGame.appendChild(playerScarecrow);
        playerScarecrow.classList.add('scarecrow')
        playerScarecrow.setAttribute('id', 'scarecrow');
        playerScarecrow.addEventListener('click', () => {
            avatarSelect.scarecrow();
            let x = 'scarecrow';
            avatarArray.push(x);
        });
        //reaper
        let playerReaper = document.createElement('button');
        playGame.appendChild(playerReaper);
        playerReaper.classList.add('reaper')
        playerReaper.setAttribute('id', 'reaper');
        playerReaper.addEventListener('click', () => {
            avatarSelect.reaper();
            let x = 'reaper';
            avatarArray.push(x);
        });
        //frankenstein
        let playerFrankenstein = document.createElement('button');
        playGame.appendChild(playerFrankenstein);
        playerFrankenstein.classList.add('frankenstein')
        playerFrankenstein.setAttribute('id', 'frankenstein');
        playerFrankenstein.addEventListener('click', () => {
            avatarSelect.frankenstein();
            let x = 'frankenstein';
            avatarArray.push(x);
        });
    }

    return{
        selectPlayer
    }
})();

//choosePlayer.selectPlayer();

const removeAvatars = (avatar) => {

    if (avatar === 'dracula') {
        setTimeout(() => {
        let z = document.body.querySelector('.container');
        let x = document.body.querySelector('.playGameHeader');
        let a = document.body.querySelector('.startScreen');
        let e = document.querySelector('.dracula');
        a.removeChild(e);
        z.removeChild(x);
        z.removeChild(a);
    }, "3200");
    } else if (avatar === 'scarecrow') {
        setTimeout(() => {
            let z = document.body.querySelector('.container');
            let x = document.body.querySelector('.playGameHeader');
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.scarecrow');
            a.removeChild(e);
            z.removeChild(x);
            z.removeChild(a);
        }, "3200");
    } else if (avatar === 'reaper') {
        setTimeout(() => {
            let z = document.body.querySelector('.container');
            let x = document.body.querySelector('.playGameHeader');
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.reaper');
            a.removeChild(e);
            z.removeChild(x);
            z.removeChild(a);
        }, "3200");
    } else if (avatar === 'frankenstein') {
        setTimeout(() => {
            let z = document.body.querySelector('.container');
            let x = document.body.querySelector('.playGameHeader');
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.frankenstein');
            a.removeChild(e);
            z.removeChild(x);
            z.removeChild(a);
        }, "3200");
    }

}

// change header text, add animation, remove characters!
let avatarSelect = (function () {

    function dracula () {
        let x = document.getElementById('dracula');
        let y = document.getElementById('playGameHeader');
        y.textContent = 'You\'ve chosen Dracula!'

        setTimeout(() => {
            let a = document.body.querySelector('.startScreen');
            if (avatarArray[0] === 'scarecrow') {
                let c = document.querySelector('.reaper');
                a.removeChild(c);
                let d = document.querySelector('.frankenstein');
                a.removeChild(d);
            } else if (avatarArray[0] === 'reaper') {
                let b = document.querySelector('.scarecrow');
                a.removeChild(b);
                let d = document.querySelector('.frankenstein');
                a.removeChild(d);
            } else if (avatarArray[0] === 'frankenstein') {
                let b = document.querySelector('.reaper');
                a.removeChild(b);
                let c = document.querySelector('.scarecrow');
                a.removeChild(c);
            } else {
            let b = document.querySelector('.scarecrow');
            a.removeChild(b);
            let c = document.querySelector('.reaper');
            a.removeChild(c);
            let d = document.querySelector('.frankenstein');
            a.removeChild(d);
            }
        }, "10");

        setTimeout(() => {
            document.getElementById('dracula').style.animation = "chosen 3s, spin 3s";
        }, "500");

        let drac = removeAvatars('dracula');

        setTimeout(() => {
            computerAvatar('dracula');
            secondPlayer();
            if (avatarArray[1] !== undefined && playerVs === 3) {
                setTimeout(() => {
                    if (avatarArray[1] !== undefined) {
                    letsGame();}
                }, "3600");
            }if (avatarArray[1] !== undefined && playerVs === 1) {
                letsGame();
            }
        }, "3500");
    }
    function scarecrow () {
        let x = document.getElementById('scarecrow');
        let y = document.getElementById('playGameHeader');
        y.textContent = 'You\'ve chosen Scarecrow!'

        setTimeout(() => {
            let a = document.body.querySelector('.startScreen');
            if (avatarArray[0] === 'dracula') {
                let c = document.querySelector('.reaper');
                a.removeChild(c);
                let d = document.querySelector('.frankenstein');
                a.removeChild(d);
            } else if (avatarArray[0] === 'reaper') {
                let b = document.querySelector('.dracula');
                a.removeChild(b);
                let d = document.querySelector('.frankenstein');
                a.removeChild(d);
            } else if (avatarArray[0] === 'frankenstein') {
                let b = document.querySelector('.dracula');
                a.removeChild(b);
                let c = document.querySelector('.reaper');
                a.removeChild(c);
            } else {
            let b = document.querySelector('.dracula');
            a.removeChild(b);
            let c = document.querySelector('.reaper');
            a.removeChild(c);
            let d = document.querySelector('.frankenstein');
            a.removeChild(d);}
        }, "10");

        setTimeout(() => {
            document.getElementById('scarecrow').style.animation = "chosen 3s, spin 3s";
        }, "500");

        let scare = removeAvatars('scarecrow');

        setTimeout(() => {
            computerAvatar('scarecrow');
            secondPlayer();
            if (avatarArray[1] !== undefined && playerVs === 3) {
                setTimeout(() => {
                    if (avatarArray[1] !== undefined) {
                    letsGame();}
                }, "3600");
            }if (avatarArray[1] !== undefined && playerVs === 1) {
                letsGame();
            }
        }, "3500");
    }
    function reaper () {
        let x = document.getElementById('reaper');
        let y = document.getElementById('playGameHeader');
        y.textContent = 'You\'ve chosen Reaper!'

        setTimeout(() => {
            let a = document.body.querySelector('.startScreen');
            if (avatarArray[0] === 'dracula') {
                let c = document.querySelector('.scarecrow');
                a.removeChild(c);
                let d = document.querySelector('.frankenstein');
                a.removeChild(d);
            } else if (avatarArray[0] === 'scarecrow') {
                let b = document.querySelector('.dracula');
                a.removeChild(b);
                let d = document.querySelector('.frankenstein');
                a.removeChild(d);
            } else if (avatarArray[0] === 'frankenstein') {
                let b = document.querySelector('.dracula');
                a.removeChild(b);
                let c = document.querySelector('.scarecrow');
                a.removeChild(c);
            } else {
            let b = document.querySelector('.dracula');
            a.removeChild(b);
            let c = document.querySelector('.scarecrow');
            a.removeChild(c);
            let d = document.querySelector('.frankenstein');
            a.removeChild(d);
            }
        }, "10");

        setTimeout(() => {
            document.getElementById('reaper').style.animation = "chosen2 3s, spin 3s";
        }, "500");

        let reap = removeAvatars('reaper');

        setTimeout(() => {
            computerAvatar('reaper');
            secondPlayer();
            if (avatarArray[1] !== undefined && playerVs === 3) {
                setTimeout(() => {
                    if (avatarArray[1] !== undefined) {
                    letsGame();}
                }, "3600");
            }if (avatarArray[1] !== undefined && playerVs === 1) {
                letsGame();
            }
        }, "3500");
    }
    function frankenstein () {
        let x = document.getElementById('frankenstein');
        let y = document.getElementById('playGameHeader');
        y.textContent = 'You\'ve chosen Frankenstein!'

        setTimeout(() => {
            let a = document.body.querySelector('.startScreen');
            if (avatarArray[0] === 'dracula') {
                let c = document.querySelector('.scarecrow');
                a.removeChild(c);
                let d = document.querySelector('.reaper');
                a.removeChild(d);
            } else if (avatarArray[0] === 'scarecrow') {
                let b = document.querySelector('.dracula');
                a.removeChild(b);
                let d = document.querySelector('.reaper');
                a.removeChild(d);
            } else if (avatarArray[0] === 'reaper') {
                let b = document.querySelector('.dracula');
                a.removeChild(b);
                let c = document.querySelector('.scarecrow');
                a.removeChild(c);
            } else {
            let b = document.querySelector('.dracula');
            a.removeChild(b);
            let c = document.querySelector('.scarecrow');
            a.removeChild(c);
            let d = document.querySelector('.reaper');
            a.removeChild(d);
            }

        }, "10");

        setTimeout(() => {
            document.getElementById('frankenstein').style.animation = "chosen2 3s, spin 3s";
        }, "500");

        let frank = removeAvatars('frankenstein');

        
        setTimeout(() => {
            computerAvatar('frankenstein');
            secondPlayer();
            if (avatarArray[1] !== undefined && playerVs === 3) {
                setTimeout(() => {
                    if (avatarArray[1] !== undefined) {
                    letsGame();}
                }, "3600");
            }if (avatarArray[1] !== undefined && playerVs === 1) {
                letsGame();
            }
        }, "3500");
    }
    return {
        dracula,
        scarecrow,
        reaper,
        frankenstein
    }
})();

const secondPlayer = () => {
    if (playerVs === 1 && avatarArray[1] === undefined) {
        if (avatarArray[0] === 'dracula') {
            choosePlayer.selectPlayer()
            let playGameHeader = document.body.querySelector('.playGameHeader');
            playGameHeader.textContent = 'Second player select your avatar!';
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.dracula');
            a.removeChild(e);
        } else if (avatarArray[0] === 'scarecrow') {
            choosePlayer.selectPlayer()
            let playGameHeader = document.body.querySelector('.playGameHeader');
            playGameHeader.textContent = 'Second player select your avatar!';
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.scarecrow');
            a.removeChild(e);
        } else if (avatarArray[0] === 'reaper') {
            choosePlayer.selectPlayer()
            let playGameHeader = document.body.querySelector('.playGameHeader');
            playGameHeader.textContent = 'Second player select your avatar!';
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.reaper');
            a.removeChild(e);
        } else if (avatarArray[0] === 'frankenstein') {
            choosePlayer.selectPlayer()
            let playGameHeader = document.body.querySelector('.playGameHeader');
            playGameHeader.textContent = 'Second player select your avatar!';
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.frankenstein');
            a.removeChild(e);
        }

    }
}

// choose random computer avatar
const computerAvatar = (avatar) => {

    if (playerVs === 3) {
    function container (avatar) {
        let container = document.body.querySelector('.container');
        let playGameHeader = document.createElement('div');
        container.appendChild(playGameHeader);
        playGameHeader.classList.add('playGameHeader');

        const avatarContainer = document.createElement('div');
        container.appendChild(avatarContainer);
        avatarContainer.classList.add('startScreen');
        
    if (avatar === 'dracula') {
        let playerDracula = document.createElement('button');
        avatarContainer.appendChild(playerDracula);
        playerDracula.classList.add('dracula')
        playerDracula.setAttribute('id', 'dracula');
        playGameHeader.textContent = 'Computer has chosen dracula!';
        setTimeout(() => {
            document.getElementById('dracula').style.animation = "chosen 3s, spin 3s";
        }, "500");
        let x = 'dracula';
        avatarArray.push(x);
        let drac = removeAvatars('dracula');
    } else if (avatar === 'scarecrow') {
        let playerScarecrow = document.createElement('button');
        avatarContainer.appendChild(playerScarecrow);
        playerScarecrow.classList.add('scarecrow')
        playerScarecrow.setAttribute('id', 'scarecrow');
        playGameHeader.textContent = 'Computer has chosen scarecrow!';
        setTimeout(() => {
            document.getElementById('scarecrow').style.animation = "chosen 3s, spin 3s";
        }, "500");
        let x = 'scarecrow';
        avatarArray.push(x);
        let scare = removeAvatars('scarecrow');
    } else if (avatar === 'reaper') {
        let playerReaper = document.createElement('button');
        avatarContainer.appendChild(playerReaper);
        playerReaper.classList.add('reaper')
        playerReaper.setAttribute('id', 'reaper');
        playGameHeader.textContent = 'Computer has chosen reaper!';
        setTimeout(() => {
            document.getElementById('reaper').style.animation = "chosen2 3s, spin 3s";
        }, "500");
        let x = 'reaper';
        avatarArray.push(x);
        let reap = removeAvatars('reaper');
    } else if (avatar === 'frankenstein') {
        let playerFrankenstein = document.createElement('button');
        avatarContainer.appendChild(playerFrankenstein);
        playerFrankenstein.classList.add('frankenstein')
        playerFrankenstein.setAttribute('id', 'frankenstein');
        playGameHeader.textContent = 'Computer has chosen frankenstein!';
        setTimeout(() => {
            document.getElementById('frankenstein').style.animation = "chosen2 3s, spin 3s";
        }, "500");
        let x = 'frankenstein';
        avatarArray.push(x);
        let frank = removeAvatars('frankenstein');
    } 
    };

    if (avatar === 'dracula') {
        let computerAvatars = ['scarecrow', 'reaper', 'frankenstein'];
        const randomAvatar = Math.floor(Math.random() * computerAvatars.length);
        if (randomAvatar === 0) {
            container('scarecrow');
        } else if (randomAvatar === 1) {
            container('reaper');
        } else if (randomAvatar === 2) {
            container('frankenstein');
        }
    } else if (avatar === 'scarecrow') {
        let computerAvatars = ['dracula', 'reaper', 'frankenstein'];
        const randomAvatar = Math.floor(Math.random() * computerAvatars.length);
        if (randomAvatar === 0) {
            container('dracula');
        } else if (randomAvatar === 1) {
            container('reaper');
        } else if (randomAvatar === 2) {
            container('frankenstein');
        }
    } else if (avatar === 'reaper') {
        let computerAvatars = ['dracula', 'scarecrow', 'frankenstein'];
        const randomAvatar = Math.floor(Math.random() * computerAvatars.length);
        if (randomAvatar === 0) {
            container('dracula');
        } else if (randomAvatar === 1) {
            container('scarecrow');
        } else if (randomAvatar === 2) {
            container('frankenstein');
        }
    } else if (avatar === 'frankenstein') {
        let computerAvatars = ['dracula', 'scarecrow', 'reaper'];
        const randomAvatar = Math.floor(Math.random() * computerAvatars.length);
        if (randomAvatar === 0) {
            container('dracula');
        } else if (randomAvatar === 1) {
            container('scarecrow');
        } else if (randomAvatar === 2) {
            container('reaper');
        }
    } 
}
};

// Let's game scene
const letsGame = () => {

    const container = document.body.querySelector('.container');
    const letsGameHeader = document.createElement('div');
    container.appendChild(letsGameHeader);
    letsGameHeader.classList.add('playGameHeader');
    letsGameHeader.setAttribute('id', 'playGameHeader');

    const letsGameDiv = document.createElement('div');
    container.appendChild(letsGameDiv);
    letsGameDiv.classList.add('letsGameDiv');
    letsGameHeader.textContent = 'let\'s game!';

    let firstAvatar = document.createElement('button');
    letsGameDiv.appendChild(firstAvatar);
    firstAvatar.setAttribute('id', 'firstAvatar');

    const versus = document.createElement('p');
    letsGameDiv.appendChild(versus);
    versus.classList.add('versus')
    versus.textContent = 'versus';

    let secondAvatar = document.createElement('button');
    letsGameDiv.appendChild(secondAvatar);
    secondAvatar.setAttribute('id', 'secondAvatar');
    
    

    if (avatarArray[0] === 'dracula') {
            firstAvatar.classList.add('avatarDracula');
        } else if (avatarArray[0] === 'scarecrow') {
            firstAvatar.classList.add('avatarScarecrow');
        } else if (avatarArray[0] === 'reaper') {
            firstAvatar.classList.add('avatarReaper');
        } else if (avatarArray[0] === 'frankenstein') {
            firstAvatar.classList.add('avatarFrankenstein');
    }
    


    if (avatarArray[1] === 'dracula') {
            secondAvatar.classList.add('avatarDracula');
        } else if (avatarArray[1] === 'scarecrow') {
            secondAvatar.classList.add('avatarScarecrow');
        } else if (avatarArray[1] === 'reaper') {
            secondAvatar.classList.add('avatarReaper');
        } else if (avatarArray[1] === 'frankenstein') {
            secondAvatar.classList.add('avatarFrankenstein');   
    }

    firstAvatar.style.animation = "left 1.5s infinite";
    secondAvatar.style.animation = "right 1.5s infinite";

    setTimeout(() => {
        removeLetsGame();
        gameboard.grid()
        clickPlayerVsPlayer();
    }, "3000");

};

//letsGame();

const removeLetsGame = () => {
    let a = document.body.querySelector('.container');
    let b = document.body.querySelector('.playGameHeader');
    let c = document.body.querySelector('.letsGameDiv');
    //let d = document.body.querySelector('.firstAvatar');
    //let e = document.body.querySelector('.secondAvatar');

    a.removeChild(c);
    a.removeChild(b);
}

//computerAvatar();

// make tic-tac-toe grid
let gameboard = (function() {

    let counter = 1;

    // make unique id for div
    function uniqueId() {
        let uniqId = 'unique' + counter;
        return uniqId;
    }

    // create div
    function grid() {

        //reset button
        const header = document.body.querySelector('.header');
        const resetBtn = document.createElement('div');
        header.appendChild(resetBtn);
        resetBtn.classList.add('resetBtn');
        resetBtn.textContent = 'Reset';
        resetBtn.addEventListener('click', () => {
            resetGrid();
        })

        //game container
        const container = document.body.querySelector('.container');
        const gameContainer = document.createElement('div');
        container.appendChild(gameContainer);
        gameContainer.classList.add('gameContainer');

        //player one
        const playerOneDiv = document.createElement ('div');
        gameContainer.appendChild(playerOneDiv);
        playerOneDiv.classList.add('playerOneDiv')
        const playerOneAvatar = document.createElement ('div');
        playerOneAvatar.setAttribute('id', 'playerOneAvatar');
        playerOneDiv.appendChild(playerOneAvatar);

        //grid container
        const gridContainer = document.createElement('div');
        gameContainer.appendChild(gridContainer);
        gridContainer.setAttribute('id', 'gridContainer');
        gridContainer.classList.add('gridContainer')

        //player two
        const playerTwoDiv = document.createElement ('div');
        gameContainer.appendChild(playerTwoDiv);
        playerTwoDiv.classList.add('playerTwoDiv')
        const playerTwoAvatar = document.createElement ('div');
        playerTwoAvatar.setAttribute('id', 'playerTwoAvatar');
        playerTwoDiv.appendChild(playerTwoAvatar);

        //check chosen avatar and apply to player one
        if (avatarArray[0] === 'dracula') {
            playerOneAvatar.classList.add('avatarDracula');
        } else if (avatarArray[0] === 'scarecrow') {
            playerOneAvatar.classList.add('avatarScarecrow');
        } else if (avatarArray[0] === 'reaper') {
            playerOneAvatar.classList.add('avatarReaper');
        } else if (avatarArray[0] === 'frankenstein') {
            playerOneAvatar.classList.add('avatarFrankenstein');
    }
    
        //check chosen avatar and apply to player two
    if (avatarArray[1] === 'dracula') {
            playerTwoAvatar.classList.add('avatarDracula');
        } else if (avatarArray[1] === 'scarecrow') {
            playerTwoAvatar.classList.add('avatarScarecrow');
        } else if (avatarArray[1] === 'reaper') {
            playerTwoAvatar.classList.add('avatarReaper');
        } else if (avatarArray[1] === 'frankenstein') {
            playerTwoAvatar.classList.add('avatarFrankenstein');   
    }

        // create 9 div's for grid
        for (let i = 0; i < 9; i++) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            div.setAttribute('id', uniqueId());
            gridContainer.appendChild(div);
            div.classList.add('divStyle')
            counter += 1;
        }
    }

    return {
        grid
    };
})();

//gameboard.grid()



let player = (function() {

    return {

    }
})();

let data = [
    ['unique1', 'unique2', 'unique3'],
    ['unique4', 'unique5', 'unique6'],
    ['unique7', 'unique8', 'unique9']
];

//check game on three on a row
const checkGame = (str) => {

    if (data[0][0] === str && data[0][1] === str && data[0][2] === str){
        if (str === 'o') {
            alert('You have lost');
        } else {
            alert('you have won');
        }
    } else if (data[1][0] === str && data[1][1] === str && data[1][2] === str) {
        if (str === 'o') {
            alert('You have lost');
        } else {
            alert('you have won');
        }
    } else if (data[2][0] === str && data[2][1] === str && data[2][2] === str) {
        if (str === 'o') {
            alert('You have lost');
        } else {
            alert('you have won');
        }
    } else if (data[0][0] === str && data[1][0] === str && data[2][0] === str) {
        if (str === 'o') {
            alert('You have lost');
        } else {
            alert('you have won');
        }
    } else if (data[0][1] === str && data[1][1] === str && data[2][1] === str) {
        if (str === 'o') {
            alert('You have lost');
        } else {
            alert('you have won');
        }
    } else if (data[0][2] === str && data[1][2] === str && data[2][2] === str) {
        if (str === 'o') {
            alert('You have lost');
        } else {
            alert('you have won');
        }
    } else if (data[0][0] === str && data[1][1] === str && data[2][2] === str) {
        if (str === 'o') {
            alert('You have lost');
        } else {
            alert('you have won');
        }
    } else if (data[0][2] === str && data[1][1] === str && data[2][0] === str) {
        if (str === 'o') {
            alert('You have lost');
        } else {
            alert('you have won');
        }
    }
} 


// click on button event
const clickPlayerVsPlayer = () => {

    let myArray = ['unique1','unique2','unique3','unique4','unique5','unique6','unique7','unique8','unique9']
    let gameArray = [];
    let playerTurn = 0;
    

    //computer automatic play
function computerPlay() {
if (playerVs === 3 && playerTurn === 1) {
    setTimeout(() => {
    let randomIndex = Math.floor(Math.random() * myArray.length);
    let randomItem = myArray.splice(randomIndex, 1)[0];
    playerTurn = 0;

    if (randomItem === 'unique1') {
        data[0][0]= 'o';
        unique1.textContent = 'O';
    } else if (randomItem === 'unique2') {
        data[0][1] = 'o';
        unique2.textContent = 'O';
    } else if (randomItem === 'unique3') {
        data[0][2] = 'o';
        unique3.textContent = 'O';
    } else if (randomItem === 'unique4') {
        data[1][0] = 'o';
        unique4.textContent = 'O';
    } else if (randomItem === 'unique5') {
        data[1][1] = 'o';
        unique5.textContent = 'O';
    } else if (randomItem === 'unique6') {
        data[1][2] = 'o';
        unique6.textContent = 'O';
    } else if (randomItem === 'unique7') {
        data[2][0] = 'o';
        unique7.textContent = 'O';
    } else if (randomItem === 'unique8') {
        data[2][1] = 'o';
        unique8.textContent = 'O';
    } else if (randomItem === 'unique9') {
        data[2][2] = 'o';
        unique9.textContent = 'O';
    }
    setTimeout(() => {
        checkGame('o');
    }, "50");
}, "500");
}}
    //checks string on position array and removes string
    function indexArray (str) {
        const index = myArray.indexOf(str);
        if (index > -1) {
            myArray.splice(index, 1);
        }
    }

    unique1.addEventListener('click', () => {
        if (gameArray.indexOf('unique1') === -1) {
            if (playerTurn === 0) {
                gameArray.push('unique1');
                indexArray('unique1');
                unique1.textContent = 'X';
                playerTurn = 1;
                data[0][0]= 'x';
                checkGame('x');
                computerPlay();
            } else if (playerTurn === 1 && playerVs === 1) {
                gameArray.push('unique1');
                unique1.textContent = 'O';
                playerTurn = 0;
                data[0][0]= 'o';
                checkGame('o');
            }}
    })
    unique2.addEventListener('click', () => {
        if (gameArray.indexOf('unique2') === -1) {
            if (playerTurn === 0) {
                gameArray.push('unique2');
                indexArray('unique2');
                unique2.textContent = 'X';
                playerTurn = 1;
                data[0][1]= 'x';
                checkGame('x');
                computerPlay();
            } else if (playerTurn === 1 && playerVs === 1) {
                gameArray.push('unique2');
                unique2.textContent = 'O';
                playerTurn = 0;
                data[0][1]= 'o';
                checkGame('o');
            }}
    })
    unique3.addEventListener('click', () => {
        if (gameArray.indexOf('unique3') === -1) {
            if (playerTurn === 0) {
                gameArray.push('unique3');
                indexArray('unique3');
                unique3.textContent = 'X';
                playerTurn = 1;
                data[0][2]= 'x';
                checkGame('x');
                computerPlay();
            } else if (playerTurn === 1 && playerVs === 1) {
                gameArray.push('unique3');
                unique3.textContent = 'O';
                playerTurn = 0;
                data[0][2]= 'o';
                checkGame('o');
            }}
    })
    unique4.addEventListener('click', () => {
        if (gameArray.indexOf('unique4') === -1) {
            if (playerTurn === 0) {
                gameArray.push('unique4');
                indexArray('unique4');
                unique4.textContent = 'X';
                playerTurn = 1;
                data[1][0]= 'x';
                checkGame('x');
                computerPlay();
            } else if (playerTurn === 1 && playerVs === 1) {
                gameArray.push('unique4');
                unique4.textContent = 'O';
                playerTurn = 0;
                data[1][0]= 'o';
                checkGame('o');
            }}
    })
    unique5.addEventListener('click', () => {
        if (gameArray.indexOf('unique5') === -1) {
            if (playerTurn === 0) {
                gameArray.push('unique5');
                indexArray('unique5');
                unique5.textContent = 'X';
                playerTurn = 1;
                data[1][1]= 'x';
                checkGame('x');
                computerPlay();
            } else if (playerTurn === 1 && playerVs === 1) {
                gameArray.push('unique5');
                unique5.textContent = 'O';
                playerTurn = 0;
                data[1][1]= 'o';
                checkGame('o');
            }}
    })
    unique6.addEventListener('click', () => {
        if (gameArray.indexOf('unique6') === -1) {
            if (playerTurn === 0) {
                gameArray.push('unique6');
                indexArray('unique6');
                unique6.textContent = 'X';
                playerTurn = 1;
                data[1][2]= 'x';
                checkGame('x');
                computerPlay();
            } else if (playerTurn === 1 && playerVs === 1) {
                gameArray.push('unique6');
                unique6.textContent = 'O';
                playerTurn = 0;
                data[1][2]= 'o';
                checkGame('o');
            }}
    })
    unique7.addEventListener('click', () => {
        if (gameArray.indexOf('unique7') === -1) {
            if (playerTurn === 0) {
                gameArray.push('unique7');
                indexArray('unique7');
                unique7.textContent = 'X';
                playerTurn = 1;
                data[2][0]= 'x';
                checkGame('x');
                computerPlay();
            } else if (playerTurn === 1 && playerVs === 1) {
                gameArray.push('unique7');
                unique7.textContent = 'O';
                playerTurn = 0;
                data[2][0]= 'o';
                checkGame('o');
            }}
    })
    unique8.addEventListener('click', () => {
        if (gameArray.indexOf('unique8') === -1) {
            gameArray.push('unique8');
            if (playerTurn === 0) {
                gameArray.push('unique8');
                indexArray('unique8');
                unique8.textContent = 'X';
                playerTurn = 1;
                data[2][1]= 'x';
                checkGame('x');
                computerPlay();
            } else if (playerTurn === 1 && playerVs === 1) {
                gameArray.push('unique8');
                unique8.textContent = 'O';
                playerTurn = 0;
                data[2][1]= 'o';
                checkGame('o');
            }}
    })
    unique9.addEventListener('click', () => {
        if (gameArray.indexOf('unique9') === -1) {
            if (playerTurn === 0) {
                gameArray.push('unique9');
                indexArray('unique9');
                unique9.textContent = 'X';
                playerTurn = 1;
                data[2][2]= 'x';
                checkGame('x');
                computerPlay();
            } else if (playerTurn === 1 && playerVs === 1) {
                gameArray.push('unique9');
                unique9.textContent = 'O';
                playerTurn = 0;
                data[2][2]= 'o';
                checkGame('o');
            }}
    })


};

const resetGrid = () => {

    unique1.textContent = '';
    unique2.textContent = '';
    unique3.textContent = '';
    unique4.textContent = '';
    unique5.textContent = '';
    unique6.textContent = '';
    unique7.textContent = '';
    unique8.textContent = '';
    unique9.textContent = '';

    myArray = ['unique1','unique2','unique3','unique4','unique5','unique6','unique7','unique8','unique9']
    gameArray = [];

    data = [
        ['unique1', 'unique2', 'unique3'],
        ['unique4', 'unique5', 'unique6'],
        ['unique7', 'unique8', 'unique9']
    ];
    playerTurn = 0;
    clickPlayerVsPlayer();
}