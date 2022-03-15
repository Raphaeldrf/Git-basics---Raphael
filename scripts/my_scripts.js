var night = document.getElementById('night');

document.getElementById('dayButton').onclick = function(){
    night.classList.add('changeOpacity');
};

document.getElementById('nightButton').onclick = function(){
    night.classList.remove('changeOpacity');
};

function showTime(){
    var date = new Date();
    var dname = date.getDay();
    var mo = date.getMonth();
    var dnum = date.getDate();
    var yr = date.getFullYear();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds();
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year"];
    var values = [week[dname], months[mo], dnum, yr];

    for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];

    /*if(h > 19){
        function(){
            night.classList.add('changeOpacity');
    }*/

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
 
showTime();