

//animate the cursor
function cursorAnimation(){
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
$(document).ready(function(){
    setInterval('cursorAnimation()', 1000); //setInterval to run the animation
});

//Defining the Text
var text = '>Hello, my name is Jerry Lashley';

//text is split up into individual letters
$.each(text.split(''), function(i, letter){
    //we add 100*i ms delay to each letter
    setTimeout(function() {
        //add the letter to the container
        $('#container').html($('#container').html() + letter);

    }, 100 * i);
});