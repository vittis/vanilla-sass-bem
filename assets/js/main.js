/*  Code by Vitor Bichara
 *  Very simple javascript script to enable modal and responsive navigation functionality 
 */

document.addEventListener("DOMContentLoaded", function(event) {
    let modal = document.querySelector("#modal");
    let modalOverlay = document.querySelector("#modal__overlay");
    let closeButton = document.querySelector("#modal__close");
    let openButton = document.querySelector("#modal__open");
    if (modal != null) {
        closeButton.addEventListener("click", function() {
            modal.classList.toggle("modal--closed");
            modalOverlay.classList.toggle("modal--closed");
        });

        openButton.addEventListener("click", function() {
            modal.classList.toggle("modal--closed");
            modalOverlay.classList.toggle("modal--closed");
        });
    }
});
function toggleMobileNav() {
    let nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
} 