let mins = 0;
let seconds = 0;

var updateTimer;

let secondsField = document.querySelector('.seconds')
let minsField = document.querySelector('.mins')

document.querySelector(".hide-btn").addEventListener('click',()=>{
    document.querySelector('.controls').classList.toggle('hidden')
})

document.querySelector(".seconds-input").addEventListener('change', ((e)=>{
    seconds = e.target.value ?parseInt(e.target.value) : 0;
    console.log(seconds)
}))

document.querySelector(".mins-input").addEventListener('change', ((e)=>{
    mins = e.target.value ? parseInt(e.target.value) : 0;
    console.log(mins)
}))

document.querySelector('.bg-color-input').addEventListener('change',(e)=>{

    document.body.style.backgroundColor = e.target.value;

})

document.querySelector('.title-input').addEventListener('change',(e)=>{
    document.querySelector('.title').innerHTML = e.target.value;
})

document.querySelector(".start-btn").addEventListener('click', ((e)=>{
    updateTimer = setInterval(()=>{
        minsField.innerHTML = mins > 9 ? mins : "0" + mins;
        secondsField.innerHTML = seconds > 9 ? seconds : "0" + seconds;

        seconds--;

        if(seconds <= 0 && mins <= 0){
            endTimer();
        }

        if(seconds < 0){
            seconds = 59;
            mins--;
        }
    },1000)
}))

document.querySelector(".stop-btn").addEventListener('click', ((e)=>{
    clearInterval(updateTimer);
    
}))

function endTimer(){
    clearInterval(updateTimer);

    console.log(window.location.pathname);
    window.location.pathname = "./animation.html"
    const imgElem = document.createElement('img')

    document.body.appendChild(imgElem)
    imgElem.classList.add('logo')
    imgElem.setAttribute('src','./Logo.png')
}