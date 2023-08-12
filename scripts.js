setInterval(current_date,1000);
function current_date(){
    let hrs=document.getElementById('time_hours');
    let mins=document.getElementById('time_mins')
    let secs=document.getElementById('time_sec')
    let am_pm=document.getElementById('meridian_switch')
    
    let instanceofdate=new Date()
    let hours=instanceofdate.getHours()
    if (hours>=12){
        hours-=12
        am_pm.innerText="PM"
    }
    let minutes=instanceofdate.getMinutes()
    let seconds=instanceofdate.getSeconds()
    // letconsole.log(hours,":",minutes,":",seconds)
    hrs.innerText=hours
    mins.innerText=minutes
    secs.innerText=seconds
}
