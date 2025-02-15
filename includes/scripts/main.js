function setContentHeight() {
    //var contentTop = document.querySelector("nav").offsetTop + document.querySelector("nav").offsetHeight;
    var contentTop = document.querySelector("nav").offsetHeight + document.querySelector("header").offsetHeight;
    var contentHeight = document.querySelector("footer").offsetTop - contentTop;
    
    document.querySelector("#content").style.top = contentTop + "px";
    document.querySelector("#content").style.height = contentHeight + "px";

    console.log(
        `contentTop = ${contentTop}
        document.querySelector("footer").offsetTop = ${document.querySelector("footer").offsetTop}
        contentHeight = ${contentHeight}
        `
    );
}

setContentHeight();
window.addEventListener("resize", setContentHeight);