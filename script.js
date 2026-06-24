document.addEventListener("DOMContentLoaded", function() {

    // 1. Rolagem suave para os links do menu
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 2. Botão de "Voltar ao Topo" dinâmico
    const btnTopo = document.createElement("button");
    btnTopo.innerText = "↑";
    btnTopo.style.position = "fixed";
    btnTopo.style.bottom = "20px";
    btnTopo.style.right = "20px";
    btnTopo.style.padding = "10px 15px";
    btnTopo.style.display = "none";
    btnTopo.style.cursor = "pointer";
    btnTopo.style.backgroundColor = "#1b5e20";
    btnTopo.style.color = "white";
    btnTopo.style.border = "none";
    btnTopo.style.borderRadius = "5px";
    document.body.appendChild(btnTopo);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }
    });

    btnTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 3. Efeito simples de interação nas seções
    const secoes = document.querySelectorAll('section');
    secoes.forEach(secao => {
        secao.addEventListener('mouseover', () => {
            secao.style.transition = "0.3s";
            secao.style.backgroundColor = "#f9f9f9";
        });
        secao.addEventListener('mouseout', () => {
            secao.style.backgroundColor = "white";
        });
    });
});
