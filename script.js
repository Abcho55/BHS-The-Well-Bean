//quote list
var q1 = "\"The elevator to success is out of order. You’ll have to use the stairs, one step at a time.\" - Joe Girard";
var q2 = "\"People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.\" - Zig Ziglar";
var q3 = "\"I always wanted to be somebody, but now I realise I should have been more specific.\" - Lily Tomlin";
var q4 = "\"I am so clever that sometimes I don’t understand a single word of what I am saying.\” - Oscar Wilde";
var q5 = "\"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.\" ― Albert Einstein";
var q6 = "\"It does not matter how slowly you go as long as you do not stop.\" ― Confucius";
var q7 = "\"Success is not final failure is not fatal: it is the courage to continue that counts.\" ― Winston S. Churchill";
var q8 =  "\"Life is really simple, but we insist on making it complicated.\" ― Confucius";
var q9 = "\"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.\" ― Helen Keller";
var q10 = "\"Age is something that doesn't matter, unless you are a cheese.\" - Luis Bunuel";
var q11 = "\"Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.\" ― Margaret Mead";
var q12 = "\"What lies behind us and what lies before us are tiny matters compared to what lies within us.\" ― Ralph Waldo Emerson";
var q13 = "\"My advice to you is get married: If you find a good wife you’ll be happy; if not, you’ll become a philosopher.\" — Socrates";
var q14 = "\"Life is not a problem to be solved, but a reality to be experienced.\" – Soren Kierkegaard";
var q15 = "\"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.\" ― Roy T. Bennett, The Light in the Heart";
var q16 = "\"Our lives begin to end the day we become silent about things that matter.\" ― Martin Luther King Jr";
var q17 = "\"Maybe if we tell people the brain is an app, they’ll start using it.\" - Unknown";
var q18 = "\"Fantasy is hardly an escape from reality. It's a way of understanding it.\" ― Lloyd Alexander";
var q19 = "\"Good judgment comes from experience, and experience comes from bad judgment.\" - Rita Mae Brown";
var q20 = "\"Never let your sense of morals prevent you from doing what is right.\" ― Isaac Asimov";
var q21 = "\"I like living. I have sometimes been wildly, despairingly, acutely miserable, racked with sorrow; but through it all I still know quite certainly that just to be alive is a grand thing.\" ― Agatha Christie";
var q22 = "\"I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it.\" ― Mark Twain";
var q23 = "\"Don't judge each day by the harvest you reap but by the seeds that you plant.\" ― Robert Louis Stevenson";
var q24 = "\"Sometimes our light goes out, but is blown again into instant flame by an encounter with another human being.\" ― Albert Schweitzer";

const quoteList = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23];


//selectors
const filterOption = document.querySelector('.bean-blocks');
const weekLog = document.querySelector('.week-list');
var button = document.getElementById("button");
var weekN = 0;
var greenCount = 0;
var yellowCount = 0;
var redCount = 0;


//evenlisteners
filterOption.addEventListener('click', filterBlocks);
document.addEventListener('DOMContentLoaded', addMonth);
button.addEventListener('click', getQuote);

//functions
function addMonth(e) {
  for (let week = 0; week < 4; week++) {
    manualAddWeek();
  }
}

function manualAddWeek() {
  //creates div that contains blocks
  const weekDiv = document.createElement('div');
  weekDiv.classList.add("week"+weekN);
  weekDiv.classList.add("week-blocks");
  weekDiv.setAttribute("data-week", weekN);
  weekDiv.style.display = "none";
  if (weekN === 3) {
    weekDiv.classList.add("current-wk");
    weekDiv.style.display = "flex";
  }
  //creates 7 divs that go inside of weekDiv
  for (let day = 1; day < 8; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add("day"+day);
    dayDiv.classList.add("block");
    //append the dayDiv to weekDiv
    weekDiv.appendChild(dayDiv);
    //create button
    const dayBtn = document.createElement('button');
    dayBtn.classList.add("day-btn");
    //set counter for color change
    dayBtn.setAttribute("data-count", "0");
    //set onClick event 
    dayBtn.setAttribute("onClick", "colorChange(event)");
    //append button to dayDiv
    dayDiv.appendChild(dayBtn);
  }
  const weekLi = document.createElement('li');
  weekLi.appendChild(weekDiv);
  weekLog.appendChild(weekLi);
  weekN++;
}

function colorChange(e) {
  e.preventDefault();
  var target = e.target;
  var count = target.getAttribute("data-count");
  switch (count) {
    case "0":
      target.style.backgroundColor = "#75e61a";
      target.setAttribute("data-count", "1");
      greenCount += 1;
      break;
    case "1":
      target.style.backgroundColor = "#fad3a9";
      target.setAttribute("data-count", "2");
      yellowCount += 1;
      greenCount -= 1;
      break;
    case "2":
      target.style.backgroundColor = "#fe91a1";
      target.setAttribute("data-count", "3");
      redCount += 1;
      yellowCount -= 1;
      break;
    case "3":
      target.style.backgroundColor = "Transparent";
      target.setAttribute("data-count", "0");
      redCount -= 1;
      break;
  }
  addCounter();
}

function filterBlocks(e) {
 if (e.target.value === "all") {
   for (let w = 0; w < 4; w++) {
     let weekB = document.querySelector('.week'+w);
     weekB.style.display = "flex";
   }
  }
  else if (e.target.value === "week") {
    for (let w = 0; w < 3; w++) {
     let weekB = document.querySelector('.week'+w);
     weekB.style.display = "none";
    }
    let weekLast = document.querySelector('.week3');
    weekLast.style.display = "flex";
  }
}

function getQuote() {
  console.log("inside getQuote");
  extraInspiration(redCount);
  randQuote();
}

function extraInspiration(redCount) {
  if (redCount > 3) {
    var mydiv = document.getElementById('quote');
    const extraInsp = document.createElement('a');
    extraInsp.setAttribute('href',"https://www.youtube.com/watch?v=8N1eX3gYfVE&ab_channel=CookieGamer");
    extraInsp.innerText = "Come on dawg";
    mydiv.appendChild(extraInsp);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randQuote() {
  var index = getRandomInt(quoteList.length);
  var theQuote = quoteList[index];
  const bubble = document.getElementById('bubble');
  bubble.innerHTML = theQuote;
}

function addCounter() {
  var good = document.querySelector(".good");
  var med = document.querySelector(".med");
  var bad = document.querySelector(".bad");

  good.innerHTML = "Good: " + greenCount;
  med.innerHTML = "Ok: " + yellowCount;
  bad.innerHTML = "Bad: " + redCount;
}



