let dt = new Date( new Date().setTime(0));
let initial_time = dt.getTime(); 
let seconds = Math.floor( (initial_time % (100*60)/1000) ) ;
let minutes = Math.floor( (initial_time % (1000 * 60 * 60)/(1000 * 60)) ) ;



let time_counter = 0;

let user_all_time = setInterval(function(){
   if(seconds < 59){
       seconds++;
   }
   else{
       minutes++;
       seconds = 0;
   }
    let format_second = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let format_minute = minutes < 10 ? `0${minutes}` : `${minutes}`;
    
   document.querySelector('.timer').innerHTML = `${format_minute}:${format_second} `

},1000)