

let box = ['','','','','','','','',''];
let outcome = undefined;
let counterPlayer1 = 0;
let counterPlayer2 = 0;
let player1 = 'Player 1';
let player2 = 'Computer';
let token1 = 'X';
let randomNum = Math.round(Math.random() * 8);

$('#player1Name').on('click', function () {
    player1 = $('#nameEnter').val();
    $('#Player1').text(`${player1}:`);
    $('#startPlayer').text(`${player1} starts`);
    $('#nameEnter').val('');    
});


$('#player1Token').on('click', function() {
    token1 = $('#tokenEnter').val();
    $('#tokenEnter').val('');
});



$('.cell').on('click', function () {
    if($(this).val() === '') {
        $(this).val(`${token1}`)
        box[$(this).attr('id')] = 'X';
        $('h4').text(`${player1} continues`);                        
        
         
        while (box[randomNum] != '' && box.includes('')) {
            randomNum = Math.round(Math.random() * 8);            
        }
        box[randomNum] = 'PC';
        let cellID = randomNum;
        $(`#${cellID}`).val('PC');        
    }    
    outcome = compareCells();
    winPlayer();     
});




const compareCells = function () {
    if ((box[0] !='' || box[1] !='' || box[2] !='') && box[0] === box[1]  && box[1] === box[2]) {
        return box[0];
    }
    if ((box[3] !='' || box[4] !='' || box[5] !='') && box[3] === box[4]  && box[4] === box[5]) {
        return box[3];
    }
    if ((box[6] !='' || box[7] !='' || box[8] !='') && box[6] === box[7]  && box[7] === box[8]) {
        return box[6];
    }
    if ((box[0] !='' || box[3] !='' || box[6] !='') && box[0] === box[3]  && box[3] === box[6]) {
        return box[0];
    }
    if ((box[1] !='' || box[4] !='' || box[7] !='') && box[1] === box[4]  && box[4] === box[7]) {
        return box[1];
    }
    if ((box[2] !='' || box[5] !='' || box[8] !='') && box[2] === box[5]  && box[5] === box[8]) {
        return box[2];
    }
    if ((box[0] !='' || box[4] !='' || box[8] !='') && box[0] === box[4]  && box[4] === box[8]) {
        return box[0];
    }
    if ((box[2] !='' || box[4] !='' || box[6] !='') && box[2] === box[4]  && box[4] === box[6]) {
        return box[2];
    }
    else if (!box.includes('')) {        
        return false;
        }    
};

const winPlayer = function () {
    if(outcome == 'PC' || outcome == 'X') {
        if (outcome == 'X') {
            openPopup(`${player1}`);
            counterPlayer1 += 1;
            $('#Player1').text(`${player1}: ${counterPlayer1}`);
        }
        else if (outcome == 'PC') {
            openPopup('Computer');
            counterPlayer2 += 1;
            $('#Player2').text(`computer: ${counterPlayer2}`); 
        }
    }
    else if (outcome == false) {
        openPopup('draw');
    }
    else if(outcome == undefined) {
        return;
    }
};

$('.reset').on('click', function() {
    $('.modal').css({"visibility": "hidden"});
    $('.cell').val('');
    box = ['','','','','','','','',''];
    turn = true;
    $('h4').text(`${player1} starts`);
    outcome = undefined;    
});

const openPopup = function (player) {
    if(player == 'draw') {
        $('#winner').text('draw!');
    }
    else {
       $('#winner').text(`${player} wins`);        
    }
    $('.modal').css({"visibility": "visible"}); 
};


