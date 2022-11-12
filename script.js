var d = 0;

function show() {
    if (d == 0) {
        document.getElementById("nb").style = "height:100%";
        document.getElementById("rnb").style = "background-color:rgba(255, 0, 0, 0.605)";
        // document.getElementById("rnb").style.backgroundImage = "url('logo/clo.png')";
        var but = document.getElementsByClassName("but")

        for (i = 0; i < but.length; i++) {
            but[i].style.display = "inline-block";

            but[i].style.width = "100%";


        }



        d = 1;
    } else {
        document.getElementById("nb").style = "height:100px";
        // document.getElementById("rnb").style.backgroundImage = "url('logo/clo.png')";
        document.getElementById("rnb").style = "background-color:white";
        var but = document.getElementsByClassName("but")
        for (i = 0; i < but.length; i++) {
            but[i].style.width = "0";
            but[i].style.display = "none";

        }
        d = 0;
    }
}