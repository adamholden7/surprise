document.addEventListener("DOMContentLoaded", function () {
    var envelope = document.getElementById("envelope");
    var bouquetContainer = document.querySelector(".bouquet-container");
    var heartContainer = document.querySelector(".bouquet-hearts");
    var openMeText = document.querySelector(".open-me-text");
    var openSound = document.getElementById("openSound");

    // Add bounce effect to "Open Me" text
    function bounceOpenMe() {
        openMeText.style.animation = "bounceEffect 1.5s infinite alternate ease-in-out";
    }
    bounceOpenMe();

    envelope.addEventListener("click", function () {
        envelope.classList.toggle("open");

        if (envelope.classList.contains("open")) {
            document.querySelector(".letter").style.transform = "translateY(-140px)";
            document.querySelector(".letter").style.zIndex = "10";

            // Animate bouquet rising
            bouquetContainer.style.bottom = "80px";

            // Hide "Open Me!" smoothly
            openMeText.style.opacity = "0";

            // Play sound effect
            openSound.play();

            // After the fade-out transition, completely remove it from layout
            setTimeout(() => {
                openMeText.style.display = "none";
            }, 500); // Wait for fade-out transition

            // Emit hearts
            for (let i = 0; i < 10; i++) {
                let heart = document.createElement("span");
                heart.classList.add("bouquet-heart");
                heart.textContent = "❤️";

                let randomX = Math.random() * 100 - 50;
                heart.style.left = `calc(50% + ${randomX}px)`;

                heartContainer.appendChild(heart);

                setTimeout(() => {
                    heart.style.opacity = "1";
                    heart.style.transform = `translateY(-600px) rotate(${Math.random() * 20 - 10}deg)`;
                }, i * 300);

                setTimeout(() => heart.remove(), 5000);
            }

        } else {
            document.querySelector(".letter").style.transform = "translateY(0)";
            document.querySelector(".letter").style.zIndex = "2";
            bouquetContainer.style.bottom = "-150px";

            // Restore "Open Me!" when envelope is closed
            openMeText.style.display = "block";
            setTimeout(() => {
                openMeText.style.opacity = "1";
            }, 50);
        }
    });

    // Add interactivity to hearts
    heartContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("bouquet-heart")) {
            event.target.style.transform = "scale(0)";
            setTimeout(() => event.target.remove(), 300);
        }
    });
});
