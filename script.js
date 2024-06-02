var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";

}
function closemenu() {
    sidemeu.style.left = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwkTg-8U69Rgqo-v6PeSOX2ZeHcg7PGu50h83_egTI3n6nV3hnkMGvOw4bVa-WCwywfLg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent!"
        setTimeout(function(){
            msg.innerHTML = " "
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})