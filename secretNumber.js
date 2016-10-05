/**
 * Created by Janko on 4. 10. 2016.
 */

$(document).ready(function () {
    // variables
    var secretNumber = Math.floor(Math.random() * 100);
    console.log(secretNumber);
    var counter = 0;
    var triedNumbers = [];

    // html elements
    var errorMsg = $('#secretNumError')
    var resultMsg = $('#secretNumResult');
    var bravoMsg = $('#BravoMsg');
    
    // html start point
    errorMsg.hide();
    resultMsg.hide();
    bravoMsg.hide();

    //secret number logic
    $('#secretNumBtn').on('click', function () {
        var inputGuess = $('#guessedNum').val();
        var guess = parseInt(inputGuess);
        // for development
        console.log(guess);
        // user input check 
        if(guess < 0 || isNaN(guess)) {
            errorMsg.html('Obvezno vnesi celo število večje od 0');
            errorMsg.show();
        }else{
            errorMsg.hide();
            triedNumbers.push(guess);
            counter++;
            if(guess == secretNumber){
                bravoMsg.append(secretNumber);
                bravoMsg.show();
                resultMsg.html(triedNumbers +', ');
                resultMsg.append('<br> Za pravilno rešitev si porabil ' + counter + ' poskusov');
                resultMsg.show();
            }else if(guess > secretNumber){
               resultMsg.html('Skrito število je manjše <br>');
                resultMsg.append(triedNumbers + ', ');
                resultMsg.show();
            }else if( guess < secretNumber) {
                resultMsg.html('Skrito število je večje <br>');
                resultMsg.append(triedNumbers + ', ');
                resultMsg.show();

            }
        }
        


    });
});