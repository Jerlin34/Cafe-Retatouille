function openReservationPopup() {
    document.getElementById('reservation-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('reservation-popup').style.display = 'none';
}

function submitReservation() {
    // Add your reservation submission logic here
    document.getElementById('reservation-message').innerText = 'Reserved successfully!';
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}