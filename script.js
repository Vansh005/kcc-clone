(function () {
    // interactive prev/next buttons (light effect)
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(`Carousel ${this.innerHTML.includes('left') ? 'previous' : 'next'} clicked (UI demo)`);
            this.style.backgroundColor = '#b85c3a';
            this.style.color = 'white';
            setTimeout(() => {
                this.style.backgroundColor = '';
                this.style.color = '#4a1c1c';
            }, 200);
        });
    });
    const slides = document.querySelectorAll(".slide");

    let index = 0;

    setInterval(() => {

        slides[index].classList.remove("active");

        index++;

        if (index >= slides.length) {
            index = 0;
        }

        slides[index].classList.add("active");

    }, 3000);
})();
