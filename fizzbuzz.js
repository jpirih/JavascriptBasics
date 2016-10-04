$(document).ready(function () {
    $('#fbResult').hide();
    $('#fbError').hide();

    // fizzbzzz  logic
    $('#fbBtn').on('click', function(){
        $('#fbResult').html("");
        inputNum = document.getElementById('fbNum').value;
        console.log(inputNum);

        var fbNum = parseInt(inputNum);


        if(isNaN(fbNum) || fbNum <= 0) {
            $('#fbError').html("Obvezno vpiši celo število večje od 0");
            $('#fbError').show();
        }else {
            $('#fbError').hide();

            // start fizzbzz
            for(var i = 1; i <= fbNum; i ++){
                var item = document.createElement('p');
                if(i % 5 == 0 && i % 3 == 0){
                    var itemText = document.createTextNode("FIZZBZZ");
                    item.appendChild(itemText);
                }else if( i % 3 == 0){
                    var item = document.createElement('p');
                    var itemText = document.createTextNode("FIZZ");
                    item.appendChild(itemText);
                }else if(i % 5 == 0){
                    var itemText = document.createTextNode("BUZZ");
                    item.appendChild(itemText);
                }else {
                    var itemText = document.createTextNode(i);
                    item.appendChild(itemText);
                    $('#fbResult').append(item);
                }
                $('#fbResult').append(item);
            }
            $('#fbResult').show();
        }

    });
});

