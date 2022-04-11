//Image API Source: https://random.responsiveimages.io/
//API link

//checks if main.js is received
console.log("...script loaded!");

//static backgroundImage
let main = document.querySelector("main");
main.style.backgroundImage = "url(images/nathan-dumlao-zUNs99PGDg0-unsplash.jpg)";

//dynamic backgroundImage
fetch("https://random.imagecdn.app/1920/1080").then(response=>
{
    response.blob().then(blob=>
        {
            let randomBG = URL.createObjectURL(blob);
            main.style.backgroundImage = `url(${randomBG})`;
        })
});

//base queries
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let countdown = document.querySelector(".countdown");
let setAlarm = document.querySelector(".setAlarm");
let userMinutes = document.querySelector(".userMinutes");
let userHours = document.querySelector(".userHours");

//Base Values
//userMinutes.value = 0;
//userHours.value = 0;
let userSeconds = 0;
let count = 0;
let number = 25;


//countdown display queries
let dSec = document.querySelector(".dSec");
let dMin = document.querySelector(".dMin");
let dHr = document.querySelector(".dHr");

//navigation
hamburger.addEventListener("click", (event)=>
{
    if (nav.hidden === true)
    {
        nav.hidden = false;
    }
    else
    {
        nav.hidden = true;
    }
});

//time variables
let ms = 1;
let sec = ms * 1000;
let min = sec * 60;
let hour = min * 60;
let day = hour * 60;


//This displays a second countdown until there are zero seconds and stops
function secondTimer()
{
    console.log("...second timer started!");
    --userMinutes.value;

    if(userSeconds > 0)
    {

        dSec.innerHTML = `${userSeconds} Seconds`;
        
        if(userSeconds > 0)
        {
            let secondCount = setInterval(function()
            {
                if (userSeconds <= 1)
                {
                    function stopSec()
                    {
                        clearInterval(secondCount);
                    }
                    stopSec()
                }
                --userSeconds;
                dSec.innerHTML = `${userSeconds} Seconds`;

            }, sec);
        }

   }
}

//This displays a minute countdown until there are zero muntes and stops
function minuteTimer()
{
    console.log("...minute timer started!");

    //counts down a new minute if there are any left
    if(userMinutes.value > 0)
    {
        dMin.innerHTML = `${userMinutes.value} Minutes`

        let minuteCount = setInterval(function()
        {
            if(userMinutes.value > 0 && userSeconds <= 1)
            {
                userSeconds = 60;
                secondTimer();
            }

            if(userHours.value > 0 && userMinutes <= 1)
            {
                userMinutes.value = 60;
                userSeconds.value = 60;
                secondTimer();
            }

            if (userMinutes.value <= 1)
            {
                function stopMin()
                {
                    clearInterval(minuteCount);
                }
                stopMin()
            }
            dMin.innherHTML = `${userMinutes.value} Minutes`
            
    
        }, min)
     }  
}

//This displays a hour countdown until there are zero hours and stops
function hourTimer()
{
    console.log("...hour timer started!");
    dHr.innerHTML = `${userHours.value} Hours`;

    if(userMinutes.value == 0)
    {
        console.log("...less the hour");
        userMinutes.value = 60;
        userHours.value = userHours.value - 1;
        minuteTimer();
        if(userHours.value > 0)
        {
            let hourCount = setInterval(function()
            {
                --userHours.value;
                dHr.innerHTML = `${userHours.value} Hours`;
                if(userHours.value < 1)
                {
                    stopHr(hourCount);
                }
        
            }, hour);
        }
    }
    else
    {
        minuteTimer();

        let hourCount = setInterval(function()
        {
            --userHours.value;
            dHr.innerHTML = `${userHours.value} Hours`;
            if(userHours.value < 1)
            {
                stopHr(hourCount);
            }
    
        }, hour);
    }

}



//starts program
function start()
{
    //zeroes things out
    if(userMinutes.value == "" && userHours.value == "")
    {
        userMinutes.value = 0;
    }
    if(userHours.value == "")
    {
        userHours.value = 0;
    }
 

    if(userMinutes.value > 0 && userSeconds == 0)
    {
        userSeconds = 60;
        secondTimer();
    }

    console.log(userHours.value);
    console.log(userMinutes.value);
    console.log(userSeconds);
    
    if(userHours.value > 0)
    {
        hourTimer();
    }
    else if(userMinutes.value > 0)
    {
        minuteTimer();
    }
    

    
} 

//Listener
setAlarm.addEventListener("click",start);


//Stop Intervals

function stopMin()
{
    clearInterval(minuteCount);
}

function  stopHr()
{
    clearInterval(hourCount);
}

//sets the alarm using user variables


/*setAlarm.addEventListener("click", (event)=>
    {
        if(number > 0)
        {
            setInterval(function()
            {
                countdown.innerHTML = `${number}`;
                --number;
            }, sec);
        }
    }
);
*/
//countdown API https://www.tickcounter.com/api