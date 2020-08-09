let user_name_store = sessionStorage.getItem('user_name');
let scores_store = sessionStorage.getItem('score');
let time_store = sessionStorage.getItem('time');

// console.log(user_name_store);
// console.log(scores_store);

let user_name_detail = document.getElementById('user-name');
let user_points = document.getElementById('user-score');

user_name_detail.innerHTML = user_name_store;
user_points.innerHTML = scores_store;

document.querySelector('.time').innerHTML = time_store;


function retake(){
    location.href = 'index.html'
}