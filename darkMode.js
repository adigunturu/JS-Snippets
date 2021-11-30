var toggleIcon=document.querySelector(".toggle");
var root = document.documentElement;
if (localStorage.getItem("theme") === null){
    localStorage.setItem("theme","light");
}else if (localStorage.getItem("theme") === "light"){
    root.setAttribute( 'class', 'light' );
    toggleIcon.setAttribute( 'class', 'toggle light' );
    localStorage.setItem("theme","light");
}else if (localStorage.getItem("theme") === "dark"){
    root.setAttribute( 'class', 'dark' );
    toggleIcon.setAttribute( 'class', 'toggle dark' );
    localStorage.setItem("theme","dark");
}
toggleIcon.addEventListener("click",()=>{
    if(localStorage.getItem("theme") === "dark"){
        root.setAttribute( 'class', 'light' );
        toggleIcon.setAttribute( 'class', 'toggle dark' );
        localStorage.setItem("theme","light");
    }else{
    root.setAttribute( 'class', 'dark' );
    toggleIcon.setAttribute( 'class', 'toggle light' );
    localStorage.setItem("theme","dark");
    }
});