/**
 * Created by Admin on 11/11/2015.
 */

var start = 16;
var baseColor = "black";
$(document).ready(function(){
    loadBox(start);
    $('#clearpad').click(function(){
        $('.box').css('background-color', 'transparent');
        var side = prompt("How many squares per side?");
        loadBox(side);
    });
    $("#random").click(function(){
        baseColor = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    });
});

function loadBox(size){
    $('.wrapper').empty();
    for(var i = 0; i < size*size; i++){
        if(i % size === 0){
            $('.wrapper').append("<div class='box' class='endBox'></div>");
        }
        else{
            $('.wrapper').append("<div class='box'></div>");
        }
    }
    $('.box').css('background-color', "grey");
    $('.box').css('height', 100 / size + '%');
    $('.box').css('width', 100 / size + '%');
    $('.box').hover(function(){
        $(this).css('background-color', baseColor);
    });
}

