const photo = document.getElementById("photo");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");
let clickCount = 0;

photo.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 5) {
        popup.style.display = "block";
        photo.style.width = ""; 
        photo.style.height = ""; 
    } else {
        // Fotoğrafı büyüt
        const currentWidth = photo.offsetWidth;
        const newWidth = currentWidth * 1.2;
        photo.style.width = `${newWidth}px`;
    }
});

closeButton.addEventListener("click", () => {
    popup.style.display = "none";
    clickCount = 0;
});


const targetDate = new Date('2024-02-19T23:59:59').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

updateCountdown();

setInterval(updateCountdown, 1000);
