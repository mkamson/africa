// select buttons
const btns = document.querySelectorAll(".btn");
const guessedCountries = [];

const allCountries = ['Algeria', 'Angola', 'Benin', 'Botswana', 
'Burkina Faso', 'Burundi', 'Cameroon', 'Cape Verde', 'Central African Republic', 
'Chad', 'Comoros', 'Congo', 'Democratic Republic of Congo', 'Djibouti', 'Egypt', 
'Equatorial Guinea', 'Eritrea', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 
'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 
'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 
'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 
'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Eswatini', 'Tanzania', 'Togo', 'Tunisia', 
'Uganda', 'Western Sahara', 'Zambia', 'Zimbabwe'];



function titleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }

function HoverOn(e){
    var colour = "#448aff";
    e.target.style.fill = colour;  
  }

function HoverOff(e){
  var colour = "#CCCCCC";
  e.target.style.fill = colour;
}



btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("reset")){
      for (i in allPaths) {
        allPaths[i].style.fill = "#CCCCCC";
      }
    } 
  });
});

const allPaths = document.querySelectorAll('svg > path');


document.querySelector("input")
  .addEventListener('change', (e) => {
  const answerCountry = titleCase(e.currentTarget.value);
  let a = document.getElementById(answerCountry);
  if (answerCountry == "Democratic Republic of Congo"){
    answerCountry = "Congo"
  }
  a.style.fill = "red";
  
  if(int!==null){
    clearInterval(int);
  }
  int = setInterval(displayTimer,10);

  if (allCountries.includes(answerCountry)){
    guessedCountries.push(answerCountry);
  }
  

  e.currentTarget.value = "";
  console.log(answerCountry);
  console.log(guessedCountries);
 });


/*
  allPaths.forEach(elem => elem.addEventListener('mouseover', HoverOn));

  allPaths.forEach(elem => elem.addEventListener('mouseout', HoverOff));
*/

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
});




function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
















