/**
 * Created by Janko on 4. 10. 2016.
 */

$(document).ready(function () {
    // variables
    var secretNumber = Math.floor(Math.random()*100);
    console.log(secretNumber);
    var counter = 0;
    var triedNumbers = [];

    // html elements
    $('#secretNumError').hide();
    $('#secretNumResult').hide();
    $('#BravoMsg').hide();

    //secret number logic
    $('#secretNumBtn').on('click', function () {
        var inputGuess = $('#guessedNum').val();
        var guess = parseInt(inputGuess);
        console.log(guess);
        if(guess < 0) {
            $('#secretNumError').html('Obvezno vnesi celo število večje od 0');
            $('#secretNumError').show();
        }
        $('#secretNumError').hide();
            triedNumbers.push(guess);
            counter++;
        if(guess == secretNumber){
            $('#BravoMsg').append(secretNumber);
            $('#BravoMsg').show();
            $('#secretNumResult').html(triedNumbers +', ');
            $('#secretNumResult').append('<br> Za pravilno rešitev si porabil ' + counter + ' poskusov');
            $('#secretNumResult').append($('#BravoMsg'));
            $('#secretNumResult').show();
        }else if(guess > secretNumber){
            $('#secretNumResult').html('Skrito število je manjše <br>');
            $('#secretNumResult').append(triedNumbers + ', ');
            $('#secretNumResult').show();
        }else if( guess < secretNumber) {
            $('#secretNumResult').html('Skrito število je večje <br>');
            $('#secretNumResult').append(triedNumbers + ', ');
            $('#secretNumResult').show();

        }


    });
});