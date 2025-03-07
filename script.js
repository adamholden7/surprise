document.addEventListener("DOMContentLoaded", function () {
    const openMe = document.getElementById("openMe");
    const envelope = document.getElementById("envelope");
    const heartsContainer = document.getElementById("heartsContainer");
    const bouquetContainer = document.getElementById("bouquetContainer");
    
    openMe.addEventListener("click", function () {
        openMe.style.opacity = "0";
        setTimeout(() => openMe.style.display = "none", 500);
    });
    
    envelope.addEventListener("click", function () {
        envelope.classList.toggle("open");
        const letter = envelope.querySelector(".letter");
        const flap = envelope.querySelector(".flap");

        if (envelope.classList.contains("open")) {
            letter.style.transform = "translateY(-80px)";
            letter.style.opacity = "1";
            flap.style.transform = "rotateX(180deg)";
            bouquetContainer.style.bottom = "50px";
            releaseHearts();
        } else {
            letter.style.transform = "translateY(100px)";
            letter.style.opacity = "0";
            flap.style.transform = "rotateX(0)";
            bouquetContainer.style.bottom = "-300px";
        }
    });

    function releaseHearts() {
        for (let i = 0; i < 12; i++) {
            let heart = document.createElement("span");
            heart.classList.add("heart");
            heart.textContent = "❤️";
            heartsContainer.appendChild(heart);
            let randomX = Math.random() * 100 - 50;
            let randomDuration = Math.random() * 3 + 2;
            heart.style.left = `calc(50% + ${randomX}px)`;
            heart.style.animation = `floatUp ${randomDuration}s linear forwards`;
            setTimeout(() => heart.remove(), randomDuration * 1000);
        }
    }
});
