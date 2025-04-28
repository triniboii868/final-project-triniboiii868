document.addEventListener("DOMContentLoaded", function () {
    const volunteerBtn = document.getElementById("volunteerNowBtn");
    const volunteerForm = document.getElementById("volunteer-form");

    volunteerBtn.addEventListener("click", function () {
        volunteerForm.scrollIntoView({ behavior: "smooth" });
        volunteerForm.classList.add("highlight-form");
    });

    // Interactivity: Show charity impact detail on hover
    const impactCards = document.querySelectorAll(".info-cards .card");
    impactCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            const detail = document.createElement("p");
            detail.classList.add("detail-hover");
            detail.textContent = "Thank you for being part of our impact !";
            card.appendChild(detail);
        });

        card.addEventListener("mouseleave", function () {
            const detail = card.querySelector(".detail-hover");
            if (detail) detail.remove();
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {

    // Testimonials
    const testimonials = [
        {
            text: "Volunteering here has completely changed my perspective on community service.",
            author: "— Alex M."
        },
        {
            text: "The people I met through this charity are like a second family now.",
            author: "— Jamie L."
        },
        {
            text: "Helping out once a week has brought so much meaning to my life.",
            author: "— Taylor R."
        },
        {
            text: "Incredible leadership, impactful work — truly a charity worth supporting.",
            author: "— Casey W."
        }
    ];

    let currentTestimonial = 0;
    const textElement = document.getElementById("testimonial-text");
    const authorElement = document.getElementById("testimonial-author");

    function rotateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        textElement.textContent = `"${testimonial.text}"`;
        authorElement.textContent = testimonial.author;
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }

    rotateTestimonial();
    setInterval(rotateTestimonial, 5000); // Change every 5 seconds
});
