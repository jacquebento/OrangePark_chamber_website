const banner = document.querySelector(".b");

// show banner on Mondays, Tuesdays and Wednesdays
function showBanner(){
    if (weekday < 4){
        banner.style.display = "block";
        banner.style.position = "absolute";
    }
}

showBanner();