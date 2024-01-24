// buttons

const btnStart = document.querySelector(".start")
const btnStop = document.querySelector(".stop")
const btnRestart=document.querySelector(".restart")

let hrs = min = sec = ms = 0 , starTimer; 




// addEventlistenner

btnStart.addEventListener('click', () =>{

    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');

   starTimer = setInterval(() =>{
    ms++;
    if(ms == 100){
        sec++;
        ms = 0;
    }

    if(sec == 60 ){
         min++;
         sec = 0;
    }

    if(min == 60){
        hrs++;  
        min=0
    }

    updateDisplay();

   },10)
});

btnStop.addEventListener('click', () =>{

    btnStart.classList.remove('start-active');
    btnStop.classList.add('stop-active');

   clearInterval(starTimer)
})

btnRestart.addEventListener('click', () =>{

    btnStart.classList.remove('start-active');
    btnStop.classList.remove('stop-active');

    hrs = min = sec = ms = 0; 
    clearInterval(starTimer)
    updateDisplay()
})


function updateDisplay() {

// formated

    phrs = hrs<10?'0'+hrs:hrs;
    pmin = min<10?'0'+min:min;
    psec = sec<10?'0'+sec:sec;
    pms = ms<10?'0'+ms:ms;
// output
    document.querySelector(".hrs").innerText = hrs;
    document.querySelector(".min").innerText = min;
    document.querySelector(".sec").innerText = sec;
    document.querySelector(".ms").innerText = ms;
}



















