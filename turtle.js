//Turtle.js

function turtle_game(){
  //state right = 0, down = 1, left = 2, up = 3

  var images = Array("turtle-right.png", "turtle-down.png",
                     "turtle-left.png", "turtle-up.png")

  instruction_counter = 0;
  state = 0 ;
  home_left = 0;
  home_top = 100;
  position_left = home_left;  
  position_top = home_top;  

   $("div").animate({left: position_left, top:position_top });

function  update_position(){
         if (state == 0) {
             position_left += 100;
         }
         if (state == 1) {
             position_top += 100;
         }
         if (state == 2) {
             position_left -= 100;
             
         }
         if (state == 3) {
             position_top -= 100;
         } 
 }

 function move_forward(){
     update_position();
     $("div#turtle").
         animate({left: position_left, top:position_top } );
 }

function clockwise(){
        state++;
        state = state % 4;
        set_image();
    }


 function turn_clockwise(){    
     $("div#turtle").animate({},{start: clockwise});
 }

    function widdershins(){
        state--;
        if (state < 0 ) {
            state = 3;
        }
        set_image();
    }


function turn_widdershins(){
    $("div#turtle").animate({},{start: widdershins});
}


function set_image(){
    for (i =0; i< 4;i++){
       selector =  "#img" + i
       span = $(selector);
       if (state == i) {
           $(span).css("display","inline")
       }else{
           $(span).css("display","none")
       }
   }
}


function step_program(){
    program_text = $('input#program').val();

    if (instruction_counter >= program_text.length){
        return
    }
    
    instruction = program_text.charAt(instruction_counter);
    if (instruction == 'f'){
        move_forward();
    }else if (instruction == 'c'){
        turn_clockwise();
    }else if (instruction == 'w'){
        turn_widdershins();
    }
    instruction_counter++;
}

function reset_turtle(){
        instruction_counter = 0;
        state = 0;
        set_image();
        position_left = home_left;  
        position_top = home_top;  
        $("div").animate({left: position_left, top:position_top });
}

function run_program(){
    reset_turtle()

     program_text = $('input#program').val();
     for (i =0; i < program_text.length; i++){
         step_program()
    }
}

  $("button#execute").click(function(){
     run_program();
  });


  $("button#step").click(function(){
     step_program();
  });


  $("button#forward").click(function(){

    $('input#program').val($('input#program').val() + 'f');
     move_forward();
  });

  $("button#clockwise").click(function(){
    $('input#program').val($('input#program').val() + 'c');

     turn_clockwise()
  });

 
 $("button#widdershins").click(function(){
    $('input#program').val($('input#program').val() + 'w');
     turn_widdershins();  
  });



  $("button#reset").click(function(){
    reset_turtle();
  });


}
