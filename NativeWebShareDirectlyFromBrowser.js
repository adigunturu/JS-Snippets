const webshare = async function(index) {
    document.querySelector(".loading").style.display = "flex";
    var src = document.getElementById(index).getElementsByTagName("img")[0].src;
    var url = "URL OF PROXY" + src;
    var cap = document.getElementById(index).getElementsByTagName("div")[0].getElementsByTagName("p")[0].textContent;
    var imgtitle = cap;
    var imgurl = src;
    if ('canShare'in navigator) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const file = new File([blob],'meme.jpg',{
                type: blob.type
            });
            await navigator.share({
                text: imgtitle + ".com",
                files: [file]
            }).then(document.querySelector(".loading").style.display = "none");
        } catch (err) {
            document.getElementById(index).getElementsByTagName("div")[0].getElementsByTagName("p")[0].textContent = err;
        }
    } else {
        console.log("sharing error");
        document.querySelector(".loading").style.display = "none";
    }
}
