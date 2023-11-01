 /* Start CountDown */
 let currentYear = new Date().getFullYear();
 let countDown = new Date(`Jan 1 , ${currentYear + 1} 00:00:00`).getTime();

let count = setInterval(() =>{

    let timeNow = new Date().getTime()

    let diffTime = countDown - timeNow

    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    let hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    let minutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60 ))

    let seconds = Math.floor(diffTime % (1000 * 60 ) / 1000 )


    document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days
    document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours
    document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
    document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds

    if (diffTime < 0) {
        clearInterval(count)
    }

},1000)

/* Start CountDown */
/* Skills Animation */
let section = document.querySelector(".our-skills");
 let allElements = document.querySelectorAll(".skills span");
 let stats = document.querySelector(".stats");
 let spans = document.querySelectorAll(".box .number");
 let started = false

 window.onscroll = function (){
    allElements.forEach((span)=>{
        if(window.scrollY >= section.offsetTop - 200){
            span.style.width = span.dataset.width
        }
    })
     /* Stats Animation */

    if (window.scrollY >= stats.offsetTop - 300)
    {
        if(!started){
            spans.forEach((spans)=>startCount(spans))
        } started = true
    } 
 }

function startCount(el){
    let goal = el.dataset.goal
    let count = setInterval(()=>{
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }
        
    },500 /goal)
    
};






