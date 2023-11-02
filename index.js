 /* Start CountDown */
 let currentDate = new Date();

 // Calculate the date for one day ahead
 let oneDayAhead = new Date(currentDate);
 oneDayAhead.setDate(oneDayAhead.getDate() + 1);

 // Get the timestamp for one day ahead
 let countDown = oneDayAhead.getTime();

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

/* Stats Animation */

 let stats = document.querySelector(".stats");
 let spans = document.querySelectorAll(".box .number");
 let started = false

 window.onscroll = function (){

    /* Skills Animation */
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

let el = document.querySelector(".scroll");
let height = document.documentElement.scrollHeight- window.innerHeight

window.addEventListener("scroll", ()=>{
    let scrollTop = document.documentElement.scrollTop
    el.style.width = `${(scrollTop / height) * 100}%`
})


const videoList = [
    {
        srcImg: "./images/avatar-01.png"
    },
    {
        srcImg: "./images/avatar-02.png"
    },
    {
        srcImg: "./images/avatar-03.png"
    },
    {
        srcImg: "./images/avatar-04.png"
    },
    {
        srcImg: "./images/avatar-05.png"
    }
];

function changeImage(){
  

}
let doc = document.querySelectorAll(".video-list li");
let imagesList = document.querySelector(".preview");
let images =  imagesList.querySelectorAll("img")
// Hide all images initially
images.forEach((img,i) => {
    if(i==0) {img.style.display= "block"; return}
    img.style.display = "none";
});


doc.forEach((child, index) => {
   
    child.addEventListener("click", () => {
        // Hide all images
        images.forEach(img => {
            img.style.display = "none";
        });
    //   child.classList.remove("selected");
    doc.forEach(listItem => {
        listItem.classList.remove("selected");
    });
        // Display the image associated with the clicked list item
        images[index].style.display = "block";
        child.classList.add("selected");
       

    });

});

// doc.forEach((child)=>{
//      child.classList.add("selected")

// })




