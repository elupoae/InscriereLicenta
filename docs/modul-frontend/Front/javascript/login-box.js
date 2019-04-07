let modal_login = document.getElementById('login');

window.onclick = function(event) {
    if (event.target === modal_login) {
        modal_login.style.display = "none";
    }
};
