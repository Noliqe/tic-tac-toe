// header text with button
let wannaPlay = (function () {

    function buttonOnclick () {
        let x = 'wannaPlay.removeContent()';
        return x;
    }

    function startNext () {
        let y = 'choosePlayer.selectPlayer();';
        return y;
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
        playButton.setAttribute('onclick', buttonOnclick(), startNext())
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

//wannaPlay.createContent()

// choose player vs player or player vs computer
let chooseMode = (function () {

    function buttonVsPlayer() {
        let x = 'x';
        return x;
    }

    function buttonVsComputer() {
        let y = 'y';
        return y;
    }

    function buttonOnclick () {
        let x = 'chooseMode.removeContent()';
        return x;
    }

    function createContent () {
        const container = document.body.querySelector('.container');
        let headerChooseMode = document.createElement('div');
        container.appendChild(headerChooseMode);
        headerChooseMode.classList.add('headerChooseMode');

        headerChooseMode.textContent = 'Choose mode';

        let playerVsPlayer = document.createElement('button');
        container.appendChild(playerVsPlayer);
        playerVsPlayer.classList.add('playerVsPlayerBtn');
        //playerVsPlayer.setAttribute('onclick', buttonVsPlayer())
        playerVsPlayer.setAttribute('onclick', buttonOnclick())
        playerVsPlayer.textContent = 'Player vs player';

        let playerVsComputer = document.createElement('button');
        container.appendChild(playerVsComputer);
        playerVsComputer.classList.add('playerVsComputerBtn');
        //playerVsComputer.setAttribute('onclick', buttonVsComputer())
        playerVsComputer.setAttribute('onclick', buttonOnclick())
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
        
        const playGameContainer = document.body.querySelector('.container');
        const playGameHeader = document.createElement('div');
        playGameContainer.appendChild(playGameHeader);
        playGameHeader.classList.add('playGameHeader');
        playGameHeader.setAttribute('id', 'playGameHeader');
    
        const playGame = document.createElement('div');
        playGameContainer.appendChild(playGame);
        playGame.classList.add('startScreen');
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

choosePlayer.selectPlayer();

let avatarSelect = (function () {

    function dracula () {
        let x = document.getElementById('dracula');
        let y = document.getElementById('playGameHeader');
        y.textContent = 'You\'ve chosen Dracula!'

        setTimeout(() => {
            let a = document.body.querySelector('.startScreen');
            let b = document.querySelector('.scarecrow');
            a.removeChild(b);

            let c = document.querySelector('.reaper');
            a.removeChild(c);
    
            let d = document.querySelector('.frankenstein');
            a.removeChild(d);

        }, "10");

        setTimeout(() => {
            document.getElementById('dracula').style.animation = "chosen 3s, spin 3s";
        }, "500");

        setTimeout(() => {
            let z = document.body.querySelector('.container');
            let x = document.body.querySelector('.playGameHeader');
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.dracula');
            a.removeChild(e);
            z.removeChild(x);
            z.removeChild(a);
        }, "3200");
    }
    function scarecrow () {
        let x = document.getElementById('scarecrow');
        let y = document.getElementById('playGameHeader');
        y.textContent = 'You\'ve chosen Scarecrow!'

        setTimeout(() => {
            let a = document.body.querySelector('.startScreen');
            let b = document.querySelector('.dracula');
            a.removeChild(b);

            let c = document.querySelector('.reaper');
            a.removeChild(c);
    
            let d = document.querySelector('.frankenstein');
            a.removeChild(d);

        }, "10");

        setTimeout(() => {
            document.getElementById('scarecrow').style.animation = "chosen 3s, spin 3s";
        }, "500");

        setTimeout(() => {
            let z = document.body.querySelector('.container');
            let x = document.body.querySelector('.playGameHeader');
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.scarecrow');
            a.removeChild(e);
            z.removeChild(x);
            z.removeChild(a);
        }, "3200");
    }
    function reaper () {
        let x = document.getElementById('reaper');
        let y = document.getElementById('playGameHeader');
        y.textContent = 'You\'ve chosen Reaper!'

        setTimeout(() => {
            let a = document.body.querySelector('.startScreen');
            let b = document.querySelector('.dracula');
            a.removeChild(b);

            let c = document.querySelector('.scarecrow');
            a.removeChild(c);
    
            let d = document.querySelector('.frankenstein');
            a.removeChild(d);

        }, "10");

        setTimeout(() => {
            document.getElementById('reaper').style.animation = "chosen2 3s, spin 3s";
        }, "500");

        setTimeout(() => {
            let z = document.body.querySelector('.container');
            let x = document.body.querySelector('.playGameHeader');
            let a = document.body.querySelector('.startScreen');
            let e = document.querySelector('.reaper');
            a.removeChild(e);
            z.removeChild(x);
            z.removeChild(a);
        }, "3200");
    }
    function frankenstein () {
        let x = document.getElementById('frankenstein');
        let y = document.getElementById('playGameHeader');
        y.textContent = 'You\'ve chosen Frankenstein!'

        setTimeout(() => {
            let a = document.body.querySelector('.startScreen');
            let b = document.querySelector('.dracula');
            a.removeChild(b);

            let c = document.querySelector('.scarecrow');
            a.removeChild(c);
    
            let d = document.querySelector('.reaper');
            a.removeChild(d);

        }, "10");

        setTimeout(() => {
            document.getElementById('frankenstein').style.animation = "chosen2 3s, spin 3s";
        }, "500");

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
    return {
        dracula,
        scarecrow,
        reaper,
        frankenstein
    }
})();


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

