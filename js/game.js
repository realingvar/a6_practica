const numDivs = 36;
const maxHits = 10;

let firstHit = 0;
let missHit = 0;
let hits = 0;
let firstHitTime = 0;


let btnStart = $('#button-start');
btnStart.click(function() {
  $('.square').removeClass('d-none');
});

function round() {
  // FIXME: надо бы убрать "target" прежде чем искать новый

  let divSelector = randomDivId();
  $('.align-text-bottom').removeClass("target");
  $(divSelector).addClass("target");
  $('.target').text(hits + 1);
  // TODO: помечать target текущим номером
}
  // FIXME: тут надо определять при первом клике firstHitTime
 let allBtn = $('.align-text-bottom');
 btnStart.click(function firstClick() {
   firstHit += 1;
  if (firstHit == 1) {
   firstHitTime = getTimestamp();
   console.log(firstHitTime);


  }});

function endGame() {
  // FIXME: спрятать игровое поле сначала
  $('.square').addClass("d-none");
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $('#total-time-played').text(totalPlayedSeconds);
  difference= 10 - missHit;
  $('#point').text(difference);


  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?
  if ($(event.target).hasClass("target")) {
    $('.align-text-bottom').text('');
    hits += 1;
    
    round();
if (hits === maxHits) {
    console.log('end')
    endGame();
  }}
  else {
      missHit += 1;
      $(this).addClass('miss');
      setTimeout(() => {  $(this).removeClass('miss'); }, 200);
  }
    

 
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}
 




$(document).ready(init);
