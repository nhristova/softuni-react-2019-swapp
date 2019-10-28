function changeTheme() {
    var light = "light-theme";
    var dark = "dark-theme";
    var b = document.getElementsByTagName("html")[0];
    if (b.classList.contains(light)) {
        b.classList.remove(light)
        b.classList.add(dark)
        return;
    }

    b.classList.remove(dark);
    b.classList.add(light);
}

function login() {
    var hid = "hidden";
    var errorMsgClasses = document.getElementById("login-error").classList
    errorMsgClasses.contains(hid) ?errorMsgClasses.remove(hid) :
    errorMsgClasses.add(hid)
}
