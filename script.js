const elementos = document.querySelectorAll(".hidden");

if (elementos.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    });

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });

}

const secoes = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_header");

if (secoes.length > 0 && navLinks.length > 0) {

    window.addEventListener("scroll", () => {

        let current = "";

        secoes.forEach((secao) => {

            const secaoTop = secao.offsetTop;

            if (window.scrollY >= secaoTop - 200) {
                current = secao.getAttribute("id");
            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }

        });

    });

}

const form = document.querySelector("form");
const feedback = document.getElementById("mensagem-feedback");

if (form && feedback) {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        feedback.textContent = "Mensagem enviada com sucesso!";

        feedback.classList.add("show");

        form.reset();

        setTimeout(() => {
            feedback.classList.remove("show");
        }, 3000);

    });

}

const btnTopo = document.getElementById("btn-topo");

if (btnTopo) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            btnTopo.classList.add("show");
        } else {
            btnTopo.classList.remove("show");
        }

    });

    btnTopo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}