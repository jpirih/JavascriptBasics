/**
 * Created by janko on 16. 03. 2016.
 */

var secretNum = Math.floor(Math.random()*100);

counter = 0;
triedNumbers = [];

while (true)
{
    var userNum = prompt('Ugani število (Vesi celo število)');
    userNum = parseInt(userNum);



    if(userNum < 0 || isNaN(userNum))
    {
        alert('Vpisal si: ' +  userNum + '\n Obvezno vnesi pozitovno (večje od 0) celo število ');
        userNum = prompt('Ugani število (Vesi celo število)');
    }
    else
    {
        triedNumbers.push(userNum);
        counter++;

        if( userNum === secretNum)
        {
            alert('BRAVO!!! uganil si, skrito število je  ' + secretNum + '\n' +
                'Za pravilni odgovor si porabil ' + counter + ' poskusov');
            alert('Vsi tvoji poskusi: \n'+ triedNumbers);

            break;
        }
        else if(userNum > secretNum)
        {
            alert('Skrito število je manjše od '+ userNum + '\n'+
                'Poskusil si že: '+ triedNumbers);
        }
        else
        {
            alert('Skrito število je večje od ' + userNum + '\n'+
                'Poskusil si že: '+ triedNumbers);
        }

    }
}
