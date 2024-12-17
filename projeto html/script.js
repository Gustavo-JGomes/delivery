// Alternar aba de "Hoje" e "Finalizados"
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('ativo'));
        tab.classList.add('ativo');
    });
});
