// Contains the link for all social media handles

var links = document.getElementsByClassName("button");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });
links[4].addEventListener("click", () => { openlink(5) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.facebook.com/VineetKumar02/", "_blank");
    }
    if (x == 2) {
        window.open("https://twitter.com/Vineethero02", "_blank");
    }
    if (x == 3) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 4) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 5) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
}