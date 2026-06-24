Para criar uma experiência realmente interativa, funcional e inteligente no seu projeto "Agro forte, futuro sustentável", o script.js deve ser mantido como um arquivo separado e limpo.

Aqui está o código do seu script.js focado em interatividade, feedback visual e comportamento dinâmico:

document.addEventListener("DOMContentLoaded", function() {

    // 1. Navegação Suave (Smooth Scroll)
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 2. Feedback Visual nas Seções (Animação de entrada)
    const secoes = document.querySelectorAll('section');
    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    secoes.forEach(secao => {
        secao.style.opacity = 0;
        secao.style.transform = "translateY(20px)";
        secao.style.transition = "all 0.6s ease-out";
        observer.observe(secao);
    });

    // 3. Validação Básica de Formulário (Se você adicionar um no futuro)
    const contactSection = document.querySelector('#contato');
    if (contactSection) {
        console.log("Seção de contato carregada e pronta para interações.");
    }

    // 4. Rodapé Dinâmico (Atualiza o ano automaticamente)
    const footer = document.querySelector('footer p');
    const anoAtual = new Date().getFullYear();
    footer.innerHTML = `&copy; ${anoAtual} AGRINHO. Todos os direitos reservados.`;
});
