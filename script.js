// Skrip JavaScript untuk CV Website

document.addEventListener("DOMContentLoaded", function () {
    // Tambahkan animasi pada scroll untuk bagian-bagian tertentu
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Tambahkan event listener untuk tautan navigasi (jika ada navigasi dinamis)
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });
});
