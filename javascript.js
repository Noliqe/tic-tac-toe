// start screen
let startScreen = (function () {

    const playGameContainer = document.body.querySelector('.container');
    const playGameHeader = document.createElement('div');
    playGameContainer.appendChild(playGameHeader);
    playGameHeader.classList.add('playGameHeader');
    playGameHeader.setAttribute('id', 'playGameHeader');

    const playGame = document.createElement('div');
    playGameContainer.appendChild(playGame);
    playGame.classList.add('startScreen');

    function selectDracula (){
        let x =  'avatarSelect.dracula()';
        return x;
    };
    function selectScarecrow () {
        let x =  'avatarSelect.scarecrow()';
        return x;
    }
    function selectReaper () {
        let x =  'avatarSelect.reaper()';
        return x;
    }
    function selectFrankenstein () {
        let x =  'avatarSelect.frankenstein()';
        return x;
    }


    function selectPlayer() {
        playGameHeader.textContent = 'Select your player!';
        //dracula
    let playerDracula = document.createElement('button');
    playGame.appendChild(playerDracula);
    playerDracula.classList.add('dracula');
    playerDracula.setAttribute('id', 'dracula');
    playerDracula.setAttribute('onclick', selectDracula());
        //scarecrow
    let playerScarecrow = document.createElement('button');
    playGame.appendChild(playerScarecrow);
    playerScarecrow.classList.add('scarecrow')
    playerScarecrow.setAttribute('id', 'scarecrow');
    playerScarecrow.setAttribute('onclick', selectScarecrow());
        //reaper
    let playerReaper = document.createElement('button');
    playGame.appendChild(playerReaper);
    playerReaper.classList.add('reaper')
    playerReaper.setAttribute('id', 'reaper');
    playerReaper.setAttribute('onclick', selectReaper());
        //frankenstein
    let playerFrankenstein = document.createElement('button');
    playGame.appendChild(playerFrankenstein);
    playerFrankenstein.classList.add('frankenstein')
    playerFrankenstein.setAttribute('id', 'frankenstein');
    playerFrankenstein.setAttribute('onclick', selectFrankenstein());
    }

    return{
        selectPlayer
    }
})();

let avatarSelect = (function () {

    function dracula () {
        let x = document.getElementById('dracula');
        let y = document.getElementById('playGameHeader');
        return y.textContent = 'You\'ve chosen Dracula!'
    }
    function scarecrow () {
        let x = document.getElementById('scarecrow');
        let y = document.getElementById('playGameHeader');
        return y.textContent = 'You\'ve chosen Scarecrow!'
    }
    function reaper () {
        let x = document.getElementById('reaper');
        let y = document.getElementById('playGameHeader');
        return y.textContent = 'You\'ve chosen Reaper!'
    }
    function frankenstein () {
        let x = document.getElementById('frankenstein');
        let y = document.getElementById('playGameHeader');
        return y.textContent = 'You\'ve chosen Frankenstein!'
    }
    return {
        dracula,
        scarecrow,
        reaper,
        frankenstein
    }
})();

startScreen.selectPlayer();

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

