function getjson(info, callback){
    var request = new XMLHttpRequest();
    request.open('GET', info, true); 
    request.onload = 
    function  () {//console.log(this)
      if (this.status >= 200 && this.status < 400) {
        // Success!
         var data = JSON.parse(this.response);
         callback(data);
      } else {
        console.log("We reached our target server, but it returned an error") ;
      } 
    }
    request.onerror = function() {
      console.log("There was a connection error of some sort") ;
    };
    
    request.send();
  }