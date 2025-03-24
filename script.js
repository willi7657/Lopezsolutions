document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente.");

    const botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.addEventListener("mouseenter", () => {
            boton.style.transform = "scale(1.1)";
            boton.style.transition = "transform 0.2s ease-in-out";
        });
        boton.addEventListener("mouseleave", () => {
            boton.style.transform = "scale(1)";
        });
    });

    document.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault();
            let destino = e.target.getAttribute("href");
            document.body.style.opacity = "0";
            setTimeout(() => {
                window.location.href = destino;
            }, 500);
        });
    });

    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease-in-out";
        document.body.style.opacity = "1";
    }, 100);
});