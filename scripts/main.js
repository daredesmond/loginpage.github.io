var button = document.querySelector('.button');

var userLoggedIn = true;

button.addEventListener('click', function() {
    // button.style.backgroundColor = 'blue';
    // button.innerHTML = 'Now loggin you into JW.org'
    if(userLoggedIn) {
        window.location.replace('https://jw.org')
    } else {
        alert("Hey! you are not logged in")
    }
    // window.location.replace('https://jw.org')
})