$(document).ready( () => {

    // header color change
    $('#header-section h1').on('mouseenter', (event) => {
        $(event.currentTarget).css('color', 'red')
        .on('mouseleave', () => { 
            $(event.currentTarget).css('color', 'black')
        });
    });

    // show secret section
    $('#secret-section').on('mouseenter', (event) => {
        $(event.currentTarget).css('opacity', '1')
        .on('mouseleave', () => {
            $(event.currentTarget).css('opacity', '0')
        })
    });

    // tic tac toe functionality
    $('.grid-item-ttt').on('click', (event) => {
        let xCount = 0;
        let oCount = 0;
        $('.grid-item-ttt').each((index, element) => {
            if($(element).text() === "O") {
                xCount++;
            }
            if($(element).text()=== "X") {
                oCount++;
            }
          
        });
        if($(event.currentTarget).text() !== "X" && $(event.currentTarget).text() !== "O" ) {
            if(xCount === oCount) {
                $(event.currentTarget).text('X').addClass('red');
            }
            else {
                $(event.currentTarget).text('O').addClass('blue');
            }
        }

        let checkWinnerArray = [];
        $('.grid-item-ttt').each((index, element) => {
            if($(element).text() === "O") {
                checkWinnerArray.push(2);
            }
            else if ($(element).text() === "X") {
                checkWinnerArray.push(1); 
            }
            else {
                checkWinnerArray.push(0);
            }
        });
        const finishCheck = checkThreeInARow(checkWinnerArray);
        
        if(finishCheck === "xwin") {
            console.log("X Wins! Play again?");
        }
        else if (finishCheck === "owin") { 
            console.log("O Wins! Play again?");
        }
        else if (finishCheck === "draw") { 
            console.log("Draw! Play again?");
        }

        if(xCount === oCount) {
            $('#player-turn span').removeClass();
            $('#player-turn span').text('O').addClass('blue');
         }
         else {
            $('#player-turn span').text('X').addClass('red');
         }
    });

    //reset button
    $('.reset-button button').on('click', () => {
        $('.grid-item-ttt').map((index, element) => {
            $(element).removeClass('red blue').text(' ')
        });
        $('#player-turn span').removeClass('red blue').addClass('red').text('X');
    })
});

const checkThreeInARow = (array) => {
    const xWin = "xwin";
    const oWin = "owin";
    const draw = "draw";
    const continues = "continues";

    const winConditions = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Left to right diagonal
        [2, 4, 6]  // Right to left diagonal
    ];

    for (let i = 0; i < winConditions.length; i++) { 
        const [a, b, c] = winConditions[i];
        if(array[a] && array[a] === array[b] && array[a] === array[c]) {
            return array[a] === 1 ? xWin : oWin;
         }
    }

    if(!array.includes(0)) {
        return draw;
    }

    return continues;
}
