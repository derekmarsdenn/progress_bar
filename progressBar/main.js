let progress = document.getElementById("progress");
let count = 1;
let per = 4;
let loading = setInterval(animate, 800);
function animate() {
    if(count == 100 && per == 400) {
        clearInterval(loading);
    }else{
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
    }
}