


let oldY = 0;
function navbarSettings() {
    let down = false;
    let currentY = window.scrollY;
    if (oldY > currentY) {
        down = true;
    }
    oldY = currentY;
    let table = document.querySelector(".navbar");

    if (down == false) {
        table.style.opacity = "20%";
        table.style.pointerEvents = "none";
    }
    else {
        table.style.opacity = "94%";
        table.style.pointerEvents = "visible";
    }

    //megnézi hogy mekkora az oldal magassága, aszerint változtatja a navbar színét
    let pageHeight2 = document.querySelector(".mainText").lastElementChild.getBoundingClientRect().bottom;

    var body = document.body,
        html = document.documentElement;

    var pageHeight = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    let whereIsUser = currentY / pageHeight;
    console.log("pageHeight:", pageHeight, "whereIsUser:", whereIsUser, "currentY", currentY);

    if (whereIsUser < 0.2) {
        table.style.backgroundColor = "#f87373";
    }
    else if (whereIsUser < 0.4) {
        table.style.backgroundColor = "#F67D7D";
    }
    else if (whereIsUser < 0.6) {
        table.style.backgroundColor = "#F6A4A4";
    }
    else if (whereIsUser < 0.8) {
        table.style.backgroundColor = "#F8D4D4";
    }
    else {
        table.style.backgroundColor = "#85f7f7";
    }

    let moderatorDiv = document.querySelector(".moderatorForm");
    let submitBtn = document.querySelector(`button[type="submit"]`);
    let aboutTxt = document.querySelector(".moderatorForm textarea");
    if (whereIsUser > 0.62) {
        moderatorDiv.style.visibility = "visible";
        moderatorDiv.style.transition = "opacity 2s ease-in, width 2s";
        moderatorDiv.style.width = "40%";
        moderatorDiv.style.opacity = "1";

        aboutTxt.style.width = "60%";

        submitBtn.style.opacity = "1";
        submitBtn.style.width = "300px";


    }
    else {
        moderatorDiv.style.visibility = "hidden";
        moderatorDiv.style.transition = "visibility 0s 1.5s, opacity 2s ease-out, width 1s";
        moderatorDiv.style.width = "10%";
        moderatorDiv.style.opacity = "0";

        submitBtn.style.opacity = "0";
        submitBtn.style.width = "10px";
    }


}

window.onscroll = navbarSettings;





