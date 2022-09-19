

var tablinks = document.getElementsByClassName("link-to");
var tabcontains = document.getElementsByClassName("tabContains");

function opentab(tabN){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("active-ta")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabN).classList.add("active-ta")
}






    




