"use strict";

let canvas = document.createElement('canvas');
let cxt = canvas.getContext('2d');

canvas.height = 18;
canvas.width = 12;

var [r, g, b] = [255, 0, 0];
var [i, j, k] = [0, 0, 0];

function drawcursor(){
    //get cursor bg color
    if(r == 255 && g == 0 && b == 0){     //red
        i = 0;
        j = 1;
        k = 0;
    }
    else if(r == 255 && g == 255 && b == 0){    //yellow
        i = -1;
        j = 0;
        k = 0;
    }
    else if(r == 0 && g == 255 && b == 0){    //green
        i = 0;
        j = 0;
        k = 1;
    }
    else if(r == 0 && g == 255 && b == 255){    //sky
        i = 0;
        j = -1;
        k = 0;
    }
    else if(r == 0 && g == 0 && b == 255){    //blue
        i = 1;
        j = 0;
        k = 0;
    }
    else if(r == 255 && g == 0 && b == 255){    //pink
        i = 0;
        j = 0;
        k = -1;
    }

    r += i;
    g += j;
    b += k;

    cxt.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
    //cxt.fillRect(0,0,12,18);

    //draw cursor
    cxt.lineWidth = 1;
    cxt.strokeStyle = 'black';
    cxt.moveTo(0,0);
    cxt.lineTo(0,16);
    cxt.lineTo(1,16);
    cxt.lineTo(5,12);
    cxt.lineTo(11,12);
    cxt.lineTo(11,11);
    cxt.lineTo(0,0);
    cxt.stroke();
    cxt.fill()

    document.body.style.cursor = 'url(' + canvas.toDataURL() + '), auto';
}

window.setInterval(function(){drawcursor();},10);