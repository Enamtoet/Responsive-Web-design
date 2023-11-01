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




