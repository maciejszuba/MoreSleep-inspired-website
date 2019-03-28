setHomepageTriangles();
setContent();
showPortraits();

function setHomepageTriangles() {
   let triangle = document.createElement("svg");
}

function setContent() {
    let menu = document.getElementsByClassName("menu-option");
    for (let i = 0; i < menu.length; i++) {
        menu[0].addEventListener("click", function () {
            clearContent();
            document.getElementById("content-header").innerHTML = "We create value for a networked culture.";
            document.getElementById("content-p").innerHTML = "We believe that our work is the best way to get to know us.<br>But each project is different. And so are we. As different as our creative process is, everything we do is about longtermthinking, more fun and MoreSleep."
            document.getElementById("second-content-header").innerHTML = "Our team";
            document.getElementById("team-gallery").style.display = "block";
        }
        )

        menu[1].addEventListener("click", function() {
            clearContent();
            document.getElementById("content-p").innerHTML = "I really liked how you designed your portfolio, so I just recreated it.";
            document.getElementById("portfolio").style.display = "block";
        })

        menu[2].addEventListener("click", function () {
            clearContent();
            document.getElementById("content-header").innerHTML = "Ja, gerne ʕ •ᴥ•ʔ";
            document.getElementById("content-p").innerHTML = "If you are interested in meeting me, send me an email: " + '<a href="mailto:maciej.j.szuba@gmail.com">maciej.j.szuba@gmail.com</a><br><br>I would honestly love to see if I fit with your team.<br>And I have quite a collection of music in my head.<br>Hope to hear from you soon!';
        })
    }

}
function clearContent(){
    document.getElementById("squares-homepage-intro").style.display = "none";
    document.getElementById("content-header").innerHTML = "";
    document.getElementById("content-p").innerHTML = ""
    document.getElementById("second-content-header").innerHTML = "";
    document.getElementById("team-gallery").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
}



function showPortraits() {
    let portraits = document.getElementsByClassName("team-portrait");
   
        for (let i = 0; i < portraits.length; i++) {
        setInterval(function(){
            setTimeout(function () {
                portraits[i].classList.toggle("hidden");
            }, ((1000 * i) + 1))
        }, 4000)
    }
}
