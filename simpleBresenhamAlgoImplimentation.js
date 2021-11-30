function line(x0, y0, x1, y1) {
    var dx = Math.abs(x1 - x0);
    var dy = Math.abs(y1 - y0);
    var sx = (x0 < x1) ? 1 : -1;
    var sy = (y0 < y1) ? 1 : -1;
    var error = dx - dy;
 
    while(true) {
       setPixel(x0, y0); 
       //Activate a particular pixel like: If in a grid of 'pixels' in the dom, activate one pixel by:
      document.getElementById(`${x0+y0}`).classList.add("active");
      
       if ((x0 === x1) && (y0 === y1)) break;
       var e2 = 2*error;
       if (e2 > -dy) { error -= dy; x0  += sx; }
       if (e2 < dx) { error += dx; y0  += sy; }
    }
 }