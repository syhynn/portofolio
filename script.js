// --- ANIMASI ANGKA MENGHITUNG SAAT DISEGARKAN / DISCROLL ---
document.addEventListener("DOMContentLoaded", function() {
    const counterSection = document.getElementById('counter-section');
    let hasCounted = false;

    const startCounting = () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 150; // Semakin kecil angka, semakin cepat hitungannya

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;

            const updateCount = () => {
                const increment = target / speed;
                count += increment;

                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    };

    if (counterSection) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasCounted) {
                    startCounting();
                    hasCounted = true; 
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterObserver.observe(counterSection);
    }
});