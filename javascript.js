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
        for (let i = 0; i < 9; i++) {
            const gridContainer = document.body.querySelector('.gridContainer');
            gridContainer.setAttribute('id', 'gridContainer');
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

gameboard.grid()

let clickEvent = (function() {

    function clickEvent1() {
        let x = document.getElementById('unique1');
        return x.textContent = 0;
    };
    function clickEvent2() {
        let x = document.getElementById('unique2');
        return x.textContent = 0;
    }; 
    function clickEvent3() {
        let x = document.getElementById('unique3');
        return x.textContent = 0;
    }; 
    function clickEvent4() {
        let x = document.getElementById('unique4');
        return x.textContent = 0;
    }; 
    function clickEvent5() {
        let x = document.getElementById('unique5');
        return x.textContent = 0;
    }; 
    function clickEvent6() {
        let x = document.getElementById('unique6');
        return x.textContent = 0;
    }; 
    function clickEvent7() {
        let x = document.getElementById('unique7');
        return x.textContent = 0;
    }; 
    function clickEvent8() {
        let x = document.getElementById('unique8');
        return x.textContent = 0;
    }; 
    function clickEvent9() {
        let x = document.getElementById('unique9');
        return x.textContent = 0;
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

