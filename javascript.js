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
            let d = document.querySelector('.scarecrow');
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
            if (avatarArray[1] !== undefined) {
            letsGame();}
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
            if (avatarArray[1] !== undefined) {
            letsGame();}
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
            if (avatarArray[1] !== undefined) {
            letsGame();}
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
            if (avatarArray[1] !== undefined) {
            letsGame();}
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
    }};

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
    setTimeout(() => {
        letsGame();
    }, "3600");
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

};

//letsGame();

//computerAvatar();

// make tic-tac-toe grid
let gameboard = (function() {

    let counter = 1;

    // make unique id for div
    function uniqueId() {
        let uniqId = 'unique' + counter;
        return uniqId;
    }

    // make unique function clickevent
    function uniqueClickEvent() {
        let uniqCE = 'clickEvent.' + ('clickEvent' + counter + '()');
        return uniqCE
    }

    // create div
    function grid() {

        const gridContainer = createElement('div');
        document.body.appendChild(gridContainer);
        gridContainer.setAttribute('id', 'gridContainer');
        gridContainer.classList.add('gridContainer')

        for (let i = 0; i < 9; i++) {
            let div = document.createElement('button');
            document.body.appendChild(div);
            div.setAttribute('id', uniqueId());
            div.setAttribute('onclick', uniqueClickEvent());
            gridContainer.appendChild(div);
            div.classList.add('divStyle')
            counter += 1;
        }
    }

    return {
        grid,
    };
})();

//gameboard.grid()

let player = (function() {

    return {

    }
})();

// click on button event
let clickEvent = (function() {

    function clickEvent1() {
        let x = document.getElementById('unique1');
        return x.textContent = 'x';
    };
    function clickEvent2() {
        let x = document.getElementById('unique2');
        return x.textContent = 'x';
    }; 
    function clickEvent3() {
        let x = document.getElementById('unique3');
        return x.textContent = 'x';
    }; 
    function clickEvent4() {
        let x = document.getElementById('unique4');
        return x.textContent = 'x';
    }; 
    function clickEvent5() {
        let x = document.getElementById('unique5');
        return x.textContent = 'x';
    }; 
    function clickEvent6() {
        let x = document.getElementById('unique6');
        return x.textContent = 'x';
    }; 
    function clickEvent7() {
        let x = document.getElementById('unique7');
        return x.textContent = 'x';
    }; 
    function clickEvent8() {
        let x = document.getElementById('unique8');
        return x.textContent = 'x';
    }; 
    function clickEvent9() {
        let x = document.getElementById('unique9');
        return x.textContent = 'x';
    }; 
    
    return {
        clickEvent1,
        clickEvent2,
        clickEvent3,
        clickEvent4,
        clickEvent5,
        clickEvent6,
        clickEvent7,
        clickEvent8,
        clickEvent9
    }
})();