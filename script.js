
function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = (sidebar.style.left === "0px" || sidebar.style.left === "") ? "-200px" : "0";
}

function hideNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = "-200px";
}

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}