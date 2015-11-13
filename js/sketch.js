/**
 * Created by Admin on 11/11/2015.
 */

var boxWidth = 16;

$(document).ready(function(){
    loadBox(boxWidth);
    $('.box').hover(function(){
        $(this).css('background-color', 'black');
    });
});

function loadBox(size){
    for(var i = 0; i < size*size; i++){
        if(i % 16 === 0){
            $('.wrapper').append("<div class='box' class='endBox'></div>");
        }
        else{
            $('.wrapper').append("<div class='box'></div>");
        }
    }
}

