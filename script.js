// Função responsável por alternar entre os modos claro e escuro da página
function toggleMode() {
    // Seleciona o elemento <html> do documento
    const htmlElement = document.querySelector('html');
    // Alterna a classe 'light' no elemento <html>
    // Se a classe existir, ela é removida; se não existir, ela é adicionada
    htmlElement.classList.toggle('light');
    // Salva o modo atual ('light' ou 'dark') no armazenamento local do navegador
    // Isso permite que a preferência do usuário seja mantida ao recarregar a página
    localStorage.setItem('mode', htmlElement.classList.contains('light') ? 'light' : 'dark');
}