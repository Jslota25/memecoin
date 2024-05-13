function buttonClicked(buttonId) {
    // Handle button click event here
    console.log(buttonId + " clicked!");
}

function navigateToLink(url) {
    window.location.href = url;
}

function toggleDropdownMenu() {
    var dropdownMenu = document.getElementById("followDropdown");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
    }
}