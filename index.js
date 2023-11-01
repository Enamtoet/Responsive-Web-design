 /* Start CountDown */

 countDown = new Date("Nov 30 , 2023 12:50:59").getTime()

let count = setInterval(() =>{

    let timeNow = new Date().getTime()

    let diffTime = countDown - timeNow

    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    let hours = Math.floor(diffTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    let minutes = Math.floor(diffTime % (1000 * 60 * 60) / (1000 * 60 ))

    let seconds = Math.floor(diffTime % (1000 * 60 ) / 1000 )


    document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds

    if (diffTime < 0) {
        clearInterval(count)
    }

},1000)

/* Start CountDown */




