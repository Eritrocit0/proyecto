var num;
var interval=null;
$(document).ready(function(){
    'use strict';

    var bg_h=$('#escena').height();
    var bg_w=$('#escena').width();

    //Posicion inicial de mario
    $('#mario').css("top",(bg_h-105)+"px");
    $('#mario').css("left",(bg_w/4)+"px");

    $(document).keydown(function(e){

        if(e.which == 40){
            var key = 1;
            mover(key);
        }

        if(e.which == 39){
            var key = 2;
            mover(key);
        }

        if(e.which == 37){
            var key = 3;
            mover(key);
        }
    });

    function mover(key){
        clearInterval(interval);
        if(key == 1){
            var num=1;
            interval=setInterval(function(){
                $("#mario").attr('scr','img/loco-'+ num +'.png');
                
                var position=$("#mario").position();
                $("#mario").css("left",(position.left)+"px");

                num += 1;
                if(num === 4){
                    num = 1;
                }
            },150);
        }else if(key == 2){
            var num=1;
            interval=setInterval(function(){
                $("#mario").attr('scr','img/derecha-'+ num +'.png');

                var position=$("#mario").position();
                $("#mario").css("left",(position.left +10)+"px");

                num += 1;
                if(num === 4){
                    num = 1;
                }
            },150);
        }else if (key == 3){
            var num = 1;
            interval=setInterval(function(){
                $("#mario").attr('src','img/izquierda-'+ num +'png');

                var position=$("#mario").position();
                $("#mario").css("left",(position.left -10)+"px");

                num += 1;
                if(num === 4){
                    num = 1;
                }
            },150);
        };
    };
});