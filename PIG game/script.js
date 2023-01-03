'use strict'
const player0=document.querySelector('.player--0')
const player1=document.querySelector('.player--1')
const score0El=document.getElementById('score--0');
 const score1El=document.querySelector('#score--1');
 const dice=document.querySelector('.dice');
 const current0=document.querySelector('#current--0');
 const current1=document.querySelector('#current--1');
 const btnNew=document.querySelector('.btn--new');
 const btnRoll=document.querySelector('.btn--roll');
 const btnHold=document.querySelector('.btn--hold');

 let playing;
 let score;
 let activePlayer;
 let currentPlayer;
 let currentScore;

 const init=function(){
   playing=true;
 score=[0,0];
  activePlayer=0;
   currentPlayer=0;
   currentScore=0;
 

 
  dice.classList.add('hidden');
  score0El.textContent=0;
  score1El.textContent=0;
  current0.textContent=0;
  current1.textContent=0;
  player0.classList.remove('player--winner')
  player1.classList.remove('player--winner')
  player0.classList.add('player--active')
  player1.classList.remove('player--active')
 
 }
 init();
 const swtichUser=function(){
  document.getElementById(`current--${activePlayer}`).textContent=0;
      currentScore=0;
      activePlayer= activePlayer===0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
 }

 btnRoll.addEventListener('click',function(){
  if(playing){
    let randomnumber=Math.trunc(Math.random()*6)+1;
    console.log(randomnumber);
    dice.classList.remove('hidden');
    dice.src =`dice-${randomnumber}.png`;

    if(randomnumber!==1){
      currentScore+=randomnumber;
      
      document.getElementById(`current--${activePlayer}`).textContent=currentScore;

    }
    else{
      swtichUser();
       
    }
 }})
btnHold.addEventListener('click',function(){
  if(playing){
score[activePlayer]+=currentScore;
document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];

if(score[activePlayer]>=100){
  playing=false;
  dice.classList.remove('hidden');
document.querySelector(`.player--${activePlayer
}`).classList.add('player--winner')
document.querySelector(`.player--${activePlayer
}`).classList.remove('player--active')


  
}
else{
 swtichUser();
}


}})


btnNew.addEventListener('click',init)



