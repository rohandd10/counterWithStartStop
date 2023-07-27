let c = 0;
const start =()=> {
    document.getElementById("start").style.display="block";
    document.getElementById("stop").style.display="none";
}
const stop =()=> {
    document.getElementById("stop").style.display="block";
    document.getElementById("start").style.display="none";
}
const add =()=> {
    c = c+1;
    if (c<=10) {
        document.getElementById("cnt").innerHTML=c;
    } else {
        document.getElementById("nxt").disabled=true;
    }
}