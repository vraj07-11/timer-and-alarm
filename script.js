//          AUDIO FUNCTIONS

var audio;
function play() {
    audio = new Audio('iPhone Radar Alarm Ringtone (Apple Sound) - Sound Effect for Editing [kcT-i9xzC-8].mp3');
    audio.play()
}
function stop() {
    audio.pause()
}



//          TIMER 



function start_timer() {
    var countdown_h = Number(document.getElementById("t_hour").value)  || 0
    var countdown_m = Number(document.getElementById("t_minutes").value) || 0 
    var countdown_s = Number(document.getElementById("t_seconds").value) || 0
    const time_interval =  setInterval(async function () {
        if ( countdown_s > 0) {
            countdown_s--;
        } else {
            if ( countdown_m > 0 ) {
                countdown_m--;
                countdown_s=59
            } else {
                if ( countdown_h > 0) {
                    countdown_h--;
                    countdown_m=59;
                    countdown_s=59
                } else {
                    if (countdown_s == 0 && countdown_m == 0 && countdown_h == 0) {
                        clearInterval(time_interval);
                        play();
                        return;
                }
            }
        }
        }
        document.getElementById("countdown_h").innerText = String(countdown_h).padStart(2, '0');
        document.getElementById("countdown_m").innerText = String(countdown_m).padStart(2, '0');
        document.getElementById("countdown_s").innerText = String(countdown_s).padStart(2, '0');
    }, 1000)}
const t_button = document.getElementById('timer-submit');
t_button.addEventListener('click', start_timer, { once: true });



//          ALARM CLOCK

setInterval(async function () {
    let a = new Date()
    let hour = a.getHours()
    let min = a.getMinutes()
    let sec = a.getSeconds()
    if (hour <= 12) {
        document.getElementById("H").innerText = String(hour).padStart(2, '0');
        document.getElementById("M").innerText = String(min).padStart(2, '0');
        document.getElementById("S").innerText = String(sec).padStart(2, '0');
        document.getElementById("AMorPM").innerText = "AM"
        
    } else {
        hour = hour % 12
        document.getElementById("H").innerText = String(hour).padStart(2, '0');
        document.getElementById("M").innerText = String(min).padStart(2, '0');
        document.getElementById("S").innerText = String(sec).padStart(2, '0');
        document.getElementById("AMorPM").innerText = "PM"
    }
}, 1000)


function start_alarm() {
    let sel_h = Number(document.getElementById("hour").value)
    let sel_m = Number(document.getElementById("minutes").value)
    setInterval(async function () {
    let a = new Date()
    let hour = a.getHours()
    let min = a.getMinutes()
    let sec = a.getSeconds()
    if (hour>12) {
        hour = hour%12
    }
    if (sel_h === hour && sel_m===min && sec == '01') {
        play();
    }
}, 1000)
}

const a_button = document.getElementById('set_alarm');
a_button.addEventListener('click', start_alarm, { once: true });
