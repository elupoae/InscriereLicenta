let modal_login = document.getElementById('login');
let modal_add_account = document.getElementById('add-account');

window.onclick = function(event) {
    if (event.target === modal_login) {
        modal_login.style.display = "none";
    } else if (event.target === modal_add_account) {
        modal_add_account.style.display = "none"
    }
};
