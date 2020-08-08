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

function nextQuestion(){
    counter++;
    showQuestion(counter);
}


function showQuestion(count){

       let question = document.getElementById('questions');

       question.innerHTML = `<h2>${Questions[count].question}</h2>
       <ul class="option-group">
                  <li class="option">${Questions[count].options[0]}</li>
                  <li class="option">${Questions[count].options[1]}</li>
                  <li class="option">${Questions[count].options[2]}</li>
                  <li class="option">${Questions[count].options[3]}</li>
        </ul>
       
       
       `

}


function formSubmit(e){
    e.preventDefault();
    
    let user_name = document.forms['welcome-form']['username'].value;
    sessionStorage.setItem('user_name',user_name);

    location.href = "quiz.html"
    
    console.log(user_name);




}