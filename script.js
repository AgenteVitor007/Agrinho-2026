/**
 * Função para calcular e exibir o impacto ambiental
 * com base na prática agrícola selecionada pelo usuário.
 */
function calcularImpacto() {
    // Captura os elementos do DOM necessários
    const selecao = document.getElementById('pratica').value;
    const boxResultado = document.getElementById('resultado');
    const titulo = document.getElementById('res-titulo');
    const desc = document.getElementById('res-desc');

    // Se nenhuma opção válida for selecionada, esconde a caixa de resultado
    if (selecao === "") {
        boxResultado.style.display = "none";
        return;
    }

    // Exibe a caixa de resultado
    boxResultado.style.display = "block";

    // Verifica a opção selecionada e atualiza o conteúdo e as cores dinamicamente
    if (selecao === "tradicional") {
        titulo.innerHTML = "⚠️ Alto Impacto Ambiental";
        titulo.style.color = "#d90429"; // Vermelho para alerta
        desc.innerHTML = "Essa prática gera alta produtividade imediata, mas empobrece o solo a longo prazo, consome cerca de 40% mais água e pode poluir lençóis freáticos devido ao uso de pesticidas sintéticos.";
    } 
    
    else if (selecao === "organica") {
        titulo.innerHTML = "🌱 Impacto Positivo";
        titulo.style.color = "#2d6a4f"; // Verde padrão
        desc.innerHTML = "Preserva a biodiversidade do solo e a saúde dos consumidores. Reduz drasticamente la pegada de carbono e economiza água, embora exija um manejo mais atento contra pragas.";
    } 
    
    else if (selecao === "sintropica") {
        titulo.innerHTML = "🌳 Impacto Regenerativo Máximo!";
        titulo.style.color = "#52b788"; // Verde claro/vivo para destaque positivo
        desc.innerHTML = "O ápice da sustentabilidade. Além de produzir alimentos
