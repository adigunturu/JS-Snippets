function scrollUp(element, time, where, callback) {
    element = document.getElementById(element);
    var top = e.getBoundingClientRect().top;
    var amt = top / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(scrollPos, curTime, amt, where);
        curTime += time / 100;
    }
    callback(time);
}
function scrollPos(amt, where) {
    if (where == "center" || where == "")
        window.scrollBy(0, amt / 2);
    if (where == "top")
        window.scrollBy(0, amt);
}