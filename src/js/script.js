window.onload = function(){
    showQuestion(0);
}



Questions = [
    {
        id:1,
        question: "What is the current Prime Minister of Pakistan?",
        answer: 'Imran Khan',
        options:[
            'Arif Alvi',
            'Qamar Javed',
            'Imran Khan',
            'Asim Ghafoor'
        ]
    },
    {
        id:1,
        question: "What is the largest Province in Pakistan by population?",
        answer: 'Punjab',
        options:[
            'Punjab',
            'Sindh',
            'KPK',
            'Balochistan'
        ]
    },
    {
        id:1,
        question: "What is the capital of Pakistan?",
        answer: 'Islamabad',
        options:[
            'Karachi',
            'Islamabad',
            'Lahore',
            'Peshawer'
        ]
    },
    {
        id:1,
        question: "What is the current Foriegn Minister of Pakistan?",
        answer: 'Shah Mehmood Qureshi',
        options:[
            'Arif Alvi',
            'Qamar Javed',
            'Imran Khan',
            'Shah Mehmood Qureshi'
        ]
    }
]


let counter = 0 ;
let score = 0;

function nextQuestion(){

    let user_ans = document.querySelector('li.option.active').innerHTML;
    if(user_ans == Questions[counter].answer ){
         score += 10;
         sessionStorage.setItem('score',score);
    }
    else{
        score;
        sessionStorage.setItem('score',score);

    }
    

    if(counter == Questions.length - 1){
        location.href= 'score.html';
        return;
    }

   
    // console.log(score)

    counter++;
    showQuestion(counter);
}


function showQuestion(count){

       let question = document.getElementById('questions');

       question.innerHTML = ` <h2> Q${counter+1 }. ${Questions[count].question}</h2>
       <ul class="option-group">
       
                  <li class="option">${Questions[count].options[0]}</li>
                  <li class="option">${Questions[count].options[1]}</li>
                  <li class="option">${Questions[count].options[2]}</li>
                  <li class="option">${Questions[count].options[3]}</li>
        </ul>
       
       
       `;
       toggle();
}

function toggle (){
     let options = document.querySelectorAll("li.option");

     for(let i= 0; i < options.length; i++){
              options[i].onclick= function(){
                for( var j = 0 ; j < options.length; j++){
                    if(options[j].classList.contains("active")){
                        options[j].classList.remove("active");
                    }
                }
                  options[i].classList.add("active")
              }
     }
}


function formSubmit(e){
    e.preventDefault();
    
    let user_name = document.forms['welcome-form']['username'].value;
    sessionStorage.setItem('user_name',user_name);

    location.href = "quiz.html"
    
    console.log(user_name);




}