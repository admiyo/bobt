//Turtle.js

function turtle_game(){
  //state right = 0, down = 12, left = 8, up = 4

  var images = Array("turtle-right.png", "turtle-down.png",
                     "turtle-left.png", "turtle-up.png")
  facing = 0;
  instruction_counter = 0;
  home_left = 0;
  home_top = 100;
  position_left = home_left;  
  position_top = home_top;  

   $("div").animate({left: position_left, top:position_top });

function  update_position(){
         if (facing == 0) {
             position_left += 100;
         }
         if (facing == 12) {
             position_top += 100;
         }
         if (facing == 8) {
             position_left -= 100;             
         }
         if (facing == 4) {
             position_top -= 100;
         } 
 }

function  updated_top(){
    if (facing == 12) {
        return "+100";
    }
    if (facing == 4) {
        return "-100";
    } 
    return position_top;
 }


function  updated_left(){
    if (facing == 0) {
        return "+100";
    }
    if (facing == 8) {
        return "-100";             
    }
    return position_left; 
 }


 function move_forward(){
     $("div#turtle").animate({left: updated_left(), top:updated_top() },
                             {start: update_position});
 }

 function turn_step(currentStep){
     turn_to  = (16 + start - Math.round(currentStep)) % 16;
     facing = turn_to;
     image_name = "url(images/turtle-" + 
         + turn_to +
         "-16.png)";
     $("div#turtle").css("background-image",image_name); 
 }

 function turn_clockwise(){    
     $("div#turtle").animate(
         {
             textIndent: 4
         },
         {
             duration: 3000,
             step: turn_step,
             start: function(){
                 $("div#turtle").css( "text-indent", 0 );
                 start = facing;
             }
         });
 }

function turn_widdershins(){
     $("div#turtle").animate(
         {
             textIndent: 0
         },
         {
             duration: 3000,
             step: turn_step,
             start: function(){
                 $("div#turtle").css( "text-indent", 4);
                 start = facing + 4;
             }
         });
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
    facing  = 0;

     image_name = "url(images/turtle-"  
         + facing +
         "-16.png)";
     $("div#turtle").css("background-image",image_name); 


    $("div#turtle").css("background-image",image_name); 
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

  $("button#spin").click(function(){
    spin();
  });

}
